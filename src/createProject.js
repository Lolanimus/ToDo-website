import {createDeleteButton} from './createDeleteButton';

export const createProject = (name, projectWindow) => {
    const projectButton = document.createElement('button');
    const projectCount = projectWindow.childElementCount;
    projectButton.id = "P" + projectCount;
    projectButton.classList.add('cover');
    projectButton.innerHTML = name;
    projectWindow.appendChild(projectButton);
    const projectButtonArray = projectWindow.querySelectorAll('button');
    projectButtonArray.forEach(e => {
        e.addEventListener('click', () => {
            projectButtonArray.forEach(element => {
                if(element != e) {
                    element.classList.add('hidden');
                }
            });

            switch (e.id) {
                case `P${projectCount}`:
                    e.style.backgroundColor = '#808080';
                    console.log(e);
                    e.classList.remove('hidden');
                    break;
            
                default:
                    break;
            }
            
            projectButtonArray.forEach(e => {
                if (e.classList.contains('hidden')) {
                    e.style.backgroundColor = '#F0F0F0';
                }
            })
        })
    });
}