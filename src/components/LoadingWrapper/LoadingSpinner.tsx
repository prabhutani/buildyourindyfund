import React from 'react';
import './styles.scss';

export function LoadingSpinner() {
  return (
    <svg className="spinner" viewBox="0 0 24 24">
      <circle className="path" cx="12" cy="12" r="8" fill="none" strokeWidth="5"></circle>
    </svg>
  );
}
