import { create_inventory_service, delete_inventory_service, get_inventory_by_id_service, get_inventory_service, return_item_inventory_service, update_inventory_service } from "../services/inventory-service";
import { inventorySlice } from "./inventory-slice";

export function get_inventory_thunk() {
    return async function (dispatch, getState) {
        const res = await get_inventory_service()
        dispatch(inventorySlice.actions.setInventories(res.data.result));
    };
}

export function create_inventory_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_inventory_service(data)

    };
}

export function get_inventory_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_inventory_by_id_service(id)
        dispatch(inventorySlice.actions.setInventory(res.status));
        return res.status
    };
}


export function delete_inventory_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_inventory_service(id)
    };
}


export function update_inventory_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_inventory_service(data)
    };
}

export function return_item_inventory_thunk(data) {
    return async function (dispatch, getState) {
        const res = await return_item_inventory_service(data)
    };
}