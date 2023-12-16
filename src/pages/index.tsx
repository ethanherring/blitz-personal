import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import styles from "src/styles/Home.module.css"
import TerminalGraphic from "src/core/components/TerminalGraphic"
import Header from "src/core/components/Header"
import ContactMe from "src/core/components/ContactMe"
import Footer from "src/core/components/Footer"
import ReturnCode from "src/mutations/ReturnServerCode"

const Home: BlitzPage = () => {
  const [returnCodeMutation] = useMutation(ReturnCode)
  const [darkModeState, setDarkModeState] = useState(false)
  const [serverText, setServerText] = useState("Loading...")

  const clickChangeDarkMode = () => {
    setDarkModeState(!darkModeState)
  }

  useEffect(() => {
    const getData = async () => {
      const result = await returnCodeMutation()
      setServerText(result)
    }
    void getData()
  }, [])

  return (
    <Layout title="Home">
      <div className={darkModeState ? "bg-white text-black" : "bg-gray-900 text-white"}>
        <div className="pt-4">
          <Header clickChangeDarkMode={clickChangeDarkMode} />
          <div className="w-screen min-h-screen justify-center align-center">
            <div className="flex justify-center z-50">
              <TerminalGraphic />
            </div>
            <div className="flex flex-row justify-center mt-4">
              <div className="italic text-indigo-900 border-dashed border-indigo-500">
                Connect with me!
              </div>
            </div>
            <div className="flex flex-row justify-center -mt-8">
              <div className="ml-14">
                {/*Positioning This Div just to the right of center */}
                <svg
                  width="200"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 125"
                  fill="rgb(100, 102, 233)"
                  enable-background="new 0 0 100 100"
                >
                  <g>
                    <g>
                      <path d="M32.159,30.932c-0.23-1.279-0.297-2.036-0.3-2.067l1.992-0.173c0,0.007,0.063,0.707,0.276,1.886L32.159,30.932z" />
                    </g>
                    <g>
                      <path d="M73.977,66.395c-1.428-0.083-2.842-0.213-4.204-0.386l0.252-1.984c1.317,0.167,2.686,0.293,4.068,0.373L73.977,66.395z     M65.599,65.318c-1.402-0.289-2.786-0.635-4.111-1.028l0.568-1.917c1.272,0.377,2.6,0.709,3.946,0.986L65.599,65.318z     M57.477,62.896c-1.325-0.532-2.625-1.131-3.864-1.781l0.929-1.771c1.179,0.619,2.417,1.189,3.68,1.697L57.477,62.896z     M49.95,58.939c-1.179-0.789-2.326-1.65-3.41-2.56l1.286-1.531c1.028,0.864,2.117,1.681,3.235,2.428L49.95,58.939z M43.431,53.461    c-0.973-1.019-1.907-2.107-2.775-3.234l1.584-1.221c0.826,1.072,1.713,2.106,2.638,3.073L43.431,53.461z M38.233,46.725    c-0.737-1.19-1.431-2.442-2.062-3.722l1.794-0.885c0.603,1.223,1.265,2.418,1.968,3.553L38.233,46.725z M34.468,39.106    c-0.507-1.322-0.959-2.679-1.343-4.033l1.924-0.546c0.368,1.297,0.801,2.597,1.287,3.863L34.468,39.106z" />
                    </g>
                    <g>
                      <path d="M78.232,66.507l-0.008-2c0.648-0.002,1.306-0.014,1.973-0.034l0.063,1.999C79.574,66.493,78.898,66.504,78.232,66.507z" />
                    </g>
                  </g>
                  <g>
                    <path d="M29.933,38.371c-0.072,0-0.146-0.008-0.219-0.024c-0.539-0.121-0.878-0.656-0.758-1.194l1.923-8.592   c0.076-0.338,0.321-0.613,0.648-0.727c0.329-0.113,0.691-0.049,0.959,0.169l5.718,4.655c0.428,0.349,0.493,0.979,0.144,1.407   s-0.979,0.494-1.407,0.144l-4.464-3.634l-1.57,7.014C30.804,38.055,30.391,38.371,29.933,38.371z" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="text-black mx-auto text-center">{serverText}</p>
            <div>
              <ContactMe />
            </div>
          </div>
        </div>
      </div>
      <Footer darkModeState={darkModeState} />
    </Layout>
  )
}

export default Home
