import { Meta, StoryFn } from "@storybook/react";

import ReviewCardsSlider from "./ReviewCardsSlider";

const ReviewCardsSliderBasic: StoryFn<typeof ReviewCardsSlider> = () => {
  return <ReviewCardsSlider projectId="507f1f77bcf86cd799439011" />;
};

export default {
  component: ReviewCardsSlider,
  title: "ReviewCardsSliderStory",
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ReviewCardsSlider>;

export const ReviewCardsSliderStory = ReviewCardsSliderBasic.bind({});
ReviewCardsSliderStory.storyName = "ReviewCardsSliderStory";
