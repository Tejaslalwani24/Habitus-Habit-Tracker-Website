import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { fadeUp } from "./components/animations";
import { fadeDown } from "./components/animations";

const HabitusLanding = () => {
  const [buttonText, setButtonText] = useState("Subscribe");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleClick = () => {
    setButtonText("Subscribed!");
  };
  return (
    <div className="font-sans">
      <div className="flex justify-center ">
        <div
          id="top"
          className="m-5 aspect-[16/9] w-full rounded-3xl bg-[url('https://github.com/Tejaslalwani24/learning-git/blob/master/Gemini_Generated_Image_5cjyaj5cjyaj5cjy-Picsart-AiImageEnhancer.png?raw=true')] bg-cover bg-center "
        >
          <nav className="fixed left-1/2 -translate-x-1/2 top-6 flex items-center justify-between px-8 py-4 w-[90%] max-w-7xl bg-orange-500/50 backdrop-blur-md border border-orange-700/30 rounded-xl z-50 transition-all duration-300 ease-in-out">
            {/* Logo */}
            <div className="flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 180 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="200" height="200" fill="#F9731601" />
                <path
                  d="M50 30 L100 70 L150 30 L150 170 L100 130 L50 170 Z"
                  fill="#ffffff"
                />
              </svg>
              <h1 className="text-2xl text-white">Habitus</h1>
            </div>

            {/* Nav Links */}
            <ul className="flex gap-8 text-white">
              <li
                onClick={() => {
                  document
                    .getElementById("top")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-gray-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115  "
              >
                Home
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-gray-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115  "
              >
                Features
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("howitworks")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-gray-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115  "
              >
                How it works
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("reviews")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-gray-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115  "
              >
                Reviews
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("pricing")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-gray-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115  "
              >
                Pricing
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("faqs")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-gray-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115  "
              >
                FAQs
              </li>
            </ul>

            {/* Login Button */}
            <Link
              to="/login"
              className="rounded-3xl bg-white px-5 py-2 font-medium text-[#1C1B1A] transition-all duration-150 hover:-translate-y-0.5 hover:scale-115 active:translate-y-0 active:scale-100 hover:bg-gray-200"
            >
              Log In
            </Link>
          </nav>

          <div className="mt-25 flex flex-col items-center text-6xl font-medium text-white ">
            <h1>Build Better Habits.</h1>
            <h1>One Day at a Time.</h1>
          </div>
          <div className="mt-12 flex flex-col items-center text-xl font-normal text-white">
            <p>
              Track your daily routines, stay consistent, and turn goals into
            </p>
            <p>habits — all in one beautiful app</p>
          </div>
          <div className="mt-12 flex flex-row justify-center gap-4 text-xl font-normal text-white">
            <Link
              to="/login"
              className="rounded-3xl bg-white p-2.5 pr-4 pl-4 font-medium text-[#1C1B1A] hover:bg-gray-200 transition-all duration-150 hover:-translate-y-0.5 hover:scale-115 active:translate-y-0 active:scale-100"
            >
              Get Started Free
            </Link>

            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=YWBRCoYkjZw",
                  "_blank",
                )
              }
              className="flex items-center gap-2 rounded-full border border-white p-2.5 px-5 font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:scale-115 active:translate-y-0 active:scale-100 hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.556-2.333 2.78-1.611l12.133 7.103a1.625 1.625 0 010 2.822L7.28 21.07a1.625 1.625 0 01-2.78-1.61V5.653z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="mt-32 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-[#111827] px-6 py-2 text-white shadow-lg transition-colors hover:bg-slate-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FBBF24"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium tracking-wide">
                Loved by 1M+ users worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
      <section id="features" className="mt-16 flex justify-between px-8">
        <h1 className="text-6xl font-bold">Why you'll love it</h1>
        <h1 className="mt-5 text-xl font-light">
          Designed to help you stay on track effortlessly
        </h1>
      </section>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <section className="mt-12 mr-7 ml-7 grid grid-cols-3 gap-10 ">
          <div className="rounded-4xl bg-gray-100 p-8 pt-10 pb-10 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="mt-3 mb-3 text-xl font-bold text-indigo-950">
              Smart Reminders
            </h1>
            <p className=" text-gray-700">
              Never miss a habit again. Set daily notification or let the app
              suggest the best time.
            </p>
          </div>
          <div className="rounded-4xl bg-gray-100 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            <h1 className="mt-3 mb-3 text-xl font-bold text-indigo-950">
              Progress Analytics
            </h1>
            <p className=" text-gray-700">
              See your growth with weekly reports, streaks, and visual heatmaps.
            </p>
          </div>

          <div className="rounded-4xl bg-gray-100 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-gray-900"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2c3.5 4 6 6.8 6 11a6 6 0 11-12 0c0-4.2 2.5-7 6-11zm0 8.5a3 3 0 00-3 3c0 1.7 1.3 3 3 3s3-1.3 3-3a3 3 0 00-3-3z"
              />
            </svg>

            <h1 className="mt-3 mb-3 text-xl font-bold text-indigo-950">
              Streak Tracking
            </h1>
            <p className=" text-gray-700">
              Stay motivated by building unbreakable streaks and unlocking
              milestones.
            </p>
          </div>
        </section>

        <section className="mt-12"></section>
        <section className="mt-24 px-8">
          <div className="grid grid-cols-2 gap-8">
            <img
              src="https://github.com/Tejaslalwani24/learning-git/blob/master/Project%20Image%203-Picsart-AiImageEnhancer-Picsart-AiImageEnhancer.png?raw=true"
              className="h-full w-full rounded-4xl object-cover"
              alt="Team working"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-4xl font-medium">
                Join thousands of users from top companies using Habitus to
                build better habits
              </h2>
              <div className="mt-12 grid grid-cols-3 gap-8 rounded-4xl bg-gray-100 p-10 text-gray-600">
                {/* Google */}
                <div className="flex justify-center items-center">
                  <i
                    onClick={() => window.open("https://www.google.com/")}
                    className="
        devicon-google-plain-wordmark
        text-8xl
        cursor-pointer
        transition-transform
        duration-200
        hover:scale-110
      "
                  ></i>
                </div>

                {/* Spotify */}
                <div className="flex justify-center items-center">
                  <svg
                    className="
        h-12
        w-40
        cursor-pointer
        transition-transform
        duration-200
        hover:scale-110
      "
                    onClick={() => window.open("https://open.spotify.com/")}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 24"
                    fill="currentColor"
                   
                  >
                    {" "}
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.492 17.31c-.216.354-.678.468-1.032.252-2.85-1.74-6.438-2.13-10.662-1.164-.402.09-.81-.162-.9-.564-.09-.402.162-.81.564-.9 4.62-1.056 8.61-.6 11.772 1.332.354.216.468.678.258 1.032zm1.47-3.258c-.27.438-.846.576-1.284.306-3.258-2-8.226-2.586-12.084-1.416-.492.15-1.014-.126-1.164-.618-.15-.492.126-1.014.618-1.164 4.41-1.338 9.888-.69 13.62 1.608.438.27.576.846.312 1.284zm.126-3.414C15.228 8.244 8.85 8.034 5.118 9.168c-.588.18-1.218-.156-1.398-.744-.18-.588.156-1.218.744-1.398 4.29-1.302 11.334-1.062 15.768 1.572.534.318.708 1.014.39 1.548-.318.534-1.014.708-1.542.396z" />
                    <text x="28" y="18" fontSize="16" fontWeight="700">
                      Spotify
                    </text>
                  </svg>
                </div>

                {/* Treehouse */}
                <div className="flex justify-center items-center">
                  <svg
                    onClick={() => window.open("https://teamtreehouse.com/")}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 40"
                    fill="currentColor"
                    className="
        h-13
        w-44
        cursor-pointer
        transition-transform
        duration-200
        hover:scale-110
      "
                  >
                    <path d="M20 4 L34 11 V27 L20 34 L6 27 V11 Z" /> <path fill="#ffffff" d="M20 12 c-3 0-5 3-5 6 0 3 2 5 5 5 3 0 5-2 5-5 0-3-2-6-5-6z M15 22 c-2 0-3 2-3 4 0 2 1 3 3 3 2 0 3-1 3-3 0-2-1-4-3-4z M25 22 c-2 0-3 2-3 4 0 2 1 3 3 3 2 0 3-1 3-3 0-2-1-4-3-4z" />
                    <text x="48" y="28" fontSize="26" fontWeight="600">
                      treehouse
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <section id="howitworks" className="mt-28 flex flex-col items-center">
        <h1 className="text-6xl font-bold">Take a Look Inside</h1>
        <p className="mt-6 mb-6 text-xl font-normal">
          A simple, beautiful interface built for everyday use
        </p>
        <img
          src="https://github.com/Tejaslalwani24/learning-git/blob/master/Screenshot%202026-01-08%20205649-Picsart-AiImageEnhancer.png?raw=true"
          alt="App interface"
          className="mt-12  rounded-xl"
        />
      </section>
      <section id="reviews" className="mt-32 ml-8 flex flex-col">
        <h1 className="text-6xl font-bold">What our users say</h1>
        <p className="mt-8 mb-6 text-xl font-normal">
          Real stories from people who turned their goals into habits
        </p>
      </section>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <section className="mt-12 mr-7 ml-7 grid grid-cols-3 gap-10">
          {[
            {
              name: "Sarah T.",
              role: "Writer",
              text: "I've finally stayed consistent with journaling for 90 days. This app made it effortless.",
              img: "avatar1.png",
            },
            {
              name: "James K.",
              role: "Software Engineer",
              text: "Seeing my progress visually keeps me motivated every day. The reminders are just perfect!",
              img: "avatar3.png",
            },
            {
              name: "Booker T.",
              role: "Wrestler",
              text: "I've tried several habit trackers, but this is the only one I actually stuck with.",
              img: "avatar2.png",
            },
          ].map((user, i) => (
            <div
              key={i}
              className="rounded-4xl bg-gray-100 p-12 pt-10 pb-10 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115 hover:shadow-xl"
            >
              <div className="flex gap-4">
                <img
                  src={`https://github.com/Tejaslalwani24/learning-git/blob/master/${user.img}?raw=true`}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-l font-bold text-indigo-950">
                    {user.name}
                  </h1>
                  <p className="text-l text-gray-700">{user.role}</p>
                </div>
              </div>
              <p className="text-l mt-8  text-gray-700">"{user.text}"</p>
            </div>
          ))}
        </section>
        <section className="m-6 mt-28 rounded-4xl bg-blue-100 p-10 pb-20 pl-16 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
          <svg
            width="150"
            height="100"
            viewBox="0 0 180 180"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-16 ml-0"
          >
            <rect width="200" height="200" fill="#dbeafe" />
            <path
              d="M50 30 L100 70 L150 30 L150 170 L100 130 L50 170 Z"
              fill="#0B1220"
            />
          </svg>
          <div className="grid grid-cols-2">
            <h1 className="text-8xl font-normal leading-tight">
              Ready to build better habits?
            </h1>
            <div className="ml-20 flex flex-col items-end justify-end text-right text-xl">
              <p className="max-w-md">
                Take control of your daily routines, stay consistent with the
                goals that matter, and build meaningful progress — one habit at
                a time.
              </p>
              <Link
                to="/login"
                className="mt-16 rounded-4xl bg-orange-500 p-3.5 pr-8 pl-8 font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:scale-115 active:translate-y-0 active:scale-100 hover:bg-white hover:text-black"
              >
                Start Tracking - It's Free
              </Link>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-32 ml-8 flex flex-col">
          <h1 className="text-6xl font-bold">Simple, transparent pricing</h1>
          <p className="mt-8 mb-6 text-xl font-normal">
            Start free. Upgrade when you're ready.
          </p>
        </section>
        <div className="grid grid-cols-2 px-8 gap-8">
          {/* Free Plan */}
          <div className="flex flex-col gap-4 rounded-4xl bg-gray-100 p-20 transition-all duration-200 hover:-translate-y-1 hover:scale-104 hover:shadow-xl">
            <div>
              <h1 className="text-2xl font-medium">Free</h1>
              <p className="mb-4 text-gray-600">Perfect to get started</p>
            </div>
            <h1 className="text-4xl font-bold">$0</h1>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Track unlimited habits</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Daily reminders</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Streaks & basic analytics</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 text-slate-600">🔒</div>
                <p>No credit card required</p>
              </div>
            </div>
            <Link
              to="/login"
              className="text-center mt-20 rounded-4xl bg-slate-900 p-3.5 font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100 hover:bg-orange-500 hover:text-black"
            >
              Start for Free
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col gap-4 rounded-4xl bg-slate-900 p-20 text-white transition-all duration-200 hover:scale-104 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h1 className="text-2xl font-medium">Premium</h1>
              <p className="mb-4 text-gray-500">For power users</p>
            </div>
            <div className="flex items-end">
              <h1 className="text-4xl font-bold">$4.99</h1>
              <p className="text-gray-500">/month</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Everything in Free</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Advanced analytics</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Cloud backup & sync</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 text-green-500">✓</div>
                <p>Priority support</p>
              </div>
            </div>
            <Link
              to="/login"
              className="text-center mt-20 rounded-4xl bg-white p-3.5 font-medium text-slate-900 transition-all duration-150 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100 hover:bg-orange-500 hover:text-white "
            >
              Upgrade Now
            </Link>
          </div>
        </div>
      </motion.div>

      <section id="faqs" className="mt-32 flex flex-col items-center">
        <h1 className="text-6xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-8 mb-6 text-xl font-normal">
          Everything you need to know before getting started
        </p>
      </section>
      <section className="px-8 mb-20">
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {/* Q1 */}
            <div
              className="rounded-4xl bg-orange-500 p-8 cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-103 hover:shadow-xl"
              onClick={() => setActiveQuestion(activeQuestion === 1 ? null : 1)}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: activeQuestion === 1 ? 180 : 0 }}
                  className="rounded-full bg-orange-600 p-2"
                >
                  ▼
                </motion.div>
                <p className="text-xl font-medium">
                  What do I get with Premium?
                </p>
              </div>

              <AnimatePresence>
                {activeQuestion === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">
                      You get access to all premium features.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {/* Q2 */}
            <div
              className="rounded-4xl bg-rose-200 p-8 cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-103 hover:shadow-xl"
              onClick={() => setActiveQuestion(activeQuestion === 2 ? null : 2)}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: activeQuestion === 2 ? 180 : 0 }}
                  className="rounded-full bg-rose-300 p-2"
                >
                  ▼
                </motion.div>
                <p className="text-xl font-medium">Is there a mobile app?</p>
              </div>

              <AnimatePresence>
                {activeQuestion === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">
                      Yes, we support both iOS and Android.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {/* Q3 */}
            <div
              className="rounded-4xl bg-pink-300 p-8 cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-103 hover:shadow-xl"
              onClick={() => setActiveQuestion(activeQuestion === 3 ? null : 3)}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: activeQuestion === 3 ? 180 : 0 }}
                  className="rounded-full bg-pink-400 p-2"
                >
                  ▼
                </motion.div>
                <p className="text-xl font-medium">
                  What happens if I miss a day?
                </p>
              </div>

              <AnimatePresence>
                {activeQuestion === 3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">
                      Nothing bad happens — you can continue anytime.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {/* Q4 */}
            <div
              className="rounded-4xl bg-blue-100 p-8 cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-103 hover:shadow-xl"
              onClick={() => setActiveQuestion(activeQuestion === 4 ? null : 4)}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: activeQuestion === 4 ? 180 : 0 }}
                  className="rounded-full bg-blue-200 p-2"
                >
                  ▼
                </motion.div>
                <p className="text-xl font-medium">Can I cancel anytime?</p>
              </div>

              <AnimatePresence>
                {activeQuestion === 4 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">
                      Yes, you can cancel whenever you want.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="m-4 rounded-4xl bg-slate-900 p-12 text-white">
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <svg width="50" height="50" viewBox="0 0 180 180">
                <rect width="200" height="200" fill="#0f172a" />
                <path
                  d="M50 30 L100 70 L150 30 L150 170 L100 130 L50 170 Z"
                  fill="#ffffff"
                />
              </svg>
              <h1 className="text-3xl ml-2">Habitus</h1>
            </div>
            <p className="text-gray-400">
              Track your daily routines, stay consistent, and turn goals into
              habits.
            </p>
            <div class="flex gap-4">
              <i
                onClick={() => window.open("https://github.com/Tejaslalwani24")}
                class="devicon-github-original mt-8 text-2xl text-gray-500 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115 hover:shadow-xl hover:text-white"
              ></i>
              <i
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/tejas-lalwani-a456962ab/",
                  )
                }
                class="devicon-linkedin-plain mt-8 text-2xl text-gray-500 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-115 hover:shadow-xl hover:text-white"
              ></i>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-medium text-white">Product</h1>
            <ul className="text-gray-400 space-y-2">
              <li
                className="transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:text-white"
                onClick={() => {
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Features
              </li>
              <li
                className="transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:text-white"
                onClick={() => {
                  document
                    .getElementById("pricing")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pricing
              </li>
              <li
                className="transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:text-white"
                onClick={() => {
                  document
                    .getElementById("faqs")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                FAQ
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col items-center gap-4">
            <h1 className="font-medium text-white">Company</h1>
            <ul className="text-gray-400 space-y-2">
              <li className="transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:text-white">About</li>
              <li className="transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:text-white">Contact</li>
              <li className="transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:text-white">Privacy</li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-4">
            <h1 className="font-medium">Newsletter</h1>
            <input
              className="rounded-4xl border bg-gray-800 p-2 px-6 placeholder:text-gray-400 text-white transition-all duration-150 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100 max-w-96"
              placeholder="Enter your email"
            />
            <button
              onClick={handleClick}
              className="rounded-4xl bg-orange-500 py-2 font-medium hover:bg-white hover:text-black transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl max-w-96"
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className="mt-24 text-center border-t border-gray-700 pt-8 text-gray-500">
          <p>© 2026 Habitus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HabitusLanding;
