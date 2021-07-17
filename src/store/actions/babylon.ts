import {  SET_BABYLON } from "../definitions/babylonConstants";
import { ActionProps } from "../../shared/types/action.type";

export const setBabylon = (key: any): ActionProps => ({
    type: SET_BABYLON,
    payload: {
        key
    }
})
