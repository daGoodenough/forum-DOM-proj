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

  postCntr = document.createElement('div');
  postP = document.createElement('p');
  signedP = document.createElement('p')

  postText = document.createTextNode(`${message}`);
  signedText = document.createTextNode(`- posted by ${name} @ ${time}`)

  postP.appendChild(postText);
  signedP.appendChild(signedText);
  postCntr.appendChild(postP);
  postCntr.appendChild(signedP);
  postDiv.appendChild(postCntr);
})