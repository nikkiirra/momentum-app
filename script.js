// ----------------------- Main Page ----------------------- // 
var enterName = document.getElementById("submitName")
var inputName = document.getElementById("typeName")

enterName.addEventListener("click", greet)
inputName.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      greet();
  }
})