import React, { FC } from "react";
import { useRecipeIngrediantForm } from "src/hooks";
import { RecipeIngredientsFormContextType } from "src/providers";

export function ConnectRecipeIngrediantForm<S, P>(
  mapStateToProps: (state: RecipeIngredientsFormContextType) => S
) {
  return function (WrappedComponent: FC<P>) {
    return function (props: P) {
      const state = useRecipeIngrediantForm();
      return <WrappedComponent {...props} {...mapStateToProps(state)} />;
    };
  };
}
