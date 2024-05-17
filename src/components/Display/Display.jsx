import './Display.css'

function Display({ text, className }) {
  return (
    <div className='display-container'>
      {text && <p className={className}>{text}</p>} {/* Renderizar el elemento solo si el texto no está vacío */}
    </div>
  );
}

export default Display;
