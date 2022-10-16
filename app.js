let playername = "";
let inputname = document.querySelector(".input-name");
const mainwrapper = document.querySelector(".main-wrapper");
emailjs.init("2LstEhvjCNJSwk2H-");
let attendedquestionscount = 1;
let score = 0;
let questions = [
  {
    question: "Who created Java programming language?",
    image:
      "https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg?auto=webp&quality=85,70",
    options: [
      "James Gosling",
      "Richard Stallman",
      "Guido Van Rossum",
      "Bjarne Stroustrup",
    ],
    answer: "James Gosling",
  },
  {
    question:
      "Which protocol is used to identify the hardware address of a local device?",
    image: "https://devqa.io/assets/images/networking-protocol-basics.png",
    options: [
      "Address Resolution Protocol",
      "Media Access Protocol",
      "Simple Address Transfer Protocol",
      "Tranmission Control Protocol",
    ],
    answer: "Address Resolution Protocol",
  },
  {
    question: "Twitter is an example of what service?",
    image: "https://www.punekarnews.in/wp-content/uploads/2021/03/Twitter.jpg",
    options: ["Blog", "Micro Blog", "Forum", "Gallery"],
    answer: "Micro Blog",
  },
  {
    question: "Who is the father of World Wide Web(WWW)?",
    image:
      "https://cdn.britannica.com/73/78373-050-2D15D41C/Tim-Berners-Lee.jpg",
    options: [
      "Dennis Ritchie",
      "John Mccarthy",
      "Michael Dell",
      "Tim Berners Lee",
    ],
    answer: "Tim Berners Lee",
  },
  {
    question: " When was the term Social Networking first used?",
    image:
      "https://clockwise.software/img/blog/how-to-build-a-social-network-website/header-background.png",
    options: ["1960", "1954", "1980", "2000"],
    answer: "1954",
  },
  {
    question: "Which is known as the programming language of Web?",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg",
    options: ["Java", "PHP", "Javascript", "Python"],
    answer: "Javascript",
  },
  {
    question: "What do you call a single point on a computer screen?",
    image: "https://i.ytimg.com/vi/AjFXlj0WmRs/maxresdefault.jpg",
    options: ["Pixel", "Density", "Vertex", "Resolution"],
    answer: "Pixel",
  },
  {
    question:
      "What is part of a database that holds only one type of information?",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777046/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png",
    options: ["Report", "Record", "Field", "File"],
    answer: "Field",
  },
  {
    question: "A folder in windows cannot be made with the name",
    image: "https://www.wintips.org/wp-content/uploads/2017/12/image-15.png",
    options: ["can", "con", "tmp", "mak"],
    answer: "con",
  },
  {
    question: "What is SATA?",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eHDirt42Dr80zExM3EF6boFfXNA9dbV2lg&usqp=CAU",
    options: ["Storage Device", "Virus", "Anti-Virus", "Hard Drive Interface"],
    answer: "Hard Drive Interface",
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
  let timelimit = 15;

  let timer = document.createElement("span");
  timer.innerText = `Time Left: ${timelimit}`;
  questioncontainer.appendChild(timer);

  let timerinterval = setInterval(() => {
    timelimit--;
    timer.innerText = `Time Left: ${timelimit}`;

    if (timelimit == 0) {
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
