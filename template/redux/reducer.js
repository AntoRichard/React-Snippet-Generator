import { CreateReducer } from "../../shared/utils/createReducer";
import { SET_INDEX } from "../definitions/indexConstants";
import { ActionProps } from "../../shared/types/action.type";

export interface IndexState {
    // Replace with your var and it's type
    key: any;
}

export interface IndexReducerProps extends IndexState {
    setIndex: (key: any) => ActionProps;
}

const initState: IndexState = {
    key: ""
};

const indexReducer = CreateReducer(initState, {
    [SET_INDEX](state: IndexState, action: ActionProps): IndexState {
        const { key } = action?.payload;
        return {
            ...state,
            key,
        };
    },
});

export default indexReducer;



