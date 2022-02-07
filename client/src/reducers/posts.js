// because we are in the posts.js reducer, we rename 'state' to 'posts'

const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return posts
        default:
            return posts
    }
}

export default reducer