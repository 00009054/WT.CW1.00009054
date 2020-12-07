function addTask () {
      
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

plusButton.onclick = addTask

review.onkeyup = function (event) {
  if (event.keyCode === 13) {
    
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
