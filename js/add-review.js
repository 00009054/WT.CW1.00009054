function addReview () {
  
  //new li is created in the document file
  const newLi = document.createElement('LI')
  // the value of the new li is equal to the value of the input with "review" id 
  newLi.textContent = review.value
  
  //new li is appended to the ul list with "reviewList" id
  reviewList.appendChild(newLi)
  
  //initially the value of the input is blank
  review.value = '' 
  
  //new minus button is created in the document file 
  const newBtn = document.createElement('BUTTON')
  //it is appended to the li element
  newLi.appendChild(newBtn)
  
  //when this button is clicked the li element is removed
  newBtn.onclick = function () {
    newLi.remove()
    newBtn.remove()
  }
}

//the funcstion runs when an element with "addReview" is clicked
plusButton.onclick = addReview

//the same event happens when enter button on keyboard is clicked
review.onkeyup = function (event) {
  if (event.keyCode === 13) {
    //13 is the key code of "enter" button on the keyboard
    
    const newLi = document.createElement('LI')
    newLi.textContent = review.value
    reviewList.appendChild(newLi)
    review.value = '' 
    
    const newBtn = document.createElement('BUTTON')
    newLi.appendChild(newBtn)
    
    newBtn.onclick = function () {
      newLi.remove()
      newBtn.remove()
    }
  }
}
