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
  title: 'Seacrest Markets | Your book A broker',
  viewport: 'width=device-width,initial-scale=1',
});

// console.log(globalStylesUrl );
export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* <link rel="stylesheet" href={globalStylesUrl}  /> */}
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
