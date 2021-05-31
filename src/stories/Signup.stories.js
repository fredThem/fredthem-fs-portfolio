import React from "react";

import SignUp from "../components/pages/user/Signup";

export default {
  title: "Pages/Sign up",
  component: SignUp,
};
const Template = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {};
