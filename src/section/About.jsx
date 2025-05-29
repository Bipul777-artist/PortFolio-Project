import { useState } from 'react';
import Globe from 'react-globe.gl'
import Button from '../components/Button';
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('jhabipul777@gmail.com');

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section id='about' className="c-space overflow-x-hidden my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="cols-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img className="w-full sm:h-[276px] h-fit object-contain" src="/assets/grid1.png" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Bipul</p>
                            <p className="grid-subtext">With 3 years of experience, Starting from Desktop Support I have honed my skills to become a Front End Developer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" 
                            className="w-full sm:w-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialise in JavaScript with a focus on React, TailWind ecosystems.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                weight={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I am based in India.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid-3' 
                            className='w-full sm:h-[256px] h-fit object-contain'
                        />
                        <div>
                            <p className='grid-headtext'>My Passion for Coding </p>
                            <p className='grid-subtext'>I love solving problems and building things. Creating things from scratch excites me and gives me joy!</p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src='/assets/grid4.png' alt="grid-4"
                            className="w-full md:h-[126px sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>

                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>jhabipul777@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;