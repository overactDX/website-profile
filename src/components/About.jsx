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
                                Hey! My name is James and I've been playing computers since I was a kid. and has been fascinated with computers ever since. I love creating things like gaming and have a lot of passion. Then I explored how to code myself. And since then I have been programming in different languages ​​and technologies. Currently focusing on web development. and fun programming When I'm not writing code I'll play games with my friends, watch shows on Netflix, or if the weather's nice, get some exercise!
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