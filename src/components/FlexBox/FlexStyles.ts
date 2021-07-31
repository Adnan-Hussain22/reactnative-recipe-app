import { StyleSheet, FlexStyle } from "react-native";

const flexContainer: FlexStyle = {
  flex: 1,
};

const noFlex: FlexStyle = {
  flex: 0,
};

const flexGrow: FlexStyle = {
  flexGrow: 1,
};

const flexDirectionRow: FlexStyle = {
  flexDirection: "row",
};

const flexWrap: FlexStyle = {
  flexWrap: "wrap",
};

const justifyContentFlexStart: FlexStyle = {
  justifyContent: "flex-start",
};

const justifyContentCenter: FlexStyle = {
  justifyContent: "center",
};

const justifyContentSpaceBetween: FlexStyle = {
  justifyContent: "space-between",
};

const justifyContentSpaceAround: FlexStyle = {
  justifyContent: "space-around",
};

const justifyContentFlexEnd: FlexStyle = {
  justifyContent: "flex-end",
};

const alignItemsFlexStart: FlexStyle = {
  alignItems: "flex-start",
};

const alignItemsCenter: FlexStyle = {
  alignItems: "center",
};

const alignItemsFlexEnd: FlexStyle = {
  alignItems: "flex-end",
};

const alignSelfFlexStart: FlexStyle = {
  alignSelf: "flex-start",
};

const alignSelfCenter: FlexStyle = {
  alignSelf: "center",
};

const alignSelfFlexEnd: FlexStyle = {
  alignSelf: "flex-end",
};

const flexRow: FlexStyle = {
  ...flexContainer,
  ...flexDirectionRow,
};

const flexCenter: FlexStyle = {
  ...alignItemsCenter,
  ...flexContainer,
  ...justifyContentCenter,
};

const FlexStyles = StyleSheet.create({
  alignItemsCenter,
  alignItemsFlexEnd,
  alignItemsFlexStart,
  alignSelfCenter,
  alignSelfFlexEnd,
  alignSelfFlexStart,
  flexCenter,
  flexContainer,
  flexDirectionRow,
  flexGrow,
  flexRow,
  flexWrap,
  justifyContentCenter,
  justifyContentFlexEnd,
  justifyContentFlexStart,
  justifyContentSpaceAround,
  justifyContentSpaceBetween,
  noFlex,
});

export default FlexStyles;
