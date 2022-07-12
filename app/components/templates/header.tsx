/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from '@remix-run/react';

const gettingStarted = [
  {
    name: 'Live Trading',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/getting-started/live-trading',
    icon: CursorClickIcon,
  },
  {
    name: 'Demo Trading',
    description: 'Get a better understanding of how trading Works.',
    href: '/getting-started/demo-trading',
    icon: ChartBarIcon,
  },
  {
    name: 'Deposit & Withdrawals',
    description: "Your customers' data will be safe and secure.",
    href: '/getting-started/deposit-withdrawals',
    icon: ShieldCheckIcon,
  },
];

const callsToAction = [
  { name: 'Watch Demo', href: '/', icon: PlayIcon },
  { name: 'Contact Sales', href: '/contact', icon: PhoneIcon },
];

const about = [
  {
    name: 'About us',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '/about-us',
    icon: SupportIcon,
  },
  {
    name: 'Contact us',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '/contact-us',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Legal Documentation',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '/legal-documentation',
    icon: CalendarIcon,
  },
  {
    name: 'Discord Community',
    description: 'Understand how we take your privacy seriously.',
    href: '/',
    icon: ShieldCheckIcon,
  },
];

const trading = [
  {
    name: 'Forex',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '/markets/forex/',
    icon: SupportIcon,
  },
  {
    name: 'Crypto CFD Trading',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '/markets/crypto/',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Indices Trading',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '/markets/indices/',
    icon: CalendarIcon,
  },
  {
    name: 'Shares',
    description: 'Understand how we take your privacy seriously.',
    href: '/markets/shares/',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Bonds',
    description: 'Understand how we take your privacy seriously.',
    href: '/markets/bonds/',
    icon: ShieldCheckIcon,
  },
];

// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '/' },
//   {
//     id: 2,
//     name: 'How to use search engine optimization to drive traffic to your site',
//     href: '/',
//   },
//   { id: 3, name: 'Improve your customer experience', href: '/' },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Popover className="relative text-white bg-seacrest-300">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Seacrest Markets</span>
              <img className="w-48" src="/seacrest-markets-white-logo.svg" alt="Seacrest Markets logo" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-seacrest-50">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md  text-base font-medium hover:text-seacrest-200 focus:outline-none focus:ring-2 focus:ring-seacrest-50 focus:ring-offset-2'
                    )}>
                    <span>Getting started</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {gettingStarted.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <item.icon className="flex-shrink-0 w-6 h-6 text-seacrest-50" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link
                                to={item.href}
                                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100">
                                <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-seacrest-200 focus:outline-none focus:ring-2 focus:ring-seacrest-50 focus:ring-offset-2'
                    )}>
                    <span>Trading</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {trading.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <item.icon className="flex-shrink-0 w-6 h-6 text-seacrest-50" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Recent Posts</h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <Link to={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link to="/" className="font-medium text-seacrest-50 hover:text-seacrest-50">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </Link>
                          </div>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link to="/platforms" className="text-base font-medium text-gray-500 hover:text-seacrest-200">
              Platforms
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-seacrest-200 focus:outline-none focus:ring-2 focus:ring-seacrest-50 focus:ring-offset-2'
                    )}>
                    <span>About Us</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {about.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <item.icon className="flex-shrink-0 w-6 h-6 text-seacrest-50" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Recent Posts</h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <Link to={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link to="/" className="font-medium text-seacrest-50 hover:text-seacrest-50">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </Link>
                          </div>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-seacrest-50 hover:bg-seacrest-100">
              Client Login
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-seacrest-50.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-seacrest-50">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {gettingStarted.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <item.icon className="flex-shrink-0 w-6 h-6 text-seacrest-50" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </Link>

                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </Link>
                {about.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  to="/"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-seacrest-50 hover:bg-seacrest-100">
                  Sign up
                </Link>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?{' '}
                  <Link to="/" className="text-seacrest-50 hover:text-seacrest-50">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
