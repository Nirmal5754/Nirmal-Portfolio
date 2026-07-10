import TerminalWindow from './TerminalWindow.jsx'

export default function TerminalChat() {
  return (
    <TerminalWindow
      title="chat_system.sh"
      className="mt-10"
      bodyClassName="min-h-[320px] sm:min-h-[420px] flex flex-col"
      footer={
        <div className="flex items-center gap-3">
          <div className="flex-1 rounded-md border border-white/10 bg-black px-3 py-2 text-xs text-white/40">
            Enter command...
          </div>
          <button
            type="button"
            className="rounded-md bg-sky-400 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_18px_rgba(16,185,129,0.2)]"
            disabled
            aria-disabled="true"
          >
            exec
          </button>
        </div>
      }
    >
      <p className="text-sky-400 text-xs sm:text-sm leading-6">
        {'> Hi! I\u2019m Nirmal\u2019s AI assistant. Tell me'}
        <br />
        about your project idea and I&apos;ll let you
        <br />
        know how I can help.
      </p>
      <div className="flex-1" />
    </TerminalWindow>
  )
}

