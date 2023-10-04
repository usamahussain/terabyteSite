import { LogoAnimation } from ".";

export default {
  title: "Components/LogoAnimation",
  component: LogoAnimation,
  argTypes: {
    property1: {
      options: ["design-agency", "software-development", "networks"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "design-agency",
    className: {},
    symbolicClassName: {},
    unionClassName: {},
    union: "https://c.animaapp.com/VAe68flz/img/union-4.svg",
    frameClassName: {},
    frameClassNameOverride: {},
    teraByteClassName: {},
    allRightsClassName: {},
    groupClassName: {},
    overlapGroupClassName: {},
    divClassName: {},
    ellipseClassName: {},
    divClassNameOverride: {},
    divClassName1: {},
  },
};
