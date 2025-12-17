'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = newLocale;
    router.replace('/' + segments.join('/'));
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="font-bold text-lg">
          {t('title')}
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={`/${locale}`}>{t('home')}</Link>
          <Link href={`/${locale}/about`}>{t('about')}</Link>

          <select
            className="border rounded px-2 py-1"
            value={locale}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="bn">BN</option>
            <option value="pt">PT</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
