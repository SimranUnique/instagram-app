import {TYPES} from "../actions/user";

const defaultState = {
    name: 'David Gonsalves',
    profilePic: 'user.jpg',
    bio: 'Crazy Adventurous and an all time FOODIE!! :)'
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TYPES.ADD_BIO: {
            return {...state, bio: action.payload};
        }
        case TYPES.ADD_USER_NAME: {
            return {...state, name: action.payload};
        }
        case TYPES.ADD_PROFILE_PIC: {
            return {...state, profilePic: action.payload};
        }
        default:
            return state;
    }
};