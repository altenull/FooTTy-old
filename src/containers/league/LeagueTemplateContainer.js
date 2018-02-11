// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeagueActions } from 'store/actionCreators';
import HeaderContainer from 'containers/league/HeaderContainer';
import FooterContainer from 'containers/league/FooterContainer';
import TableContainer from 'containers/league/TableContainer';
import LeagueTemplate from 'components/league/LeagueTemplate';

class LeagueTemplateContainer extends Component {
  componentWillUnmount() {
    LeagueActions.initializeLeague();
  }

  render() {
    const header = <HeaderContainer />;
    const footer = <FooterContainer />;
    const table = <TableContainer />;

    return (
      <LeagueTemplate
        header={header}
        footer={footer}
        table={table}
      />
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(LeagueTemplateContainer);