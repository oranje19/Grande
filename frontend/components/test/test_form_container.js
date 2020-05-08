import { connect } from 'react-redux';
import Test from './test_form'


const mapStateToProps = state => {
    // debugger
    return ({
        stories: state.entities.users[state.session.id].stories
        

    })
};

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps, null)(Test)