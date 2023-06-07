import Wrapper from "../shared/Wrapper";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <Wrapper>
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col justify-between items-center w-full gap-y-5 my-20 relative">
          <h3>Subscribe Our Newsletter</h3>
          <p>Get the latest information and promo offers directly</p>
          <div className="flex justify-center items-center gap-x-3 w-full">
            <input
              type="email"
              placeholder="Input email address"
              className="px-2 border border-black rounded-md text-sm py-2 lg:w-[30%] w-[40%]"
            />
            <Button className="rounded-none  bg-[#212121] px-8 py-2">
              Get Started
            </Button>
          </div>
          <div className="absolute font-bold text-[120px] tracking-widest -z-[10] text-[#212121]/5">
            Newsletter
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
