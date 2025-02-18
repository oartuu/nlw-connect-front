import { type ComponentProps , ReactNode} from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        " p-1.5 bg-gray-500 text-blue  rounded-md cursor-pointer hover:bg-blue transition-colors duration-300 hover:text-gray-900 ",
        className
      )}
      {...props}
    />
  );
}
