export const CONTESTS_ACTIVE = "CONTESTS_LIST::CONTESTS_ACTIVE";
export const CONTESTS_PAST = "CONTESTS_LIST::CONTESTS_PAST";


export const setContestsListActive = (value) => ({
    type: CONTESTS_ACTIVE,
    payload: value
});
export const setContestsListPast = (value) => ({
    type: CONTESTS_PAST,
    payload: value
});
