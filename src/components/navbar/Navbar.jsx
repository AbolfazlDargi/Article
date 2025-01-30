import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styled.headerWarpper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>
            <Link to="/">لیست مقالات</Link>
            </li>
            <li>
            <Link to="/about">درباره ما</Link>
            </li>
            <li>
            <Link to="/create-Article">صفحه ی مقالات </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
