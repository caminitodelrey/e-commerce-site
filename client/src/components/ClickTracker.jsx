import React from 'react';

export default function ClickTracker(props) {
  const recordClick = (event, module) => {
    const date = new Date();
    const element = event.target;
    // console.log({
    //   date: date,
    //   element: element,
    //   module: module
    // })
  };

  return <>{props.render(recordClick)}</>;
}
