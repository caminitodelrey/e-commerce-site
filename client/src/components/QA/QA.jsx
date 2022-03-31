import React from 'react';
import axios from 'axios';

import SearchQA from './componentsQA/SearchQA.jsx';
import ListQA from './componentsQA/ListQA.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.selectedProduct,
      questions: []
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
    // GET /qa/questions
    // List Questions
    // Retrieves a list of questions for a particular product.
    // This list does not include any reported questions.
    const url = `qa/questions?product_id=${this.state.product.id}`;
    getData(url)
      .then(res => this.setState{
        questions: res.data
      })
      .catch(err => console.error(err));

    // axios({
    //   method: 'get',
    //   baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=38199',
    //   headers: {
    //     'User-Agent': 'request',
    //     'Authorization': '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'
    //   }
    // }).then(data => console.log(data)) // Refactor
    //   .catch(err => console.error(err));
  }

  // GET /qa/questions/:question_id/answers
  // Answers List
  // Returns answers for a given question. This list does not include any reported answers.


  // POST /qa/questions
  // Add a Question
  // Adds a question for the given product


  // POST /qa/questions/:question_id/answers
  // Add an Answer
  // Adds an answer for the given question


  // PUT /qa/questions/:question_id/helpful
  // Mark Question as Helpful
  // Updates a question to show it was found helpful.


  // PUT /qa/questions/:question_id/report
  // Report Question
  // Updates a question to show it was reported.
  // Note, this action does not delete the question, but the question will not be returned in the above GET request.


  // PUT /qa/answers/:answer_id/helpful
  // Mark Answer as Helpful
  // Updates an answer to show it was found helpful.


  // PUT /qa/answers/:answer_id/report
  // Report Answer
  // Updates an answer to show it has been reported.
  // Note, this action does not delete the answer, but the answer will not be returned in the above GET request.












  render() {
    const {product, questions} = this.state;
    return (
      <div className="QA">

        <div><span>{"QUESTIONS & ANSWERS"}</span></div>

        <SearchQA product={product}/>
        <ListQA product={product} questions={questions} />

        <div className="BottomButtonsQA">
          <div>
            <input
              type="submit"
              value="MORE ANSWERED QUESTIONS"/>
          </div>
          <div>
            <input
              type="submit"
              value="ADD A QUESTION +"/>
            </div>
        </div>
      </div>
    )
  }
}

export default QA;