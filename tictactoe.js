var count = 0;
var xWins = 0;
var oWins = 0;
var winner = false;
var check;

function checkBoard(x){
  var row1 = x[0] + x[1] + x[2];
  var row2 = x[3] + x[4] + x[5];
  var row3 = x[6] + x[7] + x[8];
  var col1 = x[0] + x[3] + x[6];
  var col2 = x[1] + x[4] + x[7];
  var col3 = x[2] + x[5] + x[8];
  var dia1 = x[2] + x[4] + x[6];
  var dia2 = x[0] + x[4] + x[8];

  if(row1 === "XXX" || row2 === "XXX" || row3 === "XXX" || col1 === "XXX" ||
     col2 === "XXX" || col3 === "XXX" || dia1 === "XXX" || dia2 === "XXX"){
      xWins += 1;
      winner = true;
      $('.x').text("X: " + xWins);
      $('.o').text("O: " + oWins);
      $('.reset').show();
      $('.winner').text("X wins this round!");
      $('.board').fadeOut(2000,function(){
        clearBoard();
        $('.winner').fadeIn(2000,function(){
          $('.winner').fadeOut(1000,function(){
            $('.board').fadeIn(1000);
          });
        });
      });
  }
  else if(row1 === "OOO" || row2 === "OOO" || row3 === "OOO" || col1 === "OOO"
       || col2 === "OOO" || col3 === "OOO" || dia1 === "OOO" || dia2 === "OOO"){
    oWins += 1;
    winner = true;
    $('.x').text("X: " + xWins);
    $('.o').text("O: " + oWins);
    $('.reset').show();
    $('.winner').text("O wins this round!");
    $('.board').fadeOut(2000,function(){
      clearBoard();
      $('.winner').fadeIn(2000,function(){
        $('.winner').fadeOut(1000,function(){
          $('.board').fadeIn(1000);
        });
      });
    });
  }
  else if(count === 8){
    winner = true;
    $('.x').text("X: " + xWins);
    $('.o').text("O: " + oWins);
    $('.reset').show();
    $('.winner').text("Aw man, it's a tie!");
    $('.board').fadeOut(2000,function(){
      clearBoard();
      $('.winner').fadeIn(2000,function(){
        $('.winner').fadeOut(1000,function(){
          $('.board').fadeIn(1000);
        });
      });
    });
  }
  else{count += 1;}
};

function clearBoard(){
  $('.box').text(" ");
  $('.clear').hide();
  $('.startover').hide();
  $('select').val("X");
  $('select').show();
  $('.player').show();
  check = $(':selected').val();
  count = 0;
  winner = false
};

function resetScore(){
  xWins = 0;
  oWins = 0;
  $('.x').text("X: 0");
  $('.o').text("O: 0");
  $('.reset').hide();
};

$(document).ready(function(){
  $('.box').text(" ");
  $('.clear').hide();
  $('.reset').hide();
  $('.winner').hide();
  $('.startover').hide();
  check = $(':selected').val();

  $('select').change(function(){
    check = $(':selected').val();
  });

  $('.box').click(function(){
    if($(this).text() === " " & winner === false){
      if(check ==="X"){
        $(this).text(check);
        $('.clear').show();
        $('.startover').show();
        $('select').hide();
        $('.player').hide();
        check = "O";
      }
      else{
        $(this).text(check);
        $('.clear').show();
        $('select').hide();
        check = "X";
      }
      var board = $('.box').text().split("");
      checkBoard(board);
    }
  });

  $('.clear').click(function(){
    clearBoard();
  });

  $('.reset').click(function(){
    resetScore();
    clearBoard();
  });
});
