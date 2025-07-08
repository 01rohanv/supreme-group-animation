const Section1 = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden font-manrope">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/automotive.224e7418884105595114.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 text-white">
        <div>
          <p className="uppercase tracking-wider text-sm mb-2">
            Performance in motion
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Soft Trims and NVH Solutions
            <br />
            <small className="font-normal">for seamless rides</small>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Section1;
