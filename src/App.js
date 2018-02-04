import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import LandingTemplateContainer from 'containers/landing/LandingTemplateContainer';

class App extends Component {
  render() {
    return (
      <PageTemplate>
        <LandingTemplateContainer />
      </PageTemplate>
    );
  }
}

export default App;