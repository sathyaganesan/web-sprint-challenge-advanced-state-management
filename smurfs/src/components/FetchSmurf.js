import React, { useEffect } from 'react';
import { fetchSmurfAction, addingSmurfPost } from '../actions/fetchSmurfAction';
import { connect } from 'react-redux';
import { useState } from 'react';

console.log('init FetchSmurf.js')

const FetchSmurf = (props) => {
    
    const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""})

    console.log("FetchSmurf.js  Props:", props);
    console.log('calling fetchsmurfaction');

    useEffect(() => {
        props.fetchSmurfAction();
    }, [props.fetchSmurfAction]);
        console.log('after calling useeffect');

    const submitChange = (e) => {
        e.preventDefault();
        props.addingSmurfPost(newSmurf);
        setNewSmurf({ name: "", age: "", height: "" });
    }

    const changeHandler = (e) => {
        setNewSmurf({ [e.target.name] : e.target.value });
    }

    return (
        <div>
            <h2>Smurf Registration Form</h2>
            <div>
                {props.smurfMembers.map((member, index) => (
                    <div>
                        <h4 key={index}>Name: {member.name}</h4>
                        <p>Age: {member.age}</p>
                        <p>Height: {member.height}</p>
                    </div>
                ))}
                <form>
                <div>
                    <label htmlFor="name">
                        <input
                            type="type"
                            name="name"
                            value={newSmurf.name}
                            onChange = {changeHandler}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor = "age">
                        <input
                            type="text"
                                name="age"
                                value={newSmurf.age}
                                onChange = {changeHandler}
                            />
                    </label>
                </div>

                <div>
                    <label htmlFor = "height">
                            <input
                                type="text"
                                name="height"
                                value={newSmurf.height}
                                onChange = {changeHandler}
                            />
                    </label>
                </div>
                    
                <div>
                        <button onClick = {() =>submitChange} > Add Smurf </button>
                </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToprops = (state) => {
    return {
        smurfMembers: state.smurfMembers,
        loading: state.loading,
    };
};

console.log('exporting fetchsmurf ..');
export default connect(mapStateToprops, {fetchSmurfAction, addingSmurfPost})(FetchSmurf);




// import React from 'react';
// import { SmurfContext } from '../Context/SmurfContext';
// import { addNewSmurf } from '../Actions/AddNewSmurf';

// class FetchSmurf extends React.Component {

//     state = {
//         newSmurf: "",
//     }

//     changeHandler = (e) => {
//         this.setState({ newSmurf: e.target.value });
//     };

//     render() {
//     return (
//         <div>
//             {/* <h2>Smurf Registration Form</h2> */}

//             <SmurfContext.Consumer>
//                 {(value) => (
//                     <div>
//                         {value.smurfMember.map((member, index) => (
//                             <div>
//                                 <h4 key={index}>Name: {member.name}</h4>
//                                 <p>Age: {member.age}</p>
//                                 <p>Height: {member.height}</p>
//                             </div>
//                         ))}
                       
//                         <div>
//                             <label htmlFor="name">
//                                     <input
//                                         type="type"
//                                         name="name"
//                                         value={this.state.newSmurf}
//                                         onChange={this.changeHandler}
//                                         placeholder = "Smurf Name"
//                                     />
//                             </label>
//                         </div>

//                         {/* <div>
//                             <label htmlFor = "age">
//                                 <input type="number" name="age" />
//                             </label>
//                         </div>

//                         <div>
//                             <label htmlFor = "height">
//                                 <input type="number" name="height" />
//                             </label>
//                         </div> */}

//                         <div>
//                             <button onClick = {() => this.props(addNewSmurf(this.state.newSmurf))}>
//                                 Add Smurf
//                             </button>
//                         </div>
                       
//                     </div>
//                 )}
//             </SmurfContext.Consumer>   
//         </div>
//     );
// };
// }
// export default FetchSmurf;