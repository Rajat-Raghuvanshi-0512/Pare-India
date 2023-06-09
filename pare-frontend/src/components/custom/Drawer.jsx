const Drawer = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        !isOpen ? '-translate-x-full' : 'translate-x-0'
      } fixed left-0 top-0 z-[1000] w-screen rounded-3xl bg-opacity-20 p-3 transition-transform duration-500`}
    >
      <div className={` fixed left-[10px] top-5 w-[95%] rounded-3xl md:max-w-lg`}>
        <div className="relative h-full w-full md:h-auto ">
          <div className=" z-50 h-full w-full rounded-3xl border-4 border-black bg-white px-5 shadow">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
