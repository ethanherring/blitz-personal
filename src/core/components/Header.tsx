const Header = ({ clickChangeDarkMode }) => {
  return (
    <div className="w-screen ">
      <div className="sticky top-2 min-h-[100px] mx-4 mb-6 p-4">
        <div className="flex flex-row">
          <div className="absolute left-8 top-12 ">
            <h2 className="text-3xl">Ethan Herring</h2>
          </div>

          {/* <div className="relative left-5 top-12" >
            <h2>Menu DropDown</h2>
          </div> */}
          <button className="absolute buttonround right-10 top-11" onClick={clickChangeDarkMode}>
            Light Mode
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
