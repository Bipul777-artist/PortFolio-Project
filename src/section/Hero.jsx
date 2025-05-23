import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constant";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";

const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const isSmall = useMediaQuery({maxWidth:440});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    // const x = useControls( 'HackerRoom', 
    //     {
    //     positionX : {
    //         value:  2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY : {
    //         value:  2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ : {
    //         value:  2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX : {
    //         value:  2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY : {
    //         value:  2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ : {
    //         value:  2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     scale : {
    //         value:  1,
    //         min: 0.1,
    //         max: 10
    //     },
        

    // })

    const sizes =  calculateSizes(isMobile, isSmall, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Bipul <span className="waving-hand">👋🏽</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building Product & Brands
                </p>

                
            </div>

            <div className="w-full h-full inset-0 absolute">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDefault 
                            position={[0, 0, 30]}
                        />
                        <HackerRoom 
                            
                            position={sizes.deskPosition}
                            scale={sizes.deskScale}
                            rotation={[0.2, -Math.PI, 0]}
                            
                        />

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                        </group>
                        
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                    
                </Canvas>
            </div>
        </section>
    )
};

export default Hero;