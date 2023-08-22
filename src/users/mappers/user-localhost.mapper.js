import { User } from "../models/user";

/**
 * 
 * @param {User} User
 * @returns {Like<User>} localhostUser
 */
export const userToLocalhost = (User) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = User;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    };
}