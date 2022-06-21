import React from 'react';

const Cell = (props) => {
  let curValue = props.curBoard[props.y][props.x];


  return(


      <td className="cell" id={props.x + "-" + props.y} onClick = {e => {
        let x = Number(e.currentTarget.id.split('-')[0]); //col index;
        let y = Number(e.currentTarget.id.split('-')[1]); //row index;
        props.makeMove1(x, props.curBoard);


      } }
      style={{ background: curValue === 2 ? "yellow" : curValue === 1 ? "red" : "lightblue" }}


      >
        {curValue}

      </td>
    )

}



export default Cell;