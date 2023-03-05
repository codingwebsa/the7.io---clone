import { DetailsCalender } from "@/assets";
import Image from "next/image";

const DetailSection = () => {
  return (
    <>
      <section>
        <div>
          <h2>The last digital agency you&rsquo;ll ever need</h2>
          <p>
            Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
            dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla
            ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna
            porttitor scelerisque.
          </p>
          <div>
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
                <path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
              </svg>
            </Detail>
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

const Detail = ({ children, text }: detailType) => {
  return (
    <>
      <div>
        <span className="text-primary">{children}</span>
        <p>{text}</p>
      </div>
    </>
  );
};
