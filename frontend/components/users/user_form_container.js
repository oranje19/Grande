import { connect } from 'react-redux';
import User from './user_form'


const mapStateToProps = state => {
    // debugger
    return ({
        stories: state.entities.users[state.session.id].stories
        

    })
};

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps, null)(User)