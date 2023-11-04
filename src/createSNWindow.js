export const createSNWindow = () => {
    const divSN = document.getElementById('divSN');
    const snWindow = document.createElement('div');
    snWindow.classList.add('snWindow');
    divSN.appendChild(snWindow);
}