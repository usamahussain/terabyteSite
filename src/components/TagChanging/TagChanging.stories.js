import { TagChanging } from ".";

export default {
  title: "Components/TagChanging",
  component: TagChanging,
  argTypes: {
    property1: {
      options: ["connectivity", "UI-UX-design", "cloud-migration", "application", "e-commerce"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "connectivity",
  },
};
