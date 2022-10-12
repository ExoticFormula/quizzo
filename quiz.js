let playername = "";
let inputname = document.querySelector(".input-name");
const mainwrapper = document.querySelector(".main-wrapper");
let attendedquestionscount = 1;
let score = 0;
let questions = [
  {
    question: "Which country does this flag belong to?",
    image: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg",
    options: ["Argentina", "India", "Bhutan", "Lebanon"],
    answer: "Argentina",
  },
  {
    question: "Who is the founder Of Microsoft?",
    image: "https://wallpaperaccess.com/full/833268.png",
    options: ["Alan Turing", "Sabeer Bhatia", "Jeff Bezoz", "Bill Gates"],
    answer: "Bill Gates",
  },
  {
    question: "What is the full form of USB?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/SanDisk-Cruzer-USB-4GB-ThumbDrive.jpg/1200px-SanDisk-Cruzer-USB-4GB-ThumbDrive.jpg",
    options: [
      "Uniform Serial Bus",
      "Universal Serial Bus",
      "Uniform State Bus",
      "Uniform Serial Buffer",
    ],
    answer: "Universal Serial Bus",
  },
  {
    question: "Which company built the first smartphone?",
    image: "https://simpletexting.com/wp-content/uploads/2020/04/ibm_simon.jpg",
    options: ["Google", "Samsung", "IBM", "Nokia"],
    answer: "IBM",
  },
  {
    question: "Which is the first ever web browser?",
    image:
      "https://msatechnosoft.in/blog/wp-content/uploads/2017/04/top-web-browsers-MSA-Technosoft.png",
    options: ["Nexus", "Mosaic", "Internet Explorer", "Mozilla"],
    answer: "Nexus",
  },
  {
    question: "First computer virus is known as",
    image:
      "https://www.lifewire.com/thmb/_twpha56FPU3mJIsTs6bS2Ytfrg=/1920x1200/filters:fill(auto,1)/what-is-a-computer-virus-a82f9491ad3644b89446d45233b57761.jpg",
    options: ["Rabbit", "Creeper Virus", "Elk Cloner", "SCA Virus"],
    answer: "Creeper Virus",
  },
  {
    question: "Computer Hard Disk was first introduced in 1956 by",
    image:
      "https://images.wondershare.com/recoverit/article/2019/06/hard-drive-plates.jpg",
    options: ["Dell", "IBM", "Apple", "Microsoft"],
    answer: "IBM",
  },
  {
    question: "Which protocol is used to receive e-mail?",
    image:
      "https://images.ctfassets.net/lzny33ho1g45/best-email-app-p-img/65fb438385539afec1566a61ffbf7668/best_email_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760",
    options: ["SMTP", "POP3", "HTTP", "FTP"],
    answer: "POP3",
  },
  {
    question: "Who is the founder Of Bluetooth?",
    image:
      "https://9to5mac.com/wp-content/uploads/sites/6/2017/02/bluetooth-logo-e1546276877986.png?w=1600",
    options: ["IBM", "Dell", "Apple", "Ericsson"],
    answer: "Ericsson",
  },
  {
    question: "Who is known as the father of indian Supercomputing?",
    image:
      "https://www.tata.com/content/dam/tata/images/newsroom/heritage/desktop/eka_banner_desktop_1920x1080.jpg",
    options: [
      "Ragunath Mashelkar",
      "Vijay Bhatkar",
      "Jayant",
      "Nandan Nilekani",
    ],
    answer: "Vijay Bhatkar",
  },
];
const startbutton = document.querySelector(".btn-start");
startbutton.addEventListener("click", (e) => {
  e.preventDefault();
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
  questioncontainer.classList.add("question-container");
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
    input.name = "check-substitution-2";
    let label = document.createElement("label");
    label.innerText = optiontext;
    option.appendChild(input);
    option.appendChild(label);
    option.addEventListener("click", () => {
      checkedoption = option;
    });
    if (optiontext === currentquestion.answer) correctansweroption = option;
    optionsform.appendChild(option);
  });
  let btnanswer = document.createElement("button");
  btnanswer.classList.add("btn");
  btnanswer.classList.add("btn-answer");
  btnanswer.innerText = "SUBMIT";
  btnanswer.addEventListener("click", (e) => {
    e.preventDefault();
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
        if (checkedoption.innerText === currentquestion.answer) {
          score++;
          checkedoption.style.color = "white";
          checkedoption.firstChild.checked = false;
          checkedoption.style.backgroundColor = "green";
          btnanswer.innerText = "NEXT";
        } else {
          checkedoption.style.backgroundColor = "red";
          checkedoption.firstChild.checked = false;
          checkedoption.style.color = "white";
          correctansweroption.style.color = "white";
          correctansweroption.style.backgroundColor = "green";
          btnanswer.innerText = "NEXT";
        }
      }
      if (attendedquestionscount == 10) {
        //improve this score page
        // document.write(`Awesome ${playername}, You scored ${score} out of 10!`);
      }
    }
    questionattended = true;
  });
  optionsform.appendChild(btnanswer);
  optionscontainer.appendChild(optionsform);
  questioncontainer.appendChild(optionscontainer);
  document.body.appendChild(questioncontainer);
};
