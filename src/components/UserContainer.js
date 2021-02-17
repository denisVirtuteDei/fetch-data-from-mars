import { connect } from 'react-redux';
import { Users } from './Users';
import { fetchAllUsers } from '../actions/fetchAllUsers';

const mapStateToProps = state => ({
    userList: state.users.userList,
    loading: state.preloader.loading
})

const mapDispatchToProps = {
    fetchAllUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)