import React from 'react';
import ReactDOM from 'react-dom/client';

import renderer from 'react-test-renderer';
import { render, screen, cleanup, act } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';

import App from './App.jsx';

afterEach(cleanup);

// describe('App', () => {
//   test('it renders', () => {
//     render(<App />);
//     expect(screen.getByText('').toBeInTheDocument();
//   })
// })