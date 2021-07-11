import axios from 'axios';
import { BASE_URL } from '../helpers/apiConsts';

export default axios.create({
    baseURL: BASE_URL,
});
