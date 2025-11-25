import { cn } from "../../../utils/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
};

export const MobileMenu = ({ open, onClose, navLinks }: MobileMenuProps) => {
  return (
    <>
      {/* background overlay */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 bg-black/40 transition-opacity z-40",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* sliding menu */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-bg-muted z-50 p-lg transition-transform",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col gap-lg mt-xl">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="body-1">
              {link.label}
            </a>
          ))}

          <button className="btn-primary mt-lg">Get Started</button>
        </div>
      </aside>
    </>
  );
};
