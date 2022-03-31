import React from 'react';
import axios from 'axios';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.selectedProduct
    }
  }

  // {
  //   "id": 1,
  //   "name": "Camo Onesie",
  //   "slogan": "Blend in to your crowd",
  //   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  //   "category": "Jackets",
  //   "default_price": "140"
  // },

  // product_id: 37311 - 38199

  componentDidMount() {
    axios({
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=38199',
      headers: {
        'User-Agent': 'request',
        'Authorization': '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'
      }
    }).then(data => console.log(data)) // Refactor
      .catch(err => console.error(err));
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