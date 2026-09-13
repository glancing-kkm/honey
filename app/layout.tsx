import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://onggul-honey.kingkim.chatgpt.site'),
  icons: { icon: '/favicon.svg' },
  openGraph: { title: '온꿀 ONGGUL | 자연의 온기를, 당신의 하루에', description: '꽃마다 다른 향, 취향마다 다른 달콤함. 나만의 꿀과 마음을 전하는 선물을 만나보세요.', locale: 'ko_KR', type: 'website', url: 'https://onggul-honey.kingkim.chatgpt.site', images: [{url: 'https://onggul-honey.kingkim.chatgpt.site/og.png', width: 1536, height: 1024, alt: '온꿀 — 자연의 온기를, 당신의 하루에'}] },
  twitter: {card: 'summary_large_image', title: '온꿀 ONGGUL', description: '자연의 온기를, 당신의 하루에.', images: ['https://onggul-honey.kingkim.chatgpt.site/og.png']},
  title: '온꿀 ONGGUL | 자연의 온기를, 당신의 하루에',
  description: '꽃마다 다른 향, 취향마다 다른 달콤함. 아카시아 꿀부터 깊은 밤꿀, 마음을 전하는 선물 세트까지 온꿀에서 만나보세요. 브랜드 쇼핑몰 시안.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><head><link rel="preload" href="/fonts/bm-hanna-pro.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><link rel="preload" href="/fonts/bm-hanna-air.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><a href="#main" className="skip-link">본문으로 바로가기</a>{children}</body></html>;
}
