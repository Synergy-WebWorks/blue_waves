import axios from "axios"

export function add_order_service(data) {
    try {
        const result = axios.post('/api/add_order', data)
        return result
    } catch (error) {
    }
}

export function checkout_data_service(data) {
    try {
        const result = axios.post('/api/checkout_data', data)
        return result
    } catch (error) {
    }
}

export function create_booking_info_service(data) {
    try {
        const result = axios.post('/api/booking_info', data)
        return result
    } catch (error) {
    }
}



export function get_calendar_service(query) {
    try {
        const result = axios.get('/api/get_calendar'+query)
        return result
    } catch (error) {
    }
}

export function get_booking_info_service() {
    try {
        const result = axios.get('/api/booking_info'+window.location.search)
        return result
    } catch (error) {

    }
}

export async function get_booking_info_by_id_service(id) {
    const res = await axios.get('/api/booking_info/' + id)
    return res.data
}

export function delete_booking_info_service(id) {
    try {
        const result = axios.delete(`/api/booking_info/${id}`)
        return result
    } catch (error) {

    }
}

export function update_booking_info_service(data) {
    try {
        const result = axios.put(`/api/booking_info/${data.id}`, data)
        return result
    } catch (error) {

    }
}