import React from 'react';
import ListEntryQA from './ListEntryQA.jsx';

class ListQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      questions: this.props.questions
    }
  }



  render() {
    const {product, questions} = this.state;
    return (
      <div>
        <ListEntryQA product={product} />
      </div>
    )
  }
}


export default ListQA;