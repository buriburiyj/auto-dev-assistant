import React from 'react';
import './LoadingSpinner.css';

/**
 * LoadingSpinner component to show loading state.
 * 
 * @param {Object} props
 * @param {string} [props.size='24px'] - Width and height of the spinner.
 * @param {string} [props.color='#4f46e5'] - Color of the rotating border.
 */
const LoadingSpinner = ({ size = '24px', color = '#4f46e5' }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderWidth: `calc(${size} / 8)`,
    '--spinner-color': color,
  };

  return (
    <div 
      className="loading-spinner" 
      style={spinnerStyle}
      role="status"
      aria-label="loading"
    />
  );
};

export default LoadingSpinner;
