"use client";

const DetailSection = () => {
  return (
    <>
      <section id="detailsSec" className="md:my-20 mx-2">
        <div>
          <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-20 font-medium">
            The last digital agency you&rsquo;ll ever need
          </h2>
          <p className="max-w-4xl mx-auto text-center text-lg sm:text-xl text-[#a1a4a5] leading-relaxed mb-16">
            Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
            dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla
            ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna
            porttitor scelerisque.
          </p>
          <div className="grid space-y-6 md:space-y-0 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
            <Detail text="10+ years of market experience">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                width="32"
                fill="currentColor"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 6V5h-3v2h-2V5H9v2H7V5H4v4h16zm0 2H4v8h16v-8zM6 13h5v4H6v-4z" />
              </svg>
            </Detail>
            <Detail text="Unique technologies & modern approach">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                width="32"
                fill="currentColor"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
              </svg>
            </Detail>
            <Detail text="100+ cuccessful cases in portfolio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                width="32"
                fill="currentColor"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 7v12h16V7H4z" />
              </svg>
            </Detail>
            <Detail text="Customer satisfaction is our top priority">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                width="32"
                fill="currentColor"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </Detail>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailSection;

interface detailType {
  children: React.ReactNode;
  text: String;
}

const Detail = ({ children: icon, text }: detailType) => {
  return (
    <>
      <div className="flex lg:flex-col gap-4">
        <span className="text-primary">{icon}</span>
        <p className="text-xl">{text}</p>
      </div>
    </>
  );
};
