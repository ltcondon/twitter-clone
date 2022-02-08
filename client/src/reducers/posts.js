// because we are in the posts.js reducer, we rename 'state' to 'posts'

const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]
        case 'UPDATE':
        case 'LIKE':
        case 'RETWEET':
            return posts.map((post => post.id === action.payload._id ? action.payload : post))
        default:
            return posts
    }
}

export default reducer