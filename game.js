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


  var $one = $(one).css( "background-color")
  var $two = $(two).css( "background-color")
  var $three = $(two).css( "background-color")
  var $four = $(two).css( "background-color")
  var $five = $(two).css( "background-color")
  var $six = $(two).css( "background-color")
  var $seven = $(two).css( "background-color")
  var $eight = $(two).css( "background-color")
  var $nine = $(two).css( "background-color")


  console.log($one)
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
    console.log('In Progress')
  }else{
    // The game has ended
    console.log('Tie-Game')
  }
})
