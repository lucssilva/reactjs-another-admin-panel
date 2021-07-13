// Credits: https://www.techiediaries.com/fake-api-jwt-json-server/
const fs = require('fs');
const { uuid } = require('uuidv4');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./mock/mock.json');
const userdb = JSON.parse(fs.readFileSync('./mock/mock.json', 'UTF-8'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = 'TtSap4ue';
const expiresIn = '1h';
const expiresInSeconds = 3600;

server.post('/auth/register', (req, res) => {
    const id = uuid();
    const { name, email, password, role_key = 0 } = req.body;
    const newUser = { id, name, email, password, role_key };

    if (isAuthenticated({ email, password })) {
        const status = 401;
        const message = 'Email and Password already exist';
        res.status(status).json({ status, message });
        return;
    }

    fs.readFile("./mock/mock.json", (err, data) => {
        if (err) {
            const status = 401;
            const message = err;
            res.status(status).json({ status, message });
            return;
        };

        var data = JSON.parse(data.toString());
        data.users.push(newUser);

        var writeData = fs.writeFile("./mock/mock.json", JSON.stringify(data), (err, result) => { // WRITE
            if (err) {
                const status = 401
                const message = err
                res.status(status).json({ status, message })
                return
            }
        });
    });
    const access_token = createToken({ email, password });
    res.status(200).json({ access_token, expires_in: expiresInSeconds, newUser })
})

server.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (isAuthenticated({ email, password }) === false) {
        const status = 401
        const message = 'Incorrect email or password'
        res.status(status).json({ status, message })
        return
    }
    const access_token = createToken({ email, password })
    const user = userdb.users.find(user => user.email === email && user.password === password);

    res.status(200).json({ access_token, expires_in: expiresInSeconds, user })
})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const status = 401
        const message = 'Error in authorization format'
        res.status(status).json({ status, message })
        return
    }
    try {
        let verifyTokenResult;
        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

        if (verifyTokenResult instanceof Error) {
            const status = 401
            const message = 'Access token not provided'
            res.status(status).json({ status, message })
            return
        }
        next()
    } catch (err) {
        const status = 401
        const message = 'Error access_token is revoked'
        res.status(status).json({ status, message })
    }
})

server.use(router)

server.listen(8080, () => {
    console.log('Run Auth API Server')
})

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

function isAuthenticated({ email, password }) {
    return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}