import Image from "next/image";
import Grid from "./Grid";

function HowItWorks(): JSX.Element {
  return (
    <section className="">
      <Grid classes="space-y-5 px-3 xl:px-10 relative">
        <div className="col-span-full col-start-1">
          <h2 className="text-center font-fraunces text-2xl font-bold text-[#83888F] md:text-left">
            How it works
          </h2>
        </div>
        <Grid classes="col-start-1 col-span-full relative">
          <div className="z-10 col-start-1 hidden h-4 w-4 place-content-start rounded-full border border-[#0E8784] bg-white md:block"></div>
          <div className="absolute left-0 right-0 top-2 col-span-5 col-start-1 hidden h-px bg-[#FDD6BA] md:block" />
          <div className="z-10 col-start-5 hidden h-4 w-4 place-content-start rounded-full border border-[#0E8784] bg-white md:block"></div>
          <div className="absolute right-0 left-0 top-2 col-span-5 col-start-4 hidden h-px bg-[#FDD6BA] md:block" />
          <div className="relative right-2 z-10 col-start-9 hidden h-4 w-4 place-content-start rounded-full border border-[#0E8784] bg-white md:block"></div>
        </Grid>
        <div className="col-span-full col-start-1 space-y-3 md:col-span-4">
          <h4 className="text-center font-fraunces text-[72px] font-bold text-[#FDD6BA] md:text-left">
            01
          </h4>
          <h3 className="text-center font-fraunces text-3xl font-bold text-[#333D4B] md:w-[150px] md:break-words md:text-left">
            Pick your coffee
          </h3>
          <p className="text-center font-barlow leading-7 text-[#333D4B] md:w-3/4 md:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className="col-span-full col-start-1 space-y-3 md:col-span-4 md:col-start-5">
          <h4 className="text-center font-fraunces text-[72px] font-bold text-[#FDD6BA] md:text-left">
            02
          </h4>
          <h3 className="text-center font-fraunces text-3xl font-bold text-[#333D4B] md:w-[150px] md:break-words md:text-left">
            Choose the frequency
          </h3>
          <p className="text-center font-barlow leading-7 text-[#333D4B] md:w-3/4 md:text-left">
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className="col-span-full col-start-1 space-y-3 md:col-span-4 md:col-start-9">
          <h4 className="text-center font-fraunces text-[72px] font-bold text-[#FDD6BA] md:text-left">
            03
          </h4>
          <h3 className="text-center font-fraunces text-3xl font-bold text-[#333D4B] md:w-[150px] md:break-words md:text-left">
            Receive and enjoy
          </h3>
          <p className="text-center font-barlow leading-7 text-[#333D4B] md:w-3/4 md:text-left">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
        <button className="col-span-4 col-start-2 rounded-xs bg-[#0E8784] py-2 font-fraunces text-lg text-[#fff] md:col-span-3 md:col-start-1">
          Create your plan
        </button>
      </Grid>
    </section>
  );
}

export default HowItWorks;
