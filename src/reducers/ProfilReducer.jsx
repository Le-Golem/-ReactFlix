const initialState = {
    users: [],
};

const ProfilReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: state.users.concat(action.user),
            };
        case "DELETE_user":
            return {
                ...state,
                users: initialState.users,
            };

        default:
            return state;
    }
};

export default ProfilReducer;
