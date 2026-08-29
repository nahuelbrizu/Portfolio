import React from "react";

/** Linear `status-badge` token — surface-2 pill, 12px caption text. */
export default function Badge({ children, dot, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2 py-0.5 text-xs text-ink-muted ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-success" />}
      {children}
    </span>
  );
}
