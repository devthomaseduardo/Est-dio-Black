import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white shadow-[0_18px_60px_-18px_rgba(138,3,3,0.9)] hover:shadow-[0_24px_80px_-22px_rgba(138,3,3,0.95)] hover:brightness-110 active:brightness-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-white/12 bg-white/5 text-white shadow-[0_18px_60px_-28px_rgba(0,0,0,0.7)] backdrop-blur-md hover:bg-white/8 hover:border-white/18",
        secondary:
          "bg-white/8 text-white hover:bg-white/10 border border-white/10",
        ghost: "text-white/80 hover:text-white hover:bg-white/6",
        link: "text-white/90 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
