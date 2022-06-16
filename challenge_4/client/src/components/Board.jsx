import React from 'react';
import Row from './Row.jsx'

const Board = (props) => {

  return(
    <div>
      <table>
        <tbody>
          <Row y={0} makeMove = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
          <Row y={1} makeMove = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
          <Row y={2} makeMove = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
          <Row y={3} makeMove = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
          <Row y={4} makeMove = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
          <Row y={5} makeMove = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>



        </tbody>
      </table>
    </div>

  )

}


export default Board;