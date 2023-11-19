//Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function numberAverage(masiv) {
    const numbers = masiv.filter(elem => typeof elem === 'number');
  
    if (numbers.length === 0) {
      return "There are no numbers in the array.";
    }

    const amount = numbers.reduce((acc, current) => acc + current, 0);   const average = amount / numbers.length;
    return average;
  }

       const masiv = [1, 'two', 3, 'four', 5];
       const average = numberAverage(masiv);
       console.log("The average:", average);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, simbol, y) {
    let result;
  
    switch (simbol) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      case '%':
        result = x % y;
        break;
      case '^':
        result = Math.pow(x, y);
        break;
      default:
        return "Invalid operation signal.";
    }
  
    return result;
  }
  
  const x = parseFloat(prompt("Please enter the first number:"));
  const simbol = prompt("Please enter the operation simbol (+, -, *, /, %, ^):");
  const y = parseFloat(prompt("Please enter the second number:"));
  const result = doMath(x, simbol, y);
  console.log("The result:", result);

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fillArrayWithUserInput() {
  let rows = parseInt(prompt("Enter the number of rows:"));
  let cols = parseInt(prompt("Enter the number of columns:"));
  let twoDArray = [];
  
for (let i = 0; i < rows; i++) {

  let rowArray = [];

for (let j = 0; j < cols; j++) {

  let value = prompt("Enter the value for element at position (" + i + ", " + j + "):");

 rowArray.push(parseFloat(value));
      }

      twoDArray.push(rowArray);
  }

  return twoDArray;
}

var userArray = fillArrayWithUserInput();
console.log(userArray);


//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeCharsFromString(inputString, charsToRemove) {
  let stringArray = inputString.split('');

  let filteredArray = stringArray.filter(function (char) {
    return charsToRemove.indexOf(char) === -1;
 });

  let resultString = filteredArray.join('');
       return resultString;
}

let inputString = "hello world";
let charsToRemove = ['l', 'd'];
let result = removeCharsFromString(inputString, charsToRemove);
console.log(result); 

