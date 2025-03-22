function Button({ children }) {
  return (
    <button className="btn bg-btn-primary text-white px-15 py-3 rounded-md font-bold hover:bg-btn-hover hover:cursor-pointer drop-shadow-md">
      {children}
    </button>
  );
}

export default Button;
