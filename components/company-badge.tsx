import Image from "next/image";

interface CompanyBadgeProps {
  name: string;
  logo: string; // e.g. "/companies/microsoft.svg"
}

export const CompanyBadge = ({ name, logo }: CompanyBadgeProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo}
        alt={name}
        width={20}
        height={20}
        className="w-5 h-5 object-contain"
      />
      <span className="text-base font-medium">{name}</span>
    </div>
  );
};
