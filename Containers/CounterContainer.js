import CounterApp from "../Screen/CounterApp";
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from "../redux/actions";

function mapStateToProps(state) {
    return {
        counter: state.counter.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)