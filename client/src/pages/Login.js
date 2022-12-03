import React, { useState } from "react";

export default function Login() {

    const [userFormData, setUserFormData] = useState({ email: "", password: "" });

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', margin: '10vw'}}>
                <input
                    //   value={userFormData.email}
                    //   name="email"
                    //   onChange={handleInputChange}
                    //   type="email"
                    //   id="form3Example3c"
                    //   className="form-control"
                />
                <label
                    //   className="form-label"
                    //   htmlFor="form3Example3c"
                >
                    Email
                </label>
                <input
                    //   value={userFormData.password}
                    //   name="password"
                    //   type="password"
                    //   onChange={handleInputChange}
                    //   id="form3Example4c"
                    //   className="form-control"
                />
                <label
                    //   className="form-label"
                    //   htmlFor="form3Example4c"
                >
                    Password
                </label>

                <button
                    // type="button"
                    // className="btn btn-primary btn-lg"
                    // onClick={handleFormSubmit}
                >
                    Login
                </button>
            </form>
        </div>
    );
};