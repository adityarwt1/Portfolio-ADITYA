import React from "react";

interface CurrentCompanyProps {
  success: boolean;
  company: { _id: string; companyName: string; joinedDate: number };
}

const CurrentCompany: React.FC<CurrentCompanyProps> = ({ company }) => {
 const experience = (): string => {
   const today = new Date();
   const joinedDate = new Date(company.joinedDate);

   let years = today.getFullYear() - joinedDate.getFullYear();
   let months = today.getMonth() - joinedDate.getMonth();

   // If months become negative → adjust year and month
   if (months < 0) {
     years--;
     months = 12 + months;
   }

   // When year is 0 → only months
   if (years === 0) {
     return `${months} ${months > 1 ? "Months" : "Month"}`;
   }

   // When year > 0 → years + months
   return `${years} ${years > 1 ? "Years" : "Year"} ${months} ${
     months > 1 ? "Months" : "Month"
   }`;
 };

  return (
    <div className="border w-fit py-1 px-3 rounded-full bg-[#e0e0e0]/95 text-black font-mono">
      Company: {company.companyName} ({experience()}) 
    </div>
  );
};

export default CurrentCompany;
