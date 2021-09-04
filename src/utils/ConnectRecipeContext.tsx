/* eslint-disable no-unused-vars */
import React, { FC } from "react";
import { useRecipeIngrediantForm } from "src/hooks";

type MapStateToProps = (state: any) => any;

export function ConnectRecipeIngrediantForm<T>(
  mapStateToProps: MapStateToProps
) {
  return function (WrappedComponent: FC<T>) {
    return function (props: T) {
      const state = useRecipeIngrediantForm();
      return <WrappedComponent {...props} {...mapStateToProps(state)} />;
    };
  };
}
