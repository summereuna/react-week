const colors = {
  darkBlue: "#0061d6",
  blue: "#3e95ff",
  lightBlue: "#a4cdff",
  whiteBlue: "#f1f7ff",
  green: "#48ff3e",
  lightGreen: "#b6ffb1",
  whiteGreen: "#f3fff1",
  red: "#ff3e3e",
  lightRed: "#ffcccc",
  grey: "#d3d3d3",
  lightGrey: "#EFEFEF",
};

const button = {
  btnAdd: {
    borderColor: colors.blue,
    backgroundColor: colors.lightBlue,
  },
  btnDelete: {
    borderColor: colors.red,
    backgroundColor: colors.lightRed,
  },
  btnDone: {
    borderColor: colors.green,
    backgroundColor: colors.lightGreen,
  },
  btnDefault: {
    borderColor: colors.grey,
    backgroundColor: colors.lightGrey,
  },
};

const buttonShape = {
  square: {
    borderRadius: "8px",
    minWidth: "5rem",
  },
  circle: {
    borderRadius: "20px",
    minWidth: "2rem",
  },
};

const theme = {
  colors,
  button,
  buttonShape,
};

export default theme;
