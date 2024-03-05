import React from "react";
import { Button } from "@material-tailwind/react";

function AboutUs() {
    return (
        <div>
            <div>

                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                        
                    </header>

                    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        
                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24 flex-shrink">
                            <h3 className="my-4 text-3xl font-bold leading-tight text-white drop-shadow-[0px_5px_0px_rgba(0,0,0,.5)] ">Welcome to</h3>
                            <h1 className="my-4 text-5xl font-bold leading-tight text-white drop-shadow-[0px_5px_0px_rgba(0,0,0,.5)]">Serenity Harbor</h1>
                            <div id='about-info'>
                                <p className="mb-8 leading-relaxed text-white md:mb-12 lg:w-4/5 xl:text-lg">
                                    Welcome to Serenity Harbor, your sanctuary of support and healing. Our mission
                                    is to provide a guiding light for those navigating the challenging journey of overcoming domestic violence
                                    in Brooklyn, NY. We are committed to creating a safe and compassionate space where survivors of domestic
                                    violence can access the resources and information they deserve. Our team has meticulously curated a
                                    comprehensive directory of local services, shelters, legal aid, counseling, and support groups that
                                    specifically cater to the Brooklyn community.

                                </p>
                            </div>
                               <div>
                            <a href="/contact">
  <button class="mx-auto lg:mx-0 hover:underline bg-white text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
    Contact Us
  </button>
</a>
                            </div>
                            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <a href="/contact" className="my-4 text-2xl font-bold leading-tight text-white drop-shadow-[0px_5px_0px_rgba(0,0,0,.5)]">Contact Us</a>

                            </div>
                        </div>
                        
                        <div className="h-48 overflow-hidden rounded-lg lg:h-auto xl:w-5/12 py-10 p">
                            <img id='about-pic' src="https://i.ibb.co/m4fDvWx/Logo-500x500-px.jpg" alt="by Lillian Oquendo" />
                        </div>
                        
                    </section>
                </div>
            </div>
        </div>
    )
}export default AboutUs;
