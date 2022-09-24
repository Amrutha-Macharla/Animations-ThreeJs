import React from 'react'
import {PerspectiveCamera, Scene, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh,Vector3, PlaneGeometry, DoubleSide} from 'three'
function Rectangle() {
    const scene=new Scene();
    var box=getBox(1,1,1);
    var plane=getPlane(4);
    plane.name="plane-1";
    box.position.y=box.geometry.parameters.height/2;
    plane.rotation.x=-Math.PI/2;  //in radians
    plane.add(box);
    scene.add(plane);
    var camera=new PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
    camera.position.x=1;
    camera.position.y=2;
    camera.position.z=5;

    camera.lookAt(new Vector3(0,0,0));

    var renderer=new WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    renderer.render(scene,camera);
    console.log(scene);
    update(renderer,scene,camera);
    // function display(){
        
    // }
    function getBox(w,h,d) {
        var geometry=new BoxGeometry(w,h,d);
        var material=new MeshBasicMaterial({color:0x00ff00});
        var cube=new Mesh(geometry,material);
        return cube;
    }
    function getPlane(size) {
        var geometry=new PlaneGeometry(size,size);
        var material=new MeshBasicMaterial({color:'#FF0000',side:DoubleSide});
        var mesh=new Mesh(geometry,material);
        return mesh;
    }
    function update(renderer,scene,camera){
        renderer.render(scene,camera);
        var plane=scene.getObjectByName('plane-1');
        plane.rotation.y+=0.001;
        plane.rotation.x+=0.001;
        
        // scene.traverse(function(child){
        //     child.scale.x+=0.001;
        // });
        requestAnimationFrame(function(){
            update(renderer,scene,camera);
        });
    }
  return (
    <div className='container' id='webgl'>
        
    </div>
  )
}

export default Rectangle