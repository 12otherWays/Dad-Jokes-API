const main = document.querySelector('h1')
const btn = document.querySelector('.btn')

generateJoke()

function generateJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => (main.innerText = data.joke))
}

btn.addEventListener('click', () => {
  generateJoke()
})
