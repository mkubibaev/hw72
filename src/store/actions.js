import axios from '../axios-reddit';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS';

export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

export const fetchPicturesSuccess = pictures => ({type: FETCH_PICTURES_SUCCESS, pictures});

export const fetchPictures = () => {
    return dispatch => {
        dispatch(fetchDataRequest());

        axios.get('pics.json').then(response => {

            dispatch(fetchPicturesSuccess(response.data.data.children));
        }, error => {
            dispatch(fetchDataFailure(error));
        });
    }
};
