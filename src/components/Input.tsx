import { ComponentProps } from "react";
import { Mail } from "lucide-react";

// interface InputProps extends ComponentProps<"input"> {
//     error?: boolean,
// }

// export function Input({error = false, ...props}: InputProps) {
//   return (
//     <div
//       data-error={error}
//       className="group bg-gray-800 h-12 border-gray-800 rounded-xl px-4 flex items-center gap-2 focus-within:border-2 focus-within:border-gray-100  data-[error=true]:border-danger data-[error=true]:border-2 "
//     >
//       <span
//         className="text-gray-400 group-focus-within:text-gray-100
//          group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger "
//       >
//         <Mail />
//       </span>
//       <input
//         className="flex-1 outline-0 placeholder:text-gray-400"
//         {...props}
//       />
//     </div>
//   );
// }

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}
export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border-gray-800 rounded-xl px-4 flex items-center gap-2 focus-within:border-2 focus-within:border-gray-100  data-[error=true]:border-danger data-[error=true]:border-2 "
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<"span"> {}
export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100
       group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger "
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input className="flex-1 outline-0 placeholder:text-gray-400" {...props} />
  );
}
