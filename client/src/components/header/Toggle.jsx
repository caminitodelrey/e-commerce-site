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
      <label>
        <ToggleInput type="checkbox" onChange={themeToggler} />
      </label>
      <ToggleLabel htmlFor="input" />
    </ToggleContainer>
  );
}
