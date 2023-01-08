const today = new Date()
const userDate = document.getElementById("userDate")
const userName = document.getElementById("userName")
userName.value = localStorage.getItem('userName');
userDate.value = localStorage.getItem('userDate');

function formSubmit(event) {
    event.preventDefault()
    const [year,month,day] = userDate.value.split("-")
    const dateValue = new Date(`${month}/${day}/${year}`)
    const diff = Math.floor((today - dateValue) / (1000*60*60*24))
    const dayLabel = diff===1 ? "day" : "days"
    document.getElementById("results").innerHTML = `Great job, ${userName.value}`
    document.getElementById("date").innerHTML = `You've been sober for ${diff} ${dayLabel}!`
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userDate', userDate.value);
}


  
//user cant select future date, click off calendar on click
