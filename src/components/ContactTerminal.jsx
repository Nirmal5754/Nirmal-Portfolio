import { useForm, ValidationError } from '@formspree/react'
import TerminalWindow from './TerminalWindow.jsx'

export default function ContactTerminal() {
  const [state, handleSubmit] = useForm('xzbnpkdy')

  return (
    <section id="contact" className="py-16 font-mono">
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tight">Contact Me</h2>

      <div className="mt-10">
        <TerminalWindow title="send_message.sh" bodyClassName="space-y-5">
          {state.succeeded ? (
            <p className="text-emerald-400/80 text-sm">{'> Message sent successfully. Thank you!'}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="text-white/60 text-xs mb-2 flex items-center gap-2">
                  <span className="text-emerald-400/80">{'>'}</span> Enter your email:
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-md border border-white/10 bg-black px-3 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-500/60"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-2" />
              </div>

              <div>
                <div className="text-white/60 text-xs mb-2 flex items-center gap-2">
                  <span className="text-emerald-400/80">{'>'}</span> Enter your message:
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={6}
                  required
                  className="w-full rounded-md border border-white/10 bg-black px-3 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-500/60"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-2" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-md bg-pink-400 py-3 text-sm font-semibold text-black shadow-[0_0_26px_rgba(16,185,129,0.25)] hover:bg-emerald-400 transition-colors disabled:opacity-60"
              >
                Send Message
              </button>
            </form>
          )}
        </TerminalWindow>
      </div>
    </section>
  )
}

