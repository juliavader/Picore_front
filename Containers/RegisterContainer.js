import RegisterApp from "../Screen/RegisterApp.js";
import { connect } from 'react-redux'
import {  registerAndLoginUser } from "../redux/actions";

function mapStateToProps(state) {
    return {
        user : state.user,
        UserToken : state.UserToken,
    }
}

function mapDispatchToProps(dispatch) {
    return({
        registerAndLoginUser: (username, email ,password) => dispatch(registerAndLoginUser(username,email,password))
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterApp);
