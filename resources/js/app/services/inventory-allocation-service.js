import axios from "axios"

export function create_inventory_allocation_service(data) {
    try {
        const result = axios.post('/api/inventory_allocation', data)
        return result
    } catch (error) {

    }
}

export function get_inventory_allocation_service() {
    try {
        const result = axios.get('/api/inventory_allocation')
        return result
    } catch (error) {

    }
}

export async function get_inventory_allocation_by_id_service(id) {
    const res = await axios.get('/api/inventory_allocation/' + id)
    return res.data
}

export function delete_inventory_allocation_service(id) {
    try {
        const result = axios.delete(`/api/inventory_allocation/${id}`)
        return result
    } catch (error) {

    }
}

export function update_inventory_allocation_service(data) {
    try {
        const result = axios.put(`/api/inventory_allocation/${data.id}`, data)
        return result
    } catch (error) {

    }
}