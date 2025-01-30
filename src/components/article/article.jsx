import styled from "./article.module.css";

function Article(props) {
  return <div className={styled.articlewrapper}>

    <img src={props.data.imageUrl} alt=""></img>

    <h3>{props.data.title}</h3>
    <p>خواندن {props.data.readingtime} دقیقه ای</p>
  </div>;
}

export default Article;
