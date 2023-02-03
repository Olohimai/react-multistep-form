import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
 
type FormData = {
  firstName: string,
  lastName: string,
  age: string
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password:"",
}
function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields:Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ])
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
      alert("Successful Account Creation")
  }
  return (
    <div className="relative bg-white border p-4 rounded-md my-8 mx-auto max-w-xl">
      <form onSubmit={onSubmit}>
        <div className="absolute top-0 right-0 p-4">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="my-2 flex justify-end gap-3">
          {!isFirstStep && <button type="submit" onClick={back} className="border py-1 px-4 rounded-md">Back</button>}
          <button type="submit"  className="border py-1 px-4 rounded-md">{isLastStep ? "finish" :"Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
