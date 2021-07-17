import { CreateReducer } from "../../shared/utils/createReducer";
import { SET_BABYLON } from "../definitions/babylonConstants";
import { ActionProps } from "../../shared/types/action.type";

export interface BabylonState {
    // Replace with your var and it's type
    key: any;
}

export interface BabylonReducerProps extends BabylonState {
    setBabylon: (key: any) => ActionProps;
}

const initState: BabylonState = {
    key: ""
};

const babylonReducer = CreateReducer(initState, {
    [SET_BABYLON](state: BabylonState, action: ActionProps): BabylonState {
        const { key } = action?.payload;
        return {
            ...state,
            key,
        };
    },
});

export default babylonReducer;



