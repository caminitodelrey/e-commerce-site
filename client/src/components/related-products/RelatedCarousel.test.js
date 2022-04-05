import React from "react";
import ReactDOM from 'react-dom/client';
// import renderer from 'react-test-renderer';
import { screen, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import RelatedProducts from './RelatedProducts.jsx';

const sum = function (a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
