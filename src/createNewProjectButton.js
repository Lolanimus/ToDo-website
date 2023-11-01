import { newProjectFunction } from "./newProjectFunction";

export const createNewProjectButton = (divProjects) => {
    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add('newProjectButton');
    newProjectButton.innerHTML = "+";
    divProjects.parentNode.appendChild(newProjectButton);
    newProjectFunction(newProjectButton, divProjects);

}