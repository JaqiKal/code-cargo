/**
 * Metallic Button Component
 *
 * This component provides a reusable button with metallic gradients and a shine effect.
 * It can be rendered as either a button or a link depending on the provided props.
 *
 * Features:
 * - Customizable gradients and labels.
 * - Shine effect on hover.
 * - Dynamic support for links or buttons.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from 'react';
import '../styles/MetallicBtn.css'; 

const MetallicButton = ({ label, gradientClass, link }) => {
  // If a link is provided, render the button inside an <a> tag
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`metallic-btn ${gradientClass}`} // Apply gradient classes
    >
      {/* Shine Effect */}
      <span className="metallic-shine"></span>
      {/* Button Label */}
      <span className="metallic-text">{label}</span>
    </a>
  ) : (
    <button className={`metallic-btn ${gradientClass}`}>
      {/* Shine Effect */}
      <span className="metallic-shine"></span>
      {/* Button Label */}
      <span className="metallic-text">{label}</span>
    </button>
  );
};

MetallicButton.defaultProps = {
  label: "Click Me",
  gradientClass: "bg-silver-gradient", // Default to silver gradient
  link: null, // No link by default
};

export default MetallicButton;
