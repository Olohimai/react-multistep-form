import { FormWrapper } from "./FormWrapper";

type AccountData = {
    email: string
    password: string
}
type AccountFormProps = AccountData & {

    updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({ email, password, updateFields }: AccountFormProps) {
    return (
        <FormWrapper title="Account Creation">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Email</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input autoFocus required type="email"
                    value={email}
                    onChange={e => updateFields({ email: e.target.value })}
                    className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div>

            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Password</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input required type="password"
                    value={password}
                    onChange={e => updateFields({ password: e.target.value })} className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div>
        </FormWrapper>
    )
}