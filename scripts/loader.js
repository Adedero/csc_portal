export function showOverlay(element) {
    window.addEventListener('beforeunload', function() {
        const overlay = document.getElementById(element)
        overlay.style.display = 'flex'
    }); 

    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById(element)
        overlay.style.display = 'flex'
    })
}

export function hideOverlay(element) {
    window.addEventListener('load', function() {
        const overlay = document.getElementById(element);
        overlay.style.display = 'none';
    });
}