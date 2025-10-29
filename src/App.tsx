import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginModal from './components/Popup/LoginPopup';
import { publicRoutes } from './routes';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
