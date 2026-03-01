import '../globals.css';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isArabic = lang === 'ar';

  const seo = {
    en: {
      title:
        'daamahh Spare Parts - Genuine & Aftermarket Parts for BMW, Mercedes, VW | UAE',
      description:
        'Premium spare parts for German cars in UAE. Specializing in BMW original and OEM components. Fast delivery across Dubai, Abu Dhabi, Sharjah.',
      keywords:
        'BMW parts UAE, Mercedes spare parts, VW Volkswagen parts, German car parts Dubai, auto spare parts Abu Dhabi',
    },
    ar: {
      title:
        'دعامة قطع غيار - قطع غيار أصلية وتجارية لبي إم دبليو، مرسيدس، فولكس فاجن | الإمارات',
      description:
        'قطع غيار فاخرة للسيارات الألمانية في الإمارات. متخصصون في قطع بي إم دبليو الأصلية والمعتمدة. توصيل سريع في دبي وأبوظبي والشارقة.',
      keywords:
        'قطع غيار بي ام دبليو الإمارات, مرسيدس قطع غيار, فولكس فاجن قطع غيار, قطع غيار سيارات ألمانية دبي',
    },
  };

  const meta = seo[lang as keyof typeof seo];

  return (
    <>
      <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'}>
        <head>
          <title>{meta.title}</title>
          <meta name='description' content={meta.description} />
          <meta name='keywords' content={meta.keywords} />

          <meta property='og:title' content={meta.title} />
          <meta property='og:description' content={meta.description} />
          <meta property='og:type' content='website' />
          <meta
            property='og:locale'
            content={lang === 'ar' ? 'ar_AE' : 'en_US'}
          />
          <meta property='og:site_name' content='daamahh Spare Parts' />
          <meta property='og:url' content={`https://yourdomain.com/${lang}`} />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />

          <link rel='icon' href='/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />

          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='daamahh Parts' />

          <meta name='robots' content='index, follow' />
          <meta name='author' content='daamahh Spare Parts Establishment' />
          <link rel='canonical' href={`https://yourdomain.com/${lang}`} />

          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'AutomotiveBusiness',
                name: 'daamahh Spare Parts Establishment',
                description: meta.description,
                url: `https://yourdomain.com/${lang}`,
                telephone: '+971-50-123-4567',
                openingHours:
                  'Mo-Th 09:00-12:00,16:00-21:00 Fr 09:00-12:00,16:00-21:00',
                priceRange: '£',
                sameAs: ['https://wa.me/971501234567'],
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'AE',
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'United Arab Emirates',
                },
              }),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        (function() {
          const originalTitle = document.title;
          let isPaused = false;
          
          function scrollTitle() {
            if (document.hidden || isPaused) return;
            
            const title = originalTitle;
            if (title.length > 30) { // Only scroll if title is long
              let pos = 0;
              const scrollInterval = setInterval(() => {
                if (!document.hidden && !isPaused) {
                  pos += 1;
                  if (pos > title.length) pos = 0;
                  const visible = title.slice(pos, pos + 30) + (pos > 0 ? '...' : '');
                  document.title = visible;
                }
              }, 200);
              
              // Pause on hover/tab focus
              document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                  document.title = originalTitle;
                  clearInterval(scrollInterval);
                }
              });
              
              document.addEventListener('mouseenter', () => {
                isPaused = true;
                document.title = originalTitle;
              });
              document.addEventListener('mouseleave', () => {
                isPaused = false;
              });
            }
          }
          
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', scrollTitle);
          } else {
            scrollTitle();
          }
        })();
      `,
            }}
          />
        </head>
        <body className='antialiased text-gray-800 bg-gray-50'>{children}</body>
      </html>
    </>
  );
}
