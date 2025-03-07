
import './InputComponent.css';

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="name-input"
    />
  );
};

export default Input;