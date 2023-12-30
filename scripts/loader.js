export function showOverlay(element) {
    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById(element)
        overlay.style.display = 'flex'

        window.addEventListener('load', function() {
            const overlay = document.getElementById(element);
            overlay.style.display = 'none';
        });
    })

    window.addEventListener('beforeunload', function() {
        const overlay = document.getElementById(element)
        overlay.style.display = 'flex'

        window.addEventListener('load', function() {
            const overlay = document.getElementById(element);
            overlay.style.display = 'none';
        });
    });
}

export function hideOverlay(element) {
    window.addEventListener('load', function() {
        const overlay = document.getElementById(element);
        overlay.style.display = 'none';
    });
}