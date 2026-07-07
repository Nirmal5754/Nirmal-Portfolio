export default function TerminalWindow({
  title,
  children,
  footer,
  className = '',
  bodyClassName = '',
}) {
  return (
    <div className={`w-full rounded-xl border border-white/10 bg-black/60 ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
        <span className="terminal-dots">
          <span className="terminal-dot bg-red-500/90" />
          <span className="terminal-dot bg-yellow-400/90" />
          <span className="terminal-dot bg-green-500/90" />
        </span>
        {title ? <span className="text-xs text-white/60">{title}</span> : null}
      </div>
      <div className={`px-4 py-4 ${bodyClassName}`}>{children}</div>
      {footer ? <div className="px-4 py-3 border-t border-white/10">{footer}</div> : null}
    </div>
  )
}

