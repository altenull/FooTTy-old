// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerActions } from 'store/actionCreators';
import HeaderContainer from 'containers/team/HeaderContainer';
import FooterContainer from 'containers/team/FooterContainer';
import InfoContainer from 'containers/team/InfoContainer';
import TeamTemplate from 'components/team/TeamTemplate';
import { Helmet } from 'react-helmet';

class TeamTemplateContainer extends Component {
  componentDidMount() {
    PlayerActions.initializePlayer();
  }

  render() {
    const header = <HeaderContainer />;
    const footer = <FooterContainer />;
    const info = <InfoContainer />;

    return (
      <div>
        <Helmet>
          <title>Team :: Footty</title>
        </Helmet>
        <TeamTemplate
          header={header}
          footer={footer}
          info={info}
        />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(TeamTemplateContainer);