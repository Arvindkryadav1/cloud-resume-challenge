


document.addEventListener("DOMContentLoaded", (e) => {
    let counter = localStorage.getItem('visitorCounter') || 0
    counter++;
    localStorage.setItem("visitorCounter", counter)
    document.getElementById('visitor-counter').innerText = `Visitor Counter: ${counter}`
});