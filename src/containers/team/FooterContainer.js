// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseActions } from 'store/actionCreators';
import Footer from 'components/team/Footer';

class FooterContainer extends Component {
  handleClick = (clickedButton: string): void => {
    if (clickedButton === 'back') {
      BaseActions.changeCurrentPage('league');
    } else if (clickedButton === 'home') {
      BaseActions.changeCurrentPage('home');
    }
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