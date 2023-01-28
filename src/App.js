import React from 'react';
import './style.css';

const InputRef = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default function App() {
  const buttonRef = React.useRef('');

  const handleClick = () => {
    buttonRef.current.focus();
  };

  return (
    <div>
      <h1>Simple ForwardRef useCase</h1>
      <p>Start editing to see some magic happen :)</p>
      <InputRef ref={buttonRef} /> &nbsp;
      <button onClick={() => handleClick()}>SendingRef</button>
    </div>
  );
}
