import React from "react"
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Create from "./Create";
// import notes from "./notes";

function App(){

    const [note,setNote]=React.useState([])
    const [obj,setObj]=React.useState({
        title:"",
        content:""
    })

    function addNote(noteObj){
        setNote(prevObjs=>{
            return [...prevObjs, noteObj];
        })
    }

// the below function is useless

    // function updateObj(noteObj){
    //     setObj(noteObj);
    //     addNote(noteObj)
    //     // obj.title="";
    //     // obj.content="";
    // }


    function deleteObj(idx){
        // console.log("delete has been called on ",idx)
        setNote((prevObjs)=>{
            return prevObjs.filter((item,index)=>{
                return index!==idx;
            })
        })
    }

    return(
        <div>
        <Header/>
        <Create 
            // onClick={updateObj}
            onClick={addNote}
            title={obj.title}
            content={obj.content}
        />
       {note.map(function(x,index){
            return(
                <Note 
                title={x.title} 
                msg={x.content} 
                del={deleteObj} 
                idx={index}
                />
            )
        })}
        <Footer/>
        </div>
    ) 
}

export default App


//    { {notes.map(function (x){
//             return (
//                 <notes title={x.title} msg={x.content} key={x.key}/>
//             )
//         })} }