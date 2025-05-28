import Item from "./Item";

function ListItem({ list, handleOnDelete }) {
  return (
    <>
      <ul>
        {list.map((item) => {
          return <Item item={item} handleOnDelete={handleOnDelete} />;
        })}
      </ul>
    </>
  );
}

export default ListItem;
