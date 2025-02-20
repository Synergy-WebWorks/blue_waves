import { create_activity_service, delete_activity_service, get_activity_by_id_service, get_activity_service, update_activity_service } from "../services/activity-service";
import { activitySlice } from "./activity-slice";


export function get_activity_thunk() {
  return async function (dispatch, getState) {
   const res = await get_activity_service()
          dispatch(activitySlice.actions.setActivities(res.data));
  };
}

export function create_activity_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_activity_service(data)

    };
}

export function get_activity_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_activity_by_id_service(id)
        dispatch(activitySlice.actions.setActivity(res.status));
        return res.status
    };
}


export function delete_activity_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_activity_service(id)
    };
}


export function update_activity_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_activity_service(data)
    };
}