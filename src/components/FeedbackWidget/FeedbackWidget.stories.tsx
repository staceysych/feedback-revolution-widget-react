import { Meta, StoryFn } from "@storybook/react";
import { RatingIconType } from "../../types/common";
import FeedbackWidget from "./FeedbackWidget";

const FeedbackWidgetBasic: StoryFn<typeof FeedbackWidget> = (args) => {
  return (
    <FeedbackWidget
      {...args}
      triggerComponent={<button className={`${args.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-4 py-2 rounded-lg border hover:opacity-80 transition-opacity`}>Click me</button>}
    />
  );
};

export default {
  component: FeedbackWidget,
  title: "FeedbackWidgetStory",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    darkMode: {
      control: 'boolean',
      description: 'Enable dark mode',
      defaultValue: false,
    },
    ratingIconType: {
      control: 'select',
      options: Object.values(RatingIconType),
      description: 'Type of rating icons to display',
      defaultValue: RatingIconType.Stars,
    },
  },
} as Meta<typeof FeedbackWidget>;

export const FeedbackWidgetStory = FeedbackWidgetBasic.bind({});
FeedbackWidgetStory.storyName = "FeedbackWidgetStory";
FeedbackWidgetStory.args = {
  darkMode: false,
  ratingIconType: RatingIconType.Stars,
  projectId: "",
};
