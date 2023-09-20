import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Question from './pages/question';
import Option from './pages/option';
import Analytics from './pages/analytics';

import axios from 'axios';

class App extends React.Component {
  state = {
    url: this.props.location.search,
    country: null,
    city: null,
    districts: [],
    user_professions: []
  };

  componentWillMount() {
    const { url } = this.state;
    const id = new URLSearchParams(url).get('id');

    
    axios
      .get(
        `https://backendapp.getinsightiq.com/api/v1/surveys/survey/fetch-survey?survey_id=${id}`,
      )
      .then((response) => {
        const { country,city } = response.data.survey.target_audience;
        
        axios.get(`https://backendapp.getinsightiq.com/api/v1/admin/fetch-supported-country?country=${country}&city=${city}`)
        .then((res) => {

          this.setState((state) => {
            return {
              ...state,
              country,
              city,
              districts: res.data.analytics.districts,
              user_professions: res.data.analytics.user_professions
            };
          });

        })
      });
  }

  render() {
    const { url,districts,user_professions,country } = this.state;
    const page = new URLSearchParams(url).get('page');
    const id = new URLSearchParams(url).get('id');
    const question = new URLSearchParams(url).get('question');

  console.log(districts, user_professions)
    return (
      <div className="App">
        {page === 'survey' && country != null ? (
          <Analytics id={id} districts={districts} user_professions={user_professions} />
        ) : page === 'options' && country != null ? (
          <Question id={id}/>
        ) : country !=null ?  (
          <Option id={id} question={question} districts={districts} user_professions={user_professions} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(App);
