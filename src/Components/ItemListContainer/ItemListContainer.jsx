import stylesItem from "./itemListContainer.module.css"

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className={stylesItem.color}> { greeting } </div>
  );
};

