'use client';

import Logo from '@/components/logo';
import SearchWidget from '@/components/search/search';
import ThemeToggle from '@/components/themeToggle/theme-toggle';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useWindowScroll } from '@/hooks/use-window-scroll';
import HamburgerButton from '@/layouts/hamburger-button';
import Sidebar from '@/layouts/hydrogen/sidebar';
import ProfileMenu from '@/layouts/profile-menu';
import cn from '@/utils/class-names';
import Link from 'next/link';

function HeaderMenuRight() {
  return (
    <div className="ms-auto grid shrink-0 grid-cols-2 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
      <ThemeToggle />
      <ProfileMenu />
    </div>
  );
}
export default function Header() {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex items-center bg-gray-0/80 px-4 py-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10',
        ((isMounted && windowScroll.y) as number) > 2 ? 'card-shadow' : ''
      )}
    >
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          view={<Sidebar className="static w-full 2xl:w-full" />}
        />
        <Link
          href={'/'}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 lg:me-5 xl:hidden"
        >
          <Logo iconOnly={true} />
        </Link>
        <SearchWidget />
      </div>
      <HeaderMenuRight />
    </header>
  );
}
