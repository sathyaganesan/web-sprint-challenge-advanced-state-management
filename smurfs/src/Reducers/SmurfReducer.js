export const initialSmurfState = {
    smurfMember: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
        }
    ],
    loading: false,
}

export const SmurfReducer = (state = initialSmurfState, action) => {
    switch (action.type) {
        case "FETCHING_SMURF_START":
            return {
                ...state, loading: true
            };
        case "FETCHING_SMURF_SUCCESS":
            const newSmurf = {name: action.payload, age: action.payload, height: action.payload}
            return {
                ...state,
                smurfMember: [...state.smurfMember, newSmurf], loading: false
            };
        case "FETCHING_ERROR":
            return {
                ...state, loading: false
            };
        case "ADD_NEW_MEMBER":
            const addSmurf = {name: action.payload, age: action.payload, height: action.payload}
            return {
                ...state,
                smurfMember: [...state.smurfMember, addSmurf], loading: false
            }
        default:
            return state;
    }
};