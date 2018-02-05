// @flow
import React from 'react';
import type { Node } from 'react';
import './PageTemplate.scss';
import Background from 'components/base/Background';

type Props = {
  header: Node,
  children: Node
}

const PageTemplate = ({header, children}: Props) => {
  return (
    <div className="page-template">
      <Background>
        {header}
        <main>
          {children}
        </main>
      </Background>
    </div>
  );
};

export default PageTemplate;