import React , {useState} from "react";

function CreateArea(props) {
    
    // const [note , setNote] = useState({
    //     title: "",
    //     content: "" 
    // }) ;

    // const [notesArr , setNotes ] = useState([]) ;

    // function handleChange(event){
    //     const {name,value} = event.target ;

    //     setNote( prevValue => {
    //         return {
    //             ...prevValue,
    //             [name] : value
    //         } ;
    //     }) ;

    // }

    // function addNote(event){
    //   event.preventDefault() ;
    //   setNotes( prevNotes => {
    //     return [...prevNotes , note]
    //   });

    //   setNote({
    //     title:"",
    //     content:""
    //   }) ;
      
    // }
    // console.log("arr",notesArr) ;

  return (
    <div>
      <form onSubmit={props.onAddition}>
        <input onChange={props.onChanged} name="title" placeholder="Title" value={props.noteEle.title} />
        <textarea onChange={props.onChanged} name="content" placeholder="Take a note..." rows="3" value={props.noteEle.content} />
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
