import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import Styled from "./ArticlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";

function ArticlePage() {
  const [articles, setArticles] = useState({});
  const params = useParams();
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [params.id]);

  return (
    <>
      <Navbar title="عموهکر" />
      <div className={Styled.articleWrapper}>
        <div className="container">
          {isloading ? (
            <Loading />
          ) : (
            <>
              {articles.title ? (
                <>
                  <h1>{articles.title}</h1>
                  <div className={Styled.articleInfo}>
                    <span>تاریخ: {articles.date}</span>
                    <span>نویسنده: {articles.author}</span>
                    <span>مدت زمان خواندن: {articles.readingtime} دقیقه</span>
                  </div>
                  <img src={articles.imageUrl} alt={articles.title} />{"}"}
                  <p>{articles.content}</p>
                </>
              ) : (
                <p>مقاله‌ای پیدا نشد.</p>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticlePage;
