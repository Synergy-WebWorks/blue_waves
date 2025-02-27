import { get_inventory_stock_by_id_service } from "../services/inventory-stock-service";
import { inventoryStockSlice } from "./inventory-stock-slice";

export function get_inventory_stock_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_inventory_stock_by_id_service(id);
        dispatch(inventoryStockSlice.actions.setInventoryStocks(res.data.status));
        return res;
    };
}