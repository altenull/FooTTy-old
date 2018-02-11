// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import Header from 'components/league/Header';

type Props = {
  currentLeague: string
};

class HeaderContainer extends Component<Props> {
  render() {
    const { currentLeague } = this.props;
    return (
      <Header
        currentLeague={currentLeague}
      />
    );
  }
}

export default connect(
  ({ league }: State) => ({
    currentLeague: league.currentLeague
  }),
  () => ({})
)(HeaderContainer);