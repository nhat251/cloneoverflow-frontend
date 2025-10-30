import React, { type PropsWithChildren } from 'react';
import { Header } from '~/components/layouts/components';

function HeaderOnlyLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header></Header>
      <div className="body-inner">{children}</div>
    </>
  );
}

export default HeaderOnlyLayout;
