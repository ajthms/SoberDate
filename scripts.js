const today = new Date()
const userDate = document.getElementById("userDate")
const userName = document.getElementById("userName")

function formSubmit(event) {
    event.preventDefault()
    const [year,month,day] = userDate.value.split("-")
    const dateValue = new Date(`${month}/${day}/${year}`)
    const diff = Math.floor((today - dateValue) / (1000*60*60*24))
    document.getElementById("results").innerHTML = `Great job, ${userName.value}`
    document.getElementById("date").innerHTML = `You've been sober for ${diff} days!`

}

function myFunction() {
    const definition = document.getElementById("myDIV");
    definition.classList.toggle("hidden")
  }
//display div to user, user cant select future date, save to local state