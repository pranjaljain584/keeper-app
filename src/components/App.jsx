import React, { useState } from "react" ;
import Header from './Header';
import Footer from './Footer' ;
import Note from './Note' ;
import CreateArea from "./CreateArea";


function App(){

    const [note , setNote] = useState({
        title: "",
        content: "" 
    }) ;

    const [notesArr , setNotes ] = useState([]) ;

    function handleChange(event){
        const {name,value} = event.target ;

        setNote( prevValue => {
            return {
                ...prevValue,
                [name] : value
            } ;
        }) ;

    }

    function addNote(event){
      event.preventDefault() ;
      setNotes( prevNotes => {
        return [...prevNotes , note]
      });

      setNote({
        title:"",
        content:""
      }) ;
      
    }

    function deleteNote(id){

        setNotes( prevNotes => {
            return prevNotes.filter( (item , idx)=>{
                return idx !== id ;
            });
        });

    }

    return (
        <div>
            <Header />
            <CreateArea 
            onChanged = {handleChange}
            onAddition = {addNote}
            noteEle = {note}
            />
            {notesArr.map( (iNote , index) => (
                <Note 
                key={index} 
                id={index}
                title={iNote.title}
                content={iNote.content}
                onDeletion={deleteNote}
                />
            ))}
            <Footer />
        </div>
    )
}

export default App;