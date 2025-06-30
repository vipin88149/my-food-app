import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2,
        }
    }

    render() {
        const { name } = this.props;
        // const { count, count2 } = this.state; we can also destructure here
        const { count, count2 } = this.state;
    return (
      <div className='user-card'>
          {/* <h1> count: {this.state.count} </h1> */}
            {/* <h1> count2: {this.state.count2} </h1> */}
            <h1> count: {count} </h1>
            <button onClick={() => {
                // NEVER UPDATE STATE VARIABLE DIRECTLY
                this.setState({
                     count: count + 1 
                     })}}>
                Increment Count
             </button>


            <h1> count2: {count2} </h1>
          <h2>Name: {name}</h2>
          <h3>Address: lehrodha</h3>
          <h4>contact: 8814910186</h4>
      </div>
    )
    }
}

export default UserClass;

// Note: In class components, we use this.state to access state variables and this.setState to update them.
// Also, we use this.props to access props passed to the component.
