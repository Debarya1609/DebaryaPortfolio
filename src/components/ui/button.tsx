import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-wide ring-offset-background transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-4 border-foreground",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        outline:
          "bg-card text-card-foreground shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:brightness-110",
        ghost:
          "border-2 border-transparent hover:border-foreground hover:bg-primary hover:shadow-neo-sm",
        link: "text-foreground underline-offset-4 hover:underline border-0",
      },
      size: {
        default: "h-12 px-6 py-2 text-sm",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
