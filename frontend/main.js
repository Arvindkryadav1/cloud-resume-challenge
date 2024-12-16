const counter = document.querySelector('#visitorCount')

async function updateCounter() {
    const response = await fetch("https://kbbpolqo5z74kyfd3eku3ihwqy0wtmnh.lambda-url.ap-south-1.on.aws")
    const data = await response.json()
    counter.innerHTML = `views: ${data}`
}
updateCounter();