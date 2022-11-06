import React from 'react'

import { skills } from '../data'

const Skill = () => {
    return (
        <section className='bg-tertiary py-12'>
            <div className="container mx-auto">
                <div className='grid grid-cols-8'>
                    {skills.map((skill, index) => {
                        return (
                            <div className='flex justify-center items-center' key={index}>
                                <img src={skill.image} alt="" />
                            </div>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skill