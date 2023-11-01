export const createRightScroll = (projectWindow) => {
    const rightScroll = document.createElement('button');
    rightScroll.classList.add('right');
    rightScroll.addEventListener('click', () => {
        projectWindow.scrollBy(200, 0);
    });
    rightScroll.innerHTML = '=>';
    projectWindow.parentNode.appendChild(rightScroll);
}