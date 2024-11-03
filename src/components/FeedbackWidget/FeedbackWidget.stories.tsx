import { Meta, StoryFn } from "@storybook/react";

import FeedbackWidget from "./FeedbackWidget";

const FeedbackWidgetBasic: StoryFn<typeof FeedbackWidget> = () => {
  return (
    <FeedbackWidget
      triggerComponent={<button>Click me</button>}
      projectId={""}
    />
  );
};

export default {
  component: FeedbackWidget,
  title: "FeedbackWidgetStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof FeedbackWidget>;

export const FeedbackWidgetStory = FeedbackWidgetBasic.bind({});
FeedbackWidgetStory.storyName = "FeedbackWidgetStory";
