import axios from "axios"

export function create_inventory_allocation_service(data) {
    try {
        const result = axios.post('/api/inventory_allocations', data)
        return result
    } catch (error) {

    }
}

export function get_inventory_allocation_service() {
    try {
        const result = axios.get('/api/inventory_allocations')
        return result
    } catch (error) {

    }
}


export async function get_inventory_allocation_by_id_service(item_id) {
    try {
        const res = await axios.get(`/api/inventory_allocations/${item_id}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}

export function delete_inventory_allocation_service(id) {
    try {
        const result = axios.delete(`/api/inventory_allocations/${id}`)
        return result
    } catch (error) {

    }
}

export function update_inventory_allocation_service(data) {
    try {
        const result = axios.put(`/api/inventory_allocations/${data.id}`, data)
        return result
    } catch (error) {

    }
}