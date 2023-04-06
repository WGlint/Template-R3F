import { OrbitControls, Sky } from '@react-three/drei'
import { BlendFunction, GlitchMode } from 'postprocessing'
import { useControls } from 'leva';
import { useRef } from 'react';




export default function App()
{

    return <>
    
        <OrbitControls />
        <ambientLight/>
        <directionalLight position={[ 1,1,1 ]} />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

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