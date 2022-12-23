const initialState = {
    favorites: [],
};

const FavoriteReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                favorites: state.favorites.concat(action.payload),
            };
        case "DELETE_FAV":
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.favID !== action.payload.fav.favID),
            };
        case "DELETE_FAV_USER":
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.userID !== action.payload.user.userID),
            };

        default:
            return state;
    }
};

export default FavoriteReducer;
