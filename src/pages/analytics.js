import React from "react";
import axios from "axios";
import classes from "../assets/css/index.module.scss";
import Pie from "./apexcharts/pie";
import BarDefault from "./apexcharts/bar-default";

class Analytics extends React.Component {
  state = {
    location: {},
    gender: {},
    income: {},
    interest: {},
    age: {},
    loading: true
  };
  componentWillMount() {
    const { id } = this.props;
    axios
      .get(
        `https://backendapp.murmurcars.com/api/v1/admin/users-analytics/${id}`
      )
      .then((response) => {
        const { location, gender, age, interest, income } = response.data;
        console.log(response.data)
        this.setState({
          ...this.state,
          location,
          gender,
          age,
          interest,
          income,
          loading: false,
        });
      });
  }

  render() {
    const { location, gender, age, interest, income, loading } = this.state;
    return (
      <div className={`${classes.flex_container_2}`}>
      {loading ?  null : 
          <div className={` ${classes.flexbox} `}>
              <div className={classes.rows}>
                <div className={`${classes.pies}`}>
                  <div className={classes.survey_info}>
                    <h1>Gender</h1>
                  </div>
                  <div className={classes.chart_contaioner}>
                    <Pie
                      series={Object.values(gender)}
                      categories={Object.keys(gender)}
                      labels={true}
                    />
                  </div>
                </div>
                <div className={`${classes.pies}`}>
                  <div className={classes.survey_info}>
                    <h1>Age</h1>
                  </div>
                  <div className={classes.chart_contaioner}>
                    <BarDefault
                      categories={Object.keys(age)}
                      series={Object.values(age)}
                      max={Math.max(...Object.values(age))}
                      xLabels={true}
                      horisontal={true}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.rows}>
                <div className={`${classes.pies}`}>
                  <div className={classes.survey_info}>
                    <h1>Income</h1>
                  </div>
                  <div className={classes.chart_contaioner}>
                  <BarDefault
                      series={Object.values(income)}
                      categories={Object.keys(income)}
                          max={Math.max(...Object.values(income))}
                      xLabels={true}
                         horisontal={true}
                    />
                  </div>
                </div>
                <div className={`${classes.pies}`}>
                  <div className={classes.survey_info}>
                    <h1>Age</h1>
                  </div>
                  <div className={classes.chart_contaioner}>
                    <BarDefault
                      categories={Object.keys(interest)}
                      series={Object.values(interest)}
                      max={Math.max(...Object.values(interest))}
                      xLabels={true}
                      horisontal={true}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.rows}>
                <div className={`${classes.pies}`} style={{width: '100%'}}>
                  <div className={classes.survey_info}>
                    <h1>Location</h1>
                  </div>
                  <div className={`${classes.chart_contaioner}`}>
                    <BarDefault
                      categories={Object.keys(location)}
                      series={Object.values(location)}
                      max={Math.max(...Object.values(location))}
                      xLabels={true}
                    />
                  </div>
                </div>
              </div>
            </div>}
      </div>
    );
  }
}

export default Analytics;
