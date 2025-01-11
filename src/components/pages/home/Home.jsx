import Navbar from "../../navbar/Navbar";
import styled from "./home.module.css";
import Article from "../../article/article";

function Home() {
  return (
    <div className={styled.homeWarpper}>
      <Navbar title="عموهکر" />

      <div className="container">
        <h2>مقالات جدید</h2>

        <div className={styled.articles}>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        </div>


        
      </div>
    </div>
  );
}

export default Home;
