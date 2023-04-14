import Image from "next/image"

const LandingPage = () => {

  return (
    <div>
      <style global jsx>{`
      :root {
        --clr-accent-500: hsl(12, 60%, 45%);
        --clr-accent-400: hsl(12, 88%, 59%);
        --clr-accent-300: hsl(12, 88%, 75%);
        --clr-accent-100: hsl(13, 100%, 96%);

        --clr-primary-400: hsl(228, 39%, 23%);

        --clr-neutral-900: hsl(232, 12%, 13%);
        --clr-neutral-200: hsl(0 0% 97%);
        --clr-neutral-100: hsl(0 0% 100%);

        --ff-primary: 'Be Vietnam Pro', sans-serif;
        --ff-body: var(--ff-primary);
        --ff-heading: var(--ff-primary);

        --fw-regular: 400;
        --fw-semi-bold: 500;
        --fw-bold: 700;

        --fs-300: 0.8125rem;
        --fs-400: 0.875rem;
        --fs-500: 0.9375rem;
        --fs-600: 1rem;
        --fs-700: 1.875rem;
        --fs-800: 2.5rem;
        --fs-900: 3.5rem;

        --fs-body: var(--fs-400);
        --fs-nav: var(--fs-500);
        --fs-button: var(--fs-300);
        --fs-primary-heading: var(--fs-800);
        --fs-secondary-heading: var(--fs-700);

        --size-100: 0.25rem;
        --size-200: 0.5rem;
        --size-300: 0.75rem;
        --size-400: 1rem;
        --size-500: 1.5rem;
        --size-600: 2rem;
        --size-700: 3rem;
        --size-800: 4rem;
        --size-900: 5rem;
      }

      @media (min-width: 50em) {
        :root {
          --fs-body: var(--fs-500);
          --fs-nav: var(--fs-300);
          --fs-primary-heading: var(--fs-900);
          --fs-secondary-heading: var(--fs-800);
        }
      }

      /* General styling */
      body {
        font-size: var(--fs-body);
        font-family: var(--ff-body);
        color: var(--clr-primary-400);
      }

      p {
        opacity: 0.7;
        max-width: 32ch;
      }

      p[data-width='wide'] {
        max-width: 42ch;
      }

      input:where([type='text'], [type='email'], ) {
        border-radius: 100vw;
        border: 0;
        padding: var(--size-300) var(--size-400);
      }

      .button {
        display: inline-flex;
        text-decoration: none;
        border: 0;
        border-radius: 100vmax;
        padding: 1.25em 2.5em;
        line-height: 1;
        cursor: pointer;
        font-size: var(--fs-button);
        background-color: var(--clr-accent-400);
        color: var(--clr-neutral-100);
        box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
      }

      .button:hover,
      .button:focus-visible {
        background-color: var(--clr-accent-300);
      }

      .button[data-type='inverted'] {
        color: var(--clr-accent-400);
        background-color: var(--clr-neutral-100);
      }

      .button[data-type='inverted']:hover,
      .button[data-type='inverted']:focus-visible {
        color: var(--clr-accent-300);
        background-color: var(--clr-neutral-100);
      }

      .button[data-shadow='none'] {
        box-shadow: none;
      }

      /* Navigation */
      .primary-header {
        padding-top: var(--size-700);
      }

      .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .mobile-nav-toggle {
        display: none;
      }

      .nav-list {
        display: flex;
      }

      .nav-list {
        font-size: var(--fs-nav);
        gap: clamp(var(--size-500), 5vw, var(--size-700));
        font-weight: var(--fw-semi-bold);
      }

      .nav-list a {
        text-decoration: none;
        color: var(--clr-primary-400);
      }

      .nav-list a:hover,
      .nav-list a:focus {
        color: var(--clr-accent-400);
      }

      @media (max-width: 50em) {
        .primary-navigation {
          display: none;
          position: fixed;
          padding: var(--size-700);
          inset: 7rem var(--size-400) auto;
          max-width: 25rem;
          margin-inline: auto;
          border-radius: var(--size-100);
          background-color: var(--clr-neutral-100);
          box-shadow: 0 0 0.75em rgb(0, 0, 0, 0.05);
        }

        .primary-header[data-overlay] {
          position: relative;
          z-index: 999;
        }

        .primary-header[data-overlay]::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.8));
        }

        .primary-navigation[data-visible] {
          display: block;
        }

        .nav-list {
          display: grid;
          gap: var(--size-400);
          text-align: center;
          font-weight: var(--fw-bold);
        }

        .mobile-nav-toggle {
          display: block;
          position: fixed;
          right: var(--size-400);
          cursor: pointer;
          z-index: 100;
          background: transparent;
          border: 0;
          padding: 0.5em;

          width: 1.6rem;
          aspect-ratio: 1;
          background-image: url('images/icon-hamburger.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .mobile-nav-toggle[aria-expanded='true'] {
          background-image: url('images/icon-close.svg');
        }
      }

      /*
        Hero image
      */
      .hero__image::after {
        content: '';
        position: absolute;
        background-image: url('images/bg-tablet-pattern.svg');
        background-position: bottom left;
        background-repeat: no-repeat;
        top: 0;
        right: 0;
        aspect-ratio: 1;
        width: 85%;
        max-height: 70vh;
        z-index: -1;
      }

      @media (max-width: 50em) {
        .hero__image {
          order: -1;
        }
      }
      @media (min-width: 50em) {
        .hero__image::after {
          width: 50%;
        }
      }

      /* 
        Sales points
      */
      .sales-points::after {
        content: '';
        position: absolute;
        background-image: url('images/bg-tablet-pattern.svg');
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: cover;
        top: 65%;
        right: -50%;
        aspect-ratio: 1;
        width: 90%;
        max-height: 70vh;
        z-index: -1;
      }

      @media (min-width: 50em) {
        .sales-points::after {
          background-position: top left;
          top: 80%;
          left: -40%;
        }
      }

      /*
        Numbered items
      */
      .numbered-items {
        counter-reset: count;
        width: fit-content;
        margin-inline: auto;
      }

      .numbered-items li {
        counter-increment: count;
      }

      .numbered-items div {
        display: grid;
        grid-template-columns: min-content 1fr;
        align-items: center;
        column-gap: var(--size-400);
      }

      .numbered-items div::before,
      .numbered-items div::after {
        height: 40px;
      }

      .numbered-items div::before {
        content: counter(count, decimal-leading-zero);
        background-color: var(--clr-accent-400);
        color: var(--clr-neutral-100);
        font-weight: var(--fw-bold);
        padding: var(--size-200) var(--size-500);
        border-radius: 100vw;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }

      .numbered-items__title {
        grid-column: 2 / -1;
        grid-row: 1 / 2;
        line-height: 1;
      }

      .numbered-items__body {
        grid-column: 1 / -1;
      }

      @media (max-width: 50em) {
        .numbered-items div::after {
          --bg: var(--clr-accent-100);
          content: '';
          display: block;
          z-index: -1;
          grid-row: 1 / 2;
          grid-column: 1 / -1;
          border-radius: 100vw 0 0 100vw;
          background-color: var(--bg);
          box-shadow: 2em 0 0 var(--bg);
        }
      }

      @media (min-width: 50em) {
        .numbered-items__body {
          grid-column: 2 / -1;
        }
      }

      /*
        Carousel
      */
      .slider {
        display: flex;
        list-style: none;
        gap: var(--size-300);
      }

      .slider > * {
        width: 100%;
        flex: 0 0 auto;
        position: relative;
      }

      .slider img {
        position: relative;
        width: var(--size-800);
        top: calc(var(--size-800) / 2);
        margin-inline: auto;
      }

      .a11y-slider-container {
        margin-block: var(--size-700);
      }

      .a11y-slider-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
      }

      .a11y-slider-dots li {
        display: block;
        width: 12px;
        height: 12px;
        padding: 0;
        margin: 0 6px;
      }

      .a11y-slider-dots li button {
        display: block;
        font-size: 0;
        text-indent: -9999px;
        border: 1px solid var(--clr-accent-400);
        background: transparent;
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }

      .a11y-slider-dots li button.active {
        background: var(--clr-accent-400);
      }

      .slider-content {
        border-radius: var(--size-100);
        background-color: var(--clr-neutral-200);
        padding: var(--size-800);
        margin-block: var(--size-200);
      }

      .a11y-slider-autoplay {
        display: none;
      }

      @media (min-width: 30em) {
        .slider > * {
          width: 50%;
        }

        .a11y-slider-dots {
          display: none;
        }
      }

      @media (min-width: 50em) {
        .slider > * {
          width: 33%;
        }
      }

      @media (min-width: 70em) {
        .slider > * {
          width: 25%;
        }
      }

      /* 
        CTA 
      */
      .cta {
        text-align: center;
        position: relative;
        isolation: isolate;
      }

      .cta::before {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        background-image: url('images/bg-tablet-pattern.svg'),
          url('images/bg-tablet-pattern.svg');
        background-position: -15rem -5rem, 80rem -42rem;
        background-repeat: no-repeat;
        opacity: 0.1;
      }

      @media (min-width: 50em) {
        .cta {
          text-align: left;
        }
      }

      /*
        Footer
      */
      .primary-footer {
        --clr-logo: var(--clr-accent-100);
      }

      .primary-footer-wrapper {
        display: grid;
        gap: var(--size-700);
        grid-template-areas: 'form' 'nav' 'social' 'logo' 'copyright';
      }

      .primary-footer-wrapper > * {
        margin-inline: auto;
      }

      .primary-footer-logo {
        grid-area: logo;
      }

      .primary-footer-social {
        grid-area: social;

        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: var(--size-700);
      }

      .primary-footer-nav {
        grid-area: nav;
      }

      .primary-footer-form {
        grid-area: form;

        display: grid;
        align-content: space-between;
      }

      .primary-footer form {
        display: flex;
        gap: var(--size-200);
      }

      .primary-footer-copyright {
        grid-area: copyright;
      }

      .footer-logo {
        width: 146px;
        height: 24px;
      }

      .footer-nav {
        columns: 2;
      }

      .footer-nav a {
        color: var(--clr-neutral-100);
        text-decoration: none;
      }

      .footer-nav a:is(:hover, :focus) {
        color: var(--clr-accent-400);
      }

      @media (min-width: 50em) {
        .primary-footer-wrapper {
          gap: clamp(var(--size-300), var(--size-400), var(--size-500));
          grid-template-areas:
            'logo nav form'
            'social nav copyright';
        }
      }

      /*
        Social list 
      */
      .social-list {
        display: flex;
        gap: var(--size-400);
      }

      .social-list a:is(:hover, :focus) .social-icon {
        fill: var(--clr-accent-400);
      }

      .social-icon {
        fill: var(--clr-neutral-100);
        aspect-ratio: 1;
        width: var(--size-600);
      }

      @media (min-width: 50em) {
        .social-icon {
          width: var(--size-500);
        }
      }

      /* 
        Utility classes
      */
      .visually-hidden {
        position: absolute;
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      .container {
        --max-width: 1110px;
        --container-padding: 1rem;

        width: min(var(--max-width), 100% - var(--container-padding) * 2);
        margin-inline: auto;
      }

      .even-columns {
        display: grid;
        gap: 1rem;
      }

      @media (min-width: 50em) {
        .even-columns {
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
        }
      }

      .vertical-align-center {
        align-items: center;
      }

      .justify-self-end {
        justify-self: center;
      }

      @media (min-width: 50em) {
        .justify-self-end-md {
          justify-self: end;
        }
      }

      :where(.flow :not(:first-child)) {
        margin-top: var(--flow-spacer, 3em);
      }

      .padding-block-900 {
        padding-block: var(--size-900);
      }

      .padding-block-700 {
        padding-block: var(--size-700);
      }

      .margin-bottom-700 {
        margin-block-end: var(--size-700);
      }

      .text-primary-400 {
        color: var(--clr-primary-400);
      }

      .text-accent-400 {
        color: var(--clr-accent-400);
      }

      .text-accent-100 {
        color: var(--clr-accent-100);
      }

      .text-neutral-100 {
        color: var(--clr-neutral-100);
      }

      .text-neutral-900 {
        color: var(--clr-neutral-900);
      }

      .bg-primary-400 {
        background-color: var(--clr-primary-400);
      }

      .bg-accent-400 {
        background-color: var(--clr-accent-400);
      }

      .bg-accent-100 {
        background-color: var(--clr-accent-100);
      }

      .bg-neutral-100 {
        background-color: var(--clr-neutral-100);
      }

      .bg-neutral-900 {
        background-color: var(--clr-neutral-900);
      }

      .fw-bold {
        font-weight: var(--fw-bold);
      }

      .fw-semibold {
        font-weight: var(--fw-semi-bold);
      }

      .fw-regular {
        font-weight: var(--fw-regular);
      }

      .fs-primary-heading {
        font-size: var(--fs-primary-heading);
        line-height: 1.1;
      }

      .fs-secondary-heading {
        font-size: var(--fs-secondary-heading);
        line-height: 1.1;
      }

      .fs-300 {
        font-size: var(--fs-300);
      }

      .fs-400 {
        font-size: var(--fs-400);
      }

      .fs-500 {
        font-size: var(--fs-500);
      }

      .fs-600 {
        font-size: var(--fs-600);
      }

      .display-sm-none {
        display: none;
      }

      @media (min-width: 50em) {
        .display-md-inline-flex {
          display: inline-flex;
        }
      }

      .text-center {
        text-align: center;
      }

      .text-center p {
        margin-inline: auto;
      }

      @media (max-width: 50em) {
        .text-center-sm-only {
          text-align: center;
        }

        .text-center-sm-only p {
          margin-inline: auto;
        }
      }

      .mx-auto {
        margin-inline: auto;
      }

      .avatar {
        border-radius: 100vh;
      }
    `}
      </style>
      <header className="primary-header">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#">
              <Image alt="" className="footer-logo" src="/logo.svg" />
            </a>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <span className="visually-hidden">Menu</span>
            </button>
            <nav className="primary-navigation" id="primary-navigation">
              <ul aria-label="Primary" role="list" className="nav-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </nav>
            <button className="button | display-sm-none display-md-inline-flex">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="flow text-center-sm-only">
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className="button">Get Started</button>
              </div>
              <div className="hero__image">
                <img
                  className="mx-auto"
                  src="images/illustration-intro.svg"
                  alt="Hero image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sales-points | padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div
                className="flow text-center-sm-only margin-bottom-700"
                style="--flow-spacer: 1.5em"
              >
                <h2 className="fs-secondary-heading fw-bold">
                  What’s different about Manage?
                </h2>
                <p data-width="wide">
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul role="list" className="numbered-items | flow">
                  <li>
                    <div className="flow" style="--flow-spacer: 1em">
                      <h3 className="numbered-items__title | fs-600 fw-bold">
                        Track company-wide progress
                      </h3>
                      <p className="numbered-items__body" data-width="wide">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flow" style="--flow-spacer: 1em">
                      <h3 className="numbered-items__title | fs-600 fw-bold">
                        Advanced built-in reports
                      </h3>
                      <p className="numbered-items__body" data-width="wide">
                        Set internal delivery estimates and track progress toward
                        company goals. Our customisable dashboard helps you build
                        out the reports you need to keep key stakeholders
                        informed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flow" style="--flow-spacer: 1em">
                      <h3 className="numbered-items__title | fs-600 fw-bold">
                        Everything you need in one place
                      </h3>
                      <p className="numbered-items__body" data-width="wide">
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel | padding-block-700 text-center">
          <h2 className="fs-secondary-heading fw-bold">What they’ve said</h2>
          <ul className="slider">
            <li>
              <img className="avatar" src="https://i.pravatar.cc/150?img=5" alt="" />
              <div className="slider-content | flow" style="--flow-spacer: 1em">
                <h3 className="fw-bold">Anisha Li</h3>
                <p>
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </li>
            <li>
              <img className="avatar" src="https://i.pravatar.cc/150?img=6" alt="" />
              <div className="slider-content | flow" style="--flow-spacer: 1em">
                <h3 className="fw-bold">Ali Bravo</h3>
                <p data-width="wide">
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </p>
              </div>
            </li>
            <li>
              <img className="avatar" src="https://i.pravatar.cc/150?img=7" alt="" />
              <div className="slider-content | flow" style="--flow-spacer: 1em">
                <h3 className="fw-bold">Richard Watts</h3>
                <p data-width="wide">
                  “Manage allows us to provide structure and process. It keeps us
                  organized and focused. I can’t stop recommending them to
                  everyone I talk to!”
                </p>
              </div>
            </li>
            <li>
              <img className="avatar" src="https://i.pravatar.cc/150?img=8" alt="" />
              <div className="slider-content | flow" style="--flow-spacer: 1em">
                <h3 className="fw-bold">Shanai Gough</h3>
                <p data-width="wide">
                  “Their software allows us to track, manage and collaborate on
                  our projects from anywhere. It keeps the whole team in-sync
                  without being intrusive.”
                </p>
              </div>
            </li>
          </ul>
          <button className="button">Get Started</button>
        </section>

        <section className="cta | padding-block-700 bg-accent-400 text-neutral-100">
          <div className="container">
            <div className="even-columns vertical-align-center">
              <div>
                <h2 className="fs-primary-heading fw-bold">
                  Simplify how your team works today.
                </h2>
              </div>
              <div className="justify-self-end-md">
                <button className="button" data-type="inverted">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100"
      >
        <div className="container">
          <div className="primary-footer-wrapper">
            <div className="primary-footer-logo">
              <a href="#" aria-label="Home">
                <svg className="footer-logo">
                  <use xlink:href="images/logo.svg#logo"></use>
                </svg>
              </a>
            </div>
            <div className="primary-footer-social">
              <ul className="social-list" role="list" aria-label="Social Links">
                <li>
                  <a aria-label="facebook" href="#">
                    <svg className="social-icon" aria-label="Home">
                      <use
                        xlink:href="images/social-icons.svg#icon-facebook"
                      ></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="youtube" href="#">
                    <svg className="social-icon">
                      <use
                        xlink:href="images/social-icons.svg#icon-youtube"
                      ></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="twitter" href="#">
                    <svg className="social-icon">
                      <use
                        xlink:href="images/social-icons.svg#icon-twitter"
                      ></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="pinterest" href="#">
                    <svg className="social-icon">
                      <use
                        xlink:href="images/social-icons.svg#icon-pinterest"
                      ></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="instagram" href="#">
                    <svg className="social-icon">
                      <use
                        xlink:href="images/social-icons.svg#icon-instagram"
                      ></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="primary-footer-nav">
              <nav className="footer-nav">
                <ul
                  className="flow"
                  style="--flow-spacer: 1em"
                  aria-label="Footer"
                  role="list"
                >
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </nav>
            </div>
            <div className="primary-footer-form">
              <form action="">
                <input type="email" />
                <button className="button" data-shadow="none">Go</button>
              </form>
            </div>
            <div className="primary-footer-copyright">
              <p>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
