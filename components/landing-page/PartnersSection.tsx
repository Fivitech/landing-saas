import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium text-gray-900">
            Trusted by Leading Forex Industry Partners
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* These would be replaced with actual partner logos in production */}
          {partnerLogos.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sample partner names - would be replaced with actual logos in production
const partnerLogos = [
  "MetaTrader",
  "cTrader",
  "Visa",
  "Mastercard",
  "Refinitiv",
  "Bloomberg",
  "Integral",
  "Equinix"
];
