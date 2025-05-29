import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [form, setForm] =useState({
        name:'', 
        email:'',
        message: ''
    })
    const formRef = useRef();

    // service_eod8uef
    // template_ng3jstg

    const [loading, setLoading]= useState(false);

    const handleChange = ({target : {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

        emailjs.send(
             'service_eod8uef',
             'template_ng3jstg', (
              {
                from_name: form.name,
                to_name: 'Bipul Jha',
                from_email: form.email,
                to_email: 'jhabipul777@gmail.com',
                message: form.message
             },
             '  1BaHcr6si431HxU34'
            )
        )
        setLoading(false);
        alert('Your message is sent.')
        setForm({
            name:'',
            email:'',
            message:''
        })
        }
        catch(error){
            setLoading(false)
            console.log(error);
            alert('Something went wrong!')
        }
    }

    return(
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center
            justify-center flex-col">
                <img src="/assets/terminal.png" alt='terminal'
                    className="absolute inset-0 min-h-screen"
                />
                <div className="contact-container mt-10">
                    <h3 className="head-text">Let's Talk.</h3>
                    <p className="text-lg text-white-600 mt-3">
                        If you like what you see, share your thoughts with me. I am open to work on projects both short and long term! 
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input 
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="Bruce Wayne"
                            />
                        </label>
                        
                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input 
                                type="email"
                                name="email"
                                onChange={handleChange}
                                required
                                value={form.email}
                                className="field-input"
                                placeholder="iownthisplace@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                               Message
                            </span>
                            <textarea 
                                
                                name="message"
                                onChange={handleChange}
                                required
                                value={form.message}
                                className="field-input"
                                rows={5}
                                placeholder="Hi, I have a job for you..."
                            />
                        </label>

                        <button className="field-btn" disabled={loading} type="submit">
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" 
                               alt="arrow-up" className="field-btn_arrow"
                            />

                            
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;