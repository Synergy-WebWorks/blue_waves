import axios from "axios"

export function create_inventory_service(data) {
    try {
        const result = axios.post('/api/inventory', data)
        return result
    } catch (error) {

    }
}

export function get_inventory_service() {
    try {
        const result = axios.get('/api/inventory')
        return result
    } catch (error) {

    }
}

export async function get_inventory_by_id_service(id) {
    const res = await axios.get('/api/inventory/' + id)
    return res.data
}

export function delete_inventory_service(id) {
    try {
        const result = axios.delete(`/api/inventory/${id}`)
        return result
    } catch (error) {

    }
}

export function update_inventory_service(data) {
    try {
        const result = axios.put(`/api/inventory/${data.id}`, data)
        return result
    } catch (error) {

    }
}