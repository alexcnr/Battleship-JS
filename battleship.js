var randomLoc = Math.floor(Math.random() * 5); /*умножая случайное число на 5 получим числа от 0 до 5 не включая 5 до 4,999 и округлим их до целого*/
var location1 = randomLoc;   /*локации корабля 3-5 клетки*/
var location2 = location1 + 1;   
var location3 = location2 + 1;
var guess;   /*  куда выстрел пользователя   */
var hits = 0;     /*  переменная количества попаданий   */
var guesses = 0;     /*  переменная количества выстрелов   */
var isSunk = false;     /*  потоплен или нет   */

while (isSunk == false){
guess = prompt ('Ready, aim, fire! (enter a number from 0-6):');
if (guess < 0 || guess > 6) {
alert('Please enter a valid call number!');
} else{
guesses = guesses + 1; 

if (guess == location1 || guess == location2 || guess == location3){
    alert('HIT!');
   hits = hits + 1;
   if (hits == 3){
    isSunk = true;      
    alert('You sank my battleship! ');
   }    
}  else {
        alert('MISS!');     }
}
}

var stats = 'You took ' + guesses + ' ' + 'guesses to sink the battleship, ' + 'which means your shooting accuracy was ' + (3/guesses);
alert(stats);
