import axios from 'axios';

export const fetchSmurfAction = () => (dispatch) => {
    dispatch({ type: 'FETCHING_SMURF_START' });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            console.log("fetchsmurfaction.js Fetch Success Data:", res);
            dispatch({ type: 'FETCHING_SMURF_SUCCESS', payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCHING_ERROR', payload: err.response.message });
            console.log('Fetch Smurf Error:', err);
        });
};


export const addingSmurfPost = (props) => (dispatch) => {
    console.log("postSmurfs function activated");
    axios
        .post(`http://localhost:3333/smurfs`, {
            name: props.name,
            age: props.age,
            height: props.height
        })
        .then((res) => {
            console.log("POSTED");
            dispatch({ type: "POST_SUCCESS", payload: res.data });
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
