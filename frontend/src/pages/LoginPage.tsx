import MyIcon from "../assets/MyIcon";

function LoginPage() {
  return (
    <div className="bg-[#F0F4F9] text-black flex justify-center items-center w-screen h-screen">
      <div className="w-[900px] h-96 bg-[#FFFFFF] rounded-3xl flex flex-row justify-between items-center">
        <div className="flex flex-col p-8 gap-4 -mt-40">
          <MyIcon />
          <h1 className="text-5xl">Sign in</h1>
          <p className="font-light">Use your Google Account</p>
        </div>
        <div className="px-20 flex flex-col justify-between items-end gap-10">
          <div className="flex flex-col gap-1 justify-start items-start">
            <input
              type="text"
              placeholder="Email or phone"
              className="border-black border-[1.5px] rounded-md p-5 w-96 h-14"
            />
            <button className="text-[#0C57D0] font-medium text-base">
              Forgot email?
            </button>
          </div>
          <p>Not your computer? Use Guest mode to sign in privately. </p>
          <div className="flex flex-row gap-3">
            <button className="px-3 py-3 text-[#0C57D0]  rounded-3xl  hover:bg-[#F0F4F9]">
              create account
            </button>
            <button className="text-white bg-[#0C57D0] px-4 py-2 rounded-3xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
