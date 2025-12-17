import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>

      <p className="text-gray-700">{t('content')}</p>
    </div>
  );
}
