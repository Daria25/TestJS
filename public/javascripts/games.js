
/**
 * Created by Vitaly on 21.08.2017.
 */
//Выбираем случайное слово
var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
var remainingLetters = word.length;
// Программируем игровой цикл
while (remainingLetters > 0) {
    //Отображение состояния игрока
    alert(answerArray.join(" "));
    // Обработка введенного ответа
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Введите только одну букву");
    } else {
        // Обновляем состоянние игры
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Отлично! Было заданно слово " + word);
process.exit(0)
