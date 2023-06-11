const Drawer = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        !isOpen ? 'translate-x-full' : 'translate-x-0'
      } fixed left-0 top-0 z-[1000] w-screen bg-black bg-opacity-60 transition-transform duration-500`}
    >
      <div className={`fixed w-full bg-black`}>
        <div className="relative ml-auto h-full w-[75%] ">
          <div className="z-50 h-full w-full bg-red-base px-5 text-white shadow">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
