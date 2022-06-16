import React from 'react';

const Cell = (props) => {

  return(


      <td className="cell" id={props.x + "-" + props.y} onClick = {e => {
        let x = Number(e.currentTarget.id.split('-')[0]); //col index;
        let y = Number(e.currentTarget.id.split('-')[1]); //row index;
        props.makeMove1(x, props.curBoard);


      } }>
        {props.curBoard[props.y][props.x]}

      </td>
    )

}



export default Cell;