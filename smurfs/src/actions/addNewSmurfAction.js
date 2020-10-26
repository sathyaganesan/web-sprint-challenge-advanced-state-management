import axios from 'axios';

export const addNewSmurf = (newSmurf) => {
    return {
        type: "ADD_NEW_SMURF",
        payload: newSmurf
    };
};

export const addingSmurfPost = () => (dispatch) => {
    axios
        .post(`http://localhost:3333/smurfs`, { name: "sleepy", age: "200", height: "5cm" })
        .then((res) => {
            dispatch({ type: "POST_SUCCESS", payload: res.data });
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        });
};