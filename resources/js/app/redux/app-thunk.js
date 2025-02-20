import { create_user_service, delete_user_service, get_user_by_id_service, get_user_service, update_user_service } from '../services/user-service';
import { appSlice } from './app-slice';

export function get_user_thunk() {
  return async function (dispatch, getState) {
   const res = await get_user_service()
          dispatch(appSlice.actions.setUser(res.data));
  };
}

export function create_user_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_user_service(data)

    };
}

export function get_user_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_user_by_id_service(id)
        dispatch(appSlice.actions.setUser(res.status));
        return res.status
    };
}


export function delete_user_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_user_service(id)
    };
}


export function update_user_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_user_service(data)
    };
}