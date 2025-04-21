import React from "react";

function Offer() {
  return (
    <div className="space-y-8 my-16 px-4">
      <h3 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center">
        What do we offer?
      </h3>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex items-start gap-5   p-5 rounded-2xl">
          <img
            src="dollar.svg"
            alt="Cardano Debit Cards"
            className="bg-[#3D3F54] p-3 rounded-2xl w-[50px] h-[50px] object-contain"
          />
          <div>
            <h4 className="text-[20px] sm:text-[24px] font-semibold">
              Cardano Debit-Cards
            </h4>
            <p className="text-[#ADB2B1] text-[16px]">
              Cardano, simplified. The debit card that makes crypto spending
              easy.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-5  p-5 rounded-2xl">
          <img
            src="ramp.svg"
            alt="On & Off Ramp"
            className="bg-[#3D3F54] p-3 rounded-2xl w-[50px] h-[50px] object-contain"
          />
          <div>
            <h4 className="text-[20px] sm:text-[24px] font-semibold">
              On & Off Ramp
            </h4>
            <p className="text-[#ADB2B1] text-[16px]">
              Fiat meets crypto, effortlessly buy, sell, and manage.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-5   p-5 rounded-2xl">
          <img
            src="dollar.svg"
            alt="Solutions for business"
            className="bg-[#3D3F54] p-3 rounded-2xl w-[50px] h-[50px] object-contain"
          />
          <div>
            <h4 className="text-[20px] sm:text-[24px] font-semibold">
              Solutions for Business
            </h4>
            <p className="text-[#ADB2B1] text-[16px]">
              Empowering businesses with effortless crypto payments and seamless
              fiat solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
