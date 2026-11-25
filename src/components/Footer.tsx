import { nav, site, whatsapp } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-deep py-14 text-mist/75">
      <div className="wrap flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <p className="text-3xl font-bold tracking-tight text-mist">{site.title}</p>
          <p className="mt-2 text-sm">{site.role}</p>
          {site.address && <p className="mt-4 text-sm">{site.address}</p>}
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Rodapé">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-accent">{n.label}</a>)}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp (71) 98525-1396</a>
          {site.instagram && <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a>}
        </div>
      </div>
    </footer>
  );
}
