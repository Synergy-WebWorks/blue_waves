import { create_term_service, delete_term_service, get_term_by_id_service, get_term_service, update_term_service } from "../services/term-service";
import { termSlice } from "./term-slice";

export function get_term_thunk() {
  return async function (dispatch, getState) {
   const res = await get_term_service()
          dispatch(termSlice.actions.setTerms(res.data));
  };
}

export function create_term_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_term_service(data)

    };
}

export function get_term_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_term_by_id_service(id)
        dispatch(termSlice.actions.setTerm(res.status));
        return res.status
    };
}


export function delete_term_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_term_service(id)
    };
}


export function update_term_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_term_service(data)
    };
}