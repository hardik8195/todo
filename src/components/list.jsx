import React from "react";

function List(props) {
    return (
        <div onClick={function(){
            props.onchecked(props.id);
        }
        }>
            <li>{props.item}</li>
        </div>
    )
}
export default List;