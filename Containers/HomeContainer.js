import HomeApp from "../Screen/HomeApp";
import { connect } from 'react-redux'
import { randomIdea, getAllCategories } from "../redux/actions";


function mapStateToProps(state) {
    return {
        Idea : state.Idea,
        user : state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        randomIdea: () => dispatch(randomIdea()), 
        LoginUser: (name, password) => dispatch(LoginUser(name, password)),
        getAllCategories: () => dispatch(getAllCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);
