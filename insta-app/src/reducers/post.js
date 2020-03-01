import {cloneDeep} from 'lodash';
import {TYPES} from "../actions/post";

const defaultState = {
    'A01': {
        img: 'berlin.jpg',
        likes: 0,
        postTime: new Date("February 01, 2018 11:45:00"),
        comments: [{
            user: 'Aanya',
            comment: 'Beautiful :) :)'
        }],
        description: 'Nothing more beautiful than this! :)',
    },
    'A02': {
        img: 'breakfast.jpg',
        likes: 0,
        postTime: new Date("February 01, 2020 11:45:00"),
        comments: [{
            user: 'Aanya',
            comment: 'Looking awesome :D :D'
        }],
        description: 'Nothing more delicious than this! :)',
    },
    'A03': {
        img: 'lisbon.jpg',
        likes: 2,
        postTime: new Date("March 01, 2020 20:00:00"),
        comments: [{
            user: 'Aanya',
            comment: 'Beautiful :) :)'
        }],
        description: 'Nothing more beautiful than this! :)',
    },
    'A04': {
        img: 'wedges.jpg',
        likes: 2,
        postTime: new Date(),
        comments: [{
            user: 'Aanya',
            comment: 'Looking awesome :D :D'
        }],
        description: 'Nothing more delicious than this! :)',
    },
    'A05': {
        img: 'london.jpg',
        likes: 0,
        postTime: new Date("January 01, 2020 23:45:00"),
        comments: [{
            user: 'Aanya',
            comment: 'Beautiful :) :)'
        }],
        description: 'Nothing more beautiful than this! :)',
    },
    'A06': {
        img: 'egg.jpg',
        likes: 1,
        postTime: new Date(),
        comments: [{
            user: 'Aanya',
            comment: 'Looking awesome :D :D'
        }],
        description: 'Nothing more delicious than this! :)',
    }
};

export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TYPES.ADD_COMMENT: {
            const updatedState = cloneDeep(state);
            const post = updatedState[action.payload.postId];
            if(post) {
                updatedState[action.payload.postId].comments.push(action.payload.comment);
            }
            return updatedState;
        }
        case TYPES.INCREMENT_LIKE: {
            const updatedState = cloneDeep(state);
            const post = updatedState[action.payload.postId];
            if(post) {
                updatedState[action.payload.postId].likes++;
            }
            return updatedState;
        }
        default:
            return state;
    }
};

