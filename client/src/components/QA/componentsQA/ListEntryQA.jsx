import React from 'react';

class ListEntryQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      //question: this.props.question
    }
  }



  render() {
    return (
      <div>
        <div>
          <div>
            <p>Q:</p>
            <input type="submit" value="Yes"/>
            <input type="submit" value="Add Answer"/>
          </div>
          <div>
            <p>A:</p>

          </div>
        </div>

        <div>
          <input type="submit" value="LOAD MORE AMSWERS"/>
        </div>
      </div>
    )
  }
}


export default ListEntryQA;