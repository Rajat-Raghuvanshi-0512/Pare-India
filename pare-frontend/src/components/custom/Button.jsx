const Button = ({ children, className, onClick, type = 'solid' }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type === 'solid'
          ? 'border-2 border-red-base bg-red-base px-5 text-white hover:border-red-base hover:bg-white hover:text-red-base'
          : 'border-2 border-red-base hover:bg-red-base hover:text-white'
      } px-3 py-2 font-montserrat text-xs uppercase duration-200 md:text-base ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default Button
