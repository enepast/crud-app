import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async(element) => {
    await usersStore.loadNextPage();

    renderTable(element);
}