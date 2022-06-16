import React from 'react';
import Cell from './Cell.jsx';

const Row = (props) => {
  return (
    <tr className="row">
      <Cell x={0} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
      <Cell x={1} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
      <Cell x={2} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
      <Cell x={3} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
      <Cell x={4} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
      <Cell x={5} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
      <Cell x={6} y={props.y} makeMove1 = {props.makeMove} currentPlayer= {props.currentPlayer} curBoard={props.curBoard}/>
    </tr>




  )
}

export default Row;