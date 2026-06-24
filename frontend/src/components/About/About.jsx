
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa'

const About = () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const stats = [
    { value: "4.5min", label: "Average Assemble Velocity" },
    { value: "100%", label: "Biodynamic Sourcing" },
    { value: "24", label: "Microlocal Farmsteads" },
    { value: "3 Michelin", label: "Consulting Alumni" },
  ]

  const team = [
    {
      name: "Chef Julian Vane",
      role: "Culinary Architect",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Elena Rostova",
      role: "Terroir & Sourcing Lead",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600"
    }
  ]

  const faqs = [
    {
      q: "How can gastronomy truly coexist with rapid execution?",
      a: "Through precise culinary architecture. We prepare complex extractions, sous-vide bases, and fermented reductions over 48 hours beforehand. The final service requires only molecular assembly and hyper-controlled thermal finishes, completed in minutes."
    },
    {
      q: "What defines your partnership with local micro-farms?",
      a: "We operate on a direct-to-kitchen digital harvest ledger. Crops are harvested at dawn based on automated reservation forecasts, ensuring that active botanical nutrients remain completely intact upon plate arrival."
    }
  ]

  return (
    <div className='min-h-screen bg-[#130d08] text-amber-50 font-cinzel selection:bg-amber-900 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-24 px-6 gap-8'>
        
        {/* LEFT COLUMN: Sticky Structural Branding with Fixed Empty Space */}
        <div className='lg:col-span-5 lg:sticky lg:top-24 lg:h-[calc(100vh-160px)] flex flex-col justify-between pb-12 border-b lg:border-b-0 lg:border-r border-amber-900/30 pr-0 lg:pr-12 z-10'>
          <div>
            <span className='text-amber-500/60 text-xs tracking-[0.6em] uppercase block mb-6'>The Manifest</span>
            <h1 className='text-5xl sm:text-6xl font-bold leading-tight uppercase tracking-tight text-amber-100'>
              The Art <br /> Of Fast <br /> 
              <span className='font-dancingscript text-amber-400 capitalize text-6xl sm:text-7xl ml-4'>Dining.</span>
            </h1>
          </div>
          
          {/* Elegant structural graphic that populates the vertical gap during scrolling */}
          <div className='hidden lg:flex flex-col items-start my-auto pl-1 opacity-40'>
            <div className='w-[1px] h-24 bg-gradient-to-b from-amber-500/50 to-transparent' />
            <span className='text-[10px] tracking-[0.4em] uppercase text-amber-500/50 my-4 transform -rotate-90 origin-left translate-x-[1px] whitespace-nowrap'>
              Est. MMXXIV
            </span>
            <div className='w-[1px] h-24 bg-gradient-to-t from-amber-500/50 to-transparent' />
          </div>
          
          <div className='mt-12 lg:mt-0 space-y-4'>
            <p className='text-xs text-amber-100/40 tracking-[0.3em] uppercase'>In Collaboration With</p>
            <p className='text-sm text-amber-200 font-bold tracking-widest uppercase'>Exquisite Farmsteads & Master Chefs</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Editorial Narrative */}
        <div className='lg:col-span-7 lg:pl-12 py-8 space-y-32'>
          
          {/* Chapter I */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <span className='text-5xl font-light text-amber-900/40 block border-b border-amber-900/20 pb-2'>CHAPTER I</span>
            <h2 className='text-2xl text-amber-300 font-dancingscript'>The Convergence</h2>
            <p className='text-amber-100/70 text-sm leading-loose tracking-wide'>
              Culinary Express conceptualized a paradigm shift. We rejected the notion that modern schedules must dictate low-quality nourishment. Through culinary architecture, we engineered techniques to serve slow-rendered complex flavor bouquets within minutes.
            </p>
            <div className='h-64 w-full bg-amber-950/20 rounded-xl border border-amber-800/20 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700'>
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" alt="Kitchen Prep" className='w-full h-full object-cover' />
            </div>
          </motion.div>

          {/* Blueprint Metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-x-4 gap-y-12 border-y border-amber-900/20 py-12'
          >
            {stats.map((stat, idx) => (
              <div key={idx} className='space-y-2'>
                <h3 className='text-4xl font-light text-amber-400 tracking-tight'>{stat.value}</h3>
                <p className='text-xs text-amber-100/50 uppercase tracking-widest leading-relaxed'>{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Chapter II */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <span className='text-5xl font-light text-amber-900/40 block border-b border-amber-900/20 pb-2'>CHAPTER II</span>
            <h2 className='text-2xl text-amber-300 font-dancingscript'>The Sourcing Ethos</h2>
            <p className='text-amber-100/70 text-sm leading-loose tracking-wide'>
              Our supply ecosystems rely heavily on localized terroir. Daily deliveries of biodynamic herbs, lineage grains, and sustainably micro-farmed proteins yield raw ingredients requiring minimal altering to reveal their innate elegance.
            </p>
          </motion.div>

          {/* Chapter III */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <span className='text-5xl font-light text-amber-900/40 block border-b border-amber-900/20 pb-2'>CHAPTER III</span>
            <h2 className='text-2xl text-amber-300 font-dancingscript'>The Velocity Manifest</h2>
            <p className='text-amber-100/70 text-sm leading-loose tracking-wide'>
              Time is the ultimate luxury. By integrating state-of-the-art thermal engineering with classical French reduction bases, we isolated the exact moments flavors peak. The outcome is culinary absolute speed without compromising dynamic complexity.
            </p>
            <div className='h-64 w-full bg-amber-950/20 rounded-xl border border-amber-800/20 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700'>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" alt="Gourmet Plating" className='w-full h-full object-cover' />
            </div>
          </motion.div>

          {/* Team Section */}
          <div className='space-y-8'>
            <div>
              <span className='text-xs text-amber-500/60 tracking-[0.4em] uppercase block mb-2'>The Minds</span>
              <h3 className='text-3xl font-bold tracking-tight uppercase'>The Culinary Vanguard</h3>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {team.map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className='group space-y-4'
                >
                  <div className='h-72 w-full bg-amber-950/10 rounded-xl border border-amber-900/20 overflow-hidden relative filter sepia-[30%] group-hover:sepia-0 transition-all duration-500'>
                    <img src={member.img} alt={member.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
                  </div>
                  <div>
                    <h4 className='text-md text-amber-100 font-bold tracking-wide uppercase'>{member.name}</h4>
                    <p className='text-xs text-amber-400 font-dancingscript mt-0.5'>{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Operations FAQ Accordion */}
          <div className='space-y-8 border-t border-amber-900/20 pt-16'>
            <div>
              <span className='text-xs text-amber-500/60 tracking-[0.4em] uppercase block mb-2'>Disclosures</span>
              <h3 className='text-3xl font-bold tracking-tight uppercase'>The Operations Mechanics</h3>
            </div>

            <div className='space-y-4'>
              {faqs.map((faq, idx) => (
                <div key={idx} className='border-b border-amber-900/10 pb-4'>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className='w-full flex justify-between items-center text-left py-2 text-amber-200 hover:text-amber-400 transition-colors focus:outline-none'
                  >
                    <span className='text-sm font-medium tracking-wide pr-4'>{faq.q}</span>
                    {activeFaq === idx ? <FaMinus className='text-xs flex-shrink-0' /> : <FaPlus className='text-xs flex-shrink-0' />}
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 0.7 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <p className='text-xs leading-relaxed tracking-wide text-amber-100 pt-2 pb-4'>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Outro Action Block */}
          <div className='pt-12 border-t border-amber-900/20'>
            <Link to="/menu" className='group flex items-center justify-between p-6 bg-amber-900/10 border border-amber-800/30 rounded-2xl hover:bg-amber-800/20 transition-all duration-300'>
              <div>
                <h4 className='text-lg uppercase font-bold tracking-widest text-amber-100'>Begin the Gastronomy</h4>
                <p className='text-xs text-amber-100/50 font-dancingscript mt-1'>Browse our latest sensory drops</p>
              </div>
              <div className='w-12 h-12 rounded-full bg-amber-900/40 border border-amber-800/40 flex items-center justify-center group-hover:translate-x-2 transition-transform'>
                <FaArrowRight className='text-amber-300 text-xs' />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;