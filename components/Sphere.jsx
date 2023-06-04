


export default function Sphere( props )
{
    const { color } = props;
    

    return (
        <>
            <mesh castShadow {...props} >
                <sphereGeometry />
                <meshStandardMaterial color={`${color}`} />
            </mesh>
        </>
    )
}