import logo from './logo.svg';
import './App.css';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Model } from '@/Shoe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <p>no soft landing</p>
       <Canvas>
        <Suspense fallback={null}>
        <OrbitControls/>
<ambientLight intensity={0.5} />
<directionalLight position={[-2,5,2]} intensity={1} />
<pointLight position={[-5, 20, 10]} />
<Model/>
</Suspense>
      </Canvas>
      </header>
    </div>
  );
}

export default App;
