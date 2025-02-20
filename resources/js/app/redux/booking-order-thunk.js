import { create_booking_info_service, delete_booking_info_service, get_booking_info_by_id_service, get_booking_info_service, update_booking_info_service } from "../services/booking-info-service";
import {bookingOrderSlice} from "./booking-order-slice";

export function get_booking_info_thunk() {
  return async function (dispatch, getState) {
   const res = await get_booking_info_service()
          dispatch(bookingOrderSlice.actions.setBookingOrders(res.data));
  };
}

export function create_booking_info_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_booking_info_service(data)

    };
}

export function get_booking_info_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_booking_info_by_id_service(id)
        dispatch(bookingOrderSlice.actions.setBookingOrder(res.status));
        return res.status
    };
}


export function delete_booking_info_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_booking_info_service(id)
    };
}


export function update_booking_info_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_booking_info_service(data)
    };
}