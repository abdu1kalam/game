import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User2 } from "lucide-react";
import React from "react";

type SectionProps = {
  label: string;
  message: string;
};

const Section = ({ label, message }: SectionProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Avatar>
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="ml-4">
        <p className=" text-md font-medium">{label} </p>
        <p className="text-md font-light ">{message} </p>
      </div>
    </div>
  );
};

export default Section;
