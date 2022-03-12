interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={"p-2 border text-sm rounded " + className}
    >
      {children}
    </button>
  );
};

export default Button;
