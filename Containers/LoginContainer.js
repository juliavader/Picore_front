import LoginApp from "../Screen/LoginApp";
import { connect } from 'react-redux'
import {  LoginUser } from "../redux/actions";

function mapStateToProps(state) {
    return {
        user : state.user,
        UserToken : state.UserToken,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        LoginUser: (name, password) => dispatch(LoginUser(name, password)),
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginApp)