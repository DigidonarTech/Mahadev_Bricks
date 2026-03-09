import { MdWifiCalling3 } from "react-icons/md";

const CallButton = () => {
  return (
    <a href="tel:+918429345535" className="fixed bottom-6 right-6 z-50">
      <div className="relative flex items-center justify-center">

        <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#EA580C] opacity-40 animate-ping"></span>

        <span className="scale-x-[-1]">
          <span className="relative text-4xl text-[#EA580C] animate-ring">
            <MdWifiCalling3 />
          </span>
        </span>

      </div>
    </a>
  );
};

export default CallButton;