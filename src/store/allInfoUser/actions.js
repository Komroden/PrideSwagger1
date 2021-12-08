export const ALL_USER_DATA = "ALL_USER_INFO::ALL_USER_DATA";
export const USER_AVATAR = "ALL_USER_INFO::USER_AVATAR";

export const AllUserData = (value) => ({
    type: ALL_USER_DATA,
    payload: value
});
export const UserAvatar = (value) => ({
    type: USER_AVATAR,
    payload: value
});

