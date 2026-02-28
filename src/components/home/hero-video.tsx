"use client";

export default function HeroVideo() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          playsInline
          muted
          loop
          preload="metadata"
          poster="/assets/campus-images/campusDron-1.jpeg"
          id="heroVideo"
          width="100%"
          height="100%"
          className="w-full h-full object-cover"
        >
          <source src="/banner_video_desktop.mp4" type="video/mp4" />
        </video>
        {/* subtle overlay to soften the video if needed */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
}
