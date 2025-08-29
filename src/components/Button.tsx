

type ButtonColor = "primary" | "secondary"
type ButtonSize = "sm" | "md" | "lg" | "xl"

type ButtonProps = {
    size: ButtonSize;
    color: ButtonColor;
    children: React.ReactNode;
}

export function Button({children, color = "primary", size = "lg"}: ButtonProps) {
    const sizeClasses = {
        sm: "py-1.5 rounded-tr-lg rounded-bl-lg text-md",
        md: "py-2.5 rounded-tr-xl rounded-bl-xl text-xl",
        lg: "py-3.5 rounded-tr-2xl rounded-bl-2xl text-2xl",
        xl: "py-4.5 rounded-tr-3xl rounded-bl-3xl text-3xl",
    }

    const colorClasses = {
        primary: "bg-bgSelected",
        secondary: "bg-bgProductBtn",
    }

    return(
        <button className={`${colorClasses[color]} ${sizeClasses[size]} text-white text-center`}>
            {children}
        </button>
    )
}