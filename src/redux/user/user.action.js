import {UserTypes} from './user.types';
const setCurrentUser = user => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
});

export default setCurrentUser;