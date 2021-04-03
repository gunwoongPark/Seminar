var formulaInput = document.getElementById("formula-input");
var calcHistDiv = document.getElementById("calc-history");

formulaInput.addEventListener("keyup", function (e) {
  if (e.code === "Enter") calculate();
});

function calculate() {
  var fm = formulaInput.value;
  var resultText = "ERROR";
  var answer;

  eval("answer=" + fm);
  resultText = fm + " = ";
  resultText += answer % 1 > 0 ? answer.toFixed(2) : answer.toString();

  // calc-history 상자에 넣을 또 다른 상자를 생성하고 내용을 설정한 뒤 삽입
  var resultDiv = document.createElement("DIV");
  resultDiv.appendChild(document.createTextNode(resultText));

  calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);

  // 입력칸은 빈칸으로
  formulaInput.value = "";
}
