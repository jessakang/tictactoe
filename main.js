// Need to create a simple game of Tic Tac Toe, where I can display a table on the browser and some form of alert when there is a winner or when there is a tie game.

// $(function() {
  var player = 1;
  var table = $('table');
  var messages = $('.messages');
  var turn = $('.turn');
  var counter = 0;
  displayNextPlayer(turn, player);

// Using a table instead of divs. May revert back if the CSS styling becomes too difficult.
// Create a function that when you click on the inner workings of the table, will change the cell in that table to whatever play indicator I've chosen.
// Check if there is a winner, if not, resume game and alternate player's turns.
  $('td').click(function() {
    td = $(this);
    var state = getState(td);
    // If the table's cells have not been clicked, the pattern is whatever the currentPlayer's pattern is.
    if (!state) {
      var pattern = currentPlayer(player);
      changeState(td, pattern);
      if (getWinner(table, pattern)) {
        swal({
          title: 'Player ' + player + ' wins.',
          text: 'You know nothing.',
          imageUrl: 'olly.jpg',
          imageWidth: 100,
          imageHeight: 100,
          confirmButtonColor: '#778899',
          confirmButtonText: "Let's play again." });
        // "You know nothing, Jon Snow., "Let's play again!")
        turn.html('');
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
    }
    counter ++;
    checkIfDraw();
  });

// Create a function so that when you click the reset button, the table is cleared and displays that the first turn goes to player 1.
  $('.reset').click(function() {
    player = 1;
    messages.html('');
    reset(table);
    displayNextPlayer(turn, player);
  });

// });

// Create a function so that I'm only checking if there's a winner when there's something in the table's cells.
function getState(td) {
  if (td.hasClass('cross') || td.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

// Create a function so that when there is a pattern on the table, it should be added to the table's cell's properties. Cannot change your answer once you click... unfortunately.
function changeState(td, pattern) {
  return td.addClass(pattern);
}

// Player 1 needs to have a certain marker as does Player 2.
function currentPlayer(player) {
  if (player === 1) {
    return 'cross';
  } else {
    return 'circle';
  }
}

// Create a function that will let the user know who the next player is.
function setNextPlayer(player) {
  if (player === 1) {
    return player = 2;
  } else {
    return player = 1;
  }

}

// Create a function that will display who is the next player.
function displayNextPlayer(turn, player) {
  turn.html('Player turn : ' + player);
}

// Create a function to check for the winners. This is a long way of doing it but it makes sense to me right now in terms of visualization. Could do an array also... Hmm.
function getWinner(table, pattern) {
  var won = 0;
  if (table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  } return won;
}
// Create a function to check to see if the game if a tie game. Once the counter === 9, we know there are no more boxes to fill, and no winner has been alerted meaning it's a tie game.
function checkIfDraw() {
  if (counter === 9 ) {
    swal({
      title: "You both know nothing...",
      text: 'Tie Game!',
      type: "success",
      confirmButtonText: "Let's play again." });
    }
  }


// Create a function for the reset button that will remove all classes from the table using the this  (td) tag.
function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('circle').removeClass('cross');
    counter = 0;
  });
  }
