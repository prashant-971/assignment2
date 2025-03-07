// Import useState hook
import { useState } from 'react';
import Button from './components/ButtonComponent/buttonComponent'
import Input from './components/inputComponents/inputComponent'
import { getGreeting } from './store/authStore';

// Import CSS for styling
import './App.css'

function App() {

  // State for the input name, greeting message, and any error message
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Function to get greeting from our API when button is clicked
  const handleGetGreeting = async () => {
    const result = await getGreeting(name);
    if (result.error) {
      setError(result.error);
      setMessage('');
    } else {
      setMessage(result.message);
      setError('');
    }
    // Clear the input field after handling the greeting
    setName('');
  };


  return (
    <>
      <div className="app-container">
        <h1>YOUNGLABS GREETER</h1>
        <div className="input-group">
          <Input value={name} onChange={setName} />

          <Button onClick={handleGetGreeting} />
        </div>
        {message && <div className="message success">{message}</div>}
        {error && <div className="message error">{error}</div>}
      </div>
    </>
  )
}

export default App
