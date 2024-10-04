'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FeedbackWidget = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = React.useState(""), feedback = _b[0], setFeedback = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (feedback) {
            onSubmit(feedback);
            setFeedback("");
        }
    };
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("h3", null, "Leave your feedback"),
        React__default["default"].createElement("form", { onSubmit: handleSubmit },
            React__default["default"].createElement("textarea", { value: feedback, onChange: function (e) { return setFeedback(e.target.value); }, placeholder: "Enter your feedback" }),
            React__default["default"].createElement("button", { type: "submit" }, "Submit"))));
};

module.exports = FeedbackWidget;
