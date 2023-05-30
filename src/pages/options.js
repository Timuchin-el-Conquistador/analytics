import React from "react";
import axios from "axios";
import classes from "../assets/css/index.module.scss";
import BarDefault from "./apexcharts/bar-default";

class Options extends React.Component {
  state = {
    survey: {},
  };
  componentWillMount() {
    const { id } = this.props;
    console.log(id);
    axios
      .get(`https://backendapp.murmurcars.com/api/v1/admin/survey/${id}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        this.setState({ survey: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderAnalytics = (questions, survey) => {
    const analytics = [];

    questions.forEach((el, i) => {
      const answers = Object.keys(survey[el]);
      const series = Object.values(survey[el]);

      analytics.push(
        <div key={i} className={`${classes.rows} ${classes.rows_2}`}>
          <div className={`${classes.pies}`}>
            <div className={classes.survey_info}>
              <span>
                Question:<h1> {el}</h1>
              </span>
            </div>
            <div className={classes.chart_contaioner_2}>
              <BarDefault
                categories={answers}
                series={series}
                title={el}
                xLabels={true}
              />
            </div>
          </div>
        </div>
      );
    });
    return analytics;
  };

  render() {
    const { survey } = this.state;
    const questions = Object.keys(survey);
    return (
      <div className={` ${classes.flexbox} ${classes.flexbox_2}`}>
        {this.renderAnalytics(questions, survey)}
      </div>
    );
  }
}

export default Options;
