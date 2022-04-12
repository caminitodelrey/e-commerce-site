import React from 'react';
import { handleClickTracker } from '../../helper.js';

export default function ClickTracker(props) {

  const recordClick = (event, module) => {
    const date = new Date();
    const element = event.target;

    console.log({
      date: date,
      element: element,
      module: module
    })
    // handleClickTracker(
    //   'interactions',
    //   JSON.stringify(element.nodeName),
    //   JSON.stringify(module),
    //   JSON.stringify(date)
    // );
  }

  return(
    <>
    {props.render(recordClick)}
    </>
  );


}