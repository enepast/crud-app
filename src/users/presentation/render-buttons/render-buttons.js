import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

const createButtons = (element) => {
    const backButton = document.createElement('button');
    backButton.innerText = '< Previos';
    backButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';
    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
    const currentPageLabel = document.createElement('span');
    currentPageLabel.innerText = usersStore.getCurrentPage();
    return { backButton, nextButton, currentPageLabel };
}

export const renderButtons = (element) => {
    const { backButton, nextButton, currentPageLabel } = createButtons(element);
    element.append(backButton, currentPageLabel, nextButton);
}