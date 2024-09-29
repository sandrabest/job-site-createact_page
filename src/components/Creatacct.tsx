import React from "react";
import Button from "./Button";
import Googleicon from "./icons/googleicon";

const Creatacct = () => {
  return (
    <div className="w-[500px] h-[650px] bg-white mx-8 py-3 ">
      <div>
        <span className="text-xl font-bold px-4">Creat an account</span>
        <p className="font-light text-sm px-4">
          By creating account, you agree to our <span className="text-blue-600">Terms of Use </span>
          and acknowledge <br />
          our <span className="text-blue-600">Privacy Policy.</span>
        </p>
      </div>
      <div className="pt-4">
        <form>
          <label className="px-4">
            Your name<span className="text-red-700">*</span>
          </label>
          <br></br>
          <input
            className="rounded-sm w-[467px] h-[44px] rounded-md px-2 mx-4 my-1 border-gray-400 border-2"
            type="email"
            placeholder="Ex:Johnathan Doe"
          />
        </form>
      </div>
      <div className="pt-4">
        <form>
          <label className="px-4">
            Email address<span className="text-red-700">*</span>
          </label>
          <br></br>
          <input
            className="rounded-sm w-[467px] h-[44px] rounded-md px-2 mx-4 my-1  border-gray-400 border-2"
            type="email"
            placeholder="Ex:Johnathan.doe@hotmail.com"
          />
        </form>
      </div>
      <div className="pt-4">
        <form>
          <label className="px-4">
            Password<span className="text-red-700">*</span>
          </label>
          <br></br>
          <input
            className="rounded-sm w-[467px] h-[44px] rounded-md px-2 mx-4 my-1  border-gray-400 border-2"
            type="password"
            placeholder="Ex:Johnathan Doe"
          />
        </form>
      </div>

      <div className="pt-4">
        <form>
          <label className="px-4">
            Phone number<span className="text-red-700">*</span>
          </label>
          <br></br>
          <input
            className="rounded-sm w-[467px] h-[44px] rounded-md px-2 mx-4 my-1  border-gray-400 border-2"
            type="email"
            placeholder="+1 (555) 000-0000"
          />
        </form>
      </div>
      <div className="">
        <Button
          text="Get Started"
          className="bg-blue-700 text-white w-[467px] h-[44px] mx-4 my-3 rounded-md text-center py-2 text-xl font-bold"
        />
      </div>
      <div className="mx-4 text-lg">
        <p>
          <span>-----------------------------------------</span> or
          <span> ----------------------------------------</span>
        </p>
      </div>
      <div className="  w-[467px] h-[44px] my-5 mx-4 flex flex-row gap-3 px-28 py- border-2 rounded-md border-gray-400 py-2 text-lg font-medium">
        <Googleicon />
        <span> Continue with Google</span>
      </div>
    </div>
  );
};

export default Creatacct;
