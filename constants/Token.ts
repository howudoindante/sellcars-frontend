import Cookies from 'js-cookie';
export const getToken = () => {
    return Cookies.get('utoken');
}

export const setToken = (token) => {
    Cookies.set("utoken",token,{path:"/"});
}
export const removeToken = () => {
    Cookies.remove("utoken");
}