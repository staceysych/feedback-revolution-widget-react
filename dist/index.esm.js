import React, { useState } from 'react';

var FeedbackWidget = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = useState(""), feedback = _b[0], setFeedback = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (feedback) {
            onSubmit(feedback);
            setFeedback("");
        }
    };
    return (React.createElement("div", null,
        React.createElement("h3", null, "Leave your feedback"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("textarea", { value: feedback, onChange: function (e) { return setFeedback(e.target.value); }, placeholder: "Enter your feedback" }),
            React.createElement("button", { type: "submit" }, "Submit"))));
};

export { FeedbackWidget as default };
