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
import Invest from "./router/Invest";
import News from "./router/News";
import Exchange from "./router/Exchange";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="page/exchange" element={<Exchange />}></Route>
          <Route path="page/news" element={<News />}></Route>
          <Route path="page/invest" element={<Invest />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
