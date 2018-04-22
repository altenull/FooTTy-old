// @flow
import React, { type Node } from 'react';
import Background from 'components/base/Background';

type Props = {
  children: Node
}

const PageTemplate = ({
  children
}: Props) => {
  return (
    <div className="page-template">
      <Background>
        <main>
          {children}
        </main>
      </Background>
    </div>
  );
}

export default PageTemplate;