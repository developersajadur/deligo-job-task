import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/src/components/Header';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const locales = ['en', 'bn', 'pt'];

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="max-w-6xl mx-auto py-10 px-4">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
