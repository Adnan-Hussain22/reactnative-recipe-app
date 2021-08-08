import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrow = (props: any) => (
  <Svg width={12} height={20} {...props}>
    <Path
      d="M4.05 10.099l7.7-7.882c.2-.197.2-.493 0-.69l-1.4-1.38a.488.488 0 0 0-.7 0l-7.8 7.981c-.1 0-.2.099-.3.099L.15 9.606c-.2.197-.2.493 0 .69l9.6 9.556c.2.197.5.197.7 0l1.4-1.38c.2-.098.2-.393 0-.59l-7.8-7.783z"
      fill={props.color}
      fillRule="evenodd"
    />
  </Svg>
);

export default BackArrow;
