import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import globalStylesUrl from '~/styles/global.css';

import tailwindStylesheetUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: globalStylesUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "Seacrest Markets | Trade with the World's #1 Rated Broker",
  viewport: 'width=device-width,initial-scale=1',
});

// console.log(globalStylesUrl );
export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* <link rel="stylesheet" href={globalStylesUrl}  /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
