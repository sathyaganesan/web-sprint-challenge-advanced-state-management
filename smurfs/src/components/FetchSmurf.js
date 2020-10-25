import React from 'react';
import { SmurfContext } from '../Context/SmurfContext';
import { addNewSmurf } from '../Actions/AddNewSmurf';

class FetchSmurf extends React.Component {

    state = {
        newSmurf: "",
    }

    changeHandler = (e) => {
        this.setState({ newSmurf: e.target.value });
    };

    render() {
    return (
        <div>
            {/* <h2>Smurf Registration Form</h2> */}

            <SmurfContext.Consumer>
                {(value) => (
                    <div>
                        {value.smurfMember.map((member, index) => (
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
                                        value={this.state.newSmurf}
                                        onChange={this.changeHandler}
                                        placeholder = "Smurf Name"
                                    />
                            </label>
                        </div>

                        {/* <div>
                            <label htmlFor = "age">
                                <input type="number" name="age" />
                            </label>
                        </div>

                        <div>
                            <label htmlFor = "height">
                                <input type="number" name="height" />
                            </label>
                        </div> */}

                        <div>
                            <button onClick = {() => this.props(addNewSmurf(this.state.newSmurf))}>
                                Add Smurf
                            </button>
                        </div>
                        </form>
                    </div>
                )}
            </SmurfContext.Consumer>   
        </div>
    );
};
}
export default FetchSmurf;