import axios from "axios"

export function create_resort_service(data) {
    try {
        const result = axios.post('/api/resort', data)
        return result
    } catch (error) {

    }
}

export function get_resort_service() {
    try {
        const result = axios.get('/api/resort')
        return result
    } catch (error) {

    }
}

export async function get_resort_by_id_service(id) {
    const res = await axios.get('/api/resort/' + id)
    return res.data
}

export function delete_resort_service(id) {
    try {
        const result = axios.delete(`/api/resort/${id}`)
        return result
    } catch (error) {

    }
}

export function update_resort_service(data) {
    try {
        const result = axios.put(`/api/resort/${data.id}`, data)
        return result
    } catch (error) {

    }
}