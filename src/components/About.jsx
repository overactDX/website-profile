import React from 'react'

import Img from '../assets/img/about.jpg'
const About = () => {
    return (
        <section className='section bg-secondary' id='about'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img src={Img} className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' alt="" />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                                Veerayutt Pakpume
                            </h2>
                            <p className='text-lg text-accent'>Front-end Developer</p>
                            <hr className='mb-8 opacity-5' />
                            <p className="mb-8">
                                Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.

                                I really liked to build stuff using no-code tools
                                back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a B2B Company
                                and a Recruitment Company
                                I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,
                                Open Source
                                and Competitive Programming


                                When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball!
                            </p>
                        </div>
                        <button className="btn btn-md bg-slate-600 hover:bg-slate-500 transition-all">
                            <a href="#contact">
                                Contact me

                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About