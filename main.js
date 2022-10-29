let postDiv = document.querySelector('.posts')

let btn = document.querySelector('#submit');

btn.addEventListener("click", () => {
  let name = document.querySelector('#name').value;
  let message = document.querySelector('#message').value;
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`

  postP = document.createElement('p');
  postText = document.createTextNode(`${message} - posted by ${name} @ ${time}`);

  postP.appendChild(postText);
  postDiv.appendChild(postP)
})