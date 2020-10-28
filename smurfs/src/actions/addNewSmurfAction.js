// import axios from 'axios';

// export const addNewSmurf = (newSmurf) => {
//     return {
//         type: "ADD_NEW_SMURF",
//         payload: newSmurf
//     };
// };

// export const addingSmurfPost = (props) => (dispatch) => {
//     console.log("postSmurfs function activated");
//     axios
//         .post(`http://localhost:3333/smurfs`, {
//             name: props.name,
//             age: props.age,
//             height: props.height
//         })
//         .then((res) => {
//             console.log("POSTED");
//             dispatch({ type: "POST_SUCCESS", payload: res.data });
//             console.log(res);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

