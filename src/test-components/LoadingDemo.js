import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import loadingGif from "../assets/loading.gif";

// class LoadingDemo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       person: null
//     };

//     this.renderPerson = this.renderPerson.bind(this);
//     this.renderLoadingGif = this.renderLoadingGif.bind(this);
//   }

//   renderPerson() {
//     return <h1>{this.state.person.name}</h1>;
//   }

//   renderLoadingGif() {
//     return <img src={loadingGif} alt="loading" />;
//   }

//   componentDidMount() {
//     axios.get("https://swapi.dev/api/people/1").then((res) => {
//       const person = res.data;
//       this.setState({ person: person });
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//         {this.state.person ? this.renderPerson() : this.renderLoadingGif()}
//       </Fragment>
//     );
//   }
// }

function renderPerson(person) {
  return <h1>{person.name}</h1>;
}

function renderLoadingGif() {
  return <img src={loadingGif} alt="loading" />;
}

function LoadingDemo() {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/1").then((res) => {
      setPerson(res.data);
    });
  });
  return (
    <Fragment>{person ? renderPerson(person) : renderLoadingGif()}</Fragment>
  );
}

export default LoadingDemo;
