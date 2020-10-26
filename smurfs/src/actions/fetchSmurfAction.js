import axios from 'axios';

console.log('init fetchsmurfaction');
export const fetchSmurfAction = () => (dispatch) => {
    console.log('fetchsmurfaction.js before dispatch');
    dispatch({ type: 'FETCHING_SMURF_START' });
    console.log('fetchsmurfaction after dsipatch');
    axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            console.log("fetchsmurfaction.js Fetch Success Data:", res);
            dispatch({ type: 'FETCHING_SMURF_SUCCESS', payload: res.data});
        })
        .catch((err) => {
            console.log('fetchsmurfaction.sj err')
            dispatch({ type: 'FETCHING_ERROR', payload: err.response.message });
            console.log('Fetch Smurf Error:', err);
        });
}