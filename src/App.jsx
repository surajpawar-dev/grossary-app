import WrapperComponent from "./components/WrapperComponent";
import { useState } from "react";
import ListItem from "./components/ListItem";
import InputBox from "./components/InputBox";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [grossaryList, setGrossaryList] = useState([]);

  function handleOnKeyDown(e) {
    if (e.key === "Enter") {
      setGrossaryList([...grossaryList, e.target.value]);
      e.target.value = "";
    }
  }

  function handleOnDelete(itemToDelete) {
    let newList = grossaryList.filter(item => item !== itemToDelete);
    setGrossaryList(newList);
    console.log(itemToDelete);
  }

  return (
    <>
      <WrapperComponent>
        <h1>Grossary List</h1>
        <InputBox handleOnKeyDown={handleOnKeyDown}></InputBox>
        <ErrorComponent list={grossaryList}></ErrorComponent>
        <ListItem
          list={grossaryList}
          handleOnDelete={handleOnDelete}
        ></ListItem>
      </WrapperComponent>
    </>
  );
}

export default App;
