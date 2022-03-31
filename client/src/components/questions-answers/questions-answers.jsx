import React from 'react';
import axios from 'axios';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.selectedProduct
    }
  }

  componentDidMount() {
    // axios.get()
  }

  // {
  //   "id": 1,
  //   "name": "Camo Onesie",
  //   "slogan": "Blend in to your crowd",
  //   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  //   "category": "Jackets",
  //   "default_price": "140"
  // },


  render() {
    return (
      <div>
        [QuestionsAnswers component goes here]
      </div>
    )
  }
}

export default QuestionsAnswers;