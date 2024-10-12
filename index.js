
const mainContainer = document.querySelector("div")
document.getElementById("calculateBtn").addEventListener("click", function () {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput.trim()) {

    alert("Please select a date!");
  }
  else{
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
  if (months <= 0 && days < 0 && years <= 0) {
    alert("Date of birth needs to be earlier than the age at date.")
  }
  else {
    console.log("correct date")
    if (days < 0) {

      const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
      console.log(`days In Previous Month ${daysInPreviousMonth}`)
      days += daysInPreviousMonth;
      months--;
    }
    
    if (months < 0) {
      years--;
    }


    if (years < 10) {
      yearContainer.textContent = `0${years}`
    } else {
      yearContainer.textContent = years
    }
    if (months < 10) {
      monthContainer.textContent = `0${months}`
    } else {
      monthContainer.textContent = months
    }
    if (days < 10) {
      dayContainer.textContent = `0${days}`
    } else {
      dayContainer.textContent = days
    }
  }
  const resetBtn = document.createElement("button")
  resetBtn.className = "reset-button"
  var link = document.createElement("a")
  link.textContent = "Reset"
  resetBtn.appendChild(link)
  resetBtn.addEventListener("click", function () {
    link.setAttribute("href", "./index.html")
  })
  mainContainer.appendChild(resetBtn)
}







  const birthdayVideo = document.getElementById("birthday-vedio");
  if (today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate()) {
    console.log("happy birthday")
    birthdayVideo.style.display = "block"
    birthdayVideo.play();
    var videoResetButton = document.createElement("button")
    videoResetButton.className = "video-reset-btn"
    var resetLink = document.createElement("a")
    resetLink.setAttribute("href", "./index.html")
    resetLink.textContent = "Reset"
    videoResetButton.appendChild(resetLink)
    mainContainer.style.opacity = 0
    document.body.appendChild(videoResetButton)
  } else {
    birthdayVideo.style.display = "none"
    birthdayVideo.pause();
    mainContainer.style.opacity = 1
  }
});




