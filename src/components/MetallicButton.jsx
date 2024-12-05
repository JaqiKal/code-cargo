/**
 * Metallic Button Component
 *
 * This component provides a reusable button with metallic gradients and 
 * a shine effect. It can function as either a button or a link, depending on the props.
 *
 * Features:
 * - Customizable gradients and button labels.
 * - Shine effect on hover for enhanced interactivity.
 * - Dynamic support for rendering as `<button>` or `<a>` tag.
 * - Avoids hardcoding sizes, enabling flexibility and adaptability.
 *
 * Why avoid hardcoding sizes?
 * - A reusable component should work in multiple contexts without significant modifications.
 * - By using a `customClass` or inheriting styles, the component can adapt to various layouts and designs.
 * - Centralized size control ensures consistent spacing and alignment across the app.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */


import React from "react";
import styles from "../styles/MetallicButton.module.css";


const MetallicButton = ({ label = "Click Me", gradientClass = "", link = "#", customClass = "" }) => {
  const gradientClassName = styles[gradientClass] || gradientClass; // Use styles for CSS Modules


  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`${styles["metallic-btn"]} ${gradientClassName} ${customClass}`}>
      {/* Shine Effect */}
      <span className="metallic-shine"></span>

      {/* Button Label */}
      <span className="metallic-text">{label}</span>
    </a>
  ) : (
    <button className={`${styles["metallic-btn"]} ${gradientClassName} ${customClass}`}>
      {/* Shine Effect */}
      <span className="metallic-shine"></span>

      {/* Button Label */}
      <span className="metallic-text">{label}</span>
    </button>
  );
};

export default MetallicButton;
