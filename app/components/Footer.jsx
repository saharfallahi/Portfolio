import React from "react";

function Footer() {
  return (
    <footer className="py-10 border-t border-[color-mix(in_oklab,var(--text),transparent_90%)] text-center text-[var(--muted)]">
      <div className="container-std">
        <p>
          © {new Date().getFullYear()} {t("footer.note")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
