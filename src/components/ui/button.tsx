import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        salon: "rounded-full border border-[#9E1F2D] bg-[#9E1F2D] text-[#FFFDFC] uppercase tracking-[0.16em] shadow-sm hover:bg-[#821823] transition-all duration-300 font-medium",
        salonOutline: "rounded-full border border-[#9E1F2D]/40 bg-transparent text-[#191716] uppercase tracking-[0.16em] shadow-none hover:border-[#9E1F2D] hover:bg-[#9E1F2D]/10 hover:text-[#9E1F2D] transition-all duration-300 font-medium",
        salonLight: "rounded-full border border-[#DCCFC0] bg-[#FFFDFC] text-[#191716] uppercase tracking-[0.16em] shadow-sm hover:border-[#9E1F2D] hover:text-[#9E1F2D] transition-all duration-300 font-medium",
        salonBurgundy: "rounded-full border border-transparent bg-[#9E1F2D] text-[#FFFDFC] uppercase tracking-[0.16em] shadow-md hover:bg-[#821823] hover:shadow-lg transition-all duration-300 font-medium",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        salon: "h-12 px-6 text-[0.7rem] sm:h-13 sm:px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
