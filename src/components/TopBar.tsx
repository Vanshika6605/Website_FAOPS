export default function TopBar() {
  return (
    <div className="bg-faops-navy text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <a href="tel:+919822096280" className="flex items-center gap-2 hover:text-faops-primary transition">
            <PhoneIcon />
            (+91) 98220 96280
          </a>
          <a href="mailto:info@faopsperinatal.org" className="flex items-center gap-2 hover:text-faops-primary transition">
            <MailIcon />
            info@faopsperinatal.org
          </a>
        </div>
        <span className="text-gray-300 hidden md:block">
          Federation of Asia and Oceania Perinatal Societies
        </span>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}