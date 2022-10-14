import Image from "next/image";
import Grid from "./Grid";

function CompanyTraits(): JSX.Element {
  const traits: {
    image: string;
    trait: string;
    description: string;
  }[] = [
    {
      image: "/assets/home/desktop/icon-coffee-bean.svg",
      trait: "Best quality",
      description:
        "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      image: "/assets/home/desktop/icon-gift.svg",
      trait: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      image: "/assets/home/desktop/icon-truck.svg",
      trait: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];
  return (
    <section className="h-[900px] rounded-sm bg-[#2C343E] md:h-[578px] md:pt-5 xl:pt-12">
      <Grid classes="text-[#FEFCF7] text-center pt-6 pb-10 md:pb-0">
        <h2 className="col-span-full col-start-1 font-fraunces text-3xl font-bold xl:text-[40px]">
          Why choose us?
        </h2>
        <p className=" col-span-6 col-start-2 font-barlow text-[15px] md:col-span-12 md:col-start-3 xl:col-span-8 xl:col-start-5">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </Grid>
      <Grid classes="relative md:top-8 xl:top-12 space-y-2 xl:space-y-0">
        <Grid classes="py-5 rounded-sm bg-[#0E8784] col-span-6 col-start-2 md:col-span-14 md:col-start-2 md:flex-row md:py-4 xl:col-span-4 xl:col-start-3">
          <div className="col-span-full col-start-1 w-9 place-self-center md:col-span-2 md:col-start-3 xl:col-span-full xl:col-start-1 xl:place-self-center">
            <Image
              src={traits[0].image}
              alt="coffee beans"
              layout="responsive"
              width={454}
              height={356}
            />
          </div>
          <div className="col-span-6 col-start-2 space-y-3 place-self-center text-center text-[#FEFCF7] md:col-span-9 md:col-start-6 md:text-left xl:col-span-14 xl:col-start-2 xl:place-self-center xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">
              {traits[0].trait}
            </h3>
            <p className="font-barlow leading-7">{traits[0].description}</p>
          </div>
        </Grid>
        <Grid classes="py-5 rounded-sm bg-[#0E8784] col-span-6 col-start-2 md:col-span-14 md:col-start-2 md:flex-row md:py-4 xl:col-span-4 xl:col-start-7">
          <div className="col-span-full col-start-1 w-9 place-self-center md:col-span-2 md:col-start-3 xl:col-span-full xl:col-start-1 xl:place-self-center">
            <Image
              src={traits[1].image}
              alt="coffee beans"
              layout="responsive"
              width={454}
              height={356}
            />
          </div>
          <div className="col-span-6 col-start-2 space-y-3 place-self-center text-center text-[#FEFCF7] md:col-span-9 md:col-start-6 md:text-left xl:col-span-14 xl:col-start-2 xl:place-self-center xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">
              {traits[1].trait}
            </h3>
            <p className="font-barlow leading-7">{traits[1].description}</p>
          </div>
        </Grid>
        <Grid classes="py-5 rounded-sm bg-[#0E8784] col-span-6 col-start-2 md:col-span-14 md:col-start-2 md:flex-row md:py-4 xl:col-span-4 xl:col-start-11">
          <div className="col-span-full col-start-1 w-9 place-self-center md:col-span-2 md:col-start-3 xl:col-span-full xl:col-start-1 xl:place-self-center">
            <Image
              src={traits[2].image}
              alt="coffee beans"
              layout="responsive"
              width={454}
              height={356}
            />
          </div>
          <div className="col-span-6 col-start-2 space-y-3 place-self-center text-center text-[#FEFCF7] md:col-span-9 md:col-start-6 md:text-left xl:col-span-14 xl:col-start-2 xl:place-self-center xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">
              {traits[2].trait}
            </h3>
            <p className="font-barlow leading-7">{traits[2].description}</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default CompanyTraits;
