
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface ProductViewer3DProps {
  productImages: string[];
  productName: string;
}

const ProductViewer3D = ({ productImages, productName }: ProductViewer3DProps) => {
  return (
    <div className="h-[600px] w-full bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 8]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {/* Product Display Plane */}
          <mesh position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[8, 4]} />
            <meshStandardMaterial 
              map={null}
              transparent
              opacity={0}
            />
            {/* Product Image as Texture */}
            <mesh position={[0, 0, 0.1]}>
              <planeGeometry args={[6, 3]} />
              <meshBasicMaterial 
                map={null}
                transparent
              />
              <primitive object={
                (() => {
                  const texture = new (window as any).THREE.TextureLoader().load(productImages[0]);
                  return new (window as any).THREE.MeshBasicMaterial({ 
                    map: texture, 
                    transparent: true,
                    alphaTest: 0.1
                  });
                })()
              } />
            </mesh>
          </mesh>

          {/* Ground */}
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.3} 
            scale={20} 
            blur={2} 
            far={4} 
          />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Controls */}
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={15}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProductViewer3D;
