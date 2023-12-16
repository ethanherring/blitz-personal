import { useEffect, useRef, useState } from "react"
import BlinkingCursor from "./BlinkingCursor"
import link from "next/link"

// const minimizeTerminal = (minimizedState: boolean) => {
//   setMinimized(!minimizedState);
// }

const MinimizedTerminal = ({ minimizeTerminal, closeTerminal }) => {
  return (
    <div className="h-24">
      <div className="flex flex-row justify-center align-center rounded-lg shadow-lg bg-gray-800 text-white overflow-hidden">
        <div className="flex justify-start items-center p-3 bg-gray-800">
          <div
            onClick={() => closeTerminal()}
            className="h-3 w-3 rounded-full bg-red-500 mr-2"
          ></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <div
            onClick={() => minimizeTerminal()}
            className="h-3 w-3 rounded-full bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  )
}

const MaximizedTerminal = ({ text, minimizeTerminal, closeTerminal }) => {
  const [maximize, setMaximize] = useState(false)

  let tailwind_size_variable = "w-1/2 max-w[500px]"

  const maximizeTerminal = () => {
    setMaximize(!maximize)
    if (maximize === true) {
      let tailwind_size_variable = "w-screen h-screen"
    } else {
      let tailwind_size_variable = ""
    }
  }
  // w-1/2
  return (
    <div className={`${tailwind_size_variable} min-w-fit flex flex-col items-center`}>
      <div className="w-full mx-auto mt-10 bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-start items-center p-3 bg-gray-800">
          <div
            onClick={() => closeTerminal()}
            className="h-3 w-3 rounded-full bg-red-500 mr-2"
          ></div>
          <div
            onClick={() => minimizeTerminal()}
            className="h-3 w-3 rounded-full bg-yellow-500 mr-2 hover:border-dashed"
          ></div>
          <div
            onClick={() => maximizeTerminal()}
            className="h-3 w-3 rounded-full bg-green-500"
          ></div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <pre className="text-white">
            <code className="text-white">
              {" "}
              {`> echo "Hi, I'm Ethan"`}
              {`\n\n Hi, I'm `}
              <span className="text-indigo-500">Ethan</span>
              {`\n\n> I'm `}
              <span className="text-indigo-500">
                {text}
                <BlinkingCursor />
              </span>
              {`\n`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

const TerminalGraphic = () => {
  const [terminalClosed, setTerminalClosed] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [text, setText] = useState("")
  //const [words, setWords] = useState([
  // "a developer",
  //  "a problem solver",
  //  "a data nerd",
  //  "a creator",
  //  "a team player",
  //)]
  const words = [
    "a developer",
    "a problem solver",
    "a data nerd",
    "a creator",
    "a team player",
  ]


  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<any>(null)

  const minimizeTerminal = () => {
    setMinimized(!minimized)
  }

  const closeTerminal = () => {
    setTerminalClosed(!terminalClosed)
  }

  // This Function Loops through each word in words and types out the word one letter at a time
  const typeWord = (index) => {
    let currentWord = words[index] ?? "Loading..."
    let currentLetterIndex = 0
    setText("")

    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (currentLetterIndex < currentWord.length) {
        currentLetterIndex++
        setText((prevText) => prevText + currentWord[currentLetterIndex - 1])
      } else {
        clearInterval(intervalRef.current)
        setTimeout(() => {
          const nextIndex = (index + 1) % words.length
          setCurrentIndex(nextIndex)
          typeWord(nextIndex)
        }, 2000)
      }
    }, 50)
  }

  useEffect(() => {
    typeWord(currentIndex)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [currentIndex])

  if (minimized === true && terminalClosed === false) {
    return <MinimizedTerminal minimizeTerminal={minimizeTerminal} closeTerminal={closeTerminal} />
  } else if (minimized === false && terminalClosed === false) {
    return (
      <MaximizedTerminal
        text={text}
        minimizeTerminal={minimizeTerminal}
        closeTerminal={closeTerminal}
      />
    )
  }
}

export default TerminalGraphic
