import { create_booking_info_service, delete_booking_info_service, get_booking_info_by_id_service, get_booking_info_service, get_calendar_service, update_booking_info_service } from "../services/booking-info-service";
import {bookingInfoSlice} from "./booking-info-slice";

export function get_booking_info_thunk() {
  return async function (dispatch, getState) {
   const res = await get_booking_info_service()
          dispatch(bookingInfoSlice.actions.setBookingInfos(res.data));
  };
}

export function get_calendar_thunk(query) {
    return async function (dispatch, getState) {
     const res = await get_calendar_service(query)
            dispatch(bookingInfoSlice.actions.setCalendars(res.data));
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
        console.log('resres',res)
        dispatch(bookingInfoSlice.actions.setBookingInfo(res));
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