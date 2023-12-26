export function overlay(element) {
    const overlay = document.getElementById(element)
    overlay.innerHTML = `
        <img src="/public/logo.svg" alt="">
        <div class="spinner"> </div>
    `
}