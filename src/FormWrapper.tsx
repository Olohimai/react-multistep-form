import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}
export function FormWrapper({
    title, children
}: FormWrapperProps) {
    return <>
        <h2 className="text-center mx-0 mb-2 text-xl font-bold">{title}</h2>
        <div className="sm:grid sm:grid-cols-2 space-y-2 sm:items-start sm:gap-4 sm:pt-5">{children}</div>
    </>
}