import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import { PublicRoutes, publicRoutes } from './Routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: PublicRoutes, index: number) => {
            const Page = route.component;

            let Layout: any = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = React.Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
