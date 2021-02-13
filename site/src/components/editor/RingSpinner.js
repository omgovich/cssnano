import React from 'react';
import { wrapper, circle } from './RingSpinner.module.css';

/* eslint-disable import/prefer-default-export */
export function RingSpinner() {
  return (
    <div className={wrapper}>
      <div className={circle}></div>
    </div>
  );
}
