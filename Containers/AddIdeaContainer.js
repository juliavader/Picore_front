import { connect } from 'react-redux'
import AddIdeaApp from "../Screen/AddIdeaApp";
import { addIdea } from "../redux/actions";


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {

    return ({
        addIdea: (title, description, category, compagnies, images,urls, token) => dispatch(addIdea(title, description, category, compagnies, images,urls, token))
    })
    
}


export default connect(mapStateToProps,mapDispatchToProps)(AddIdeaApp);
