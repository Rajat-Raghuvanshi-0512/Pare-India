const Button = ({ children, className, onClick, type = 'solid' }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type === 'solid' ? 'bg-red-base px-5 text-white' : 'border-2 border-red-base'
      } px-3 py-2 font-montserrat uppercase ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default Button
