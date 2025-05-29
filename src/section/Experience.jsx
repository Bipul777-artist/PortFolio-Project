import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constant";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer"

const Experience = () => {

    const [animationName, setAnimationName] = useState('idle')

    return(
        <section className="c-space my-20">
            <div className="w-full text-white-500">
                <h3 className="head-text">Work Experience</h3>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} 
                                penumbra={1} angle={0.15}
                            />

                            <directionalLight position={[10, 10, 10]} 
                                intensity={1} 
                            />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer animationName={animationName} scale={3} position-y={-3} />
                            </Suspense>

                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10  py-5 sm:px-5 p-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group"
                                    key={index}
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>    

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;