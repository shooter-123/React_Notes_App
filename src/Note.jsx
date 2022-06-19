import React from "react"

function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.msg}</p>
            <button onClick={()=>{
                props.del(props.idx)
            }} >Delete</button>
        </div>
    )
}

export default Note;  