import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
    children: ReactNode;
    href: string;
    variant?: ButtonVariant;
    className?: string;
};

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-[#FF9D00] text-[#101828] hover:bg-[#ED9200] shadow-[0_8px_24px_rgba(255,157,0,0.22)]",

    secondary:
        "bg-[#101828] text-white hover:bg-[#1D2939] shadow-[0_8px_24px_rgba(16,24,40,0.15)]",

    ghost:
        "bg-white text-[#101828] border border-[#E4E7EC] hover:bg-[#F8FAFC]",
};

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={[
                "inline-flex min-h-12 items-center justify-center",
                "rounded-xl px-5 py-3",
                "text-sm font-bold",
                "transition-all duration-200",
                "hover:-translate-y-0.5",
                "active:translate-y-0",
                "focus-visible:outline-none",
                variants[variant],
                className,
            ].join(" ")}
        >
            {children}
        </Link>
    );
}