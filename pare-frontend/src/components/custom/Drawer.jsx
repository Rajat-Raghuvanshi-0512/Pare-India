const Drawer = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        !isOpen ? 'translate-x-full' : 'translate-x-0'
      } fixed left-0 top-0 z-[100] h-screen w-screen bg-black duration-500`}
    >
      <div className={`fixed w-full `}>
        <div className="relative ml-auto h-full w-[75%]">
          <div className="z-50 h-full w-full bg-red-base px-5 text-white shadow">{children}</div>
        </div>
      </div>
    </div>
    // "bg-transform"
  )
}

export default Drawer
