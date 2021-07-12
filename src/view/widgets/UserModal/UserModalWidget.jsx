import React, { Fragment, useState } from "react";
import { PlusIcon } from "../../elements";

export const UserModalWidget = ({
    createHandler = () => { },
}) => {
    const [user, setUser] = useState({ });
    const save = (e) => {
        // e.preventDefault();
        if (user.name === "" || user.email === "") return;
        createHandler(user)
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-lg btn-primary shadow"
                data-bs-toggle="modal" data-bs-target="#userModal"
                style={{
                    position: "fixed",
                    bottom: "40px",
                    right: "40px",
                    borderRadius: "50%"
                }}>
                <PlusIcon
                    style={{ verticalAlign: "baseline" }} />
            </button>

            <form class="modal fade" id="userModal" onSubmit={save}
                tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="userModalLabel">Title</h5>

                            <button type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="userName" class="form-label">Full name</label>
                                <input type="text"
                                    id="userName"
                                    class="form-control"
                                    value={user.name}
                                    onChange={(e) => setUser({ ...user, name:e.target.value })}
                                    required />
                            </div>
                            <div class="mb-3">
                                <label for="userEmail" class="form-label">Email address</label>
                                <input type="email"
                                    id="userEmail"
                                    class="form-control"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email:e.target.value })}
                                    required />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}
