import React from "react";

/** Eyebrow + display-md heading, the recurring section opener across the site. */
export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="text-[13px] font-medium uppercase tracking-[0.4px] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[1.15] tracking-[-1px] text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-[1.5] text-ink-subtle">{subtitle}</p>
      )}
    </div>
  );
}
