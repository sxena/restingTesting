// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// *                                                                                      *
// *                                                                                      *
// *                   Counting Card Game BlackJack                                       *
// *                                                                                      *
// *                                                                                      *
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
// Count Change: +1; 	Cards: 2, 3, 4, 5, 6
// Count Change: 0;  	Cards: 7, 8, 9
// Count Change: -1; 	Cards: 10, 'J', 'Q', 'K', 'A'


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                                   1 WAY                                           *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

// var count = 0;
//
// function cc(card) {
//   if (card <= 6){
//     count++;
//   }else if (card == 7 || card == 8 || card == 9){
//     count = 0;
//   }else if(card == 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
//     count--;
//   }
//
//  if (count > 0){
//     return count + " " + "Bet";
//   }
//   else{
//     return count + " " + "Hold";
//   }
// }


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                                 2nd WAY                                           *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

// var count = 0;
//
// function cc(card) {
//   // var answer = ""
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count = +1;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count = -1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count = 0;
//       break;
//   }
//   if (count > 0) {
//     return count + " Bet";
//   }
//   else{
//     return count + " Hold";
//   }
//   // return answer;
// }


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                                  3d WAY                                           *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************


// LowValueCards = [2,3,4,5,6];
// NoValueCards = [7,8,9];
// HighValueCards = [10,"J","Q","K","A"];
//
// var count = 0;
//
// function cc(card){
//   if (LowValueCards.includes(card)){
//     count = +1;
//   }else if (NoValueCards.includes(card)){
//     count = 0;
//   }else if (HighValueCards.includes(card)){
//     count = -1;
//   }return count + (count > 0 ? " Bet" : " Hold");
// }


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                                 4th WAY                                           *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

var count = 0;

function cc(card) {
  // var answer = ""
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}




console.log(cc(2, 3, 4, 5, 6)); // 5 Bet
console.log(cc(7, 8, 9)); // 0 Hold
console.log(cc(10, "J", "Q", "K", "A")); // -5 Hold
console.log(cc(3, 7, "Q", 8, "A")); // -1 Hold
console.log(cc(2, "J", 9, 2, 7)); // 1 Bet
console.log(cc(2, 2, 10)); // 1 Bet
console.log(cc(3, 2, "A", 10, "K")); // -1 Hold


// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// *                                                                                      *
// *                                                                                      *
// *                          Golf Code                                                   *
// *                                                                                      *
// *                                                                                      *
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
if (strokes === 1){
  return names[0];
}else if (strokes <= par - 2){
  return names[1];
}else if (strokes <= par - 1){
  return names[2];
}else if (strokes === par){
  return names[3];
}else if (strokes <= par + 1){
  return names[4];
}else if (strokes <= par + 2){
  return names[5];
}else if (strokes >= par + 3){
  return names[6];
}else {
  return "Change Me";
}};

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));