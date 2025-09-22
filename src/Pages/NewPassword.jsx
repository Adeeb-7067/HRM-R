import React from 'react';
import satyaKabir from "../Assets/image 2.png";
import Rezig from "../Assets/SigninLogo.png";
import { useSelector, useDispatch } from "react-redux";
import {    setNewPassWord, setConfirmPassword } from "../Redux/Features/userslice";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { newPassword,confirmPassword } = useSelector((state) => state.user);

    const handlePasswordChange = (e) => {
      dispatch(setNewPassWord(e.target.value));
    };
    const handleConfirmPasswordChange = (e) => {
      dispatch(setConfirmPassword(e.target.value));
    };

  return (
    <div className="flex w-full min-h-screen bg-white">
      
      {/* Left BG & Floating Card */}
      <div className="w-full md:w-1/2 relative left-0 md:left-50 lg:left-75 flex justify-center items-center bg-white">
        <div className="absolute md:static top-10 md:top-0 mx-4 md:mx-0 bg-[#FFFFFF] drop-shadow-2xl shadow-[#9376CA38] rounded-2xl w-full max-w-md md:max-w-xl p-4 md:p-10 z-10">
          <div className="flex flex-col ">
            <div className='flex flex-col items-center'>

            <img src={Rezig} alt="Rezig logo" className="h-20 w-auto mb-4" />
            </div>
            <h1 className="text-[#58585A] text-[45px] md:text-4xl lg:text-5xl font-normal  mb-8">
              Set New Password
            </h1>
            <p className="text-[#58585A] text-[16px]  mb-8">
Set a new password for your account.
            </p>

            <label
              htmlFor="email"
              className="text-[#153060] mb-2 text-[16px] font-semibold w-full"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={newPassword}
              onChange={handlePasswordChange}
              placeholder="*************"
              className="bg-[#FAFAFA] border border-[#9853F9] py-3 rounded-lg px-4 mb-3 w-full"
            />
<label
              htmlFor="email"
              className="text-[#153060] mb-2 text-[16px] font-semibold w-full"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="**************"
              className="bg-[#FAFAFA] border border-[#9853F9] py-3 rounded-lg px-4 mb-6 w-full"
            />

               <Link to="/Dashboard">
            <button className="w-full py-[18px] px-8 mb-6 cursor-pointer rounded-lg bg-[#9376CA] text-white font-semibold hover:bg-[#7e61b9] transition-all">
              Set Password
               
            </button>
               </Link>

          
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex w-1/2 bg-[#E1DAFC] rounded-l-4xl relative">
        <div className="absolute top-4 right-4 h-14 w-auto">
          <img src={satyaKabir} alt="satya kabir" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
