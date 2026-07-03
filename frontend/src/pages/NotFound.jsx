import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Home, Mail, Search } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-paper font-body">

      {/* ── main content ── */}
      <div className="flex flex-1 items-center border-b border-line">
        <div className="max-w-[1180px] w-full mx-auto px-5 sm:px-8 py-20 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* left — editorial */}
            <div>
              {/* large 404 watermark */}
              <p className="font-display text-[clamp(6rem,4rem+10vw,12rem)] font-medium leading-none tracking-tight text-line select-none">
                404
              </p>

              <div className="-mt-4 md:-mt-6">
                <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                  <span className="inline-block h-px w-3.5 bg-accent" />
                  page not found
                </span>

                <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium leading-tight tracking-tight text-ink">
                  This page wandered off. Let's get you back.
                </h1>

                <p className="mt-4 max-w-[48ch] text-[0.97rem] leading-relaxed text-graphite">
                  The page you're looking for doesn't exist, was moved, or the
                  URL is incorrect. Try one of the options below.
                </p>

                {/* primary actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("/")}
                    className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                  >
                    <Home className="h-4 w-4" strokeWidth={1.6} />
                    Go home
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
                  >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
                    Go back
                  </button>
                </div>

                {/* secondary links */}
                <div className="mt-8 border-t border-line pt-6">
                  <p className="font-mono text-[0.72rem] text-faint">
                    still need help?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <button
                      onClick={() => navigate("/contact")}
                      className="inline-flex items-center gap-2 font-mono text-[0.8rem] text-graphite transition hover:text-ink"
                    >
                      <Mail className="h-3.5 w-3.5" strokeWidth={1.6} />
                      Contact support
                    </button>
                    <button
                      onClick={() => navigate("/web")}
                      className="inline-flex items-center gap-2 font-mono text-[0.8rem] text-graphite transition hover:text-ink"
                    >
                      <Search className="h-3.5 w-3.5" strokeWidth={1.6} />
                      Browse services
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* right — terminal block */}
            <div className="hidden lg:block w-[340px] border border-line bg-white">
              <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="ml-3 font-mono text-[0.7rem] text-faint">
                  terminal
                </span>
              </div>
              <div className="p-5 font-mono text-[0.8rem] leading-relaxed">
                <p>
                  <span className="text-faint">$ </span>
                  <span className="text-ink">curl sanraf.dev{window?.location?.pathname ?? "/404"}</span>
                </p>
                <p className="mt-2 text-accent">
                  {">"} HTTP 404 Not Found
                </p>
                <p className="mt-1 text-graphite">
                  {">"} The requested resource
                </p>
                <p className="text-graphite">
                  {">"} could not be located.
                </p>
                <p className="mt-3 text-faint">
                  <span className="text-accent">{"// "}</span>
                  TODO: find missing page
                </p>
                <p className="text-faint">
                  <span className="text-accent">{"// "}</span>
                  Redirecting to safety…
                </p>
                <p className="mt-3">
                  <span className="text-faint">$ </span>
                  <span className="animate-pulse text-ink">█</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── footer strip ── */}
      <div className="max-w-[1180px] w-full mx-auto px-5 sm:px-8 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[0.72rem] text-faint">
          <span>© {new Date().getFullYear()} SanRaf Software Engineering Studio</span>
          <div className="flex gap-5">
            <button onClick={() => navigate("/")}     className="transition hover:text-ink">home</button>
            <button onClick={() => navigate("/cases")} className="transition hover:text-ink">work</button>
            <button onClick={() => navigate("/contact")} className="transition hover:text-ink">contact</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotFound;