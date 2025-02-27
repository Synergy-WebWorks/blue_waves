import axios from "axios"

export function create_inventory_stock_service(data) {
    try {
        const result = axios.post('/api/inventory_stocks', data)
        return result
    } catch (error) {

    }
}

export function get_inventory_stock_service() {
    try {
        const result = axios.get('/api/inventory_stocks')
        return result
    } catch (error) {

    }
}


export async function get_inventory_stock_by_id_service(inventory_id) {
    try {
        const res = await axios.get(`/api/inventory_stocks/${inventory_id}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}

export function delete_inventory_stock_service(id) {
    try {
        const result = axios.delete(`/api/inventory_stocks/${id}`)
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