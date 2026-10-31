import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
      }}
    >
      <Image
        src="/images/logo/GRR-Logo.png"
        alt="GRR Careers logo"
        width={70}
        height={60}
        quality={100}
      />

            <div className="flex flex-col justify-center">
        <h6 className="m-0 whitespace-nowrap text-xl font-bold leading-tight text-black">
          GRR Careers
        </h6>

        <span className="mt-1 whitespace-nowrap text-xs font-medium tracking-wide text-gray-600">
          Embedded Training
        </span>
      </div>
    </Link>
  );
};

export default Logo;
