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
 * - Avoids hardcoding sizes for flexibility and adaptability.
 *
 * **Why Avoid Hardcoding Sizes?**
 * - A reusable component should work in multiple contexts without 
 *   requiring significant modifications.
 * - By using a `customClass` or inheriting styles from its parent, 
 *   the component can adapt to various layouts and designs.
 * - Centralizing size control in the parent container or layout 
 *   ensures consistent spacing and alignment across the app.
 * - 
 * 
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from 'react';
import '../styles/MetallicBtn.css'; 

const MetallicButton = ({ label, gradientClass, link, customClass }) => {
  // If a link is provided, render the button inside an <a> tag
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`metallic-btn ${gradientClass} ${customClass}`} 
    >
      {/* Shine Effect */}
      <span className="metallic-shine"></span>
      {/* Button Label */}
      <span className="metallic-text">{label}</span>
    </a>
  ) : (
    <button className={`metallic-btn ${gradientClass} ${customClass}`}>
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
