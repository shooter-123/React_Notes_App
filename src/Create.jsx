import React from "react";

function Create(props) {

    const[obj,setObj]=React.useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name,value}=event.target
        return(
            setObj((prevValue)=>{
                return{
                    ...prevValue,
                    [name]:value
                }
            })
        )
    }


  

    function onButtonclick(event){
        event.preventDefault();
        // if(obj.name.lenght>0&&obj.content.lenght>0)?props.onClick(obj):alert("all fields must be filled")
        // props.onClick(obj);
        // }

        {(obj.title!==""&&obj.content!=="")?props.onClick(obj):alert("all fields must be filled")}

        setObj({
            title: "",
            content: ""
          });


    }

    return (
      <div>
        <form>
          <input name="title" placeholder="Title" onChange={handleChange} value={obj.title} />
          <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={obj.content}  />
          <button onClick={onButtonclick}>Add</button>
        </form>
      </div>
    );
  }

export default Create