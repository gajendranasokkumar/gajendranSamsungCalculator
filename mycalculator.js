const add = document.getElementById("+");
const sub = document.getElementById("-");
const mul = document.getElementById("x");
const div = document.getElementById("/");
const mod = document.getElementById("%");
const negate = document.getElementById("negate");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const clear = document.getElementById("C");
const paranthesis = document.getElementById("()");

const outputExpression = document.getElementById("outputExpression");
const output = document.getElementById("output");

let number = 0;
let result = 0;
let expression = "";
let greenExpression = "";
let isNegative = false;
let paranthesisFlag = 1;

const showExpression = (argument) => {
  if (argument == "x") {
    argument = "*";
  }
  if (
    argument === "+" ||
    argument === "-" ||
    argument === "*" ||
    argument === "/" ||
    argument === "%" ||
    argument === "(" ||
    argument === ")"
  ) {
    expression += `${argument}`;
    if (argument == "*") {
      argument = "x";
    }
    greenExpression += `<span>${argument}</span>`;
  } else {
    expression += argument;
    greenExpression += argument;
  }

  outputExpression.innerHTML = greenExpression;
};

const showResult = () => {
  output.innerHTML = result;
};

const evaluateExpression = () => {
  try {
    result = eval(expression);
  } catch (error) {
    result = "Error";
  }
  showResult();
};

const handleNumberClick = (num) => {
  number = number * 10 + num;
  showExpression(num);
  evaluateExpression();
};

const handleOperationClick = (operation) => {
  if (expression === "" && operation === "-") {
    isNegative = true;
    showExpression(operation);
  } else if (operation === "(" || operation === ")") {
    showExpression(operation);
  } else if (expression !== "") {
    showExpression(operation);
  }
};

let historyExpressionlogs = [];
let historyResultExpression = [];


const handleEqualClick = () => {
  evaluateExpression();
  historyExpressionlogs.push(expression);
  historyResultExpression.push(result);
  expression = "";
  greenExpression = "";
  showExpression(result);
  // showResult();
  number = result;
  console.log(historyExpressionlogs);
};

const clearAll = () =>
{
  greenExpression = "";
  expression = "";
  number = 0;
  result = 0;
  paranthesisFlag = 1;
  showExpression("");
  showResult();
};

clear.addEventListener("click", clearAll);

const paranthesisHandler = () =>
{
  if (paranthesisFlag == 1) {
    showExpression("(");
    paranthesisFlag = 0;
  } else if (paranthesisFlag == 0){
    showExpression(")");
    paranthesisFlag = 1;
  }
};

paranthesis.addEventListener("click", paranthesisHandler);

mod.addEventListener("click", () => {
  handleOperationClick("%");
});

div.addEventListener("click", () => {
  handleOperationClick("/");
});

mul.addEventListener("click", () => {
  handleOperationClick("x");
});

sub.addEventListener("click", () => {
  handleOperationClick("-");
});

add.addEventListener("click", () => {
  handleOperationClick("+");
});

negate.addEventListener("click", () => {
  if (expression === "") {
    isNegative = !isNegative;
    showExpression(isNegative ? "-" : "");
  }
});

decimal.addEventListener("click", () => {
  if (!expression.endsWith(".")) {
    showExpression(".");
  }
});

equals.addEventListener("click", () => {
  handleEqualClick();
});

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", () => {
    handleNumberClick(i);
  });
}


const historyButton = document.getElementById('historyButton');
const dropDownBox = document.getElementById('historyDropdownBox');
const historyDropdown = document.getElementById('historyDropdown');
const clearHistory = document.getElementById('clearHistoryButton');
let historyTogglerFlag = 0;

const toggleHistoryButton = () =>
{
  if(dropDownBox.classList.contains('visible'))
  {
    historyButton.innerHTML = '<button id="historyButton"><i class="fa-regular fa-clock leftIcons"></i></button>';
    dropDownBox.classList.remove('visible');
  }
  else
  {
    historyButton.innerHTML = '<i class="fa-solid fa-arrow-left leftIcons"></i>';
    dropDownBox.classList.add('visible');
    for(let i=0;i<historyExpressionlogs.length;i++)
    {
      let para = document.createElement("p");
      para.className = 'historyExpression';
      para.innerText=`${historyExpressionlogs[i]}`;
      historyDropdown.appendChild(para);
      let para1 = document.createElement("p");
      para1.className = 'historyResultExpression';
      para1.innerText=`${historyResultExpression[i]}`;
      historyDropdown.appendChild(para1);
    }
  }
  
}

const clearLogHistory = () =>
{
  historyExpressionlogs = [];
  historyResultExpression = [];
  historyDropdown.innerHTML = null;
}

historyButton.addEventListener('click' , toggleHistoryButton)
clearHistory.addEventListener('click' , clearLogHistory);

const wholeContainer = document.getElementById('mainContainer');
wholeContainer.addEventListener('keydown', (event) =>
{
  // console.log(event.key);
  let key = event.key;
  if(key == " ")
  {
    toggleHistoryButton();
  }
  else if(key == "Delete")
  {
    clearAll();
  }
  else if(key == '(' || key == ')')
  {
    paranthesisHandler();
  }
  else if(!isNaN(key))
  {
    let num = parseInt(event.key);
    handleNumberClick(num);
  }
  else if(key == '+' ||key == '-' ||key == '*' ||key == '/' ||key == '%')
  {
    handleOperationClick(key.toString());
  }
  else if(key == '.')
  {
    showExpression(key);
  }
  else if(key == "Enter" || key == '=')
  {
    handleEqualClick();
  }
} );
/////////////////////*****************************************//////////////////////////////


