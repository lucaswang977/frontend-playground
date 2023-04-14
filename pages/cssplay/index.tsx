import Link from "next/link"

type CaseType = {
  id: number;
  image: string;
  href: string;
  name: string;
};

const caseData: CaseType[] = [
  {
    id: 1,
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" id="visual" viewBox="0 0 900 600" width="900" height="600" version="1.1"><rect width="900" height="600" fill="#001829"/><g><g transform="translate(526 286)"><path d="M0 -147L127.3 -73.5L127.3 73.5L0 147L-127.3 73.5L-127.3 -73.5Z" fill="#FCAF3C"/></g></g></svg>',
    href: "cssplay/hamburger",
    name: "Animated Hamburger Icons",
  },
  {
    id: 2,
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="visual" viewBox="0 0 900 600" width="900" height="600" version="1.1"><rect width="900" height="600" fill="#001829"/><g><g transform="translate(791 552)"><path d="M0 -147L127.3 -73.5L127.3 73.5L0 147L-127.3 73.5L-127.3 -73.5Z" fill="#FCAF3C"/></g><g transform="translate(387 515)"><path d="M0 -140L121.2 -70L121.2 70L0 140L-121.2 70L-121.2 -70Z" fill="#FCAF3C"/></g></g></svg>',
    href: "cssplay/landingpage",
    name: "Responsive Landing Page",
  },
  {
    id: 3,
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="visual" viewBox="0 0 900 600" width="900" height="600" version="1.1"><rect width="900" height="600" fill="#001829"/><g><g transform="translate(611 499)"><path d="M0 -147L127.3 -73.5L127.3 73.5L0 147L-127.3 73.5L-127.3 -73.5Z" fill="#FCAF3C"/></g><g transform="translate(655 80)"><path d="M0 -119L103.1 -59.5L103.1 59.5L0 119L-103.1 59.5L-103.1 -59.5Z" fill="#FCAF3C"/></g><g transform="translate(5 346)"><path d="M0 -99L85.7 -49.5L85.7 49.5L0 99L-85.7 49.5L-85.7 -49.5Z" fill="#FCAF3C"/></g></g></svg>',
    href: "cssplay/productcard",
    name: "Responsive Product Card",
  },
];

const Case = (props: { data: CaseType }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={props.data.href}>
        <img
          className="w-[20rem] rounded-lg"
          src={`data:image/svg+xml;utf8,${encodeURIComponent(
            props.data.image
          )}`}
        />
      </Link>
      <Link
        className="text-base text-slate-500 mt-1 hover:text-blue-500"
        href={props.data.href}
      >
        {props.data.name}
      </Link>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex flex-col items-center h-screen mt-[2rem]">
      <header className="text-2xl text-slate-600 mb-4">
        My CSS Playground
      </header>
      <main className="grid grid-cols-3 gap-[3rem] items-center">
        {caseData.map((item) => (
          <Case key={item.id} data={item} />
        ))}
      </main>
    </div>
  );
};

export default Main;
