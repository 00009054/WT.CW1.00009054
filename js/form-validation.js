//there is a function called checkForm, which checks name input of the form. if there is no value in the name input, page alerts. 
function checkForm() {
  var validation = document.askQuestionForm.userName.value;

  if (validation == "") {
    alert("Fill out the field, do not leave blank!");
    return false;
  }
}
//function runs when an element with "submitBtn" id is clicked
submitBtn.onclick = checkForm