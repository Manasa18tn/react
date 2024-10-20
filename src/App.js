import { format } from "date-fns";
import "./App.css";
import { useState } from "react";

const messages = [
  "Learn React 📚",
  "Apply for job 💼",
  "Invest your new income 🤑",
];
function App() {
  // const step=4;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handelPreveous() {
    if (step > 1) setStep(step - 1);
  }
  function handelNext() {
    if (step < 3) setStep(step + 1);
  }
  function Button({ textcolor, bgcolor, onClick, children }) {
    return (
      <button
        style={{ color: textcolor, backgroundColor: bgcolor }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  function StepMessage({ step, children }) {
    return (
      <div className="message">
        <h3>Step {step}:</h3> {children}
      </div>
    );
  }
  return (
    <>
      <div className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1 </div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step}:{messages[step - 1]}
          </p> */}
          <StepMessage step={step}> {messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handelPreveous}>
              <span>⬅️</span> Previous
            </Button>
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handelNext}>
              Next<span>➡️</span>
            </Button>
          </div>
        </div>
      )}
      {/* <Counter /> */}
    </>
  );
}

function Counter() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);
  let today = new Date();
  // const date = new Date(today);
  today.setDate(today.getDate() + count);
  const formattedDate = format(today, "EEE MMM dd yyyy"); // Mon Jun 21 2027

  // formattedDate.setDate(formattedDate.getDate() + count);
  function handelPreveousStep() {
    if (step > 0) setStep(step - 1);
  }
  function handelNextStep() {
    setStep(step + 1);
  }
  function handelPreveousCounter() {
    setCount(count - step);
  }
  function handelNextStepCounter() {
    setCount(count + step);
  }
  function handelStepnCount() {
    setCount(() => (count = 0));
    setStep(() => (step = 0));
  }
  return (
    <>
      <div className="steps">
        <button
          className="message"
          style={{
            color: "#fff",
            backgroundColor: "#7950f2",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handelStepnCount}
        >
          Reset
        </button>
        <div className="buttons">
          <button
            style={{ color: "#fff", backgroundColor: "#7950f2" }}
            onClick={handelPreveousStep}
          >
            -
          </button>
          <p className="message">Step {step}</p>
          <button
            style={{ color: "#fff", backgroundColor: "#7950f2" }}
            onClick={handelNextStep}
          >
            +
          </button>
          <button
            style={{ color: "#fff", backgroundColor: "#7950f2" }}
            onClick={handelPreveousCounter}
          >
            -
          </button>
          <p className="message">Counter {count}</p>
          <button
            style={{ color: "#fff", backgroundColor: "#7950f2" }}
            onClick={handelNextStepCounter}
          >
            +
          </button>
        </div>
        <p className="message">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{formattedDate}</span>
        </p>
      </div>
    </>
  );
}

export default App;
