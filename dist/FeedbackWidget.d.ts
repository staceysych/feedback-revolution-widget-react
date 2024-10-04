import React from "react";
type FeedbackWidgetProps = {
    onSubmit: (feedback: string) => void;
};
declare const FeedbackWidget: React.FC<FeedbackWidgetProps>;
export default FeedbackWidget;
