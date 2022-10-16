let playername = "";
let inputname = document.querySelector(".input-name");
const mainwrapper = document.querySelector(".main-wrapper");
emailjs.init("2LstEhvjCNJSwk2H-");
let attendedquestionscount = 1;
let score = 0;
let questions = [
  {
    question: "Which country has most frog?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/World_Map_%28political%29.svg",
    options: [
      "brazil",
      "salethur",
      "china",
      "japan",
    ],
    answer: "salethur",
  },
  {
    question:
      "how many lies kappe told so far?",
    image: "https://i1.wp.com/crunchynihongo.com/images/easy-japanese-faq/vocab-10256-counting.jpg?w=810",
    options: [
      "1",
      "Never in his life",
      "All his life",
      "Infinity",
    ],
    answer: "Infinity",
  },
  {
    question: "which is the oldest loops?",
    image: "https://www.loopreturns.com/wp-content/uploads/2022/05/loop_logo_whitebg.png",
    options: ["Frog", "For", "While", "Do-while"],
    answer: "Frog",
  },
  {
    question: "Who is the father of frequency?",
    image:
      "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A0a6eb6ba678b209ac1c05e4f124bf965b59024c1ee34d7373af48a46%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1",
    options: [
      "Kappe shastry",
      "Lotte shastry",
      "Rails shastry",
      "All the above",
    ],
    answer: "All the above",
  },
  {
    question: " What does kappe wanna become?",
    image:
      "https://assets.website-files.com/5ef5c908f55bc9b2c48a5cc2/6107e9940ff5a313403c82fc_goal-setting-1955806_1920.png",
    options: ["Hacker", "Drone expert", "Tech support", "Script writer"],
    answer: "Hacker",
  },
  {
    question: "wlhich language does kappe know?",
    image:
      "https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg",
    options: ["Java", "C#", "Javascript", "Python"],
    answer: "C#",
  },
  {
    question: "Name the vehicle of kappe?",
    image: "https://www.indiafilings.com/learn/wp-content/uploads/2018/11/Karnataka-Vehicle-Tax.jpg",
    options: ["Pluser", "Duke", "KTM", "Poop Engine"],
    answer: "Poop Engine",
  },
  {
    question:
      "Hobby of kappe?",
    image:
      "https://image.shutterstock.com/image-vector/hobbies-entertainment-concept-large-inscription-260nw-2136659695.jpg",
    options: ["Telling lie", "Frequency setting", "Hacking", "All the above"],
    answer: "Field",
  },
  {
    question: "Kappe's best friend",
    image: "https://thumbs.dreamstime.com/b/best-friends-friendship-day-hand-lettering-phrase-best-friends-friendship-day-hand-lettering-phrase-girls-friend-greeting-card-251030991.jpg",
    options: ["Shiva", "Kishor", "Another kappe", "Vignesh"],
    answer: "Kishor",
  },
  {
    question: "Origin of kappe  ?",
    image:
      "https://www.diskpart.com/screenshot/en/others/others/origin.png",
    options: ["Salethur", "Puttur", "Kabaka", "Unknown"],
    answer: "Unknown",
  },
];
const startbutton = document.querySelector(".btn-start");
startbutton.addEventListener("click", (e) => {
  e.preventDefault();
  playername = inputname.value;
  document.body.style.backgroundImage = "none";
  changeQuestion(questions[0], 0);
});
const changeQuestion = (q, index) => {
  if (document.querySelector(".question-container")) {
    document.querySelector(".question-container").remove();
  }
  let currentquestion = q;
  let questionindex = index;
  let checkedoption;
  let correctansweroption;
  let questionattended = false;
  let questioncontainer = document.createElement("div");
  questioncontainer.classList.add("container", "question-container");
  mainwrapper.style.display = "none";
  let question = document.createElement("p");
  question.innerText = currentquestion.question;
  questioncontainer.appendChild(question);
  let questionimage = document.createElement("img");
  questionimage.src = currentquestion.image;
  questionimage.classList.add("question-image");
  questioncontainer.appendChild(questionimage);
  let progressbar = document.createElement("p");
  progressbar.innerText = attendedquestionscount + "/10";
  questioncontainer.appendChild(progressbar);
  let timermax = 15;
  let timer = document.createElement("span");
  timer.innerText = `Time Left: ${timermax}`;
  questioncontainer.appendChild(timer);
  let timerinterval = setInterval(() => {
    timermax--;
    timer.innerText = `Time Left: ${timermax}`;
    if (timermax == 0) {
      attendedquestionscount++;
      if (questionindex == 9) {
        displayScore(playername, score);
      } else {
        changeQuestion(questions[questionindex + 1], questionindex + 1);
      }
    }
  }, 1000);
  let optionscontainer = document.createElement("div");
  optionscontainer.classList.add("options-container");
  let optionsform = document.createElement("form");
  optionsform.classList.add("options-form");
  currentquestion.options.forEach((optiontext, index) => {
    let option = document.createElement("div");
    option.classList.add("option");
    let input = document.createElement("input");
    input.type = "radio";
    input.id = "option" + (index + 1);
    input.name = "checkname";
    let label = document.createElement("label");
    label.innerText = optiontext;
    option.appendChild(input);
    option.appendChild(label);
    option.addEventListener("click", () => {
      checkedoption = option;
      document.querySelectorAll(".option").forEach((optionitem) => {
        if (optionitem == option && !optionitem.firstChild.checked) {
          optionitem.firstChild.checked = true;
        }
      });
    });
    if (optiontext === currentquestion.answer) correctansweroption = option;
    optionsform.appendChild(option);
  });
  let btnanswer = document.createElement("button");
  btnanswer.classList.add("btn");
  btnanswer.classList.add("btn-answer");
  btnanswer.innerText = questionindex == 9 ? "FINISH" : "SUBMIT";
  btnanswer.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(timerinterval);
    if (btnanswer.innerText === "NEXT") {
      attendedquestionscount++;
      progressbar.innerText = attendedquestionscount + "/10";
      changeQuestion(questions[questionindex + 1], questionindex + 1);
    } else {
      document.querySelectorAll("option").forEach((option) => {
        option.firstChild.disabled = true;
      });
      if (!questionattended) {
        if (!checkedoption) return;
        document.querySelectorAll(".option input").forEach((optioninput) => {
          optioninput.disabled = true;
        });
        btnanswer.innerText = questionindex == 9 ? "FINISH" : "NEXT";
        if (checkedoption.innerText === currentquestion.answer) {
          score++;
          checkedoption.style.color = "white";
          checkedoption.firstChild.checked = false;
          checkedoption.style.backgroundColor = "green";
        } else {
          checkedoption.style.backgroundColor = "red";
          checkedoption.firstChild.checked = false;
          checkedoption.style.color = "white";
          correctansweroption.style.color = "white";
          correctansweroption.style.backgroundColor = "green";
        }
      }
      if (questionindex == 9) {
        displayScore(playername, score);
      }
    }
    questionattended = true;
  });
  optionsform.appendChild(btnanswer);
  optionscontainer.appendChild(optionsform);
  questioncontainer.appendChild(optionscontainer);
  document.body.appendChild(questioncontainer);
};
const displayScore = (playername, score) => {
  emailjs.send("service_2exblmo", "template_8pkay8x", {
    message: `Name: ${playername}, Score: ${score}`,
  });
  const questioncontainer = document.querySelector(".question-container");
  if (questioncontainer) questioncontainer.remove();
  const resultscontainer = document.createElement("div");
  resultscontainer.classList.add("container", "results-container");
  const congratstext = document.createElement("h2");
  if (score >= 7)
    congratstext.innerText = `Congratulations :D ${playername} !!`;
  else if (score >= 5) congratstext.innerText = `That's good, ${playername} !!`;
  else if (score >= 3) congratstext.innerText = `Not too bad, ${playername}`;
  else congratstext.innerText = `Better luck next time :(, ${playername} `;
  resultscontainer.appendChild(congratstext);
  const scoretext = document.createElement("span");
  scoretext.innerText = "Your score is";
  const scorevalue = document.createElement("span");
  scorevalue.innerText = `${score}/10`;
  resultscontainer.appendChild(scoretext);
  resultscontainer.appendChild(scorevalue);
  const finishbtn = document.createElement("button");
  finishbtn.innerText = "FINISH";
  finishbtn.classList.add("btn", "btn-finish");
  finishbtn.addEventListener("click", () => {
    window.location.reload();
  });
  resultscontainer.appendChild(finishbtn);
  document.body.appendChild(resultscontainer);
};
