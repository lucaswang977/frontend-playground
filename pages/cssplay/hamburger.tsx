import { useState } from 'react'

const Hamburger = () => {
  const [buttonOneState, setButtonOneState] = useState(false)
  const [buttonTwoState, setButtonTwoState] = useState(false)
  const [buttonThreeState, setButtonThreeState] = useState(false)

  return (
    <div className="container">
      <style global jsx>{`
      body {
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .container {
        width: 500px;
        height: 300px;
        background-color: azure;
        box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
      }
      button {
        background-color: transparent;
        border: 4px solid var(--color-button, #000);
        border-radius: 8px;
      }

      /*
       Button One
      */
      .button-one {
        --color-button: #333;
      }

      .button-one .line {
        fill: var(--color-button);
        transform-origin: center;
      }

      .button-one[data-state='true'] .line {
        transition: y 100ms ease-in, rotate 100ms ease-in 100ms, opacity 0ms 100ms;
      }

      .button-one .line {
        transition: y 100ms ease-in 100ms, rotate 100ms ease-in, opacity 100ms;
      }

      .button-one[data-state='true'] :is(.top, .bottom) {
        y: 45;
      }

      .button-one[data-state='true'] .top {
        rotate: 45deg;
      }

      .button-one[data-state='true'] .middle {
        opacity: 0;
      }

      .button-one[data-state='true'] .bottom {
        rotate: -45deg;
      }

      /*
        Button Two
      */
      .button-two {
        --color-button: #222;
        --anim-duration: 300ms;
      }

      .button-two[data-state='false'] .line {
        animation: to-close-icon var(--anim-duration) forwards;
      }

      .button-two[data-state='true'] .line {
        animation: to-open-icon var(--anim-duration) forwards;
      }

      .button-two .hamburger {
        transition: rotate var(--anim-duration);
      }

      .button-two[data-state='true'] .hamburger {
        rotate: 1turn;
      }

      .button-two .top {
        --rotate: -45deg;
        transform-origin: 65px 45px;
      }

      .button-two .bottom {
        --rotate: 45deg;
        transform-origin: 60px 55px;
      }

      @keyframes to-open-icon {
        0% {
          stroke-dashoffset: 0;
        }
        40% {
          stroke-dashoffset: 79;
        }
        /* 60% {stroke-dashoffset: 79; rotate: 1turn;} */
        100% {
          stroke-dashoffset: 0;
          rotate: var(--rotate);
        }
      }

      @keyframes to-close-icon {
        0% {
          stroke-dashoffset: 0;
          rotate: var(--rotate);
        }
        /* 40% {stroke-dashoffset: 79;rotate: 1turn;} */
        40% {
          stroke-dashoffset: 79;
          rotate: 0deg;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }

      /*
        Button three
      */
      .button-three {
        --color-button: #333;
      }

      .button-three .line {
        transition: 300ms;
        stroke-dasharray: 60 32 60 300;
      }

      .button-three[data-state='true'] .line {
        stroke-dasharray: 60 77 60 300;
        stroke-dashoffset: -92;
        translate: -6px 10px;
        rotate: 45deg;
        transform-origin: center;
      }
    `}
      </style>
      <button
        className="anim-button button-one"
        aria-controls="primary-navigation"
        aria-expanded="false"
        data-state={buttonOneState}
        onClick={() => setButtonOneState(!buttonOneState)}
      >
        <svg className="hamburger" viewBox="0 0 100 100" width="50px">
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="6"
          ></rect>
          <rect
            className="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="6"
          ></rect>
          <rect
            className="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="6"
          ></rect>
        </svg>
      </button>

      <button
        className="anim-button button-two"
        data-state={buttonTwoState}
        onClick={() => setButtonTwoState(!buttonTwoState)}
      >
        <svg
          className="hamburger"
          stroke="var(--color-button)"
          viewBox="0 0 100 100"
          width="50px"
        >
          <line
            className="line top"
            x1="90"
            x2="10"
            y1="40"
            y2="40"
            strokeLinecap="round"
            strokeWidth="10"
            strokeDasharray="80"
            strokeDashoffset="0"
          ></line>
          <line
            className="line bottom"
            x1="10"
            x2="90"
            y1="60"
            y2="60"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="0"
          ></line>
        </svg>
      </button>

      <button
        className="anim-button button-three"
        data-state={buttonThreeState}
        onClick={() => setButtonThreeState(!buttonThreeState)}
      >
        <svg
          stroke="var(--color-button)"
          fill="none"
          viewBox="0 0 100 100"
          width="50px"
        >
          <path
            className="line"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 20 60 h 60 a 10 10 0 0 0 0 -20 h -60 a 10 10 0 0 1 0 -30 h 30 v 60"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Hamburger
