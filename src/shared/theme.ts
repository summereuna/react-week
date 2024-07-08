// import styled from 'styled-components';

const colors = {
  blue: "#3e95ff",
  lightBlue: "#a4cdff",
  whiteBlue: "#f1f7ff",
  green: "#48ff3e",
  lightGreen: "#b6ffb1",
  whiteGreen: "#f3fff1",
  red: "#ff3e3e",
  lightRed: "#ffcccc",
};

const button = {
  btnAdd: `
    border: 1px solid ${colors.blue};
    background-color: ${colors.lightBlue};
    `,
  btnDelete: `
    border: 1px solid ${colors.red};
    background-color: ${colors.lightRed};
    `,
  btnDone: `
    border: 1px solid ${colors.green};
    background-color: ${colors.lightGreen};
    `,
};

const theme = {
  colors,
  button,
};

export default theme;
