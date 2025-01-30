import { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import styled from "./home.module.css";
import Article from "../../article/article";
import axios from "axios";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    // API call
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);

        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWarpper}>
      <Navbar title="عموهکر" />

      <div className="container">
        <h2>مقالات جدید</h2>

        {/* shart ? dorost : ghalat */}
        {isloading ? (
          <Loading />
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/Articlepage/${article.id}`}>
                <Article key={article.id} data={article} />
              </Link>
            ))}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default Home;
