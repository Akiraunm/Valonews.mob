import "./assets/news.css"
import {Routes, Route} from "react-router-dom"
import Category from "./peges/Category";
import Header from "./components/Header";
import Main from "./peges/Main";
import Menu from "./peges/Menu";
import Nerf from "./peges/Nerf";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:id" element={<Nerf />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category/post/:id" element={<Category />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
