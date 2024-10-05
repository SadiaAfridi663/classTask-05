
const mainContainer = document.querySelector("div")
document.getElementById("calculateBtn").addEventListener("click", function () {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput.trim()) {

    alert("Please select a date!");
  }
  const dob = new Date(dobInput);
  const today = new Date();
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()
  const birthYear = dob.getFullYear()
  const birthMonth = dob.getMonth()
  const birthDay = dob.getDate()

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;
  var yearContainer = document.getElementById("year")
  var monthContainer = document.getElementById("month")
  var dayContainer = document.getElementById("day")


  if(currentMonth < birthMonth){
    months = months + 12
    years--
  }
  if(currentDay < birthDay){
    if(currentMonth === 3 || currentMonth === 5 || currentMonth === 8 || currentMonth === 10 ){
      days = days + 30;
      months--
    }
    else if(currentMonth === 1){
      if(currentYear % 4 === 0 && currentYear % 100 !== 0 || currentYear % 400 === 0 ){
          days = days + 29
          months--
          }
          else{
            days = days + 28
            months--
          }
    }
    else{
      days = days + 31;
      months--
    }
  }

  if (years < 10) {
    yearContainer.textContent = `0${years}`
  }else{
    yearContainer.textContent = years
  }
  if (months < 10) {
    monthContainer.textContent = `0${months}`
  }else{
    monthContainer.textContent = months
  }
  if (days < 10) {
    dayContainer.textContent = `0${days}`
  }else{
    dayContainer.textContent = days
  }


  const birthdayVideo = document.getElementById("birthday-vedio");
  if (today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate()) {
    console.log("happy birthday")
    birthdayVideo.style.display = "block"
    birthdayVideo.play();
    var resetButton = document.createElement("button")
    resetButton.className = "reset-button"
    var resetLink = document.createElement("a")
    resetLink.setAttribute("href", "./index.html")
    resetLink.textContent = "Reset"
    resetButton.appendChild(resetLink)
    mainContainer.style.opacity = 0
      document.body.appendChild(resetButton)
    } else {
      birthdayVideo.style.display = "none"
      birthdayVideo.pause();
      mainContainer.style.opacity = 1
  }
});
