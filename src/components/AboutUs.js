
import React from "react";
function AboutUs() {
    return (
        <div>
            <div className="contact-us bg-gradient-to-r from-cyan-500 to-blue-500">
                <div><h3 id="heading-1" className="text-lg font-bold text-white leading-6 lg:text-6xl text-center py-4">About Us</h3></div>
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                        <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-white ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>

                            Menu
                        </button>
                        {/* <!-- buttons - end --> */}
                    </header>

                    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        {/* <!-- content - start --> */}
                        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24 flex-shrink">
                            <p class="mb-4 font-semibold text-customLightBlue md:mb-6 md:text-lg xl:text-xl">Welcome to</p>

                            <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Serenity Harbor</h1>
                            <div id='about-info'>
                                <p class="mb-8 leading-relaxed text-white md:mb-12 lg:w-4/5 xl:text-lg">
                                    About Serenity Harbor: Welcome to Serenity Harbor, your sanctuary of support and healing. Our mission
                                    is to provide a guiding light for those navigating the challenging journey of overcoming domestic violence
                                    in Brooklyn, NY. We are committed to creating a safe and compassionate space where survivors of domestic
                                    violence can access the resources and information they deserve. Our team has meticulously curated a
                                    comprehensive directory of local services, shelters, legal aid, counseling, and support groups that
                                    specifically cater to the Brooklyn community.

                                </p>
                            </div>
                            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <a href="/contact" class="inline-block rounded-lg bg-customLightBlue px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-customLightBlue transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Contact Us</a>

                            </div>
                        </div>
                        {/* <!-- content - end -->

                        <!-- image - start --> */}
                        <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 py-10 p">
                            <img id='about-pic' src="https://i.ibb.co/m4fDvWx/Logo-500x500-px.jpg" loading="lazy" alt="Photo by Lillian Oquendo" class="h-full w-full object-cover object-center" />
                        </div>
                        {/* <!-- image - end --> */}
                    </section>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;