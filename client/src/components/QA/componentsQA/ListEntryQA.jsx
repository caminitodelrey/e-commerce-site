import React from 'react';

class ListEntryQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      question: this.props.question
    }
  }



  render() {
    return (
      <div>
        <div>
          <div>
            <span>Q:</span>
            <input type="submit" value="Yes"/>
            <input type="submit" value="Add Answer"/>
          </div>
          <div>
            <span>A:</span>

          </div>
        </div>

        <div>
          <input type="submit" value="LOAD MORE ANSWERS"/>
        </div>
      </div>
    )
  }
}


export default ListEntryQA;