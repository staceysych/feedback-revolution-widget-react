import { Meta, StoryFn } from "@storybook/react";

import ReviewCards from "./ReviewCards";

const ReviewCardsBasic: StoryFn<typeof ReviewCards> = () => {
  return <ReviewCards projectId="111" />;
};

export default {
  component: ReviewCards,
  title: "ReviewCardsStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ReviewCards>;

export const ReviewCardsStory = ReviewCardsBasic.bind({});
ReviewCardsStory.storyName = "ReviewCards";
