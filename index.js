let username;
let favoriteColor;

document.getElementById("submit_button").onclick = function() {
  username = document.getElementById("username").value;
  favoriteColor = document.getElementById("color").value;
  if (!username || !favoriteColor) {
    alert("Please fill in both fields before submitting.");
  } else {console.log(`The username you have submitted is: ${username}`);
  console.log(`Your favorite color is: ${favoriteColor}`);
  document.getElementById("h1_text").textContent = `Welcome, ${username}! Your favorite color is ${favoriteColor}.`;
  document.getElementById("username").value = "";
  document.getElementById("color").value = "";}
  if (favoriteColor === "red" && favoriteColor) {
    console.log("Red is a vibrant and energetic color!"); }
  else if (favoriteColor === "blue" && favoriteColor) {
    console.log("Blue is a calm and trustworthy color!"); } else if (favoriteColor === "green" && favoriteColor) {
    console.log("Green is a refreshing and natural color!"); }
    else if (favoriteColor === "yellow" && favoriteColor) {
    console.log("Yellow is a bright and cheerful color!"); }
    else if (favoriteColor === "purple" && favoriteColor) {
    console.log("Purple is a royal and mysterious color!"); }
    else if (favoriteColor === "orange" && favoriteColor) {
    console.log("Orange is a warm and energetic color!"); }
    else if (favoriteColor) { document.getElementById("color_text").textContent = "That's an interesting color choice!";}
}