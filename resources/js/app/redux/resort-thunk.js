import { create_resort_service, delete_resort_service, get_resort_by_id_service, get_resort_service, update_resort_service } from "../services/resort-service";
import { resortSlice } from "./resort-slice";

export function get_resort_thunk() {
  return async function (dispatch, getState) {
   const res = await get_resort_service()
          dispatch(resortSlice.actions.setResorts(res.data));
  };
}

export function create_resort_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_resort_service(data)

    };
}

export function get_resort_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_resort_by_id_service(id)
        dispatch(resortSlice.actions.setResort(res.status));
        return res.status
    };
}


export function delete_resort_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_resort_service(id)
    };
}


export function update_resort_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_resort_service(data)
    };
}