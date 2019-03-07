import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_PICTURES_SUCCESS} from "./actions";

const initialState = {
    pictures: [],
    loading: true,
    error: null
};

const picturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case FETCH_PICTURES_SUCCESS:
            return {
                ...state,
                loading: false,
                pictures: action.pictures
            };

        default:
            return state;
    }
};

export default picturesReducer;
