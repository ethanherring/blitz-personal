const Footer = ({ darkModeState }) => {
  return (
    <div
      className={`w-screen h-20 relative bottom-0 ${darkModeState ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="flex flex-row justify-center text-white">Rights Reserved - Ethan Herring</div>
    </div>
  )
}

export default Footer
