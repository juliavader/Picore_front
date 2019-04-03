import UserApp from "../Screen/CounterApp";
import { connect } from 'react-redux'
import { UserReducer } from "../Store/reducers/UserReducer";

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch){

}



export default connect(mapStateToProps, mapDispatchToProps)(UserApp)