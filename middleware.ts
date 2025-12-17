import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'bn', 'pt'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|bn|pt)/:path*']
};
