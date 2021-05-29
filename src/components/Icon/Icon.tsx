import * as React from "react";
import { StyleProp, TextStyle } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Zocial from "@expo/vector-icons/Zocial";

const IconPayload: any = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  Octicons,
  SimpleLineIcons,
  Foundation,
  Zocial,
};

interface IIconPayload {
  AntDesign: string;
  Entypo: string;
  EvilIcons: string;
  Feather: string;
  MaterialCommunityIcons: string;
  MaterialIcons: string;
  FontAwesome: string;
  FontAwesome5: string;
  Fontisto: string;
  Ionicons: string;
  Octicons: string;
  SimpleLineIcons: string;
}

export interface IconProps {
  type: keyof IIconPayload;
  name: string;
  style?: StyleProp<TextStyle>;
}

const Icon = ({ type, ...props }: IconProps) => {
  const GetIcon = IconPayload[type] as any;
  return <GetIcon {...props} />;
};

export type IconTypes = keyof IIconPayload;

export default Icon;
