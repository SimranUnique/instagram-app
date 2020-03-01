export const TYPES = {
    ADD_BIO: 'ADD_BIO',
    ADD_PROFILE_PIC: 'ADD_PROFILE_PIC',
    ADD_USER_NAME: 'ADD_USER_NAME'
};

export const addBio = comment => ({
    type: TYPES.ADD_BIO,
    payload: comment
});

export const addProfilePic = profilePic => ({
    type: TYPES.ADD_PROFILE_PIC,
    payload: profilePic
});

export const addUserName = userName => ({
   type: TYPES.ADD_USER_NAME,
   payload: userName
});