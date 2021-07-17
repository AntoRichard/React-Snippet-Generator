import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers";
import * as BabylonFunctions from "../actions/babylon";

const mapStateToProps = (state: RootReducerProps, ownProps: any) => ({
	...ownProps,
	key: state.babylon.key,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(BabylonFunctions, dispatch);

const BabylonContainer = (component: any) => {
	return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default BabylonContainer;
