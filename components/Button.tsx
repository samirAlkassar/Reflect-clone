import Link from "next/link"
import classNames from "classnames"
import {cva} from "class-variance-authority"
import type { VariantProps } from 'class-variance-authority';
const buttonClasses = cva("inline-flex items-center", {
    variants: {
        variant: {
            primary: "text-primary rounded-[8px] border border border-button-border backdrop-blur-[8px] text-sm button-shadow relative after:absolute after:inset-0 after:z-[-1] before:z-[-1] after:bg-button-glow-after before:absolute before:inset-0 before:bg-button-glow-before after:shadow-button-shadow-after before:shadow-button-shadow-before overflow-hidden",
            secondary: "text-sm secondary-button-gradient rounded-full border border-white border-opacity-20 shadow-small-button-shadow-glow hover:shadow-small-button-shadow-glow-hover backdrop-blur-[8px] transition-all duration-300",
            tertiary: "",
        },
        size: {
            small: "px-3 py-1",
            medium: "px-7 py-3",
            large: "px-8 py-4",
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
        }
}})

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode,
    href?: string,
    className?: string,
}


export const Button = ({ children, href, variant, size, className }: ButtonProps) => {
    if (href) {
        return <Link className={classNames(buttonClasses({ variant, size }), className)} href={href}>{children}</Link>;
    }
    return <button type="button" className={classNames(buttonClasses({ variant, size }), className)}>{children}</button>;
};
