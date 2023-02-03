import { useMultistepForm } from "./useMultistepForm"

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <div>one</div>,
    <div>two</div>,
  ])
  return (
    <div className="relative bg-white border p-4 rounded-md my-8 mx-auto max-w-xl">
      <form action="">
        <div className="absolute top-0 right-0 p-4">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="my-2 flex justify-end gap-3">
          {!isFirstStep && <button type="button" onClick={back} className="border py-1 px-4 rounded-md">Back</button>}
          <button type="button" onClick={next} className="border py-1 px-4 rounded-md">{isLastStep ? "finish" :"Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
