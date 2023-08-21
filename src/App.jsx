import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SigleArticle from "./pages/SigleArticle";
import CategoryPage from "./pages/CategoryPage";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

function App() {
  // const id = useContext(url);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/post/:postId" element={<SigleArticle />}></Route>
        <Route
          path="/category/:categoryName"
          element={<CategoryPage />}
        ></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
