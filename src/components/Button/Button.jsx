import './Button.css';

function Button({ title, onClick, className }) {

  return (
    <div>
       <button
        className={className}
        onClick={onClick}
        tabIndex='0'>
        {title}
      </button>
    </div>
  );
}

export default Button;
