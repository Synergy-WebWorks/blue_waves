import { create_rent_service, delete_rent_service, get_rent_by_id_service, get_rent_service, update_rent_service } from "../services/rent-service";
import { rentSlice } from "./rent-slice";

export function get_rent_thunk() {
  return async function (dispatch, getState) {
   const res = await get_rent_service()
          dispatch(rentSlice.actions.setRents(res.data));
  };
}

export function create_rent_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_rent_service(data)

    };
}

export function get_rent_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_rent_by_id_service(id)
        dispatch(rentSlice.actions.setRent(res.status));
        return res.status
    };
}


export function delete_rent_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_rent_service(id)
    };
}


export function update_rent_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_rent_service(data)
    };
}