"use client";
import Manicon from "@/components/icons/manicon";
import React from "react";
import Text from "@/components/text";
import Goodicon from "@/components/icons/goodicon";
import Creatacct from "@/components/Creatacct";

const page = () => {
  return (
    <div className=" bg-slate-400 px-80 py-40 flex justify">
      <div className="flex w-[1000px] h-[730px] bg-white px-10 py-10 rounded-lg">
        <div className="w-[400px] h-[650px] bg-customBlue rounded-lg">
          <Manicon />
          <Text />
          <Goodicon className="px-4" />
        </div>
        <div className="w-[550px] h-[700px] bg-">
          <Creatacct />
        </div>
      </div>
    </div>
  );
};

export default page;
