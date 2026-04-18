import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

interface DashboardSidebarProps {
  onContactClick: () => void;
}

export default function DashboardSidebar({ onContactClick }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Overview", href: "/account", icon: "dashboard" },
    { name: "My Properties", href: "/account/management", icon: "home_work" },
    { name: "Saved", href: "/account/saved", icon: "favorite" },
    { name: "Inquiries", href: "/account/inquiries", icon: "chat" },
    { name: "Documents", href: "/account/vault", icon: "lock" },
    { name: "Add Listing", href: "/account/add-listing", icon: "add_circle" },
    { name: "Sign Out", href: "/", icon: "logout" },
  ];

  const handleLogout = (e: React.MouseEvent, href: string, name: string) => {
    if (name === "Sign Out") {
      e.preventDefault();
      // Redirecting home - cookie clearing is handled in useEffect to satisfy lint rules
      router.push("/?logout=true");
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("logout") === "true") {
      document.cookie = "auth_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.replace("/");
    }
  }, [router]);

  return (
    <aside className="space-y-8">
      {/* Navigation Menu */}
      <nav className="bg-surface-container-low p-8 border border-outline-variant/20 rounded-sm">
        <h2 className="font-headline text-xl mb-6">User Portal</h2>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleLogout(e, item.href, item.name)}
              className={`flex items-center gap-4 px-4 py-3 transition-colors group rounded-sm ${
                pathname === item.href ? "bg-white border-l-4 border-primary" : "hover:bg-white/50"
              }`}
            >
              <span className={`material-symbols-outlined ${
                pathname === item.href ? "text-primary" : "text-on-secondary-container group-hover:text-primary"
              } transition-colors`}>
                {item.icon}
              </span>
              <span className={`font-label text-sm font-bold uppercase tracking-wider ${
                pathname === item.href ? "text-primary" : "text-on-surface"
              }`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Curator Support */}
      <div className="bg-surface-container-high p-8 border border-outline-variant/10 rounded-sm">
        <h2 className="font-headline text-2xl mb-6">Your Curator</h2>
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-surface-container-highest overflow-hidden rounded-full border border-primary/20 relative">
            <Image alt="Lead Curator" className="object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJNIMk-rrlMJQidp8f1Zehi2r03TcL6QczYBeDNh9w5iK_wzZsJtkF0ALM0kH4lpc8WzfFx1-qzQTcRba5xDPBUl31HIM5TIez5i536HVei9YmRzpczKRJxUZ9je13hh2t7DZRT9N7s4G-MGRiY8N8p7FLNn2a6N1f1ve_R0nz9VILGtDE9PyfgzaeYdHQB5AujDRnZxImzL4ANJ8FoFIGtYSIKmBgjjaOubqG7vlpd2WmO9nyy0_hoDDX76LUQ_9qfeBxzlikzc" fill />
          </div>
          <div>
            <h4 className="font-bold font-headline">Divine Kariza</h4>
            <p className="text-[0.6rem] uppercase text-on-secondary-container tracking-wider font-bold font-label">Lead Strategy</p>
          </div>
        </div>
        <Button onClick={onContactClick} variant="outline" className="w-full !border-primary !text-primary !text-[0.6875rem] uppercase tracking-widest font-bold">
          Request Sync
        </Button>
      </div>
    </aside>
  );
}
