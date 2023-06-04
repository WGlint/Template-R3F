import { OrbitControls, Sky } from '@react-three/drei'
import { BlendFunction, GlitchMode } from 'postprocessing'
import { useControls } from 'leva';
import { useRef } from 'react';
import Sphere from '../components/Sphere';


export default function App()
{

    return <>
    
        <OrbitControls />
        <ambientLight/>
        <directionalLight position={[ 1,1,1 ]} />

        <Sphere position-x={5} position-y={2} color="red" />

        <mesh>
            <boxGeometry/>
            <meshStandardMaterial color="red" />
        </mesh>

        <mesh scale={100} rotation-x={-Math.PI/2} position-y={-1} >
            <planeGeometry/>
            <meshStandardMaterial color="green" />
        </mesh>

    </>
}