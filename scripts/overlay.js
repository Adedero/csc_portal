export function overlay(element) {
    const overlay = document.getElementById(element)
    overlay.innerHTML = `
        <img src="/public/assets/images/logo.svg" alt="">
        <div class="spinner"> </div>
    `
}