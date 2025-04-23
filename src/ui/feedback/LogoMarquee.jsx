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
      <div className="flex animate-marquee whitespace-nowrap gap-2.5">
        {clientLogos.map((logoObj) => (
          <div
            key={logoObj.id}
            className="flex items-center px-15 py-10 bg-white rounded-[10px]"
          >
            <img
              src={logoObj.logo}
              alt="client logo"
              className="h-[70px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoMarquee;
