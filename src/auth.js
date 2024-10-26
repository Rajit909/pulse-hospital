export const isAuthenticated = () => {
    return localStorage.getItem("token") ? true : false;
}

export const login = (token) => {
    localStorage.setItem("token", token);
}

export const logout = () => {
    localStorage.removeItem("token");
}