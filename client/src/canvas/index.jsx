import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt.jsx';
import Backdrop from './Backdrop.jsx';
import CameraRig from './CameraRig.jsx';

const CanvasModel = ({ setActiveEditorTab }) => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 30 }}
            gl={{ preserveDrawingBuffer: true, }}
            className="w-full max-w-full h-full transition-all ease-in"
            onClick={() => setActiveEditorTab(null)}
        >
            <ambientLight intensity={0.5} />
            <Environment preset="city" />

            <CameraRig>
                <Backdrop />
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel
