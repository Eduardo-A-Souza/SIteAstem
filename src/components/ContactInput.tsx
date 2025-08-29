

type InputSize = "sm" | "md" | "lg" | "xl"

type InputProps = {
    rounded: InputSize;
    label?: string;
    placeholder: string;
}


export function ContactInput({placeholder, label, rounded = "md"}: InputProps) {
    const inputSizeClasses = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
    }
    

    return (
        <>
        <label htmlFor="">{label}</label>
        <input type="text"
        className={`bg-bgInputForm max-w-2xl w-full flex px-4 text-lg py-2 ${inputSizeClasses[rounded]}`} 
        placeholder={placeholder}
        />
        </>
    )
}