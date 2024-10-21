import { useState, useEffect } from 'react';

// CountUp component
export function CountUp({ start = 0, end, formattingFn }) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startVal = start;
    const duration = 2000;
    const increment = (end - startVal) / (duration / 16.67);

    const countUpInterval = setInterval(() => {
      startVal += increment;
      if (startVal >= end) {
        setValue(end);
        clearInterval(countUpInterval);
      } else {
        setValue(startVal);
      }
    }, 16.67);

    return () => clearInterval(countUpInterval);
  }, [start, end]);

  return <span>{formattingFn ? formattingFn(value) : Math.round(value)}</span>;
}

// Utility function to shorten numbers
export function fShortenNumber(number) {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return number.toString();
}

// Custom hook for responsive design
export function useResponsive(breakpoint, direction) {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia(
        `(${direction === 'up' ? 'min' : 'max'}-width: ${
          breakpoint === 'sm' ? 640 : breakpoint === 'md' ? 768 : 1024
        }px)`
      );
      setIsResponsive(mediaQuery.matches);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint, direction]);

  return isResponsive;
}

// SUMMARY data
const SUMMARY = [
  { name: 'Air tickets sold', number: 130 },
  { name: 'Tours booked', number: 196 },
  { name: 'Site visitors', number: 10679 },
  { name: 'Verified hotels', number: 877 },
];

// Default export for TravelAbout component
export default function count() {

  return (
    <div className="overflow-hidden py-10">
      <div className="mx-auto max-w-xl text-center pb-10">
        <h1 className="text-4xl font-bold mb-3">About us</h1>
        <p className="text-gray-500">
          Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center pt-10 pb-10">
        {SUMMARY.map((value) => (
          <div key={value.name} className="space-y-1">
            <h2 className="text-3xl font-bold">
              <CountUp
                start={value.number / 5}
                end={value.number}
                formattingFn={(newValue) => fShortenNumber(newValue)}
              />
              <span className="text-primary ml-1 align-top">+</span>
            </h2>
            <p className="text-gray-500">{value.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:text-left">
        <div className="md:w-5/12">
          <div className="w-6 h-1 bg-primary mx-auto md:mx-0 mb-3"></div>
          <h3 className="text-3xl font-semibold">Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla Nunc egestas</h3>
        </div>

        <div className="md:w-6/12">
          <h4 className="text-2xl mb-3">Fusce convallis metus id felis luctus</h4>
          <p className="text-gray-500">
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            <br />
            <br />
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et
            ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
