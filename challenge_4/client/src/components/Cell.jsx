import React from 'react';

const Cell = (props) => {

  return(


      <td className="cell" id={props.x + "-" + props.y} onClick = {e => {
        let x = Number(e.currentTarget.id.split('-')[0]);
        let y = Number(e.currentTarget.id.split('-')[1]);
        props.makeMove1(x, props.curBoard);

      } }>
        {'r:' + props.y + ',' + 'c:' + props.x}

      </td>
    )

}



export default Cell;