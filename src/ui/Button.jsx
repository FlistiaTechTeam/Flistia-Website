function Button({ children, size, className = "", ariaLabel, ...props }) {
  const sizes = {
    small: "text-[0.75rem] px-5 py-2",
    medium: "text-base px-15 py-3",
    large: "text-lg px-20 py-4",
  };

  const sizeClass = sizes[size] || sizes.medium;

  return (
    <button
      className={`btn bg-btn-primary text-white rounded-md font-bold hover:bg-btn-hover hover:cursor-pointer drop-shadow-md ${sizeClass} min-h-[44px] min-w-[44px] ${className}`}
      aria-label={ariaLabel || children}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
