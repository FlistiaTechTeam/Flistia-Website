/**
 * Optimizes image loading by providing proper dimensions and loading attributes
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} className - Additional CSS classes
 * @param {boolean} priority - Whether to load the image with priority
 * @returns {Object} - Optimized image props
 */
export const getOptimizedImageProps = (
  src,
  alt,
  width,
  height,
  className = "",
  priority = false
) => ({
  src,
  alt,
  width,
  height,
  className,
  loading: priority ? "eager" : "lazy",
  decoding: priority ? "sync" : "async",
  fetchPriority: priority ? "high" : "auto",
});

/**
 * Generates responsive image sizes for different viewports
 * @param {number} baseWidth - Base image width
 * @param {number} baseHeight - Base image height
 * @returns {string} - Responsive sizes attribute
 */
export const getResponsiveSizes = (baseWidth, baseHeight) => {
  const aspectRatio = baseHeight / baseWidth;
  return `(max-width: 640px) ${baseWidth * 0.8}px,
          (max-width: 1024px) ${baseWidth * 0.9}px,
          ${baseWidth}px`;
};

/**
 * Generates srcset for responsive images
 * @param {string} src - Base image source
 * @param {number[]} widths - Array of desired widths
 * @returns {string} - srcset attribute value
 */
export const getSrcSet = (src, widths) => {
  return widths.map((width) => `${src}?w=${width} ${width}w`).join(", ");
};
