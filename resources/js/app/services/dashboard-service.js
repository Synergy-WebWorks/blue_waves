import axios from "axios"

export function create_dashboard_service(data) {
    try {
        const result = axios.post('/api/dashboard', data)
        return result
    } catch (error) {

    }
}

export function get_dashboard_service() {
    try {
        const result = axios.get('/api/dashboard')
        return result
    } catch (error) {

    }
}

export async function get_dashboard_by_id_service(id) {
    const res = await axios.get('/api/dashboard/' + id)
    return res.data
}

export function delete_dashboard_service(id) {
    try {
        const result = axios.delete(`/api/dashboard/${id}`)
        return result
    } catch (error) {

    }
}

export function update_dashboard_service(data) {
    try {
        const result = axios.put(`/api/dashboard/${data.id}`, data)
        return result
    } catch (error) {

    }
}