const questions = [
    {
        question: "В каком году боевая техника стала играть все более решающую роль в исходе Второй мировой войны?",
        answers: [
            "1939",
            "1941",
            "1943",
            "1945"
        ],
        correctAnswer: "1943"
    },
    {
        question: "Какие новые модели танков были созданы в 1945 году?",
        answers: [
            "PzKpfw III и IV",
            "Т-34 и КВ-1",
            "Tiger II и ИС-3",
            "M4 Sherman и Churchill"
        ],
        correctAnswer: "Tiger II и ИС-3"
    },
    {
        question: "Какие реактивные самолеты были выпущены в 1945 году?",
        answers: [
            "Heinkel He 111 и Junkers Ju 88",
            "Як-1 и ЛаГГ-3",
            "Me 262, B-47 и B-52",
            "Ил-2 и Pe-2"
        ],
        correctAnswer: "Me 262, B-47 и B-52"
    },
    {
        question: "Какие новые модели кораблей были созданы на море в 1945 году?",
        answers: [
            "HMS Hood и Bismarck",
            "USS Arizona и IJN Yamato",
            "USS Midway и Musashi",
            "HMS Vanguard и IJN Shinano"
        ],
        correctAnswer: "HMS Vanguard и IJN Shinano"
    },
    {
        question: "Когда был разработан первый ядерный боеприпас?",
        answers: [
            "1941",
            "1943",
            "1945",
            "1947"
        ],
        correctAnswer: "1945"
    },
    {
        question: "Какие бомбардировщики использовала Германия во время Второй мировой войны?",
        answers: [
            "Heinkel He 111 и Junkers Ju 88",
            "Me 262 и B-47",
            "B-52 и F-4 Phantom II",
            "Fw 190 и Messerschmitt Me 163"
        ],
        correctAnswer: "Heinkel He 111 и Junkers Ju 88"
    },
    {
        question: "Какие танки использовала Германия в основном во время Второй мировой войны?",
        answers: [
            "PzKpfw III и IV",
            "Т-34 и КВ-1",
            "Tiger I и Panther",
            "M4 Sherman и Churchill"
        ],
        correctAnswer: "Tiger I и Panther"
    },
    {
        question: "Какие истребители использовала СССР во время Второй мировой войны?",
        answers: [
            "Me 262 и Fw 190",
            "Як-1 и ЛаГГ-3",
            "B-52 и F-4 Phantom II",
            "Spitfire и Hurricane"
        ],
        correctAnswer: "Як-1 и ЛаГГ-3"
    },
    {
        question: "Какая пехотная техника была основной во время Второй мировой войны?",
        answers: [
            "Танки",
            "Авиация",
            "Тяжелые пулеметы и минометы",
            "Ракеты и снаряды"
        ],
        correctAnswer: "Тяжелые пулеметы и минометы"
    },
    {
        question: "Какие новые модели кораблей были созданы в 1945 году?",
        answers: [
            "Авианосцы B-47 и B-52",
            "Линкор USS Midway и японский авианосец",
            "Танки Tiger II и ИС-3",
            "Реактивные самолеты Me 262 и Ил-2"
        ],
        correctAnswer: "Линкор USS Midway и японский авианосец"
    },
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = questions[currentQuestion].question;
for (let i = 0; i < 4; i++) {
    document.getElementById("answer" + (i + 1)).value = questions[currentQuestion].answers[i];
    document.getElementById("label" + (i + 1)).innerHTML = questions[currentQuestion].answers[i];
}

document.getElementById("submit").addEventListener("click", function () {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Выберите вариант ответа");
        return;
    }
    if (selectedOption.value === questions[currentQuestion].correctAnswer) {
        score++;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion === questions.length) {
        document.getElementById("header").innerHTML = "ВИКТОРИНА УСПЕШНО ПРОЙДЕНА!";
        document.getElementById("header").style.fontSize = "6vw";
        document.getElementById("header").style.fontWeight = "600";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "ВАШ РЕЗУЛЬТАТ: " + score + "/" + questions.length;
        document.querySelector('form').style.display = "none";
        document.getElementById('question').style.display = "none";
        return;
    }
    if (score < 4){
        document.getElementById("result").style.color = "red";
    }
    else if(score < 9){
        document.getElementById("result").style.color = "yellow";
    }
    else{
        document.getElementById("result").style.color = "green";
    }
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + (i + 1)).value = questions[currentQuestion].answers[i];
        document.getElementById("label" + (i + 1)).innerHTML = questions[currentQuestion].answers[i];
    }
});

var prevScrollpos = window.pageYOffset;
var navBtn = document.getElementById("pathfinder")

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("pathfinder").style.top = "0";
    document.getElementById("pathfinder").style.transition = "0.5s";
  } else {
    document.getElementById("pathfinder").style.top = "-10vw";
    document.getElementById("pathfinder").style.transition = "0.5s";
  }
  prevScrollpos = currentScrollPos;
}



navBtn.addEventListener('click', function() {
    document.getElementById("pathfinder").style.display = "none"; 
    document.getElementById("pathfinder").style.transition = "0.5s";
    setTimeout(ok, 500)  
});

function ok(){
    document.getElementById("pathfinder").style.display = "flex"; 
    document.getElementById("pathfinder").style.top = "-10vw";
    document.getElementById("pathfinder").style.transition = "0.5s";
}
