import React from "react";

const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-hover active:bg-primary-focus",
  secondary:
    "bg-surface-1 text-ink border border-hairline hover:border-hairline-strong",
  tertiary: "bg-transparent text-ink hover:text-ink-muted",
};

/**
 * Linear-spec button — rounded-md (8px), 8px/14px padding, 14px/500 label.
 * Renders as <a> when `href` is given, otherwise a <button>.
 */
export default function Button({
  as: As,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-[14px] py-2 text-sm font-medium leading-[1.2] transition-colors duration-150 whitespace-nowrap";
  const classes = `${base} ${VARIANTS[variant]} ${className}`;

  if (As) {
    return (
      <As className={classes} {...props}>
        {children}
      </As>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
