console.log('Smurfreducer initial line');

export const initialSmurfState = {
    smurfMembers: [
        {
            name: "",
            age: "",
            height: "",
        }
    ],
    loading: false,
}

export const smurfReducer = (state = initialSmurfState, action) => {
    console.log("smurfreducer.js action:", action);
    switch (action.type) {
        case "FETCHING_SMURF_START":
            console.log("smurfreducer.js FETCHING_SMURF_START 23");
            return {
                ...state, loading: true
            };
        
        case "FETCHING_SMURF_SUCCESS":
            console.log("smurfreducer.js FETCHING_SMURF_SUCCESS 29");
            return {
                ...state, smurfMembers: action.payload, loading: false
            };
        
        case "FETCHING_ERROR":
            console.log("smurfreducer.js FETCHING_ERROR");
            return {
                ...state, loading: false
            };
        
        case "POST_SUCCESS":
            console.log("smurfreducer.js POST_SUCCESS");
            return {
                ...state, smurfMembers: action.payload, loading: false
            };

        default:
            console.log("SmurfReducer.js Default State", state);
            return state;
    }
};