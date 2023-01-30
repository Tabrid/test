import React from 'react';
import Typewriter from "typewriter-effect";

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hi, I'm Riyadh Mollik.
                            <br />
                            {/* <h1 className="typewrite text-primary" data-period="1000" data-type='[ "Web Developer", "React Developer.", "MERN Developer.", "I Love To Code." ]'>
                                <span className="wrap"></span>
                            </h1> */}
                            <h1 className="text-blue-600 inline-flex"><Typewriter
                                options={{
                                    strings: ["Web", "React", "MERN"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /><span className='inline-flex'>Developer</span></h1>
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I am highly disciplined, and a quick learner. I am passionate about enhancing and developing my skills and making sure my projects are best fitted. You'll find me hardworking, always seeking improvement and betterment, and fiercely ambitious.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                                Work With Me
                            </a>
                            
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="hero.svg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;