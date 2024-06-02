import { useState } from "react";
import patternCircles from "./images/pattern-circles.svg";
import iconCheck from "./images/icon-check.svg";
import MyAwesomeThemeComponent from "./components/ThemeComponent";
import Switch from "./components/Switch";

function App() {
  const [isYearly, setIsYearly] = useState();
  const [value, setValue] = useState(3);



  const data = {
    1: {
      pageviews: "10k",
      money: "8",
    },
    2: {
      pageviews: "50k",
      money: "12",
    },
    3: {
      pageviews: "100k",
      money: "16",
    },
    4: {
      pageviews: "500k",
      money: "24",
    },
    5: {
      pageviews: "1M",
      money: "36",
    },
  };


/*


textColor: {
        'heading': "hsl(227, 35%, 25%)",
        'paragraph': "hsl(225, 20%, 60%)",
        'discount-text': 'hsl(15, 100%, 70%)',
        'cta-text': 'hsl(226, 100%, 87%)',
        // Dark mode text colors
        'dark-heading': 'hsl(226, 40%, 90%)',
        'dark-paragraph': 'hsl(226, 30%, 70%)',
        'dark-discount-text': 'hsl(15, 100%, 50%)',
        'dark-cta-text': 'hsl(226, 100%, 90%)',
      },
      backgroundColor: {
        'discount-background': 'hsl(14, 92%, 95%)',
        'main-background': 'hsl(230, 100%, 99%)',
        'cta-background': 'hsl(227, 35%, 25%)',
        // Dark mode background colors
        'dark-background': 'hsl(227, 35%, 15%)',
        'dark-discount-background': 'hsl(14, 50%, 25%)',
        'dark-cta-background': 'hsl(227, 25%, 35%)',
      },



*/


  return (
    <div className="font-sans flex items-center justify-center min-h-screen bg-cover bg-center bg-main-background dark:bg-dark-background">
      <div className="flex flex-col gap-12  rounded-lg p-8 w-full max-w-2xl">
      <MyAwesomeThemeComponent />
        <div className="text-center flex items-center justify-center">
          <img
            src={patternCircles}
            alt="Pattern Circles"
            className=" absolute top-8 size-28"
          />
          <div className="relative pb-4 -mt-12">
            <h2 className=" text-2xl font-sans font-bold mb-2 text-heading dark:text-dark-heading">
              Simple, traffic-based pricing
            </h2>
            <p className=" mb-6 text-paragraph">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg dark:bg-[#292F49]">
          <div className="rounded-lg p-6 mb-6">
            <div className="flex flex-row items-center justify-between mb-4 pl-5 pt-4">
              <p className="text-paragraph  dark:text-dark-paragraph">{data[value].pageviews} PAGEVIEWS</p>
              <div className="flex flex-row ">
                <p className="text-4xl font-bold text-heading dark:text-dark-heading">${isYearly ? (parseInt(data[value].money) * 0.75) : data[value].money}.00 </p>
                <p className="text-lg font-normal text-center pt-2 pl-2 text-paragraph dark:text-dark-heading">
                  {" "}
                  /month
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mb-4 pt-6">
              <input
              defaultValue={3}
                type="range"
                className="slider"
                min={1}
                max={5}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center gap-5 pt-6">
              <p className="text-paragraph dark:text-dark-paragraph">Monthly Billing</p>
              {/* <button onClick={()=>setIsYearly(!isYearly)}>Switch</button> */}
              <Switch isYearly={isYearly} setIsYearly={setIsYearly} />
              <p className="text-paragraph dark:text-dark-paragraph">
                Yearly Billing{" "}
                <span className="text-discount-text dark:text-[#E5734D] dark:bg-[#493835] text-sm bg-discount-background font-semibold px-2 rounded-2xl p-1">
                  25% discount
                </span>
              </p>
            </div>
          </div>
          <div className="border-solid border-b  dark:border-gray-700" />
          <div className="flex flex-row gap-6 items-center justify-between px-7 pt-4">
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <img src={iconCheck} alt="Check" className="mr-3" />
                <span className="text-paragraph dark:text-dark-paragraph">Unlimited websites</span>
              </li>
              <li className="flex items-center">
                <img src={iconCheck} alt="Check" className="mr-3" />
                <span className="text-paragraph dark:text-dark-paragraph">100% data ownership</span>
              </li>
              <li className="flex items-center">
                <img src={iconCheck} alt="Check" className="mr-3" />
                <span className="text-paragraph dark:text-dark-paragraph">Email reports</span>
              </li>
            </ul>
            <div className="text-center pr-6 pb-4">
              <button className="bg-cta-background dark:bg-[#16192b] text-cta-text dark:text-dark-cta-text font-semibold px-9 text-sm py-2 rounded-full">
                Start my trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
