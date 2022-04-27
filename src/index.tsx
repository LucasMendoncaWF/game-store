import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from '/src/modules/Pages/Home/Home';
import { Header } from '/src/modules/Shared/shared.module';
import {
  Routes,
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
const state = {
  url: ''
};
const location = useLocation();

React.useEffect(() => {
  state.url = location.pathname;
}, [location]);

 return (
    <section>
      <Header url={location.pathname}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Home />} />
        <Route path="/whishlist" element={<Home />} />
        <Route path="/support" element={<Home />} />
      </Routes>
    </section>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App></App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
