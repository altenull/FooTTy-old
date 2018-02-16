// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import Footer from 'components/league/Footer';

type Props = {
  isLoaded: boolean
}

class FooterContainer extends Component<Props> {
  handleClick = () => {
    BaseActions.changeCurrentPage('home');
  }

  render() {
    const { isLoaded } = this.props;
    const { handleClick } = this;

    if (!isLoaded) {
      return null;
    }

    return (
      <Footer
        onClick={handleClick}
      />
    );
  }
}

export default connect(
  ({ league }: State) => ({
    isLoaded: league.isLoaded
  }),
  () => ({})
)(FooterContainer);