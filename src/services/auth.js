import API from "./api";

export const loginUser = async (username, password) => {

    const formData = new URLSearchParams();

    formData.append("username", username);
    formData.append("password", password);

    return API.post(
        "/auth/login",
        formData,
        {
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            }
        }
    );
};

export const registerUser = async (userData) => {

    return API.post(
        "/auth/register",
        userData
    );

};