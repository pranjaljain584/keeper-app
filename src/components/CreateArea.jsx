import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isClicked , setZoom] = useState(false) ;

  function handleClick(){
    setZoom(true) ;
  }

  return (
    <div>
      <form onSubmit={props.onAddition} className="create-note">

        { isClicked && <input 
        onChange={props.onChanged} 
        name="title" 
        placeholder="Title" 
        value={props.noteEle.title} 
        />}

        <textarea 
        onClick={handleClick}
        onChange={props.onChanged} 
        name="content" 
        placeholder="Take a note..." 
        rows={isClicked ? "3" : "1"} 
        value={props.noteEle.content} 
        />

        <Zoom in={isClicked ? true : false}>
          <Fab type="submit" >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
