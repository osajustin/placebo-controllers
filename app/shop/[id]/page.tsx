'use client'

import { useState } from 'react'
import { Bars3Icon, StarIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Dialog, DialogPanel, Radio, RadioGroup } from '@headlessui/react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ]

const products = [
  {
    id: '1',
    name: 'Phob 2.0.5 Drop-in-Kit',
    price: '$110',
    breadcrumbs: [
      { id: 1, name: 'Shop', href: '/shop' },
    ],
    images: [
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/DSC02956.jpg?v=1715801709&width=1100',
        alt: 'Phob 2.0.5 Drop-in Kit',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },

    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-900' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' },
        { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
        { name: 'Green', class: 'bg-green-500', selectedClass: 'ring-green-500' },
        { name: 'Yellow', class: 'bg-yellow-500', selectedClass: 'ring-yellow-500' },
        { name: 'Purple', class: 'bg-purple-500', selectedClass: 'ring-purple-500' },
        { name: 'Orange', class: 'bg-orange-500', selectedClass: 'ring-orange-500' },
        { name: 'Pink', class: 'bg-pink-500', selectedClass: 'ring-pink-500' },
    ],
    sizes: [],
    description: 'The Phob 2.0.5 Drop-in-Kit is a sleek upgrade solution for your gaming needs. Perfect for DIY enthusiasts who want customization and functionality.',
    highlights: [
      'Easy to install drop-in kit',
      'Compatible with multiple controllers',
      'Enhanced responsiveness and durability',
      'Lightweight and ergonomic design',
    ],
    details: 'This kit is designed for gamers seeking to upgrade their controllers. It comes with detailed instructions for a seamless installation process.',
    reviews: { href: '#', average: 4.7, totalCount: 48 },
  },
  {
    id: '2',
    name: 'Phob 2.0.5 Gamecube Controller',
    price: '$140',
    breadcrumbs: [
      { id: 1, name: 'Shop', href: '/shop' },
    ],
    images: [
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conch.jpg?v=1715801993&width=2200',
        alt: 'Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
    ],
    colors: [
        [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-900' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
            { name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' },
          ]
    ],
    sizes: [],
    description: 'The Phob 2.0.5 Gamecube Controller reimagines a classic with modern performance, making it the perfect choice for retro and competitive gamers alike.',
    highlights: [
      'Optimized for competitive gaming',
      'Ergonomic design for extended play',
      'High-quality tactile buttons',
      'Compatible with GameCube and Switch consoles',
    ],
    details: 'This controller features precision engineering for pro-level performance. Its build quality ensures durability for intense gaming sessions.',
    reviews: { href: '#', average: 4.9, totalCount: 87 },
  },
  {
    id: '3',
    name: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
    price: '$250',
    breadcrumbs: [
      { id: 1, name: 'Shop', href: '/shop' },
    ],
    images: [
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
      {
        src: 'https://placebocontrollers.com/cdn/shop/files/conchface2.jpg?v=1723151851&width=2200',
        alt: 'Crystal Clear Phob 2.0.5 Gamecube Controller',
      },
    ],
    colors: [
      { name: 'Clear', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-900' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Green', class: 'bg-green-500', selectedClass: 'ring-green-500' },
    { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
    { name: 'Yellow', class: 'bg-yellow-500', selectedClass: 'ring-yellow-500' },
    { name: 'Orange', class: 'bg-orange-500', selectedClass: 'ring-orange-500' },
    ],
    sizes: [],
    description: 'Stand out with the Crystal Clear Phob 2.0.5 Gamecube Controller, blending style and precision to give you an unmatched gaming experience.',
    highlights: [
      'Transparent design for a unique aesthetic',
      'Responsive analog sticks for smooth control',
      'Enhanced grip for superior handling',
      'Plug-and-play compatibility',
    ],
    details: 'With its eye-catching design and unbeatable functionality, this controller is a must-have for any serious gamer looking to make a statement.',
    reviews: { href: '#', average: 4.8, totalCount: 73 },
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return <p>Product not found</p>
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Placebo Controllers</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="pt-24">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <span className="font-medium text-gray-500">{product.name}</span>
            </li>
          </ol>
        </nav>

        {/* Image Gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="aspect-[4/5] w-full object-cover sm:rounded-lg lg:aspect-[3/4]"
          />
        </div>

        {/* Product Info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        product.reviews.average > rating ? 'text-yellow-500' : 'text-gray-200',
                        'h-5 w-5'
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{product.reviews.average} out of 5 stars</p>
                <a href={product.reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        className={classNames(
                          color.selectedClass,
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                        )}
                      >
                        <span
                          className={classNames(color.class, 'h-8 w-8 rounded-full border border-black/10')}
                          aria-hidden="true"
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Add to bag
              </button>
            </form>
          </div>

          {/* Description */}
          <div className="py-10 lg:col-span-2           lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}