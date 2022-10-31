import Image from "next/legacy/image";
import Grid from "./Grid";

function Quality(): JSX.Element {
  return (
    <section>
      <Grid>
        <div className="relative col-span-full col-start-1 bg-[#2C343E] flex flex-col items-center rounded-xs px-3 md:px-7">
            <div className="relative -top-5 h-[150px] w-full rounded-xs overflow-hidden md:h-[320px]">
              <Image
                src="/assets/about/mobile/image-quality.jpg"
                alt="test"
                layout="fill"
                className="hidden"
              />
            </div>
            <div className="text-[#FEFCF7] text-center space-y-3">
              <h3 className="font-bold text-3xl font-fraunce leading-none">Uncompromising quality</h3>
              <p className="font-barlow">
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or baking
                the coffee dry. Every bag of coffee is tagged with a roast date
                and batch number. Our goal is to roast consistent, user-friendly
                coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>
      </Grid>
    </section>
  );
}

export default Quality;
