var allSquares = [];
var board = []
var one
var two
var three
var four
var five
var six
var seven
var eight
var nine

$(document).on('ready', function(){
  console.log('READY!')
  one = document.getElementById(1);
  two = document.getElementById(2);
  three = document.getElementById(3);
  four = document.getElementById(4);
  five = document.getElementById(5);
  six = document.getElementById(6);
  seven = document.getElementById(7);
  eight = document.getElementById(8);
  nine = document.getElementById(9);

  allSquares.push(one,two,three,four,five,six,seven,eight,nine);
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

  if( board.length > 1 ){
      $('.gameboard').on('click', function(){
      var $that = $(this)

      if( $that.attr('value') == 'true' ){
          if( whoesTurn() == "X"){
            $that.attr('value', false)
            $that.attr('player', "x")
            $that.css('background-image',  'url("x.png")')
            $that.css('background-repeat', 'no-repeat')
            $that.css('background-size', '100% 100%')
          }else{
            $that.attr('value', false)
            $that.attr('player', "o")
            $that.css('background-image', 'url("o.png")')
            $that.css('background-repeat', 'no-repeat')
            $that.css('background-size', '100% 100%')
          }
          board = []

          for(var i = 0; i < allSquares.length; i++){
            if($(allSquares[i]).attr('value') == 'true'){
              board.push($(allSquares[i]).attr('value'))
            }
          }
      }else{
          console.log("This Spot is taken !!!!")
      }

      //Win Logic
      if ( board.length < 1){
        whoWon()
      }else{
        whoWon()
      }
    })
  }
}

function whoWon(){
        if($(one).attr('player') + $(two).attr('player') + $(three).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(one).attr('player') + $(two).attr('player') + $(three).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(four).attr('player') + $(five).attr('player') + $(six).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(four).attr('player') + $(five).attr('player') + $(six).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(seven).attr('player') + $(eight).attr('player') + $(nine).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(seven).attr('player') + $(eight).attr('player') + $(nine).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(one).attr('player') + $(four).attr('player') + $(seven).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(one).attr('player') + $(four).attr('player') + $(seven).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(two).attr('player') + $(five).attr('player') + $(eight).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(two).attr('player') + $(five).attr('player') + $(eight).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(three).attr('player') + $(six).attr('player') + $(nine).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(three).attr('player') + $(six).attr('player') + $(nine).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(one).attr('player') + $(five).attr('player') + $(nine).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }

        if($(one).attr('player') + $(five).attr('player') + $(nine).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }

        if($(three).attr('player') + $(five).attr('player') + $(seven).attr('player') === "xxx"){
          window.alert("X Won!!!")
        }
        if($(three).attr('player') + $(five).attr('player') + $(seven).attr('player') === "ooo"){
          window.alert("O Won!!!")
        }


      }
