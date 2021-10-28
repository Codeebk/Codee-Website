import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const headingTwo = {
  fontSize: "1.25rem",
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: "Software Development Engineer in Test - Mainline",
    url: "https://www.linkedin.com/company/mainlineesports/mycompany/",
    description: (
      <ul>
        <li>
          Work closely with the QA team to vet solutions and find the ones that
          worked best with Mainline’s esports tournament software
        </li>
        <li>
          Responsible for leading the design and implementation of automated
          test framework with scenario driven real world user tests
        </li>
        <li>
          Created test suite that reduced regression testing time and resources
          from -four days/17 people, to -one day/one person
        </li>
        <li>
          Set up parallel execution of tests to reduce automation runtime by 4x
        </li>
        <li>
          During my first few weeks here I spent my time doing extensive
          research creating POCs to find solutions that work best with Mainline’
          platform to reduce future tech debt
        </li>
        <li>
          Work closely with all engineers to create automation for everyone to
          use that not only speeds up development, but allows for more thorough
          testing which finds and addresses bugs/defects weeks earlier in the
          development cycle
        </li>
      </ul>
    ),
    color: "#E95800",
  },
  {
    text: "Software Engineer - Trintech",
    url: "https://www.linkedin.com/company/trintech/",
    description: (
      <ul>
        <li>
          Using TDD, build Angular 7+ UI for cloud-based financial software
          suite, used by the majority of the Fortune 100
        </li>
        <li>Consume APIs with RESTful Java back end</li>
        <li>
          Deliver user stories on time with performance and localization
          requirements in mind while working in Agile teams following Agile +
          SAFe methodologies
        </li>
        <li>
          Contribute to the complete rewrite of the application UI, so that
          current customers can continue using important accounting software
          after the deprecation of Flash
        </li>
        <li>Ensure accessibility and OWASP standards are met</li>
        <li>
          Write unit tests using Jasmine to increase code coverage to a minimum
          of 90%
        </li>
      </ul>
    ),
    color: "#1099A8",
  },
];

const linksTwo = [
  {
    text: "SnackStalker",
    url: "https://github.com/Codeebk/snackstalker1",
    description: (
      "Worked on a team of two UX designers and two developers to create a full-stack Python application using the Django framework."
    ),
    color: "#E95800",
  },
  {
    text: "Austin Dance Community",
    url: "https://github.com/Codeebk/dance-community-app",
    description: (
      "An app exclusively for learning about and posting dance events (individual project using Node, Express, Mongoose, and MongoDB)"
    ),
    color: "#1099A8",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Codee King
        <br />
        <span style={headingAccentStyles}>— Software Developer </span>
        {/* <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span> */}
      </h1>
      <p style={paragraphStyles}>
        As a software engineer and dancer I use my deeply ingrained passion for
        mastering new techniques to bridge the gap between technology and art.
        Currently based in Austin, TX.
        {/* <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span> */}
      </p>
      <h2 style={headingStyles}>Experience</h2>
      <ul style={listStyles}>
        {/* <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li> */}
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      {/* <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      /> */}
      <h2 style={headingStyles}>Technologies I work with</h2>
      <h4></h4>
      <p style={paragraphStyles}>Automated E2E Testing | Test Driven Development | Unit Testing </p>
      <h4>Languages</h4>
      <p style={paragraphStyles}> JavaScript | Python | SQL </p>
      <h4>Frameworks and Tools</h4>
      <p style={paragraphStyles}>Jasmine | CodeceptJS | Django | Gatsby | Git | GitHub | Azure Dev Ops | Confluence </p>
      <h2 style={headingStyles}>Things I've built</h2>
      {linksTwo.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
    </main>
  );
};

export default IndexPage;
