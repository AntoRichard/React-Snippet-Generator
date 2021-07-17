import { CreateReducer } from "../../shared/utils/createReducer";
import { SET_AUTH } from "../definitions/authConstants";
import { ActionProps } from "../../shared/types/action.type";

export interface AuthState {
    // Replace with your var and it's type
    key: any;
}

export interface AuthReducerProps extends AuthState {
    setAuth: (key: any) => ActionProps;
}

const initState: AuthState = {
    key: ""
};

const authReducer = CreateReducer(initState, {
    [SET_AUTH](state: AuthState, action: ActionProps): AuthState {
        const { key } = action?.payload;
        return {
            ...state,
            key,
        };
    },
});

export default authReducer;



