/* eslint-disable @next/next/no-img-element */
const SponserSection = () => {
  return (
    <>
      <section>
        {/* <h3>WE ARE PROUD TO WORK WITH THESE COMPANIES</h3> */}
        <LogoCloud />
      </section>
    </>
  );
};

export default SponserSection;

function LogoCloud() {
  return (
    <section id="sponserSection" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg tracking-widest leading-8 text-primary mb-20">
          WE ARE PROUD TO WORK WITH THESE COMPANIES
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer max-h-12 w-full object-contain lg:col-span-1 invert"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer max-h-12 w-full object-contain lg:col-span-1 invert"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer max-h-12 w-full object-contain lg:col-span-1 invert"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer max-h-12 w-full object-contain sm:col-start-2 invert lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer col-start-2 max-h-12 w-full object-contain invert sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
}
