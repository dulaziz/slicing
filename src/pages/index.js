import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'components/Header'
import Testimonials from 'components/Testimonials'

import DecorIntersect from 'images/decor-intersect-1.svg'
import DecorTextUnderline from 'images/text-decore.svg'
import DecorePlus from 'images/decore-plus.svg'
import DecorSwirl from 'images/decor-swirl.svg'
import Facebook from 'images/facebook.svg'
import Twitter from 'images/twitter.svg'
import Instagram from 'images/instagram.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learn Slicing</title>
        <meta name="description" content="Learning Slicing NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='absolute z-20 lg:z-10 w-full py-6 lg:py-12'>
        <Header />
      </div>

      <section className='relative mb-28'>
        <span className='absolute w-6/12 h-screen right-0 top-0 bottom-0'>
          <DecorIntersect className='fill-accent-4'/>
        </span>

        <div className='w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10'></div>

        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex'>
            <div className='w-full lg:w-6/12 pt-24 lg:pt-52'>
              <h1 className='text-accent-2 font-bold uppercase text-sm lg:text-xl mb-3 lg:mb-6'>
                Best Destinations around the world
              </h1>
              <h2 className='text-gray-900 font-serif text-4xl lg:text-[84px] leading-tight lg:leading-[89px] tracking-tighter mb-4 lg:mb-8'>
              News,{" "} 
              <span className='relative'>
                enjoy
                <span className='absolute left-0 top-full -mt-3 lg:-mt-8 -ml-4 -z-10'>
                  <DecorTextUnderline className='w-[100px] lg:w-[385px] h-1 lg:h-[12px] fill-accent-2' />
                </span>
              </span>{" "}
              and live a new and full news
              </h2>
              <p className='text-gray-500 max-w-lg leading-6 lg:leading-8 mb-8 text-sm lg:text-base'>
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
              </p>
              <div className='flex'>
                <Link href="#section-category" className='mr-6 lg:mr-11 bg-accent-1 shadow-accent-1/20 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl'>
                  Find out more
                </Link>
                <button className='flex items-center'>
                  <span className='mr-6 bg-accent-2 text-white inline-flex items-center justify-center p-4 rounded-full shadow-accent-2/20 shadow-[0_15px_30px]'>
                  <span class="material-icons">play_arrow</span>
                  </span>
                  <span className='hidden lg:block text-gray-500'>Play demo</span>
                </button>
              </div>
            </div>

            <div className='hidden lg:block w-[783px] h-[764] pt-24 relative'>
              <div className='absolute w-[137px] h-[95px] top-44 left-8 z-30'>
                <Image 
                  layout="responsive"
                  width={300}
                  height={300}
                  src="/images/plane.png"
                />
              </div>
              <div className='absolute w-[137px] h-[95px] top-60 right-5 z-10'>
                <Image 
                  layout="responsive"
                  width={400}
                  height={400}
                  src="/images/plane.png"
                />
              </div>
              <div className='relative z-20 transform -translete-x-16'>
              <Image 
                  priority
                  layout="responsive"
                  width={650}
                  height={650}
                  src="/images/hero-traveller-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-32' id='section-category'>
        <div className='max-w-7xl mx-auto relative px-4'>
          <div className='absolute w-36 h-36 lg:-right-8 -top-10'>
            <DecorePlus className='decore-plus-style-1' />
          </div>
          <div className='text-center flex flex-col mb-16'>
            <h3 className='uppercase mb-2 text-gray-500'>Category</h3>
            <h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug'>We Offer Best Services</h3>
          </div>

          <div className='flex flex-wrap gap-y-5 lg:gap-y-0 text-gray-900'>
            <div className='w-full lg:w-3/12 px-5 lg:px-8'>
              <div className='relative transition-all duration-300 group hover:shadow-great bg-white flex flex-col cursor-pointer items-center justify-center text-center rounded-[36px]'>
                <div className='relative mb-6 inline-flex h-28'>
                  <div className='z-10 absolute bottom-2 transform -translate-x-2/3 -right-16'>
                    <Image 
                      layout="fixed"
                      width={70}
                      height={70}
                      src="/images/satellite-icon.png"
                    />
                  </div>
                  <div className='absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12'></div>
                </div>
                  <h4 className='text-xl mb-3'>Calculated Weather</h4>
                  <h5 className='px-3 lg:px-8 mb-8 text-gray-500'>Built Wicket longer admire do barton vanity itself do in it.</h5>
                <div className='absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-20 bottom-12 group-hover:-bottom-8 left-12 group-hover:-left-8 transform -translete-x-1/2 translete-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28'></div>
              </div>
            </div>

            <div className='w-full lg:w-3/12 px-5 lg:px-8'>
              <div className='relative transition-all duration-300 group hover:shadow-great bg-white flex flex-col cursor-pointer items-center justify-center text-center rounded-[36px]'>
                <div className='relative mb-6 inline-flex h-28'>
                  <div className='z-10 absolute -bottom-2 transform -translate-x-1/2 -right-28'>
                    <Image 
                      layout="fixed"
                      width={146}
                      height={133}
                      src="/images/plane.png"
                    />
                  </div>
                  <div className='absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12'></div>
                </div>
                  <h4 className='text-xl mb-3'>Best Flights</h4>
                  <h5 className='px-3 lg:px-8 mb-8 text-gray-500'>Engrossed listening. Park gate sell they west hard for the.</h5>
                <div className='absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-20 bottom-12 group-hover:-bottom-8 left-12 group-hover:-left-8 transform -translete-x-1/2 translete-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28'></div>
              </div>
            </div>

            <div className='w-full lg:w-3/12 px-5 lg:px-8'>
              <div className='relative transition-all duration-300 group hover:shadow-great bg-white flex flex-col cursor-pointer items-center justify-center text-center rounded-[36px]'>
                <div className='relative mb-6 inline-flex h-28'>
                  <div className='z-10 absolute bottom-2 transform -translate-x-2/3 -right-10'>
                    <Image 
                      layout="fixed"
                      width={40}
                      height={40}
                      src="/images/mic-icon.png"
                    />
                  </div>
                  <div className='absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12'></div>
                </div>
                  <h4 className='text-xl mb-3'>Local Events</h4>
                  <h5 className='px-3 lg:px-8 mb-8 text-gray-500'>Barton vanity itself do in it. Preferd to men it engrossed listening.</h5>
                <div className='absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-20 bottom-12 group-hover:-bottom-8 left-12 group-hover:-left-8 transform -translete-x-1/2 translete-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28'></div>
              </div>
            </div>

            <div className='w-full lg:w-3/12 px-5 lg:px-8'>
              <div className='relative transition-all duration-300 group hover:shadow-great bg-white flex flex-col cursor-pointer items-center justify-center text-center rounded-[36px]'>
                <div className='relative mb-6 inline-flex h-28'>
                  <div className='z-10 absolute bottom-2 transform -translate-x-2/3 -right-16'>
                    <Image 
                      layout="fixed"
                      width={60}
                      height={60}
                      src="/images/gear-icon.png"
                    />
                  </div>
                  <div className='absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12'></div>
                </div>
                  <h4 className='text-xl mb-3'>Customization</h4>
                  <h5 className='px-3 lg:px-8 mb-8 text-gray-500'>We deliver outsourced aviation services for military customers.</h5>
                <div className='absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-20 bottom-12 group-hover:-bottom-8 left-12 group-hover:-left-8 transform -translete-x-1/2 translete-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28'></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='mb-32'>
        <div className='max-w-7xl mx-auto relative px-4'>
          <div className='text-center flex flex-col mb-16'>
            <h3 className='uppercase mb-2 text-gray-500'>Top Selling</h3>
            <h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug'>Top Destinations</h3>
          </div>

          <div className='flex flex-wrap gap-7 relative justify-center'>

            <div className='absolute w-[96px] h-[252px] bottom-10 right-16'>
              <DecorSwirl className="stroke-gray-500" />
            </div>

            <div className='relative z-20'>
              <div className='rounded-3xl shadow-great bg-white flex flex-col'>
                <div className='rounded-t-3xl overflow-hidden relative h-80'>
                  <Image 
                    layout='fill'
                    width={314}
                    height={457}
                    className='object-cover'
                    src='/images/desti1.jpg'
                  />
                </div>
                <div className='p-5'>
                  <div className='flex justify-between mb-5'>
                    <h6 className=''>Rome, Italty</h6>
                    <h6 className=''>$5,42k</h6>
                  </div>
                  <div className='flex gap-3 mb-5 text-gray-500'>
                  <span class="material-icons">near_me</span>
                  <p>10 Days Trip</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative z-20'>
              <div className='rounded-3xl shadow-great bg-white flex flex-col'>
                <div className='rounded-t-3xl overflow-hidden relative h-80'>
                  <Image 
                    layout='fill'
                    width={314}
                    height={457}
                    className='object-cover'
                    src='/images/desti2.jpg'
                  />
                </div>
                <div className='p-5'>
                  <div className='flex justify-between mb-5'>
                    <h6 className=''>London, UK</h6>
                    <h6 className=''>$4.2k</h6>
                  </div>
                  <div className='flex gap-3 mb-5 text-gray-500'>
                  <span class="material-icons">near_me</span>
                  <p>12 Days Trip</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative z-20'>
              <div className='rounded-3xl shadow-great bg-white flex flex-col'>
                <div className='rounded-t-3xl overflow-hidden relative h-80'>
                  <Image 
                    layout='fill'
                    width={314}
                    height={457}
                    className='object-cover'
                    src='/images/desti3.png'
                  />
                </div>
                <div className='p-5'>
                  <div className='flex justify-between mb-5'>
                    <h6 className=''>Full Europe</h6>
                    <h6 className=''>$15k</h6>
                  </div>
                  <div className='flex gap-3 mb-5 text-gray-500'>
                  <span class="material-icons">near_me</span>
                  <p>28 Days Trip</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className='mb-32'>
        <div className='max-w-7xl mx-auto relative px-4'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full lg:w-6/12 pr-0 lg:pr-28 mb-10 lg:mb-0'>
              <div className='flex flex-col mb-16'>
                <h3 className='uppercase mb-2 text-gray-500'>Easy and Fast</h3>
                <h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug'>Book your next trip in 3 easy steps</h3>
              </div>
              <ul>
                <li className='flex items-center gap-5 mb-5'>
                  <span className='bg-accent-5 text-white flex items-center justify-center w-10 h-10 rounded-xl'>
                    <span class="material-icons">my_location</span>
                  </span>
                  <div className='w-8/12 text-gray-500'>
                  <h6 className='font-semibold'>Choose Destination</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                  </div>
                </li>

                <li className='flex items-center gap-5 mb-5'>
                  <span className='bg-accent-2 text-white flex items-center justify-center w-10 h-10 rounded-xl'>
                  <span class="material-icons">account_balance_wallet</span>
                  </span>
                  <div className='w-8/12 text-gray-500'>
                  <h6 className='font-semibold'>Make Payment</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                  </div>
                </li>

                <li className='flex items-center gap-5 mb-5'>
                  <span className='bg-accent-1 text-white flex items-center justify-center w-10 h-10 rounded-xl'>
                  <span class="material-icons">directions_car_filled</span>
                  </span>
                  <div className='w-8/12 text-gray-500'>
                  <h6 className='font-semibold'>Reach Airport on Selected Date</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='w-full lg:w-6/12'>
              <div className='relative flex justify-center'>
                <div className='z-10 bg-white rounded-3xl shadow-great w-80 p-5'>
                  <div className='relative w-full mb-5'>
                      <Image 
                        layout='fill'
                        width={321}
                        height={161}
                        className='object-cover rounded-2xl'
                        src='/images/trip1.jpg'
                      />
                    </div>
                    <div className='mb-3'>
                      <h6 className='mb-2'>Trip To Greece</h6>
                      <span className='text-gray-500'>14-29 June | <span>by Robbin joseph</span>
                      </span>
                    </div>
                    <div className='flex gap-3 mb-6'>
                      <span className='bg-gray-300 w-9 h-9 flex items-center justify-center rounded-full'>
                        <span className="material-icons text-gray-400">energy_savings_leaf</span>
                      </span>
                      <span className='bg-gray-300 w-9 h-9 flex items-center justify-center rounded-full'>
                      <span class="material-icons text-gray-400">map</span>
                      </span>
                      <span className='bg-gray-300 w-9 h-9 flex items-center justify-center rounded-full'>
                      <span class="material-icons text-gray-400">near_me</span>
                      </span>
                    </div>
                    <div className='flex justify-between text-gray-500 mb-3'>
                        <span className='flex gap-3 items-center'>
                          <span class="material-icons">apartment</span>
                          24 people going
                        </span>
                        <span className="material-icons text-accent-8">favorite_border</span>
                    </div>
                </div>
                <div className='bg-white shadow-great absolute z-20 -bottom-20 md:bottom-16 -right-4 md:right-5 p-3 rounded-xl flex gap-3'>
                    <div className=''>
                      <Image 
                        layout='fill'
                        width={50}
                        height={50}
                        className='object-cover rounded-full'
                        src='/images/trip2.jpg'
                      />
                    </div>
                    <div>
                      <h6 className='text-gray-500 mb-1 text-xs'>Ongoing</h6>
                      <h6 className='text-gray-900 mb-3'>Trip to rome</h6>
                      <p className='mb-1'><span className='text-accent-8'>40%</span> completed</p>
                      <span className='bg-gray-200 h-1 rounded-full w-full overflow-hidden flex'>
                        <span className='rounded-full bg-accent-8 w-20 h-full'>aa</span>
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-96 h-96 bg-accent-1/20 -z-10 rounded-full blur-3xl absolute right-0 top-0'></div>

        </div>
      </section>

      <Testimonials />
    
      <section className='mb-28'>
        <div className='max-w-full lg:max-w-7xl mx-auto'>
          <div className='flex flex-wrap gap-y-5'>
            <div className='w-full lg:w-1/5 px-4'>
              <div className='flex items-center justify-center h-20 p-4 relative grayscale hover:grayscale-0 hover:bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
              {/* <span class="material-icons">my_location</span> */}
                <Image
                  className='object-none'
                  layout='fill'
                  width={200}
                  height={200}
                  src={`/images/logo1.png`}
                />
              </div>
            </div>
            <div className='w-full lg:w-1/5 px-4'>
              <div className='flex items-center justify-center h-20 p-4 relative grayscale hover:grayscale-0 hover:bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
              {/* <span class="material-icons">my_location</span> */}
                <Image
                  className='object-none'
                  layout='fill'
                  width={200}
                  height={200}
                  src={`/images/logo1.png`}
                />
              </div>
            </div>
            <div className='w-full lg:w-1/5 px-4'>
              <div className='flex items-center justify-center h-20 p-4 relative grayscale hover:grayscale-0 hover:bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
              {/* <span class="material-icons">my_location</span> */}
                <Image
                  className='object-none'
                  layout='fill'
                  width={200}
                  height={200}
                  src={`/images/logo1.png`}
                />
              </div>
            </div>
            <div className='w-full lg:w-1/5 px-4'>
              <div className='flex items-center justify-center h-20 p-4 relative grayscale hover:grayscale-0 hover:bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
              {/* <span class="material-icons">my_location</span> */}
                <Image
                  className='object-none'
                  layout='fill'
                  width={200}
                  height={200}
                  src={`/images/logo1.png`}
                />
              </div>
            </div>
            <div className='w-full lg:w-1/5 px-4'>
              <div className='flex items-center justify-center h-20 p-4 relative grayscale hover:grayscale-0 hover:bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
              {/* <span class="material-icons">my_location</span> */}
                <Image
                  className='object-none'
                  layout='fill'
                  width={200}
                  height={200}
                  src={`/images/logo1.png`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 lg:pb-14 relative overflow-hidden'>
        <div className='w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-3/40'></div>
        <div className='max-w-full lg:max-w-7xl max-auto relative px-4'>
          <div className='flex flex-wrap mb-10 lg:mb-12'>
            <div className='max-w-full lg:w-4/12 px-0 lg:px-4 mb-10 lg:mb-0'>
              <h6 className='text-4xl lg:text-5xl tracking-tight text-gray-900 mb-5'>
                Radar Bogor
              </h6>
              <p className='text-sm text-gray-500 pr-8'>
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>
            <div className='w-full lg:w-2/12 px-0 lg:px-4 mb-10 lg:mb-0'>
              <h6 className='text-xl tracking-tight text-gray-900 mb-5'>
                Company
              </h6>
              <ul className='text-lg text-gray-500 flex flex-col gap-y-2'>
                <li>
                  <Link href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    Carerrs
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    Mobile
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-full lg:w-2/12 px-0 lg:px-4 mb-10 lg:mb-0'>
              <h6 className='text-xl tracking-tight text-gray-900 mb-5'>
                Contact
              </h6>
              <ul className='text-lg text-gray-500 flex flex-col gap-y-2'>
                <li>
                  <Link href="/about">
                    Help/FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                   Affilates
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-full lg:w-2/12 px-0 lg:px-4 mb-10 lg:mb-0'>
              <h6 className='text-xl tracking-tight text-gray-900 mb-5'>
                More
              </h6>
              <ul className='text-lg text-gray-500 flex flex-col gap-y-2'>
                <li>
                  <Link href="/about">
                  Airlinefees                  
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    Airline
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    Low fare tips
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-full lg:w-2/12 px-0 lg:px-4 mb-10 lg:mb-0'>
              <ul className='text-lg text-gray-500 flex gap-x-5 mb-5'>
                <li>
                  <a href='#' className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'>
                    <span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-soccial absolute inset-0'></span>
                    <span className='relative z-20'>
                      <Facebook className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                <a href='#' className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'>
                    <span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-soccial absolute inset-0'></span>
                    <span className='relative z-20'>
                      <Instagram className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                <a href='#' className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'>
                    <span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-soccial absolute inset-0'></span>
                    <span className='relative z-20'>
                      <Twitter className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
              </ul>
              <h6 className='text-xl tracking-tight text-gray-500 mt-2 mb-7'>
                Discover our app
              </h6>
              <ul className='flex gap-x-2'>
                <li className='relative w-[107px] h-[35px]'>
                  <a href='#' className='relative w-full h-full flex overflow-hidden rounded-full'>
                    <Image 
                      className='object-contain'
                      layout="fill"
                      width={170}
                      height={35}
                      src="/images/play-store.png"
                    />
                  </a>
                </li>
                <li className='relative w-[107px] h-[35px]'>
                  <a href='#' className='relative w-full h-full flex overflow-hidden rounded-full'>
                    <Image 
                      className='object-contain'
                      layout="fill"
                      width={170}
                      height={35}
                      src="/images/app-store.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6 className='text-center text-gray-500 text-sm'>All rights reserved@radarbogor.id</h6>
        </div>
      </section>

    </div>
  )
}
