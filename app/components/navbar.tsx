'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavDict = {
  home: string;
  parts: string;
  contact: string;
  switch: string;
};

type HeroDict = {
  cta: string;
};

interface NavbarProps {
  t: { nav: NavDict; hero: HeroDict };
  isAr: boolean;
}

export default function Navbar({ t, isAr }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between'>
        {/* Logo */}
        <Link href={`/${isAr ? 'ar' : 'en'}`} className='flex items-center'>
          <Image
            src={`/daamah-spare-parts/logo.png`}
            alt='daamahh Spare Parts'
            width={140}
            height={40}
            className='object-contain h-10 w-auto'
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-1'>
          <a
            href='#home'
            className='px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-corporate hover:bg-corporate/5 transition-all duration-200'
          >
            {t.nav.home}
          </a>
          <a
            href='#parts'
            className='px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-corporate hover:bg-corporate/5 transition-all duration-200'
          >
            {t.nav.parts}
          </a>
          <a
            href='#contact'
            className='px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-corporate hover:bg-corporate/5 transition-all duration-200'
          >
            {t.nav.contact}
          </a>

          {/* Divider */}
          <div className='w-px h-6 bg-gray-200 mx-2' />

          {/* CTA */}
          <a
            href='#contact'
            className='px-5 py-2.5 bg-corporate text-white font-semibold rounded-lg hover:bg-corporate-dark transition-all duration-200 shadow-sm hover:shadow-md'
          >
            {t.hero.cta}
          </a>

          {/* Language Switcher */}
          <Link
            href={isAr ? '/en' : '/ar'}
            className='flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 font-semibold hover:border-corporate hover:text-corporate transition-all duration-200 ms-1'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
              />
            </svg>
            {t.nav.switch}
          </Link>
        </div>

        {/* Mobile: Language + Burger */}
        <div className='flex md:hidden items-center gap-2'>
          <Link
            href={isAr ? '/en' : '/ar'}
            className='flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:border-corporate hover:text-corporate transition-all'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
              />
            </svg>
            {t.nav.switch}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='p-2 rounded-lg border border-gray-200 hover:border-corporate hover:text-corporate text-gray-600 transition-all'
          >
            {menuOpen ? (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1 shadow-lg'>
          <a
            href='#home'
            onClick={() => setMenuOpen(false)}
            className='px-4 py-3 rounded-lg text-gray-600 font-medium hover:text-corporate hover:bg-corporate/5 transition-all'
          >
            {t.nav.home}
          </a>
          <a
            href='#parts'
            onClick={() => setMenuOpen(false)}
            className='px-4 py-3 rounded-lg text-gray-600 font-medium hover:text-corporate hover:bg-corporate/5 transition-all'
          >
            {t.nav.parts}
          </a>
          <a
            href='#contact'
            onClick={() => setMenuOpen(false)}
            className='px-4 py-3 rounded-lg text-gray-600 font-medium hover:text-corporate hover:bg-corporate/5 transition-all'
          >
            {t.nav.contact}
          </a>
          <div className='pt-2 border-t border-gray-100 mt-1'>
            <a
              href='#contact'
              onClick={() => setMenuOpen(false)}
              className='block w-full text-center px-4 py-3 bg-corporate text-white font-semibold rounded-lg hover:bg-corporate-dark transition-all'
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
