import { type ButtonProps } from "@/interfaces";

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};


const Button: React.FC<ButtonProps> = ({ size, shape, children}) => {

    return(
        <div>
        <button className={`bg-blue-600 text-white ${sizeStyles[size]} ${shape} `}> {children}</button>
        {/* <button className="rounded-md"></button>
        <button className="rounded-full"></button> */}
        </div>
    )
}

export default Button;