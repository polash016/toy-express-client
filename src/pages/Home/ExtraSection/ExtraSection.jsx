import { Button } from '@material-tailwind/react';
import photo from '../../../../src/image/new1.jpg';
import photo1 from '../../../../src/image/new2.jpg';
import photo2 from '../../../../src/image/new3.jpg';
import photo3 from '../../../../src/image/pexels-karen-laårk-boshoff-8281139.jpg';

const ExtraSection = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Rev up your Sales: Sell Your Toy Cars on our Website Today!
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Unlock the joy of selling your toy cars effortlessly! Join our online platform and showcase your collection to eager buyers worldwide. 
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={photo3}
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={photo2}
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={photo1}
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={photo}
            alt=""
          />
        </div>
        <div className="flex items-center sm:justify-center">
          <Button
            href="/register"
            className="inline-flex items-center justify-center  px-6 mr-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Sign up
          </Button>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    );
};

export default ExtraSection;