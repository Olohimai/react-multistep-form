import { FormWrapper } from "./FormWrapper";

type AddressData = {
   street: string
    city: string
    state: string
    zip: string
}
type AddressFormProps = AddressData & {

    updateFields: (fields: Partial<AddressData>) => void
}
export function AddressForm({street, city, state, zip, updateFields,}: AddressFormProps) {
    return ( 
        <FormWrapper title="Address Details">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Street</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input autoFocus required type="text"
                    value={street}
                    onChange={e => updateFields({ street: e.target.value })}
                    className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div> 
                
                  <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">City</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input autoFocus required type="text"
                    value={city}
                    onChange={e => updateFields({ city: e.target.value })}
                    className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div> 
                
                  <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">State</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input autoFocus required type="text"
                    value={state}
                    onChange={e => updateFields({ state: e.target.value })}
                    className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div> 

            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Zip</label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input required type="text"
                    value={zip}
                    onChange={e => updateFields({ zip: e.target.value })} className="block w-full py-2 px-3 max-w-lg rounded-md border-gray-700 border shadow-sm focus:outline-none sm:max-w-xs sm:text-sm" />
            </div>
        </FormWrapper>
    )
}