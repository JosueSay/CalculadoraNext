import './Button.css';

function Button({ title, onClick, className }) {

  const handleClick = () => {
    onClick();
  };

  const handleKeyDown = (event) => {
    if (event.key === title) {
      onClick();
    }
  };
  return (
    <div>
       <button
        className={className}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
