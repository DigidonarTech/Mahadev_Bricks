import { MdWifiCalling3 } from "react-icons/md";

const CallButton = () => {
  return (
    <a
      href="tel:+918429345535"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center">

        {/* Outer wave */}
        <span className="absolute h-16 w-16 rounded-full bg-[#EA580C]/30 animate-ping"></span>

        {/* Second softer wave */}
        <span className="absolute h-12 w-12 rounded-full bg-[#EA580C]/40 animate-pulse"></span>

        {/* Phone Icon */}
        <span className="relative text-4xl text-[#EA580C] scale-x-[-1] animate-ring">
          <MdWifiCalling3 />
        </span>

      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes ring {
          0% { transform: rotate(0) scaleX(-1); }
          10% { transform: rotate(15deg) scaleX(-1); }
          20% { transform: rotate(-15deg) scaleX(-1); }
          30% { transform: rotate(12deg) scaleX(-1); }
          40% { transform: rotate(-12deg) scaleX(-1); }
          50% { transform: rotate(8deg) scaleX(-1); }
          60% { transform: rotate(-8deg) scaleX(-1); }
          70% { transform: rotate(4deg) scaleX(-1); }
          80% { transform: rotate(-4deg) scaleX(-1); }
          100% { transform: rotate(0) scaleX(-1); }
        }

        .animate-ring {
          animation: ring 1.4s infinite;
          transform-origin: center;
        }
      `}</style>
    </a>
  );
};

export default CallButton;