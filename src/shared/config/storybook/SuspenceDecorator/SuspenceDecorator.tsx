import { Decorator } from "@storybook/react";
import { Suspense } from "react";

export const SuspenceDecorator: Decorator = (Story) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Story />
  </Suspense>
);