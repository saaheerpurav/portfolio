"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { TbMessageChatbot, TbChevronDown } from "react-icons/tb";

const chatbotUrl = "https://chatbot.saaheerpurav.com"
//const chatbotUrl = "http://127.0.0.1:5000"

export default function FixedBottom() {
  const { theme, toggleTheme } = useTheme();
  const [windowVis, setWindowVis] = useState(false);
  const [alertVis, setAlertVis] = useState(true);
  const [bubbleVis, setBubbleVis] = useState(false);

  const closeIframe: any = (e: any) => {
    if (e.data === "iframe_close") setWindowVis(false);
  }

  useEffect(() => {
    window.addEventListener("message", closeIframe);

    return () => {
      window.removeEventListener("message", closeIframe);
    };
  }, [])

  return (
    <>
      <div className="fixed bottom-0 right-0 md:bottom-[88px] md:right-5 z-[999]" style={{ display: windowVis ? "block" : "none" }}>
        <iframe src={`${chatbotUrl}/chatbot-iframe?id=c5d8f014`} className="h-[100vh] md:h-[60vh] w-[100vw] md:w-96" id="iframe-window" onLoad={() => { setBubbleVis(true); }}></iframe>
      </div>

      <div className="fixed bottom-5 right-5 flex flex-row">
        {
          alertVis && bubbleVis
            ? <div id="alert-5" className="absolute bottom-[4.5rem] right-[1.5rem] flex flex-row items-center px-4 py-2 whitespace-nowrap rounded-lg bg-blue-500 text-white" role="alert">
              <div className="absolute right-0 bottom-[-15px] w-0 h-0 border-[25px] border-l-[25px] rounded border-r-[0px] border-transparent border-t-blue-500 border-b-0 z-[999]"></div>
              <p className="mr-4">Ask me anything!</p>

              <button className="bg-blue-500" onClick={() => { setAlertVis(false); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="white"
                    d="M2.39705176,2.55378835 L2.46966991,2.46966991 C2.73593648,2.20340335 3.15260016,2.1791973 3.44621165,2.39705176 L3.53033009,2.46966991 L8,6.939 L12.4696699,2.46966991 C12.7625631,2.1767767 13.2374369,2.1767767 13.5303301,2.46966991 C13.8232233,2.76256313 13.8232233,3.23743687 13.5303301,3.53033009 L9.061,8 L13.5303301,12.4696699 C13.7965966,12.7359365 13.8208027,13.1526002 13.6029482,13.4462117 L13.5303301,13.5303301 C13.2640635,13.7965966 12.8473998,13.8208027 12.5537883,13.6029482 L12.4696699,13.5303301 L8,9.061 L3.53033009,13.5303301 C3.23743687,13.8232233 2.76256313,13.8232233 2.46966991,13.5303301 C2.1767767,13.2374369 2.1767767,12.7625631 2.46966991,12.4696699 L6.939,8 L2.46966991,3.53033009 C2.20340335,3.26406352 2.1791973,2.84739984 2.39705176,2.55378835 L2.46966991,2.46966991 L2.39705176,2.55378835 Z">
                  </path>
                </svg>
              </button>
            </div>
            : null
        }

        <button className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
          onClick={toggleTheme} title="Switch Theme">
          {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>

        {
          bubbleVis
            ? <button className="bg-white w-[3rem] h-[3rem] ml-4 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
              onClick={() => { setWindowVis(!windowVis); setAlertVis(false); }} title="Chatbot">
              {
                windowVis
                  ? <TbChevronDown size={23} />
                  : <TbMessageChatbot size={23} />
              }
            </button>
            : null
        }

      </div>
    </>
  );
}
