console.log("Started");
function register() {
  setTimeout(() => {
    console.log("register end");
    login();
  }, 2000);
}
function login() {
  setTimeout(() => {
    console.log("login end");
  });
}
function gotData() {
  setTimeout(() => {
    console.log("got data");
  }, 4000);
}
function displayData() {
  setTimeout(() => {
    console.log("diaplay data");
  }, 5000);   
}

register();
// login();
gotData();
displayData();
console.log("done");