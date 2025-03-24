import "@/css/Button.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="Button">
      {children}
    </button>
  );
}