import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Home from "./router/Home";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
