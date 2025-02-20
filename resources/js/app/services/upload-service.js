import axios from "axios"

export function create_upload_service(data) {
    try {
        const result = axios.post('/api/upload', data)
        return result
    } catch (error) {

    }
}

export function get_upload_service() {
    try {
        const result = axios.get('/api/upload')
        return result
    } catch (error) {

    }
}

export async function get_upload_by_id_service(id) {
    const res = await axios.get('/api/upload/' + id)
    return res.data
}

export function delete_upload_service(id) {
    try {
        const result = axios.delete(`/api/upload/${id}`)
        return result
    } catch (error) {

    }
}

export function update_upload_service(data) {
    try {
        const result = axios.put(`/api/upload/${data.id}`, data)
        return result
    } catch (error) {

    }
}