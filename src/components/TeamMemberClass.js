import { Component } from "react";

class TeamMemberClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      another: 1,
    };
    //console.log("State vars init in class Comp");
  }

  componentDidMount() {
    //console.log("This is componentDidMount function in Class Component " + this.props.name);
    this.timer = setInterval(() => {
      console.log("This is class based timer");
    }, 1000);
  }
  //   componentDidUpdate() {
  //     console.log("This is componentDidUpdate after every update in Class Component ");
  //   }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter) {
      //console.log("This is componentDidUpdate based on a dependency (counter) in Class Component ");
    }
  }

  componentWillUnmount() {
    //console.log("This is componentWillUnmount in Class component");
    clearInterval(this.timer);
  }

  render() {
    const { name, role } = this.props;
    const { counter } = this.state;
    console.log("This is render from class Component");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              counter: counter + 1,
            });
          }}
        >
          Increment Counter
        </button>
        <h1> Count: {counter}</h1>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    );
  }
}

export default TeamMemberClass;

// Person personObj = new Person(name,role);
