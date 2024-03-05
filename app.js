const form = document.getElementById("form");
// const username = document.getElementById("username");

form.addEventListener("submit",(e) => {
    e.preventDefault()
    console.log( form.username.value)
})