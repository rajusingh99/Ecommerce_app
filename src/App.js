import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/products' element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/layout" element={<Layout />}>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
