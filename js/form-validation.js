function checkForm() {
  var validation = document.askQuestionForm.userName.value;

  if (validation == "" || validation == null ) {
    alert("Fill out the field, do not leave blank!");
    return false;
  }
}

submitBtn.onclick = checkForm