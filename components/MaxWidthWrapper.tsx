import {ReactNode} from 'react'
import { cn } from '@/lib/utils'
const MaxWidthWrapper = ({
    className,
    children
}:{
    className?:string
    children:ReactNode
}) => {
  return (
    //this page is only to set margins exqual in all pages

    //cn merges this class properties with the ones where this will be imported into
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20',className)}>
    
      {children}</div>
  )
}

export default MaxWidthWrapper