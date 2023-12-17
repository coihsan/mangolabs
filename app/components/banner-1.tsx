"use client";
import React, { useState, useEffect, useRef } from "react";
import { infinitedtext } from "@/app/constants/index";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export default function Banner1() {
  return (
    <section className="relative w-full py-[5rem] max-[600px]:px-[1rem]">
      <div className="rounded-xl max-w-screen-xl p-[9rem] max-[600px]:p-[4rem] max-[600px]:px-[2rem] mx-auto">
        <p className="text-center text-amber-500 uppercase mb-[1rem]">
          more than 200+ companies trusted us
        </p>
        <h1 className="text-[3rem] max-[600px]:text-[2rem] text-center uppercase leading-none title-style">
          Social marketing experts have been at the forefront of innovation in
          on-site search engines since 2000 BCE
        </h1>
        <div className="w-full flex gap-20 h-full mt-[1.5rem] relative before:block after:block overflow-hidden overlay">
          <ul className="animate-infinite-scroll w-max flexCenter gap-9 list-disc">
            {infinitedtext.map((index) => (
              <li
                key={index.id}
                className="w-max text-3xl max-[600px]:text-[1rem] leading-none"
              >
                {index.title}
              </li>
            ))}
          </ul>
          <ul className="animate-infinite-scroll w-max flexCenter gap-9 list-disc">
            {infinitedtext.map((index) => (
              <li
                key={index.id}
                className="w-max text-3xl max-[600px]:text-[1rem] leading-none"
              >
                {index.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
