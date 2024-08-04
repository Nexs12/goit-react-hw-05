import style from "./Griditem.module.css";

const GridItem = ({ children }) => {
  return <li className={style.item}>{children}</li>;
};

export default GridItem;
