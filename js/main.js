document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseout', () => {
            cursor.classList.remove('hover');
        });
    });
});
