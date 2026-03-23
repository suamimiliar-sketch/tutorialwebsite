"use client";
import { useState, useEffect } from "react";

const VALID_PASSWORDS = ["DECRUDEAI2026", "AIINFLUENCER2026"];
const STORAGE_KEY = "decrude_access_granted";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setIsUnlocked(true);
    setIsChecking(false);
    setTimeout(() => setMounted(true), 60);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_PASSWORDS.includes(password.trim().toUpperCase())) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword("");
    }
  };

  if (isChecking) return null;
  if (isUnlocked) return <>{children}</>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');
        .pg-wrap { min-height:100vh; background:#080810; display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; position:relative; overflow:hidden; }
        .pg-bg { position:absolute; inset:0; background: radial-gradient(ellipse 70% 50% at 15% 50%, rgba(99,57,255,0.14) 0%, transparent 65%), radial-gradient(ellipse 60% 70% at 85% 25%, rgba(0,200,180,0.09) 0%, transparent 65%); }
        .pg-grid { position:absolute; inset:0; background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size:55px 55px; }
        .pg-card { position:relative; z-index:10; width:100%; max-width:420px; padding:0 20px; opacity:0; transform:translateY(20px); transition:opacity 0.6s ease,transform 0.6s ease; }
        .pg-card.in { opacity:1; transform:translateY(0); }
        .pg-inner { background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); border-radius:22px; padding:44px 36px; }
        .pg-brand { display:flex; align-items:center; gap:9px; margin-bottom:32px; }
        .pg-brand-icon { width:32px; height:32px; background:linear-gradient(135deg,#6339ff,#00c8b4); border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:15px; }
        .pg-brand-name { font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.35); }
        .pg-icon { width:56px; height:56px; margin-bottom:20px; background:linear-gradient(135deg,rgba(99,57,255,0.18),rgba(0,200,180,0.12)); border:1px solid rgba(99,57,255,0.28); border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px; }
        .pg-title { font-size:26px; font-weight:800; color:#fff; letter-spacing:-0.02em; margin:0 0 8px; }
        .pg-desc { font-family:'Space Mono',monospace; font-size:11.5px; color:rgba(255,255,255,0.3); line-height:1.7; margin:0 0 32px; }
        .pg-label { display:block; font-size:10px; font-weight:700; letter-spacing:0.13em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-bottom:9px; }
        .pg-input-row { position:relative; margin-bottom:12px; }
        .pg-input { width:100%; padding:14px 16px; background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.1); border-radius:11px; color:#fff; font-family:'Space Mono',monospace; font-size:13px; letter-spacing:0.1em; outline:none; transition:border-color 0.2s,background 0.2s; box-sizing:border-box; }
        .pg-input::placeholder { color:rgba(255,255,255,0.18); }
        .pg-input:focus { border-color:rgba(99,57,255,0.55); background:rgba(99,57,255,0.055); }
        .pg-input.err { border-color:rgba(255,90,90,0.55); background:rgba(255,90,90,0.04); }
        @keyframes pgshake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-7px)} 40%{transform:translateX(7px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
        .pgshake { animation:pgshake 0.45s ease; }
        .pg-err { font-family:'Space Mono',monospace; font-size:11px; color:#ff7070; margin-bottom:12px; }
        .pg-btn { width:100%; padding:15px; background:linear-gradient(135deg,#6339ff,#4e2fd0); border:none; border-radius:11px; color:#fff; font-family:'Syne',sans-serif; font-size:13.5px; font-weight:700; letter-spacing:0.07em; cursor:pointer; box-shadow:0 8px 22px rgba(99,57,255,0.28); transition:opacity 0.2s,transform 0.15s; }
        .pg-btn:hover { opacity:0.88; transform:translateY(-1px); }
        .pg-footer { margin-top:26px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.06); font-family:'Space Mono',monospace; font-size:10px; color:rgba(255,255,255,0.18); text-align:center; line-height:1.75; }
        .pg-footer a { color:rgba(99,57,255,0.65); text-decoration:none; }
      `}</style>
      <div className="pg-wrap">
        <div className="pg-bg" /><div className="pg-grid" />
        <div className={`pg-card ${mounted ? "in" : ""}`}>
          <div className="pg-inner">
            <div className="pg-brand">
              <div className="pg-brand-icon">🦊</div>
              <span className="pg-brand-name">Decrude AI</span>
            </div>
            <div className="pg-icon">🔐</div>
            <h1 className="pg-title">Exclusive Access</h1>
            <p className="pg-desc">This guide is for verified buyers only.<br />Enter the access code from your Etsy order.</p>
            <form onSubmit={handleSubmit}>
              <label className="pg-label">Access Code</label>
              <div className={`pg-input-row ${shake ? "pgshake" : ""}`}>
                <input type="text" className={`pg-input ${error ? "err" : ""}`} placeholder="e.g. DECRUDEAI2026"
                  value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  autoComplete="off" spellCheck={false} autoFocus />
              </div>
              {error && <p className="pg-err">✗ Invalid code — check your Etsy order message.</p>}
              <button type="submit" className="pg-btn">Unlock Guide →</button>
            </form>
            <div className="pg-footer">
              <p>Access code is in your Etsy order confirmation.</p>
              <p style={{ marginTop: "5px" }}>Need help? <a href="https://www.etsy.com/shop/Decrudeai" target="_blank" rel="noreferrer">Message Decrudeai on Etsy</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
