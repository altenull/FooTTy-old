// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from 'containers/player/HeaderContainer';
import FooterContainer from 'containers/player/FooterContainer';
import ProfileContainer from 'containers/player/ProfileContainer';
import PlayerTemplate from 'components/player/PlayerTemplate';
import { Helmet } from 'react-helmet';

class PlayerTemplateContainer extends Component {
  render() {
    const header = <HeaderContainer />;
    const footer = <FooterContainer />;
    const profile = <ProfileContainer />;

    return (
      <div>
        <Helmet>
          <title>Player :: Footty</title>
        </Helmet>
        <PlayerTemplate
          header={header}
          footer={footer}
          profile={profile}
        />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(PlayerTemplateContainer);