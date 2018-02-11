// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseActions } from 'store/actionCreators';
import Footer from 'components/league/Footer';

class FooterContainer extends Component {
  handleClick = () => {
    BaseActions.changeCurrentPage('home');
  }

  render() {
    const { handleClick } = this;

    return (
      <Footer
        onClick={handleClick}
      />
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(FooterContainer);