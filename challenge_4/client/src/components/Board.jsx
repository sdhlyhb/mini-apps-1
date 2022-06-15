import React from 'react';
import Row from './Row.jsx'

const Board = (props) => {

  return(
    <div>
      <table>
        <tbody>
          <Row y={0} />
          <Row y={1} />
          <Row y={2} />
          <Row y={3} />
          <Row y={4} />
          <Row y={5} />



        </tbody>
      </table>
    </div>

  )

}


export default Board;