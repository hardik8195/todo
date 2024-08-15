import React from "react";

function Form(props){
    return (
        <div className="form">
        <input name={props.items} onChange={props.function1} type={props.type} value={props.value} />
        <button onClick={props.function2}>
          <span>Add</span>
        </button >
      </div>
    )
}
export default Form;