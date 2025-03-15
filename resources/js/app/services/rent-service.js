import axios from "axios"

export function create_rent_service(data) {
    try {
        const result = axios.post('/api/rent', data)
        return result
    } catch (error) {

    }
}

export function get_rent_service() {
    try {
        const result = axios.get(`/api/rent${window.location.search}`)
        return result
    } catch (error) {

    }
}

export async function get_rent_by_id_service(id) {
    const res = await axios.get('/api/rent/' + id)
    return res.data
}

export function delete_rent_service(id) {
    try {
        const result = axios.delete(`/api/rent/${id}`)
        return result
    } catch (error) {

    }
}

export function update_rent_service(data) {
    try {
        const result = axios.post(`/api/update_rent`, data)
        return result
    } catch (error) {

    }
}