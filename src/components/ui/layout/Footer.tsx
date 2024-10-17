import Link from "next/link";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-background/60 backdrop-blur-md border-t border-primary-700/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
            className="text-xl font-bold flex items-center text-primary-400 hover:text-primary-300 transition-colors"
          >
            ANIMETON.com
          </Link>
        </div>
        <div className="flex space-x-6">
          <FooterLink href={siteConfig.links.discord} icon="mdi:discord" />
          <FooterLink href={siteConfig.links.instagram} icon="mdi:instagram" />
          <FooterLink href={siteConfig.links.tiktok} icon="mdi:tiktok" />
          <FooterLink href={siteConfig.links.youtube} icon="mdi:youtube" />
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, icon }: { href: string; icon: string }) => (
  <Link
    href={href}
    className="text-2xl text-primary-300 hover:text-primary-200 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon icon={icon} />
  </Link>
);
