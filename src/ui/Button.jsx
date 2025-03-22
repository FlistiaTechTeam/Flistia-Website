function Button({ children, size }) {
  const sizes = {
    small: "text-[0.75rem] px-5 py-2",
    medium: "text-base px-15 py-3",
    large: "text-lg px-20 py-4",
  };

  const sizeClass = sizes[size] || sizes.medium;

  return (
    <button
      className={`btn bg-btn-primary text-white rounded-md font-bold hover:bg-btn-hover hover:cursor-pointer drop-shadow-md ${sizeClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
