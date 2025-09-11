import { Decorator } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";

export const StyleDecorator: Decorator = (Story) => {
  return (
      <>
          <Story />
      </>
  );
};
