import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SigleArticle from "./pages/SigleArticle";

function App() {
  // const id = useContext(url);
  return (
    <Routes>
      <Route path="/" element={<Home />} exact></Route>
      <Route path="/post/:postId" element={<SigleArticle />}></Route>
    </Routes>
  );
}

export default App;
