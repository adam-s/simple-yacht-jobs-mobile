import variable from "./../variables/platform";

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#898989",
      fontSize: variables.noteFontSize
    },
    ".name": {
      fontSize: 12
    },
    ".value": {
      color: "#898989",
      fontSize: 12
    }
  };

  return textTheme;
};
