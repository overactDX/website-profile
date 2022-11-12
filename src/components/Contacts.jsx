import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef()
    const [loading, setLoading] = useState(false)
    const loadingRef = useRef(false)
    const sendEmail = (e) => {
        e.preventDefault()
        console.log(loadingRef.current);
        if (loadingRef.current) return

        loadingRef.current = true
        setLoading(true)
        emailjs.sendForm('service_2mvc1ss', 'template_r4gqzph', form.current, 'e5r7UtmsjNqkIAwv7')
            .then((result) => {
                console.log(result.text);
                setLoading(false)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section >  
            <div className=''>
                <h2 className='text-center'> Contact Us</h2>
                <form ref={form} onSubmit={sendEmail} action="" className='flex'>
                    <input type="text" name="user_name" placeholder='full name' required />
                    <input type="text" name="user_name" placeholder='email' required />
                    <input type="text" name="user_name" placeholder='subject' required />
                    <textarea name="message" placeholder='message' />
                    <button >submit {loading && <p>test</p>}</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts