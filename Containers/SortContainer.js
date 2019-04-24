import SortApp from "../Screen/SortApp";
import { connect } from 'react-redux'
import {  GetIdeasWithOneSpecification } from "../redux/actions";

function mapStateToProps(state) {
    return state
    
}

function mapDispatchToProps(dispatch) {
    return{
        GetIdeasWithOneSpecification :(id) => dispatch(GetIdeasWithOneSpecification(id))
        
    } 
}
    

export default connect(mapStateToProps, mapDispatchToProps)(SortApp);
