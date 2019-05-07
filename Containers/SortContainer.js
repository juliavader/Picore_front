import SortApp from "../Screen/SortApp";
import { connect } from 'react-redux'
import {  GetIdeasWithOneSpecification, GetAllSubCategories, GetIdeasWithTwoSpecification, DeleteSpecifications } from "../redux/actions";

function mapStateToProps(state) {
    return state
    
}

function mapDispatchToProps(dispatch) {
    return{
        GetIdeasWithOneSpecification :(id) => dispatch(GetIdeasWithOneSpecification(id)),
        GetIdeasWithTwoSpecification : (cat, subcat)=> dispatch(GetIdeasWithTwoSpecification(cat, subcat)),
        GetAllSubCategories :(id) => dispatch(GetAllSubCategories(id)),
        DeleteSpecifications: ()=>dispatch(DeleteSpecifications())
        
    } 
}
    

export default connect(mapStateToProps, mapDispatchToProps)(SortApp);
