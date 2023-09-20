import React from "react";
import axios from "axios";
import classes from "../assets/css/index.module.scss";
import BarDefault from "./apexcharts/bar-default";
import Pie from "./apexcharts/pie";

class Option extends React.Component {
  state = {
    options: {},
  };
  componentWillMount() {
    const { id, question,districts,user_professions } = this.props;
    
    axios
      .post(
        `https://backendapp.getinsightiq.com/api/v1/admin/survey-answer-analytics?id=${id}&question=${question}`,
        {districts, user_professions}
      )
      .then((response) => {
        const { Analytics } = response.data;
        this.setState({
          ...this.state,
          options: Analytics,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderAnalytics = (options, optionsState) => {
    const analytics = [];

    options.forEach((analytic, i) => {
      console.log(optionsState);
      console.log(analytic);
      console.log(optionsState[analytic]);

      analytics.push(
        <div className={classes.no_block_shadow} key={i}>
          <h1 className={classes.question}>Option: {analytic}</h1>

          <div className="d-flex ">
            <div className={`${classes.pies}`}>
              <div className={classes.survey_info}>
                <h1 className={classes.audience_segment}>Gender</h1>
              </div>
              <div className={classes.chart_contaioner}>
                <Pie
                  series={Object.values(optionsState[analytic].gender)}
                  categories={Object.keys(optionsState[analytic].gender)}
                  labels={true}
                />
              </div>
            </div>

            <div className={classes.pies}>
              <div className={classes.survey_info}>
                <h1>Age</h1>
              </div>
              <div className={classes.chart_contaioner}>
                <BarDefault
                  categories={Object.keys(optionsState[analytic].age)}
                  series={Object.values(optionsState[analytic].age)}
                  xLabels={true}
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className={`${classes.pies}`}>
              <div className={classes.survey_info}>
                <h1 className={classes.audience_segment}>Income</h1>
              </div>
              <div className={classes.chart_contaioner}>
                <Pie
                  series={Object.values(optionsState[analytic].income)}
                  categories={Object.keys(optionsState[analytic].income)}
                  labels={true}
                />
              </div>
            </div>
            <div className={classes.pies}>
              <div className={classes.survey_info}>
                <h1>Interest</h1>
              </div>
              <div className={classes.chart_contaioner}>
                <BarDefault
                  categories={Object.keys(optionsState[analytic].interest)}
                  series={Object.values(optionsState[analytic].interest)}
                  xLabels={true}
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className={classes.pies}>
              <div className={classes.survey_info}>
                <h1>Location</h1>
              </div>
              <div className={classes.chart_contaioner}>
                <BarDefault
                  categories={Object.keys(optionsState[analytic].location)}
                  series={Object.values(optionsState[analytic].location)}
                  xLabels={true}
                  for="location"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return analytics;
  };

  render() {
    const { options: optionsState } = this.state;
    const options = Object.keys(optionsState);
    return (
      <div className={` ${classes.flexbox} ${classes.flexbox_2}`}>
        <h1>{this.props.question}</h1>
        {this.renderAnalytics(options, optionsState)}
      </div>
    );
  }
}

export default Option;
