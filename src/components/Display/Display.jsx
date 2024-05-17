import './Display.css'

function Display({ text, className }) {
  return (
    <div className='display-container'>
      <p className={className}>{text}</p>
    </div>
  );
}

export default Display;
