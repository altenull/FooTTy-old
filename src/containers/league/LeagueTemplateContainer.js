// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TeamActions } from 'store/actionCreators';
import HeaderContainer from 'containers/league/HeaderContainer';
import FooterContainer from 'containers/league/FooterContainer';
import TableContainer from 'containers/league/TableContainer';
import LeagueTemplate from 'components/league/LeagueTemplate';
import { Helmet } from 'react-helmet';

class LeagueTemplateContainer extends Component {
  componentDidMount() {
    TeamActions.initializeTeam();
  }

  render() {
    const header = <HeaderContainer />;
    const footer = <FooterContainer />;
    const table = <TableContainer />;

    return (
      <div>
        <Helmet>
          <title>League :: Footty</title>
        </Helmet>
        <LeagueTemplate
          header={header}
          footer={footer}
          table={table}
        />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(LeagueTemplateContainer);