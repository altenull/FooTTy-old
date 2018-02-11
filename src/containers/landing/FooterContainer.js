// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from 'components/landing/Footer';

class FooterContainer extends Component {
  render() {
    return (
      <Footer />
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(FooterContainer);