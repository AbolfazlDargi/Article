import Home from "./components/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import ArticlePage from "./components/pages/Articlepage/ArticlePage";
import CreateArticle from "./components/pages/createArticle/CreateArticle";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ArticlePage/:id" element={<ArticlePage />} />
      <Route path={'/create-Article'} element={<CreateArticle />}/>
    </Routes>
  </>;
}

export default App;
