const counter = document.querySelector('#visitorCount')

async function updateCounter() {
    const response = await fetch("https://jpjmv2klf6rpqowg4yu5waulqi0uqqha.lambda-url.ap-south-1.on.aws/")
    const data = await response.json()
    counter.innerHTML = `views: ${data}`
}
updateCounter();