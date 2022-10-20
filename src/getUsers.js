import axios from 'axios'

export async function getAllUsers() {
    try {
        const response = await axios.get('http://[::1]:5000')
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function searchUsers(name) {
    try {
        const response = await axios.get('http://[::1]:5000', { params: { term: name } })
        return response.data
    } catch (error) {
        console.log(error)
    }
}