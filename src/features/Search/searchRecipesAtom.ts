import { atom } from "recoil";

export const searchRecipesAtom = atom({
  key: "searchScreenQuery",
  default: {
    type: "Recipe",
    query: "",
  },
});
