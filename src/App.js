import React from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Options from "./pages/options";
import Option from "./pages/option";
import Analytics from "./pages/analytics";

class App extends React.Component {
  state = {
    url: this.props.location.search,
  };

  render() {
    const { url } = this.state;
    const page = new URLSearchParams(url).get("page");
    const id = new URLSearchParams(url).get("id");
    const question = new URLSearchParams(url).get("question");
    return (
      <div className="App">
        {page === "survey" ? <Analytics id={id}/> : page === "options" ? (
          <Options id={id} />
        ) : (
          <Option id={id} question={question} />
        )}
      </div>
    );
  }
}

export default withRouter(App);
