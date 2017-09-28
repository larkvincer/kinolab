import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import ImportMovieForm from "../components/ImportMovieForm";

export default class ImportMovie extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.file) {
      const reader = new FileReader();
      reader.readAsText(this.state.file);
      reader.onload = (event) => {
        const jsonFile = parseMovies(event.target.result);
        Promise.all(
          jsonFile.map(el =>
            fetch("http://localhost:8080/movie", {
              method: 'post',
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(el)
            })
          )
        ).then(() => {
          alert("Movies was imported successfuly!!");
          this.setState({
            redirect: true
          });
        }).catch(() => {
          alert("Can't import movies!");
        });
      }
      reader.onerror = (event) => {
        console.log(`Error occurred ${event}`);
      }
    } else {
      alert("Select file");
    }
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0]
    });
    console.log("state changed");
    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <ImportMovieForm
        onFormSubmit={(event) => {this.handleSubmit(event)}}
        onInputChange={(event) => {this.handleChange(event)}}
      />
    );
  }
}

const parseMovies = (text) => {
  let result = [];
  text
  .split(/\n/).filter(item => item !== "")
  .reduce((accum, item) => {
    const splittedLine = item.match(/^([\w\s]+):\s([\w\s,-]+)/);
    const name = splittedLine[1];
    const value = splittedLine[2];
    if (name === "Stars") {
      accum["actors"] = value.split(", ");
      result.push(accum);
      return {};
    }
    accum[name.toLowerCase().replace(" ", "_")] = value;
    return accum;
  }, {});
  return result;
}