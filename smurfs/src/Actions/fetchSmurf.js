import axios from 'axios';
import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_ERROR } from '../Reducers/SmurfReducer';

export const getSmurf = () => (dispatch) => {
    dispatch({ type: FETCHING_SMURF_START });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch((err) => {
            dispatch({ type: FETCHING_ERROR, payload: err.response.message });
            console.log(err);
        });
}