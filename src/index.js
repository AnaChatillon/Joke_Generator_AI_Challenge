//add an event listener
let button1 = document.querySelector("#button-1");
button1.addEventListener("click", generatejoke);

//call the api (import axios to html) and function
function generatejoke(event) {
  event.preventDefault();

  let apiKey = "0a744841eo85af43btc634f9048290bb";
  let context =
    "You are known for being the teller of the funniest jokes. Please, be polite";
  let prompt = "Tell us a funny joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(jokeGenerator);
  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "I'm generating a joke for you, please wait...";

  console.log("AI API called");
}

//display resulsts using typewriter (import typewriter to html)
function jokeGenerator(response) {
  console.log("processing");

  console.log(response.data.answer);
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
  });
}
