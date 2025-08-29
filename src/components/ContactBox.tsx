type BoxRounded = "sm" | "md" | "lg" | "xl";

type BoxChildren = {
  rounded: BoxRounded;
  className?: string;
  children: React.ReactNode;
};

export function ContactBox({ children, className = "", rounded = "md"}: BoxChildren) {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };
  return (
    <div
      className={`flex flex-col bg-bgFormBox px-12 py-7.5 gap-2.5 max-w-3xl w-full text-xl ${className} ${roundedClasses[rounded]}`}
    >
      {children}
    </div>
  );
}
