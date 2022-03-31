import React from 'react';
import axios from 'axios';
import getData from '../../../helper.js';
class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world of mine'
    }
  }

  render() {
    return (
      <div>
        [QuestionsAnswers component goes here]
      </div>
    )
  }
}

export default QuestionsAnswers;