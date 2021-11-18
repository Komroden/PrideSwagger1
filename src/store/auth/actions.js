export const REGIST_USER = "USER::REGIST_USER";
export const LOGOUT_USER = "USER::LOGOUT_USER";
export const UserRegistration = (token) => ({
    type: REGIST_USER,
    payload:token


});
export const UserLogout = () => ({
    type: LOGOUT_USER,

});