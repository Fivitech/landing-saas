import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

interface CustomButtonProps extends Omit<ShadcnButtonProps, 'variant'> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  rounded?: boolean;
  withShadow?: boolean;
  withIcon?: boolean;
  iconPosition?: "left" | "right";
  icon?: React.ReactNode;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({
    children,
    className,
    variant = "primary",
    size = "default",
    rounded = false,
    withShadow = false,
    withIcon = false,
    iconPosition = "right",
    icon,
    asChild = false,
    ...props
  }, ref) => {
    // Map our custom variants to the underlying button variants
    const buttonVariant = 
      variant === "primary" ? "default" :
      variant === "secondary" ? "secondary" :
      variant === "outline" ? "outline" :
      variant === "ghost" ? "ghost" : "default";

    // Build the class names based on props
    const buttonClasses = cn(
      // Base styles
      "font-medium transition-all duration-200",
      
      // Rounded styles
      rounded && "rounded-full",
      
      // Shadow styles
      withShadow && "shadow-lg hover:shadow-xl",
      
      // Variant specific styles
      variant === "primary" && "bg-primary text-white hover:bg-primary/90",
      variant === "secondary" && "bg-slate-800 text-white hover:bg-slate-700",
      variant === "outline" && "border-2 border-primary text-primary hover:bg-primary/10",
      variant === "ghost" && "text-primary hover:bg-primary/10",
      
      // Size specific styles
      size === "lg" && "text-base px-6 py-3",
      
      // Additional custom classes
      className
    );

    // When using asChild, we need to be careful about icons
    if (withIcon && asChild) {
      // For asChild with icons, we can't use the icon directly
      // Instead, we'll just pass the classes and let the consumer handle the icon
      return (
        <Button
          className={buttonClasses}
          variant={buttonVariant}
          size={size}
          ref={ref}
          asChild={true}
          {...props}
        >
          {children}
        </Button>
      );
    }

    // Standard rendering
    return (
      <Button
        className={buttonClasses}
        variant={buttonVariant}
        size={size}
        ref={ref}
        asChild={asChild}
        {...props}
      >
        {withIcon && iconPosition === "left" && icon}
        {children}
        {withIcon && iconPosition === "right" && icon}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";
