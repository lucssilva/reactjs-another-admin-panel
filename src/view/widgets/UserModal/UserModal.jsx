import React, { Fragment, useState } from "react";
import { PlusIcon } from "../../elements";

export const UserModalWidget = ({
    createHandler = () => { },
}) => {
    const MODAL_ID = "userModal";
    const [user, setUser] = useState({});
    const save = (e) => {
        e.preventDefault();
        if (user.name === "" || user.email === "") return;
        createHandler(user);
        if (e.target === document.getElementById(MODAL_ID)) {
            setUser({});
            const close = document.getElementById("closeModal");
            close.click();
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-lg btn-primary shadow"
                data-bs-toggle="modal" data-bs-target={`#${MODAL_ID}`}
                style={{
                    position: "fixed",
                    bottom: "40px",
                    right: "40px",
                    borderRadius: "50%"
                }}>
                <PlusIcon
                    style={{ verticalAlign: "baseline" }} />
            </button>

            <form className="modal fade" id={MODAL_ID} onSubmit={save}
                tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">Title</h5>

                            <button id="closeModal" type="button" className="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">Full name</label>
                                <input type="text"
                                    id="userName"
                                    className="form-control"
                                    value={user.name}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userEmail" className="form-label">Email address</label>
                                <input type="email"
                                    id="userEmail"
                                    className="form-control"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}
