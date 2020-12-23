import React , {useState} from "react";

function CreateArea(props) {
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
