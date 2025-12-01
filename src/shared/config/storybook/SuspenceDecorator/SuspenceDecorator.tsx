import { Decorator } from "@storybook/react-webpack5";
import { Suspense } from "react";

export const SuspenceDecorator: Decorator = (Story) => {
  return (
    <Suspense>
      <Story />
    </Suspense>
  );
};
