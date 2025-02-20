import { create_inventory_allocation_service, delete_inventory_allocation_service, get_inventory_allocation_by_id_service, get_inventory_allocation_service, update_inventory_allocation_service } from "../services/inventory-allocation-service";
import {inventoryAllocationSlice} from "./inventory-allocation-slice";

export function get_inventory_allocation_thunk() {
  return async function (dispatch, getState) {
   const res = await get_inventory_allocation_service()
          dispatch(inventoryAllocationSlice.actions.setInventoryAllocations(res.data));
  };
}

export function create_inventory_allocation_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_inventory_allocation_service(data)

    };
}

export function get_inventory_allocation_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_inventory_allocation_by_id_service(id)
        dispatch(inventoryAllocationSlice.actions.setInventoryAllocation(res.status));
        return res.status
    };
}


export function delete_inventory_allocation_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_inventory_allocation_service(id)
    };
}


export function update_inventory_allocation_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_inventory_allocation_service(data)
    };
}