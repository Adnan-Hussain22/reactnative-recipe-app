import FlexStyles from "./FlexStyles";

export const shouldFlexOrNot = (noFlex = false) =>
  noFlex ? FlexStyles.noFlex : undefined;
