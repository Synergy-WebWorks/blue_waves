import { create_dashboard_service, delete_dashboard_service, get_dashboard_by_id_service, get_dashboard_service, update_dashboard_service } from "../services/dashboard-service";
import { dashboardSlice } from "./dashboard-slice";


export function get_dashboard_thunk() {
  return async function (dispatch, getState) {
   const res = await get_dashboard_service()
          dispatch(dashboardSlice.actions.setDashboards(res.data));
  };
}

export function create_dashboard_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_dashboard_service(data)

    };
}

export function get_dashboard_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_dashboard_by_id_service(id)
        dispatch(dashboardSlice.actions.setDashboard(res.status));
        return res.status
    };
}


export function delete_dashboard_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_dashboard_service(id)
    };
}


export function update_dashboard_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_dashboard_service(data)
    };
}