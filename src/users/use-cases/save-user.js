import { User } from '../models/user';
import { userToLocalhost } from "./add-user.mapper";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);

    if (user.id) {
        throw new Error('Not implemented');
    }

    const updatedUser = await createUser(user);
    return updatedUser;

}

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log(newUser);
    return newUser;
}

