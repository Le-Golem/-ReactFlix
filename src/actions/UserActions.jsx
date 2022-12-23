export const addUser = (payload) => ({ type: "ADD_USER", payload });
export const selectUser = (userId) => ({ type: "SELECT_USER", userID: userId });
export const deleteUser = (payload) => ({ type: "DELETE_USER", payload });
