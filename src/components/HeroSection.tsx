"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1580086319619-3ed498161c77?q=85&w=2069&auto=format&fit=crop",
    alt: "Veterans standing together in solidarity",
  },
  {
    src: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=85&w=2070&auto=format&fit=crop",
    alt: "Soldier saluting the American flag",
  },
  {
    src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=85&w=2070&auto=format&fit=crop",
    alt: "Military veterans in formation",
  },
  {
    src: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?q=85&w=2070&auto=format&fit=crop",
    alt: "American flag waving proudly",
  },
  {
    src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=85&w=2070&auto=format&fit=crop",
    alt: "Veteran mentoring youth in community",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroImages.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroImages.length) % heroImages.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image Carousel - clear, visible images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={90}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Minimal overlays for readability - NOT full blue */}
      {/* Top gradient for header readability */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent z-[2]"></div>
      {/* Left-side gradient for text readability */}
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[2]"></div>
      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[2]"></div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-[#E21833]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <Shield className="w-4 h-4 text-[#E21833]" />
            <span className="text-white text-sm font-medium tracking-wide">
              501(c)(3) Veteran-Led Non-Profit
            </span>
            <div className="flex gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#E21833] text-[#E21833]" />
              ))}
            </div>
          </div>

          {/* Headline with text shadow for clarity */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6 tracking-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)" }}
          >
            Support.
            <br />
            <span className="text-[#E21833]" style={{ textShadow: "0 2px 20px rgba(226,24,51,0.4), 0 4px 40px rgba(0,0,0,0.3)" }}>
              Heal.
            </span>
            <br />
            Empower.
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/95 max-w-xl mb-4 leading-relaxed font-light"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}
          >
            Transforming the lives of U.S. veterans while building the next
            generation of tech leaders in the DR Congo.
          </p>

          {/* French tagline */}
          <p
            className="text-base text-white/80 max-w-lg mb-10 italic"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            &ldquo;Soutenir, Gu\u00e9rir et Autonomiser nos V\u00e9t\u00e9rans&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-3 bg-[#E21833] hover:bg-[#F03050] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-red-900/40 hover:shadow-red-900/60 hover:scale-[1.02]"
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg transition-all duration-300 hover:border-white/80"
            >
              Explore Programs
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {[
              { value: "500+", label: "Veterans Served" },
              { value: "200+", label: "Youth Trained" },
              { value: "3", label: "DRC Cities" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-black/30 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 md:px-6 md:py-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/75 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom patriotic bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00379A] via-white to-[#E21833] z-20"></div>
    </section>
  );
}
