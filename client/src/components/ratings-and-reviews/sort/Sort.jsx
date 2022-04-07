import React, { useState, useEffect } from 'react';

export default function Sort({ metaData }) {
  return (
    <div>
      <h3>-[Sort component]</h3>
      <select>
        <option value="0">Relevant</option>
        <option value="1">Helpful</option>
        <option value="2">Recent</option>
      </select>
    </div>
  );
}
