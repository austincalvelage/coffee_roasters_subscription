type Props = {
};

const HeroSection = (props: Props) => {
  return (
    <section className="dark flex justify-center">
      <div className="flex h-[500px] w-[330px] flex-col justify-center rounded border border-none border-black bg-image-hero-mb bg-cover bg-no-repeat md:w-full md:items-start md:bg-image-hero-tb md:px-5 lg:h-[600px] lg:bg-image-hero-dk lg:px-10">
        <div className="space-y-5  text-center md:w-1/2 md:text-left lg:w-3/5 xl:w-1/2">
          <div className="font-fraunces text-[40px] leading-10 text-primary md:text-5xl lg:text-[72px]">
            <h2>Great coffee</h2>
            <h2>made simple.</h2>
          </div>
          <p className="font-barlow leading-7 text-secondary">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="rounded bg-[#0E8784] py-2 px-4 font-fraunces text-lg text-primary">
            Create your plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
