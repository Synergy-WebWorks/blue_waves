import axios from "axios"

export function create_booking_order_service(data) {
    try {
        const result = axios.post('/api/booking_order', data)
        return result
    } catch (error) {

    }
}

export function get_booking_order_service() {
    try {
        const result = axios.get('/api/booking_order')
        return result
    } catch (error) {

    }
}

export async function get_booking_order_by_id_service(id) {
    const res = await axios.get('/api/booking_order/' + id)
    return res.data
}

export function delete_booking_order_service(id) {
    try {
        const result = axios.delete(`/api/booking_order/${id}`)
        return result
    } catch (error) {

    }
}

export function update_booking_order_service(data) {
    try {
        const result = axios.put(`/api/booking_order/${data.id}`, data)
        return result
    } catch (error) {

    }
}