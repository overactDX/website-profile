import React from 'react'

import WomanImg from '../assets/img/pic-main-transformed.webp'

const Hero = () => {
    return (
        <section
            id='home'
            className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className='container mx-auto h-full'>
                <div className="flex items-center h-full">
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <p className='text-2xl text-slate-300 mb-[22px]'>Hello ,My name Is Jame.</p>
                        <h1 className='text-5xl leading-10 md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>VEERAYUTT PAKPUME.</h1>
                        <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-2xl text-center lg:text-left">
                            Software Engineer, A self-taught developer with an interest in Computer Science.
                        </p>
                        <div className='flex space-x-5'>
                            <button className="btn btn-md bg-slate-600 hover:bg-slate-500 md:btn-lg transition-all">
                                Work with me
                            </button>
                            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                                Download CV
                            </button>
                        </div>

                    </div>
                    <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                        <img src={WomanImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero