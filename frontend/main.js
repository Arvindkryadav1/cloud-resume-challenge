const counter = document.querySelector('#visitorCount')

async function updateCounter() {
    const response = await fetch("https://ru67ppbfa5mhgp2fabypvjvar40afypi.lambda-url.ap-south-1.on.aws")
    const data = await response.json()
    counter.innerHTML = `views: ${data}`
}
updateCounter();