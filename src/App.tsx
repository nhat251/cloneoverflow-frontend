import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { publicRoutes } from '~/routes';
import { type IRoute } from '~/types/IRoute';
import { DefaultLayout } from './components/layouts';
import { Fragment, type ComponentType } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles>
          <div className="app">
            <Routes>
              {publicRoutes.map((r: IRoute) => {
                const Page = r.component;
                let Layout: ComponentType<{ children?: React.ReactNode }> = DefaultLayout;
                if (r.layout) {
                  Layout = r.layout;
                } else if (r.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route
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
          </div>
        </GlobalStyles>
      </BrowserRouter>
    </>
  );
}

export default App;
