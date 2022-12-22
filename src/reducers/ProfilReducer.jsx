const initialState = {
    users: [],
};

const ProfilReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: state.users.concat(action.payload),
            };
        case "SELECT_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.id ? { ...user, selected: true } : { ...user, selected: false }
                ),
            };

        default:
            return state;
    }
};

export default ProfilReducer;
