var allSquares = [];

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

  var $one = $(one).css( "background-color")
  var $two = $(two).css( "background-color")
  var $three = $(two).css( "background-color")
  var $four = $(two).css( "background-color")
  var $five = $(two).css( "background-color")
  var $six = $(two).css( "background-color")
  var $seven = $(two).css( "background-color")
  var $eight = $(two).css( "background-color")
  var $nine = $(two).css( "background-color")


  // In Progress
  if($one  === 'rgb(217, 217, 217)' ||
     $two  === 'rgb(217, 217, 217)' ||
     $three  === 'rgb(217, 217, 217)' ||
     $four  === 'rgb(217, 217, 217)' ||
     $five  === 'rgb(217, 217, 217)' ||
     $six  === 'rgb(217, 217, 217)' ||
     $seven  === 'rgb(217, 217, 217)' ||
     $eight  === 'rgb(217, 217, 217)' ||
     $nine  === 'rgb(217, 217, 217)'
    ){
      $('.gameboard').on('click', function(){
      var $that = $(this)

      if( whoesTurn() == "X"){
        $that.attr('value', false)
        $that.css('background-color', "black")

      }else{
        $that.attr('value', false)
        $that.css('background-color', "red")
      }
    })
  }else{
    // The game has ended
    console.log('Tie-Game')
  }
})

//Checks whoes turn it is
function whoesTurn(){
  var board = []
  console.log("WHO TURN")
  for(var i = 0; i < allSquares.length; i++){
    if($(allSquares[i]).attr('value') == 'true'){
      board.push($(allSquares[i]).attr('value'))
    }
  }
  if(board.length % 2){
    return "X"
  }else{
    return "O"
  }
}


//Place player on the board
function placePlayer(){

}
