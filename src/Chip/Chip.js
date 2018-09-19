import React from 'react';
import './Chip.css';

const chip=(props) => {

	const style={
		"borderBottom":"1px solid #404040",
		"paddingBottom": "4px"
	}

   return <div className="chip" onClick={props.click} >
    <button style={{"backgroundColor":props.color}} className="dot" onClick={props.delete}></button>
   	<span className="speed">{props.speed} HZ</span>
   	<span style={style} className="name">{props.name}</span>
   	<input className="type" onChange={props.changeSpeed} defaultValue={props.speed}/>
   </div>;
}

export default chip;

