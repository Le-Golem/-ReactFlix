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
                    user.userID === action.userID ? { ...user, selected: true } : { ...user, selected: false }
                ),
            };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.userID !== action.payload.user.userID),
            };

        default:
            return state;
    }
};

export default ProfilReducer;
