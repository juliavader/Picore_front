import HomeApp from "../Screen/HomeApp";
import { connect } from 'react-redux'
import { randomIdea, getAllCategories, addFavoriteIdea, GetIdeasWithOneSpecification} from "../redux/actions";


function mapStateToProps(state) {
    return {
        Idea : state.Idea,
        user : state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        randomIdea: () => dispatch(randomIdea()), 
        getAllCategories: () => dispatch(getAllCategories()),
        addFavoriteIdea: (idea, user)=>dispatch(addFavoriteIdea(idea, user)),
        GetIdeasWithOneSpecification: (id)=>dispatch(GetIdeasWithOneSpecification(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);
