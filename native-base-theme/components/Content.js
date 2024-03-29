import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: "transparent",
    "NativeBase.Segment": {
      borderWidth: 0,
      backgroundColor: "transparent"
    },
    ".backgroundWhite": {
      backgroundColor: "white"
    }
  };

  return contentTheme;
};
