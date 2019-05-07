import UserApp from "../Screen/UserApp";
import { connect } from 'react-redux'
import { UnlogUser } from "../redux/actions";


function mapStateToProps(state) {
    return state ; 
}

function mapDispatchToProps(dispatch){
    return {
        UnlogUser: () => dispatch(UnlogUser()),
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserApp)