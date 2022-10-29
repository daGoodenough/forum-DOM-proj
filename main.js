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
  postCntr.setAttribute('class', 'post');

  postP = document.createElement('p');
  signedP = document.createElement('p')

  let deleteP = document.createElement('p')
  deleteP.setAttribute('class', 'delete');
  deleteP.innerHTML = 'delete post'

  postText = document.createTextNode(`${message}`);
  signedText = document.createTextNode(`- posted by ${name} @ ${time} `)

  postP.appendChild(postText);
  signedP.appendChild(signedText);
  
  postCntr.appendChild(postP);
  postCntr.appendChild(signedP);
  postCntr.append(deleteP)

  postDiv.appendChild(postCntr);

  deleteP.addEventListener('click', (event) => {
    event.target.parentElement.remove();
  })
})

