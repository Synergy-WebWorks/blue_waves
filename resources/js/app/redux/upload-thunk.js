import { create_upload_service, delete_upload_service, get_upload_by_id_service, get_upload_service, update_upload_service } from "../services/upload-service";
import { uploadSlice } from "./upload-slice";

export function get_upload_thunk() {
  return async function (dispatch, getState) {
   const res = await get_upload_service()
          dispatch(uploadSlice.actions.setUploads(res.data));
  };
}

export function create_upload_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_upload_service(data)

    };
}

export function get_upload_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_upload_by_id_service(id)
        dispatch(uploadSlice.actions.setUpload(res.status));
        return res.status
    };
}


export function delete_upload_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_upload_service(id)
    };
}


export function update_upload_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_upload_service(data)
    };
}