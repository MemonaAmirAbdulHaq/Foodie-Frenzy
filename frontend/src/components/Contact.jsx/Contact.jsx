
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Submitted", formData);
    };

    return (
        <div className='bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d] min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                
                {/* Header Section */}
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200'>
                    <span className='font-dancingscript block text-5xl md:text-7xl sm:text-6xl mb-2'>
                        Connect With Us
                    </span>
                    <span className='block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-amber-100/80'>
                        We’d Love to Hear From You
                    </span>
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    
                    {/* Left Column: Contact Information Card */}
                    <div className='bg-amber-900/20 rounded-2xl p-6 sm:p-10 border border-amber-800/30 backdrop-blur-sm flex flex-col gap-8'>
                        <div>
                            <h3 className='text-2xl sm:text-3xl mb-4 font-dancingscript text-amber-300'>Our Location & Hours</h3>
                            <p className='text-amber-100/70 font-cinzel text-xs sm:text-sm leading-relaxed mb-6'>
                                Have a question about our menu, reservations, or catering? Drop us a line or visit us. 
                            </p>
                        </div>

                        {/* Info details */}
                        <div className='flex flex-col gap-6 font-cinzel text-amber-100/90 text-sm sm:text-base tracking-wide'>
                            <div className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 border border-amber-800/30'>
                                    <FaMapMarkerAlt className='text-amber-300' />
                                </div>
                                <div>
                                    <h4 className='font-bold text-amber-200 text-xs sm:text-sm uppercase mb-1'>Address</h4>
                                    <p className='text-xs sm:text-sm text-amber-100/70'>123 Culinary Boulevard, Suite 100, Flavor Town</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 border border-amber-800/30'>
                                    <FaPhone className='text-amber-300' />
                                </div>
                                <div>
                                    <h4 className='font-bold text-amber-200 text-xs sm:text-sm uppercase mb-1'>Phone</h4>
                                    <p className='text-xs sm:text-sm text-amber-100/70'>+1 (555) 839-2001</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 border border-amber-800/30'>
                                    <FaEnvelope className='text-amber-300' />
                                </div>
                                <div>
                                    <h4 className='font-bold text-amber-200 text-xs sm:text-sm uppercase mb-1'>Email</h4>
                                    <p className='text-xs sm:text-sm text-amber-100/70'>reservations@exquisitemenu.com</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 border border-amber-800/30'>
                                    <FaClock className='text-amber-300' />
                                </div>
                                <div>
                                    <h4 className='font-bold text-amber-200 text-xs sm:text-sm uppercase mb-1'>Operating Hours</h4>
                                    <p className='text-xs sm:text-sm text-amber-100/70'>Mon - Thu: 11:00 AM - 10:00 PM</p>
                                    <p className='text-xs sm:text-sm text-amber-100/70'>Fri - Sun: 11:00 AM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Glassmorphism Form */}
                    <div className='bg-amber-900/10 rounded-2xl p-6 sm:p-10 border border-amber-800/30 backdrop-blur-sm'>
                        <h3 className='text-2xl sm:text-3xl mb-6 font-dancingscript text-amber-300 text-center lg:text-left'>Send A Message</h3>
                        
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5 font-cinzel text-amber-100'>
                            <div>
                                <label className='block text-xs uppercase tracking-wider text-amber-200/80 mb-2'>Full Name</label>
                                <input 
                                    type='text' 
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full bg-amber-950/40 border border-amber-800/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors duration-300' 
                                    placeholder='John Doe'
                                />
                            </div>

                            <div>
                                <label className='block text-xs uppercase tracking-wider text-amber-200/80 mb-2'>Email Address</label>
                                <input 
                                    type='email' 
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full bg-amber-950/40 border border-amber-800/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors duration-300' 
                                    placeholder='johndoe@example.com'
                                />
                            </div>

                            <div>
                                <label className='block text-xs uppercase tracking-wider text-amber-200/80 mb-2'>Subject</label>
                                <input 
                                    type='text' 
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className='w-full bg-amber-950/40 border border-amber-800/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors duration-300' 
                                    placeholder='Reservation, Feedback, Catering...'
                                />
                            </div>

                            <div>
                                <label className='block text-xs uppercase tracking-wider text-amber-200/80 mb-2'>Message</label>
                                <textarea 
                                    name='message'
                                    rows='4'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className='w-full bg-amber-950/40 border border-amber-800/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors duration-300 resize-none' 
                                    placeholder='Write your thoughts here...'
                                />
                            </div>

                            <button 
                                type='submit'
                                className='mt-2 bg-gradient-to-r from-amber-900/80 to-amber-700/80 border border-amber-800 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-900/30 font-bold'>
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Navigation Link */}
                <div className='flex justify-center mt-16'>
                    <Link className='bg-amber-900/30 border-2 border-amber-800/30 text-amber-100 px-8 sm:px-10 py-3 rounded-full font-cinzel uppercase tracking-widest transition-all duration-300 hover:bg-amber-800/40 hover:text-amber-50 hover:scale-105 hover:shadow-lg hover:shadow-amber-900/20 backdrop-blur-sm' to='/'>
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;