var allSquares = [];
var board = []
var $boxOne;
var $boxTwo;
var $boxThree;
var $boxFour;
var $boxFive;
var $boxSix;
var $boxSeven;
var $boxEight;
var $boxNine;

$(document).on('ready', function(){
  console.log('READY!')
  var one = document.getElementById(1);
  var two = document.getElementById(2);
  var three = document.getElementById(3);
  var four = document.getElementById(4);
  var five = document.getElementById(5);
  var six = document.getElementById(6);
  var seven = document.getElementById(7);
  var eight = document.getElementById(8);
  var nine = document.getElementById(9);

  allSquares.push(one,two,three,four,five,six,seven,eight,nine);

  $one = $(one).css( "background-color")
  $two = $(two).css( "background-color")
  $three = $(two).css( "background-color")
  $four = $(two).css( "background-color")
  $five = $(two).css( "background-color")
  $six = $(two).css( "background-color")
  $seven = $(two).css( "background-color")
  $eight = $(two).css( "background-color")
  $nine = $(two).css( "background-color")

  inProgress()
})

//Checks whoes turn it is
function whoesTurn(){
  board = []
  for(var i = 0; i < allSquares.length; i++){
    if($(allSquares[i]).attr('value') == 'true'){
      board.push($(allSquares[i]).attr('value'))
    }
  }
    if (board.length >= 1 ){
      if(board.length % 2){
        board = []
        return "X"
      }else{
        board = []
        return "O"
      }
    }
}

function inProgress(){
  board = []

  for(var i = 0; i < allSquares.length; i++){
    if($(allSquares[i]).attr('value') == 'true'){
      board.push($(allSquares[i]).attr('value'))
    }
  }

  if( board.length >= 1 ){
      $('.gameboard').on('click', function(){
      var $that = $(this)

      if( $that.attr('value') == 'true' ){
          if( whoesTurn() == "X"){
            $that.attr('value', false)
            $that.css('background-color', "black")
          }else{
            $that.attr('value', false)
            $that.css('background-color', "red")
          }
      }else{
          console.log("This Spot is taken !!!!")
      }
    })
  }
}
