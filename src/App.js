import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About'));

function App() {

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            } />
            <Route exact path="/about" element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            } />
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  )
}

function Loading() {
  return <div className="suspense-loading">Loading</div>
}

export default App;
