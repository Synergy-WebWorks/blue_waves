import axios from "axios"

export function create_inventory_stock_service(data) {
    try {
        const result = axios.post('/api/inventory_stock', data)
        return result
    } catch (error) {

    }
}

export function get_inventory_stock_service() {
    try {
        const result = axios.get('/api/inventory_stock')
        return result
    } catch (error) {

    }
}

export async function get_inventory_stock_by_id_service(id) {
    const res = await axios.get('/api/inventory_stock/' + id)
    return res.data
}

export function delete_inventory_stock_service(id) {
    try {
        const result = axios.delete(`/api/inventory_stock/${id}`)
        return result
    } catch (error) {

    }
}

export function update_inventory_stock_service(data) {
    try {
        const result = axios.put(`/api/inventory_stock/${data.id}`, data)
        return result
    } catch (error) {

    }
}