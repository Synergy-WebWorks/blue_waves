import axios from "axios"

export function create_term_service(data) {
    try {
        const result = axios.post('/api/term', data)
        return result
    } catch (error) {

    }
}

export function get_term_service() {
    try {
        const result = axios.get('/api/term')
        return result
    } catch (error) {

    }   
}

export async function get_term_by_id_service(id) {
    const res = await axios.get('/api/term/' + id)
    return res.data
}

export function delete_term_service(id) {
    try {
        const result = axios.delete(`/api/term/${id}`)
        return result
    } catch (error) {

    }
}

export function update_term_service(data) {
    try {
        const result = axios.put(`/api/term/${data.id}`, data)
        return result
    } catch (error) {

    }
}