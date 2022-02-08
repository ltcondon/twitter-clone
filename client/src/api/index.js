import axios from 'axios'

const url = 'http://localhost:8000/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (post) => axios.post(url, post)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)