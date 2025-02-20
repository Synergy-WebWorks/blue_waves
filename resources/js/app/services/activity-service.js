import axios from "axios"

export function create_activity_service(data) {
    try {
        const result = axios.post('/api/activity', data)
        return result
    } catch (error) {

    }
}

export function get_activity_service() {
    try {
        const result = axios.get('/api/activity')
        return result
    } catch (error) {

    }
}

export async function get_activity_by_id_service(id) {
    const res = await axios.get('/api/activity/' + id)
    return res.data
}

export function delete_activity_service(id) {
    try {
        const result = axios.delete(`/api/activity/${id}`)
        return result
    } catch (error) {

    }
}

export function update_activity_service(data) {
    try {
        const result = axios.put(`/api/activity/${data.id}`, data)
        return result
    } catch (error) {

    }
}