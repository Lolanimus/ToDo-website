export const createLeftScroll = (projectWindow) => {
    const leftScroll = document.createElement('button');
    leftScroll.classList.add('left');
    leftScroll.addEventListener('click', () => {
        projectWindow.scrollBy(-200, 0);
    });
    leftScroll.innerHTML = '<=';
    projectWindow.parentNode.insertBefore(leftScroll, projectWindow);
}