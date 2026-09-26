import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { pages, type SitePath } from "../../lib/seo";
export function Breadcrumbs({ pathname }: { pathname: string }) {
  if (pathname === "/" || !(pathname in pages)) return null;
  return (
    <nav className="container breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <ChevronRight size={12} aria-hidden="true" />
          <span aria-current="page">{pages[pathname as SitePath].name}</span>
        </li>
      </ol>
    </nav>
  );
}
