import logo from "../../assets/images/clients/default_avatar.png";

const clientLogos = [
  {
    id: 1,
    logo: logo,
  },
  {
    id: 2,
    logo: logo,
  },
  {
    id: 3,
    logo: logo,
  },
  {
    id: 4,
    logo: logo,
  },
  {
    id: 5,
    logo: logo,
  },
];

function LogoMarquee() {
  return (
    <div className="overflow-hidden py-4">
      <div className="animate-marquee">
        {clientLogos.map((logoObj) => (
          <div
            key={logoObj.id}
            className="flex items-center justify-center min-w-[200px] h-[90px] bg-white rounded-[8px] mx-2"
          >
            <img
              src={logoObj.logo}
              alt="client logo"
              className="h-[70px] w-[70px] object-contain"
            />
          </div>
        ))}
        {clientLogos.map((logoObj) => (
          <div
            key={`duplicate-${logoObj.id}`}
            className="flex items-center justify-center min-w-[200px] h-[90px] bg-white rounded-[8px] mx-2"
          >
            <img
              src={logoObj.logo}
              alt="client logo"
              className="h-[70px] w-[70px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoMarquee;
