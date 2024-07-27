/* eslint-disable react/no-unescaped-entities */
import { Check, Star } from 'lucide-react';
import { MaxWidthWrapper } from '../components/MaxWidthWrapper';
import Image from 'next/image';
import Phone from '@/components/Phone';
import { Icons } from '@/components/Icon';
import { UserComment } from '@/components/comment';
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pd-24 sm:pd-32 lg:gap-x-0` lg:pd-52 pt-10 lg:grid lg:grid-cols-3 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <Image
                  src="/snake-1.png"
                  alt="psyche"
                  width={500}
                  height={300}
                />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
                Your mental health is{' '}
                <span className="bg-[#7d3bed] px-2 text-white">important</span>{' '}
                to us
              </h1>
              <p className="mb:text-wrap mt-6 max-w-prose text-balance text-center text-lg lg:pr-10 lg:text-left">
                CaseCobra allows you to protect your mental health. not just
                your mental health.
              </p>

              <ul className="\\ mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#7d3bed]" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#7d3bed]" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#7d3bed]" />
                    modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12">
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                  <div className="flex -space-x-4">
                    <Image
                      src="/users/user-1.png"
                      alt="user image"
                      width={200}
                      height={200}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    />
                    <Image
                      src="/users/user-2.png"
                      alt="user image"
                      width={200}
                      height={200}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    />
                    <Image
                      src="/users/user-3.png"
                      alt="user image"
                      width={200}
                      height={200}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    />
                    <Image
                      src="/users/user-4.jpg"
                      alt="user image"
                      width={200}
                      height={200}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    />
                    <Image
                      src="/users/user-5.jpg"
                      alt="user image"
                      width={200}
                      height={200}
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5">
                      <Star className="h-4 w-4 fill-[#7d3bed] text-[#7d3bed]" />
                      <Star className="h-4 w-4 fill-[#7d3bed] text-[#7d3bed]" />
                      <Star className="h-4 w-4 fill-[#7d3bed] text-[#7d3bed]" />
                      <Star className="h-4 w-4 fill-[#7d3bed] text-[#7d3bed]" />
                      <Star className="h-4 w-4 fill-[#7d3bed] text-[#7d3bed]" />
                    </div>
                    <p>
                      <span className="font-semibold">1.250+</span> happy
                      customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="iphone image"
                width={500}
                height={300}
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <Image
                src="/line.png"
                alt="iphone image"
                width={500}
                height={300}
                className="select -none absolute -bottom-6 -left-6 w-20"
              />
              <Phone
                className="w-64"
                imgSrc="/testimonials/1.jpg"
                dark={false}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="mb:text-6x1 order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900">
              What our{' '}
              <span className="relative px-2">
                customer{' '}
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 left-0 hidden text-[#7d3bed] sm:block" />{' '}
              </span>{' '}
              say
            </h2>
            <Image
              src="/snake-2.png"
              alt="line image"
              width={500}
              height={300}
              className="order-0 w-24 lg:order-1"
            />
          </div>

          <div className="max-w-2x1 mx-auto grid grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <UserComment
              stars={5}
              imageUrl="/users/user-1.png"
              userName="Jonathan">
              "The case feels durable and I even got a compliment on the design.
              Had the case for two and a half moths now and
              <span className="font-extrabold text-[#7d3bed]">
                {' '}
                the image is super clear
              </span>
              , on the case i had before, the image started fading into
              yellow-ish color after a couple weeks. Love it"
            </UserComment>
            <UserComment
              stars={5}
              imageUrl="/users/user-4.jpg"
              userName="Michael">
              "I usually keep my phone together with my keys in my pocket and
              that led to some pretty heavy scratchmarks on all of my last phone
              cases. This one, besides a barely noticeable scratch on the f
              corner,{' '}
              <span className="font-extrabold text-[#7d3bed]">
                looks brand new after about half a year
              </span>
              . I dig it."
            </UserComment>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
