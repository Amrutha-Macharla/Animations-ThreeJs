  // import * as THREE from 'three';
  // const scene = new THREE.Scene();
//or
// import { Scene,WebGLRenderer,PerspectiveCamera,LineBasicMaterial,Vector3,BufferGeometry,Line } from 'three';
import './App.css';
import Rectangle from './components/Rectangle';
import RectangleBoxes from './components/RectangleBoxes';
function App() {
  // console.log(THREE);
  // const renderer = new WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );
  // const camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  // camera.position.set( 0, 0, 100 );
  // camera.lookAt( 0, 0, 0 );
  // const scene = new Scene();

  // const material = new LineBasicMaterial( { color: 0x0000ff } );  // for the blue line

  // const points = [];
  // points.push( new Vector3( -30, 0, 0 ) );
  // points.push( new Vector3( 0, 30, 0 ) );
  // points.push( new Vector3( 30, 0, 0 ) );
  
  // const geometry = new BufferGeometry().setFromPoints( points );

  // const line = new Line( geometry, material );
  // scene.add( line );
  // renderer.render( scene, camera );
  return (
    <div className="App">
      <Rectangle />
        {/* <Rectangle /> */}
        <RectangleBoxes />
    </div>
  );
}

export default App;
