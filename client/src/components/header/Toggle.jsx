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
      <ToggleInput id="light-dark-toggle" type="checkbox" onChange={themeToggler} />
      <ToggleLabel htmlFor="light-dark-toggle" />
    </ToggleContainer>
  );
}
