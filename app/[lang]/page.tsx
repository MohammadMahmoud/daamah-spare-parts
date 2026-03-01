import Image from 'next/image';
import Navbar from '../components/navbar';

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;

  const isAr = lang === 'ar';

  const dict = {
    en: {
      nav: {
        home: 'Home',
        parts: 'Our Parts',
        contact: 'Contact',
        switch: 'العربية',
      },
      hero: {
        title: 'Genuine & Aftermarket Parts for German Cars',
        sub: 'Specializing in BMW, Mercedes, and VW parts in the KSA.',
        cta: 'Request a Quote',
        badge: '#1 German Parts Specialist in KSA',
        scroll: 'Scroll',
        bmwFocus: 'Our Focus',
        bmwTitle: 'BMW',
        bmwDesc: 'Original & Aftermarket Parts — Primary Specialist',
        mercedesTitle: 'Mercedes-Benz',
        mercedesDesc: 'Genuine & Aftermarket Parts',
        vwTitle: 'Volkswagen',
        vwDesc: 'Genuine & Aftermarket Parts',
      },
      parts: {
        title: 'Our Products',
        sub: 'Comprehensive inventory with a massive selection of BMW original and OEM components.',
        categories: [
          'Engine Components',
          'Brake Systems',
          'Suspension & Steering',
          'Filters & Maintenance',
        ],
        descs: [
          'Engine blocks, turbochargers, pistons',
          'Disc brakes, calipers, performance pads',
          'Control arms, shocks, coilovers',
          'Oil filters, air filters, cabin filters',
        ],
      },
      info: {
        title: 'Visit Us',
        hoursTitle: 'Working Hours',
        hours:
          'Sat - Thu: 9:00 AM - 12:00 PM & 4:00 PM - 9:00 PM | Friday: Closed',
        satThu: 'Sat - Thu',
        friday: 'Friday',
        shift1: '9:00 AM – 12:00 PM',
        shift2: '4:00 PM – 9:00 PM',
        closed: 'Closed',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        email: 'Email',
        address: 'Address',
      },
      stats: {
        stockCount: '5000+',
        stockLabel: 'Parts in Stock',
        yearsCount: '15+',
        yearsLabel: 'Years Experience',
        clientsCount: '1000+',
        clientsLabel: 'Happy Clients',
        deliveryCount: 'KSA',
        deliveryLabel: 'Nationwide Delivery',
      },
      footer: {
        rights: 'All rights reserved.',
        tagline: 'Genuine & Aftermarket Parts for German Cars',
      },
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        parts: 'قطع الغيار',
        contact: 'اتصل بنا',
        switch: 'English',
      },
      hero: {
        title: 'قطع غيار أصلية وتجارية للسيارات الألمانية',
        sub: 'متخصصون في قطع غيار بي إم دبليو، مرسيدس، وفولكس فاجن في السعودية.',
        cta: 'اطلب تسعيرة',
        badge: 'المتخصص الأول في قطع الغيار الألمانية بالسعودية',
        scroll: 'انتقل لأسفل',
        bmwFocus: 'تخصصنا',
        bmwTitle: 'بي إم دبليو',
        bmwDesc: 'قطع أصلية ومعتمدة وتجارية — تخصصنا الأول',
        mercedesTitle: 'مرسيدس بنز',
        mercedesDesc: 'قطع أصلية وتجارية',
        vwTitle: 'فولكس فاجن',
        vwDesc: 'قطع أصلية وتجارية',
      },
      parts: {
        title: 'منتجاتنا',
        sub: 'مخزون شامل مع تشكيلة واسعة من قطع غيار BMW الأصلية والمعتمدة.',
        categories: [
          'أجزاء المحرك',
          'أنظمة الفرامل',
          'نظام التعليق والتوجيه',
          'فلاتر وصيانة',
        ],
        descs: [
          'محركات، الشاحن التوربيني، المكابس',
          'أقراص الفرامل، فحمات، وسادات الأداء',
          'أذرع التحكم، الصدمات، الكويلات',
          'زيوت اصلية, فلاتر الزيت، فلاتر الهواء، فلاتر المقصورة',
        ],
      },
      info: {
        title: 'قم بزيارتنا',
        hoursTitle: 'ساعات العمل',
        hours:
          'السبت - الخميس: 9:00 ص - 12:00 م & 4:00 م - 9:00 م | الجمعة: مغلق',
        satThu: 'السبت - الخميس',
        friday: 'الجمعة',
        shift1: '9:00 ص – 12:00 م',
        shift2: '4:00 م – 9:00 م',
        closed: 'مغلق',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
      },
      stats: {
        stockCount: '+5000',
        stockLabel: 'قطعة في المخزون',
        yearsCount: '+15',
        yearsLabel: 'سنوات خبرة',
        clientsCount: '+1000',
        clientsLabel: 'عميل راضٍ',
        deliveryCount: 'السعودية',
        deliveryLabel: 'توصيل لكل السعودية',
      },
      footer: {
        rights: 'جميع الحقوق محفوظة.',
        tagline: 'قطع غيار أصلية وتجارية للسيارات الألمانية',
      },
    },
  };

  const t = dict[isAr ? 'ar' : 'en'];

  return (
    <main className='min-h-screen'>
      <Navbar t={t} isAr={isAr} />

      <section
        className='relative min-h-screen flex flex-col justify-between overflow-hidden'
        id='home'
      >
        <div className='absolute inset-0'>
          <Image
            src='https://images.unsplash.com/photo-1722078260281-73715bb51cc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            width={1200}
            height={800}
            alt='Premium Automotive Parts'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-linear-to-r from-corporate-dark/95 via-corporate/80 to-corporate-dark/60' />
          <div className='absolute inset-0 bg-linear-to-t from-corporate-dark/80 via-transparent to-transparent' />
        </div>

        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className='relative z-10 flex-1 flex items-center'>
          <div className='w-full max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className='text-white'>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-8'>
                <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                {t.hero.sub}
              </div>

              <h1 className='text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 tracking-tight'>
                {isAr ? (
                  <>
                    قطع غيار <br />
                    <span className='text-transparent bg-clip-text bg-linear-to-r from-green-300 to-green-500'>
                      أصلية ومعتمدة
                    </span>
                  </>
                ) : (
                  <>
                    Genuine &amp; <br />
                    <span className='text-transparent bg-clip-text bg-linear-to-r from-green-300 to-green-500'>
                      OEM Parts
                    </span>{' '}
                    <br />
                    for German Cars
                  </>
                )}
              </h1>

              <p className='text-lg md:text-xl text-white/80 mb-12 max-w-lg leading-relaxed'>
                {t.hero.sub}
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 ${isAr ? '' : ''}`}
              >
                <a
                  href='#contact'
                  className='group inline-flex items-center justify-center gap-3 bg-white text-corporate px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300'
                >
                  {t.hero.cta}
                  <svg
                    className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </a>
                <a
                  href='#parts'
                  className='inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300'
                >
                  {t.nav.parts}
                </a>
              </div>
            </div>

            <div className='hidden lg:grid grid-rows-3 gap-4'>
              <div className='group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/20 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-xl flex-shrink-0'>
                  <svg viewBox='0 0 100 100' className='w-12 h-12'>
                    <circle
                      cx='50'
                      cy='50'
                      r='48'
                      fill='#1C69D4'
                      stroke='white'
                      strokeWidth='2'
                    />
                    <circle
                      cx='50'
                      cy='50'
                      r='35'
                      fill='none'
                      stroke='white'
                      strokeWidth='2'
                    />
                    <path d='M50 15 L50 50 L85 50 Q85 15 50 15Z' fill='white' />
                    <path d='M50 85 L50 50 L15 50 Q15 85 50 85Z' fill='white' />
                  </svg>
                </div>
                <div className='text-white'>
                  <div className='font-black text-xl'> {t.hero.bmwTitle}</div>
                  <div className='text-white/70 text-sm'>{t.hero.bmwDesc}</div>
                </div>
                <div className='ms-auto bg-green-400/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-400/30'>
                  {isAr ? 'تخصصنا' : 'Our Focus'}
                </div>
              </div>

              <div className='group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/20 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-xl flex-shrink-0'>
                  <svg viewBox='0 0 100 100' className='w-12 h-12'>
                    <circle
                      cx='50'
                      cy='50'
                      r='48'
                      fill='#222'
                      stroke='white'
                      strokeWidth='2'
                    />
                    <circle
                      cx='50'
                      cy='50'
                      r='30'
                      fill='none'
                      stroke='silver'
                      strokeWidth='2'
                    />
                    <line
                      x1='50'
                      y1='20'
                      x2='50'
                      y2='50'
                      stroke='silver'
                      strokeWidth='3'
                    />
                    <line
                      x1='50'
                      y1='50'
                      x2='76'
                      y2='68'
                      stroke='silver'
                      strokeWidth='3'
                    />
                    <line
                      x1='50'
                      y1='50'
                      x2='24'
                      y2='68'
                      stroke='silver'
                      strokeWidth='3'
                    />
                  </svg>
                </div>
                <div className='text-white'>
                  <div className='font-black text-xl'>
                    {' '}
                    {t.hero.mercedesTitle}
                  </div>
                  <div className='text-white/70 text-sm'>
                    {t.hero.mercedesDesc}
                  </div>
                </div>
              </div>

              <div className='group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/20 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-xl flex-shrink-0'>
                  <svg viewBox='0 0 100 100' className='w-12 h-12'>
                    <circle
                      cx='50'
                      cy='50'
                      r='48'
                      fill='#1B3F8B'
                      stroke='white'
                      strokeWidth='2'
                    />
                    <text
                      x='50'
                      y='62'
                      textAnchor='middle'
                      fill='white'
                      fontSize='36'
                      fontWeight='bold'
                      fontFamily='Arial'
                    >
                      VW
                    </text>
                  </svg>
                </div>
                <div className='text-white'>
                  <div className='font-black text-xl'>{t.hero.vwTitle}</div>
                  <div className='text-white/70 text-sm'>{t.hero.vwDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-10 border-t border-white/10 bg-corporate-dark/60 backdrop-blur-md'>
          <div className='max-w-7xl mx-auto px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center'>
            <div className='flex flex-col items-center gap-1'>
              <span className='text-2xl font-black text-green-400'>5000+</span>
              <span className='text-xs text-white/70 uppercase tracking-widest'>
                {isAr ? 'قطعة في المخزون' : 'Parts in Stock'}
              </span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <span className='text-2xl font-black text-green-400'>15+</span>
              <span className='text-xs text-white/70 uppercase tracking-widest'>
                {isAr ? 'سنوات خبرة' : 'Years Experience'}
              </span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <span className='text-2xl font-black text-green-400'>1000+</span>
              <span className='text-xs text-white/70 uppercase tracking-widest'>
                {isAr ? 'عميل راضٍ' : 'Happy Clients'}
              </span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <span className='text-2xl font-black text-green-400'>KSA</span>
              <span className='text-xs text-white/70 uppercase tracking-widest'>
                {isAr ? 'توصيل لكل السعودية' : 'Nationwide Delivery'}
              </span>
            </div>
          </div>
        </div>

        <div className='absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40'>
          <span className='text-xs uppercase tracking-widest'>
            {isAr ? 'انتقل لأسفل' : 'Scroll'}
          </span>
          <div className='w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1'>
            <div className='w-1.5 h-3 bg-white/50 rounded-full animate-bounce' />
          </div>
        </div>
      </section>

      <section id='parts' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-5xl md:text-6xl font-black text-corporate mb-6'>
            {t.parts.title}
          </h2>
          <div className='w-24 h-1 bg-corporate-light mx-auto rounded-full' />
          <p className='text-xl text-gray-600 mt-6 max-w-2xl mx-auto'>
            {t.parts.sub}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
          {[
            {
              icon: '🔧',
              title: t.parts.categories[0],
              img: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              desc: t.parts.descs[0],
            },
            {
              icon: '🛑',
              title: t.parts.categories[1],
              img: 'https://images.unsplash.com/photo-1542230387-bfc77d26903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              desc: t.parts.descs[1],
            },
            {
              icon: '🛠️',
              title: t.parts.categories[2],
              img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              desc: t.parts.descs[2],
            },
            {
              icon: '🛢️',
              title: t.parts.categories[3],
              img: 'https://images.unsplash.com/photo-1607853203100-69829c08b88e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              desc: t.parts.descs[3],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className='group hover:scale-105 transition-all duration-500'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-2xl h-96 bg-gradient-to-br from-gray-50 to-gray-100'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-corporate/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />
                <div className='absolute bottom-6 left-6 right-6'>
                  <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 text-2xl'>
                    {item.icon}
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-2 drop-shadow-lg'>
                    {item.title}
                  </h3>
                  <p className='text-white/90 text-sm'>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id='contact'
        className='relative py-32 px-6 md:px-12 overflow-hidden'
      >
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />

        <div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div className='space-y-8'>
            {/* Working Hours */}
            <div className='bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50'>
              <h3 className='text-2xl font-bold mb-6'>{t.info.hoursTitle}</h3>

              {/* Sat - Thu Row */}
              <div className='flex flex-col pb-4 border-b border-gray-200 gap-1'>
                <div className='flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0' />
                  <span className='font-semibold text-gray-800'>
                    {t.info.satThu}
                  </span>
                </div>
                <div
                  className={`flex flex-col text-gray-600 text-sm leading-relaxed ${isAr ? 'pr-5' : 'pl-5'}`}
                >
                  <span>{t.info.shift1}</span>
                  <span>{t.info.shift2}</span>
                </div>
              </div>

              {/* Friday Row */}
              <div className='flex flex-col pt-4 gap-1'>
                <div className='flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 bg-red-400 rounded-full flex-shrink-0' />
                  <span className='font-semibold text-gray-800'>
                    {t.info.friday}
                  </span>
                </div>
                <div className={`${isAr ? 'pr-5' : 'pl-5'}`}>
                  <span className='text-red-500 font-semibold text-sm'>
                    {t.info.closed}
                  </span>
                </div>
              </div>
            </div>

            <div className='bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 space-y-4'>
              <div className='space-y-4 text-gray-700'>
                <p>
                  <strong>{t.info.phone}:</strong>{' '}
                  <a
                    href='tel:+966590019953'
                    className='text-corporate hover:underline font-semibold ml-1'
                  >
                    +966590019953
                  </a>
                </p>
                <p>
                  <strong>{t.info.whatsapp}:</strong>{' '}
                  <a
                    href='https://wa.me/966590019953'
                    className='text-corporate hover:underline font-semibold ml-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    +966590019953
                  </a>
                </p>
                {/* <p>
                  <strong>{t.info.email}:</strong>{' '}
                  <a
                    href='mailto:info@daamah.com'
                    className='text-corporate hover:underline font-semibold ml-1'
                  >
                    info@daamah.com
                  </a>
                </p> */}
                <p>
                  <strong>{t.info.address}:</strong>{' '}
                  <a
                    href='https://maps.app.goo.gl/CxzCZjp65k7s4gB77'
                    className='text-corporate hover:underline font-semibold ml-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    7642+VRM, Makkah Al Mukarramah St, Sinayiat Al Thuqba, Al
                    Khobar 34626, Saudi Arabia
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 h-[500px] flex items-center justify-center'>
            <div className='text-center'>
              <div className='w-24 h-24 bg-corporate rounded-full flex items-center justify-center mx-auto mb-6 text-3xl'>
                📍
              </div>
              <div className='bg-gray-100 h-96 rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-300'>
                <span className='text-gray-500 font-semibold'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.5365959195748!2d50.20207334251524!3d26.25691209489116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49c389a6e43713%3A0x9cbbc2667e922510!2z2YXYpNiz2LPYqSDYr9i52KfZhdipINmE2YLYt9i5INi62YrYp9ixIEJNVw!5e0!3m2!1sen!2sde!4v1772383784127!5m2!1sen!2sde'
                    width='500'
                    height='300'
                    loading='lazy'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
