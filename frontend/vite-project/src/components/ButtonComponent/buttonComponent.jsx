
import './ButtonComponent.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="greet-button">
      Get Greeting
    </button>
  );
};

export default Button;