import React from "react" ;
import Header from './Header';
import Footer from './Footer' ;
import Note from './Note' ;
import CreateArea from "./CreateArea";

function App(){
    return (
        <div>
            <Header />

            {/* {notes.map( (note) => {
                return (
                    <Note  
                      key={notes.key} 
                      title={note.title}
                      content={note.content} 
                    />
                )
            })} */}

            <CreateArea />
            <Note key={1} title="Note title" content="Note content" />

            <Footer />
        </div>
    )
}

export default App;