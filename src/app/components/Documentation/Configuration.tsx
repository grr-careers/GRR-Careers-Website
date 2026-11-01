// import { ColorConfiguration } from "./ColorConfiguraion"
// import { LogoConfiguration } from "./LogoConfiguration"
// import { TypographyConfiguration } from "./TypographyConfiguration"

// export const Configuration = () => {
//   return (
//     <>
//       <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="configuration">
//         <h3 className="text-2xl font-semibold mt-4 text-black" >Project Configuration</h3>
//         <ColorConfiguration />
//         <TypographyConfiguration />
//         <LogoConfiguration />
//       </div>
//     </>
//   )
// }

export const Configuration = () => {
  return (
    <section id="bitfields" className="scroll-mt-24 mb-16">
      <span className="text-sm font-semibold text-[#635BFF]">
        REGISTER LEVEL PROGRAMMING
      </span>

      <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
        Register Mapping & Bitfields
      </h2>

      <p className="text-gray-600 leading-7">
        Hardware registers are memory locations used by processors to configure
        and control peripherals. Embedded C provides pointers, structures,
        bitwise operators and macros to access these registers.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">1. SPI Register Map</h3>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Register</th>
              <th className="p-3">Offset</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              ["SPI_CR1", "0x00", "Control Register 1"],
              ["SPI_CR2", "0x04", "Control Register 2"],
              ["SPI_SR", "0x08", "Status Register"],
              ["SPI_DR", "0x0C", "Data Register"],
            ].map((item) => (
              <tr key={item[0]}>
                <td className="p-3 font-mono text-[#635BFF]">{item[0]}</td>
                <td className="p-3 font-mono">{item[1]}</td>
                <td className="p-3">{item[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">
        2. Register Address Mapping
      </h3>

      <div className="bg-[#111827] rounded-xl p-5 overflow-x-auto">
        <pre className="text-sm text-green-300">
          {`#include <stdint.h>

#define SPI_BASE_ADDR  0x40013000U

#define SPI_CR1 (*(volatile uint32_t *)(SPI_BASE_ADDR + 0x00U))
#define SPI_CR2 (*(volatile uint32_t *)(SPI_BASE_ADDR + 0x04U))
#define SPI_SR  (*(volatile uint32_t *)(SPI_BASE_ADDR + 0x08U))
#define SPI_DR  (*(volatile uint32_t *)(SPI_BASE_ADDR + 0x0CU))`}
        </pre>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">
        3. Understanding Bitfields
      </h3>

      <p className="text-gray-600 leading-7">
        A bitfield allows us to define individual fields inside a C structure
        using a specified number of bits. It is useful for understanding how
        hardware control registers are organized.
      </p>

      <div className="bg-gray-50 border rounded-xl p-5 mt-4">
        <h4 className="font-bold mb-4">Example: SPI Control Register</h4>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1">
          {["RES", "SPE", "LSB", "BR2", "BR1", "BR0", "MSTR", "CPOL"].map(
            (bit, index) => (
              <div
                key={index}
                className="bg-indigo-100 border border-indigo-200
                            rounded p-2 text-center"
              >
                <div className="text-xs font-bold text-indigo-900">
                  {31 - index}
                </div>
                <div className="text-[10px] text-indigo-700 mt-1">{bit}</div>
              </div>
            ),
          )}
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Simplified illustration. Actual register layouts depend on the
          microcontroller.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">
        4. C Bitfield Implementation
      </h3>

      <div className="bg-[#111827] rounded-xl p-5 overflow-x-auto">
        <pre className="text-sm text-green-300">
          {`typedef struct
{
    uint32_t CPHA     : 1;
    uint32_t CPOL     : 1;
    uint32_t MSTR     : 1;
    uint32_t BR       : 3;
    uint32_t LSBFIRST : 1;
    uint32_t SPE      : 1;
    uint32_t RESERVED : 24;

} SPI_CR1_Bitfield;`}
        </pre>
      </div>

      <div
        className="bg-amber-50 border-l-4 border-amber-500
            p-4 mt-4 rounded-r-lg"
      >
        <p className="text-sm text-amber-900">
          <strong>Hardware programming note:</strong> C bitfield allocation
          order, padding and access behavior are implementation-defined. Do not
          assume that a bitfield structure maps directly to a hardware register.
          Prefer masks and shifts for portable register access, following the
          MCU reference manual.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">
        5. Setting and Clearing Register Bits
      </h3>

      <div className="bg-[#111827] rounded-xl p-5 overflow-x-auto">
        <pre className="text-sm text-green-300">
          {`#define SPI_CR1_CPHA    (1U << 0)
#define SPI_CR1_CPOL    (1U << 1)
#define SPI_CR1_MSTR    (1U << 2)
#define SPI_CR1_SPE     (1U << 6)

// Set a bit
SPI_CR1 |= SPI_CR1_MSTR;

// Clear a bit
SPI_CR1 &= ~SPI_CR1_CPOL;

// Toggle a bit
SPI_CR1 ^= SPI_CR1_CPHA;

// Read a bit
if (SPI_CR1 & SPI_CR1_SPE)
{
    // SPI is enabled
}`}
        </pre>
      </div>

      <div
        className="bg-green-50 border border-green-200
            rounded-xl p-5 mt-8"
      >
        <h4 className="font-bold text-green-900">What you learned</h4>

        <ul className="text-sm text-green-800 mt-3 space-y-2">
          <li>✓ Hardware register mapping</li>
          <li>✓ Register offsets and addresses</li>
          <li>✓ C bitfield implementation</li>
          <li>✓ Register bit masking</li>
          <li>✓ Setting, clearing and reading bits</li>
        </ul>
      </div>
    </section>
  );
};
