import React from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./list";

function App() {
  const [items, updateItem] = React.useState("");
  const [bitems, updatebItem] = React.useState([]);


  function HandleInput(event) {

    const newValue = event.target.value
    updateItem(newValue);
  }

  function HandleClick() {

    updatebItem((prevVal) => {
      return [...prevVal, items]
      
    });

    updateItem("");

  }
  function deleteItem(id){
    updatebItem(function(prevVal){
      return prevVal.filter(function(item,index){
        return index !== id;
      })
    })
  }


  return (
    <div className="container">
      <Header />
      <Form 
        items="items" 
        function1={HandleInput}
        function2={HandleClick}
        type="text"
        value={items}
      />
      <div>
        <ul>
          {
            bitems.map((bitem,index) => {
              return (
                <List  
                key={index}
                id={index}
                item={bitem}
                onchecked = {deleteItem}
                />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
