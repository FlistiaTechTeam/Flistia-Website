function Button({ children }) {
  return (
    <button className="btn bg-btn-primary text-white px-15 py-3 rounded-md font-bold hover:bg-btn-hover hover:cursor-pointer drop-shadow-[0_5px_15px_0_rgba(0, 0, 0, 0.25)]">
      {children}
    </button>
  );
}

export default Button;
