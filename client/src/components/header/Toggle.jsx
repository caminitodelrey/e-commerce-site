import React from 'react';
import {
  ToggleContainer,
  ToggleInput,
  ToggleLabel,
  Background,
} from '../../theme/headerStyle.js';

export default function Toggle({ theme, themeToggler }) {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" onChange={themeToggler} />
      <ToggleLabel htmlFor="input" />
    </ToggleContainer>
  )
};