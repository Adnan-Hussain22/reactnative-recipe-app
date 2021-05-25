import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

interface MenuButtonProps {
  onPress: () => void;
  title: string;
  source: any;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, source, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnClickContain}>
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: "row",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
  },
});
