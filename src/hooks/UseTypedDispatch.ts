import {useDispatch} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import ActionCreators from "../store/ActionCreators";


export const useTypedDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}