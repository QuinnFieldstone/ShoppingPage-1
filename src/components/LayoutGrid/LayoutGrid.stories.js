import { LayoutGrid } from ".";

export default {
  title: "Components/LayoutGrid",
  component: LayoutGrid,
  argTypes: {
    style: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "outlined",
  },
};
