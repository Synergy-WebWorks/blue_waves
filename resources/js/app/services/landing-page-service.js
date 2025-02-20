import axios from "axios"

export function create_landing_page_service(data) {
    try {
        const result = axios.post('/api/landing_page', data)
        return result
    } catch (error) {

    }
}

export function get_landing_page_service() {
    try {
        const result = axios.get('/api/landing_page')
        return result
    } catch (error) {

    }
}

export async function get_landing_page_by_id_service(id) {
    const res = await axios.get('/api/landing_page/' + id)
    return res.data
}

export function delete_landing_page_service(id) {
    try {
        const result = axios.delete(`/api/landing_page/${id}`)
        return result
    } catch (error) {

    }
}

export function update_landing_page_service(data) {
    try {
        const result = axios.put(`/api/landing_page/${data.id}`, data)
        return result
    } catch (error) {

    }
}