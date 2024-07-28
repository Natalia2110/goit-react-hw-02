import { useEffect, useState } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Option";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  //   let clicks = 0;

  const [forms, setForms] = useState(() => {
    const localStorageValue = window.localStorage.getItem("formsValue");
    // console.log(localStorageValue);
    if (localStorageValue !== null) {
      return JSON.parse(localStorageValue);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    // console.log("state");
    window.localStorage.setItem("formsValue", JSON.stringify(forms));
  }, [forms]);

  const totalFeedback = forms.good + forms.neutral + forms.bad;
  const positiveFeedback = Math.round((forms.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setForms((forms) => ({
      ...forms,
      [feedbackType]: forms[feedbackType] + 1,
    }));
  };
  //   const resetFeedback = (resetForms) => {
  //     setForms({
  //       ...forms,
  //       good: resetForms.good,
  //       neutral: resetForms.neutral,
  //       bad: resetForms.bad,
  //     });
  //   };
  const resetFeedback = () => {
    setForms({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description title="Sip Happens Café" />
      <Options
        total={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          good={forms.good}
          neutral={forms.neutral}
          bad={forms.bad}
          total={totalFeedback}
          updateFeedback={updateFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
