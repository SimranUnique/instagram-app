export const TYPES = {
    ADD_COMMENT: 'ADD_COMMENT',
    INCREMENT_LIKE: 'INCREMENT_LIKE'
};

export const addComment = comment => ({
    type: TYPES.ADD_COMMENT,
    payload: comment
});

export const incrementLike = details => ({
   type: TYPES.INCREMENT_LIKE,
   payload: details
});