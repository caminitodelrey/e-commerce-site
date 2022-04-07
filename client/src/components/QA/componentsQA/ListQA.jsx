import React, { useState, useEffect } from 'react';
import ListEntryQA from './ListEntryQA.jsx';

export default function ListQA({
  product,
  questions,
  questionsDisplayed,
}) {
  questions = questions || [
    {
      question_id: 573538,
      question_body: 'demo',
      question_date: '2022-02-22T00:00:00.000Z',
      asker_name: 'demo',
      question_helpfulness: 4,
      reported: false,
      answers: {},
    },
  ];

  product = product || {
    id: 37311,
    campus: 'hr-rfe',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description:
      'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: 140.0,
    created_at: '2021-08-13T14:37:33.145Z',
    updated_at: '2021-08-13T14:37:33.145Z',
    features: [
      {
        feature: 'Fabric',
        value: 'Canvas',
      },
      {
        feature: 'Buttons',
        value: 'Brass',
      },
    ],
  };

  return (
    <div id="list">
      {questions.slice(0, questionsDisplayed).map((q) => (
        <ListEntryQA
          key={q.question_id}
          product={product}
          question={q}
        />
      ))}
    </div>
  );
}
