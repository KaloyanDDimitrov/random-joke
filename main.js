const button = document.getElementById("call");
const front = document.querySelector(".flip-card-front");
const back = document.querySelector(".flip-card-back");
const proxy = "https://cors-anywhere.herokuapp.com/";
const api = "https://official-joke-api.appspot.com/random_joke";

let getData = () => {
  fetch(proxy + api)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response
    })
    .then(res => res.json())
    .then(json => genData(json));
};


let genData = (json) => {
  front.innerHTML = "";
  back.innerHTML = "";

  let para = document.createElement("h3");
  let node = document.createTextNode(json.setup);
  para.appendChild(node);
  front.append(para);

  let para1 = document.createElement("h3");
  let node1 = document.createTextNode(json.punchline);
  para1.appendChild(node1);
  back.append(para1);
};
button.addEventListener("click", getData);