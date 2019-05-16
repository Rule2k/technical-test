
import { connect } from 'react-redux';

import Header from 'src/components/Header';


const mapStateToProps = (state, ownProps) => ({
  displayForm: state.displayForm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
