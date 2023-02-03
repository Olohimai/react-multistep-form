import { FormWrapper } from "./FormWrapper";

type UserData = {
    firstName: string
    lastName: string
    age: string
}
type UserFormProps = UserData &{
   
    updateFields: (fields: Partial<UserData>) => void
}
export function UserForm({
    firstName,
    lastName,
    age,
    updateFields }: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">First Name</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input autoFocus required type="text"
                    value={firstName}
                    onChange={e => updateFields({firstName: e.target.value})}
                    className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div>


            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Last Name</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input required type="text" value={lastName}
                    onChange={e => updateFields({lastName: e.target.value })} className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div>


            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Age</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0"> <input required
                min={1}
                type="number"
                value={age}
                onChange={e => updateFields({ age: e.target.value })}
                className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" /></div>

        </FormWrapper>
    )
}