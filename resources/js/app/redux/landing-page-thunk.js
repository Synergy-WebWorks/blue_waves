import { create_landing_page_service, delete_landing_page_service, get_landing_page_by_id_service, get_landing_page_service, update_landing_page_service } from "../services/landing-page-service";
import { landingPageSlice } from "./landing-page-slice";

export function get_landing_page_thunk() {
  return async function (dispatch, getState) {
   const res = await get_landing_page_service()
          dispatch(landingPageSlice.actions.setLandingPages(res.data));
  };
}

export function create_landing_page_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_landing_page_service(data)

    };
}

export function get_landing_page_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_landing_page_by_id_service(id)
        dispatch(landingPageSlice.actions.setLandingPage(res.status));
        return res.status
    };
}


export function delete_landing_page_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_landing_page_service(id)
    };
}


export function update_landing_page_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_landing_page_service(data)
    };
}