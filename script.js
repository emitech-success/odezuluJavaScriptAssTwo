//Assignment two
function createChessBoard(number) {
  //declaration
  // let number = 8;
  let chessBoard = '';
  for (let index = 0; index < number; index++) {
    for (let x = 0; x < number; x++) {
      if ((x + index) % 2 == 0){
        chessBoard += " ";
      }
      else{
        chessBoard += "#";
      }
    }
    //create new line 
    chessBoard += `\n`;
  }
  //print the chessboard to console
  console.log(chessBoard);
}
createChessBoard();
