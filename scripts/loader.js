export function showOverlay(element) {
    window.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById(element);
        overlay.style.display = 'flex';
    });
}

export function hideOverlay(element) {
    window.addEventListener('load', function() {
        const overlay = document.getElementById(element);
        overlay.style.display = 'none';
    });
}
