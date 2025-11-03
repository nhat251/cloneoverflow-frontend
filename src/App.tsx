import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { publicRoutes } from '~/routes';
import { RouteObject } from '~/types';
import { DefaultLayout } from '~/components/layouts';
import { Fragment, type ComponentType } from 'react';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles>
          <Routes>
            {publicRoutes.map((r: RouteObject, index) => {
              const Page = r.component;
              let Layout: ComponentType<{ children?: React.ReactNode }> = DefaultLayout;
              if (r.layout) {
                Layout = r.layout;
              } else if (r.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={r.path}
                  element={
                    <Layout>
                      <Page></Page>
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </GlobalStyles>
      </Router>
    </>
  );
}

export default App;
