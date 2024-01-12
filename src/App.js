import Square from './Square.js';
import {useState} from 'react';

export default function Board() {
  const [moveNumber, setMoveNumber] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i){
    console.log(moveNumber);
    
    const nextSquares = squares.slice(); 
    if(nextSquares[i] === null && moveNumber % 2 === 0){
      nextSquares[i] = "X";
      setMoveNumber(moveNumber+1);
    }else if(nextSquares[i] === null && moveNumber % 2 === 1){
      nextSquares[i] = "O";
      setMoveNumber(moveNumber+1);
    }
    setSquares(nextSquares);
    setTimeout(checkWinner(nextSquares, i), 1000);
    
}
function checkWinner(board, boxClicked) {
    function alertWinner() {
      if(!alert(board[boxClicked] + ' is the winner!')){window.location.reload();}
    }
    if((board[0] != null && board[0] === board[1] && board[1] === board[2]) ||
       (board[0] != null && board[0] === board[3] && board[3] === board[6]) ||
       (board[0] != null && board[0] === board[4] && board[4] === board[8])){
        alertWinner();
       }else if((board[2] != null && board[2] === board[5] && board[5] === board[8]) ||
       (board[2] != null && board[2] === board[4] && board[4] === board[6])){
        alertWinner();
       }else if((board[1] != null && board[1] === board[4] && board[4] === board[7]) ||
       (board[3] != null && board[3] === board[4] && board[4] === board[5]) ||
       (board[6] != null && board[6] === board[7] && board[7] === board[8])){
        alertWinner();
       }
    
    console.log(board[boxClicked]);
  
}
  return(
    <main>
      <div className="board-row">
        <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square  value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square  value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square  value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square  value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square  value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </main>
  ); 

  
}