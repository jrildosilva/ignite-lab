import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


 
  export interface TextInputRootProps {
  children: ReactNode;
 }
 
 function TextInpuntRoot(props: TextInputRootProps) {
   return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300'>
     {props.children}

    </div>
   )
 }
 TextInpuntRoot.displayName = 'TextInput.Root'

 export interface TextInputIconProps {
  children:ReactNode;
 }
 function TextInputIcon (props: TextInputIconProps) {
   return(
     <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
     </Slot>
   )
 }
 TextInputIcon.displayName = 'TextInput.Icon'
 export interface TextInpuInputProps extends InputHTMLAttributes <HTMLInputElement>{}

 function TextInputInput(props: TextInpuInputProps) {
 return (
     
        <input
          className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none "
          
  
       
        {...props}
      />
    
   
  ) 
}
TextInputIcon.displayName = 'TextInput.Input'
export const TextInput = {
  Root: TextInpuntRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}