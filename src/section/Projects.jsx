import { useState, Suspense } from "react";
import { myProjects } from "../constant";
import { AmbientLight, DirectionalLight } from "three/src/Three.Core.js";
import { Canvas } from '@react-three/fiber';
import CanvasLoader from "../components/CanvasLoader"
import { Center, OrbitControls } from '@react-three/drei';
import DemoComputer from "../components/DemoComputer";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex]
    const projectCount = myProjects.length;
    

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount -1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    return (
        <div className="c-space my-20">
            <p className="head-text">
                My Work
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 shadow-2xl shadow-black-200">

                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spootlight"
                            className="w-full h-95 object-cover rounded-xl"
                        />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                        style={currentProject.logoStyle}
                    >
                        <img src={currentProject.logo} alt="logo"
                            className="w-10 h-10 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">
                            {currentProject.title}
                        </p>

                        <p className="animatedText">
                            {currentProject.desc}
                        </p>

                        <p className="animatedText">
                            {currentProject.subdesc}
                        </p>
                    </div>

                    <div className="z-50 flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => {
                                return (
                                    <div className="tech-logo" key={index}>
                                        <img src={tag.path} alt={tag.name} />
                                    </div>
                                )
                            })}
                        </div>

                        <a  className="flex cursor-pointer items-center gap-2 text-red-600"
                            href={currentProject.href} target="_blank" rel="noreferrer"
                        >   
                            {/* {console.log(currentProject.href)} */}
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button onClick={() => handleNavigation('previous')} className="arrow-btn" >
                            <img src="/assets/left-arrow.png" className="w-4 h-4" alt="right-arrow" />
                        </button>

                        <button onClick={() => handleNavigation('next')} className="arrow-btn" >
                            <img src="/assets/right-arrow.png" className="w-4 h-4" alt="right-arrow" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />

                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>

                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom ={false}/>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Projects;