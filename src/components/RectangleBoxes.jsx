import React from 'react'
import { useState } from 'react';
import * as THREE from 'three';
import {ForExp2,PerspectiveCamera, Scene, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh,Vector3, PlaneGeometry, DoubleSide, FogExp2, MeshPhongMaterial, PointLight, SphereGeometry, Group} from 'three'
import * as dat from 'dat.gui';

function RectangleBoxes() {
    const [enableFog, setEnableFog] = useState(false);
    const scene=new Scene();
    const gui = new dat.GUI();
    var OrbitControls = require('three-orbit-controls')(THREE);
    if(enableFog){
        scene.fog=new FogExp2(0xffffff,0.2);
    }
    // scene.fog=new FogExp2(0xffffff,0.2);
    // var box=getBox(1,1,1);
    var plane=getPlane(30);
    var pointLight=getPointLight(1);
    plane.name="plane-1";
    // box.position.y=box.geometry.parameters.height/2;
    plane.rotation.x=-Math.PI/2;  //in radians
    // plane.add(box);
    pointLight.position.y=1.50;
    pointLight.intensity=2;

    gui.add(pointLight,'intensity',0,10);
    gui.add(pointLight.position,'y',0,5);
    var sphere=getSphere(0.05);

    var boxGrid=getBoxGrid(10,1.5);
    pointLight.add(sphere); //adding sphere in the point light to see the light

    // scene.add(box);
    scene.add(boxGrid);
    // plane.add(boxGrid);
    scene.add(plane);
    scene.add(pointLight);
    var camera=new PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
    camera.position.x=1;
    camera.position.y=2;
    camera.position.z=5;

    camera.lookAt(new Vector3(0,0,0));

    var renderer=new WebGLRenderer();
    renderer.shadowMap.enabled=true;
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor('rgb(120,120,120)');
    document.body.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    var controls=new OrbitControls(camera,renderer.domElement);   //controls for camera movement


    renderer.render(scene,camera);
    console.log(scene);
    update(renderer,scene,camera,controls);
    // function display(){
        
    // }
    function getBoxGrid(amount,separationMultiplier){
        var boxGrid=new Group();
        for(var i=0;i<amount;i++){
            var obj=getBox(1,1,1);
            obj.position.x=i*separationMultiplier;
            obj.position.y=obj.geometry.parameters.height/2;
            boxGrid.add(obj);
            for(var j=0;j<amount;j++){
                var box=getBox(1,1,1);
                box.position.x=i*separationMultiplier;
                box.position.y=obj.geometry.parameters.height/2;
                box.position.z=j*separationMultiplier;
                boxGrid.add(box);
            }
        }
        boxGrid.position.x=-((amount-1)*separationMultiplier)/2;
        boxGrid.position.z=-((amount-1)*separationMultiplier)/2;

        return boxGrid;
    }
    function getBox(w,h,d) {
        var geometry=new BoxGeometry(w,h,d);
        var material=new MeshPhongMaterial({color:'rgb(120,120,120)'});
        var cube=new Mesh(geometry,material);
        cube.castShadow=true;
        return cube;
    }
    function getSphere(size) {
        var geometry=new SphereGeometry(size,24,24);
        var material=new MeshBasicMaterial({color:'rgb(255,255,255)'});
        var cube=new Mesh(geometry,material);
        
        return cube;
    }
    function getPlane(size) {
        var geometry=new PlaneGeometry(size,size);
        var material=new MeshPhongMaterial({color:'rgb(120,120,120)',side:DoubleSide});
        var mesh=new Mesh(geometry,material);
        mesh.receiveShadow=true;
        return mesh;
    }
    function getPointLight(intensity){
        var light=new PointLight(0xffffff,intensity);
        light.castShadow=true;
        return light;
    }
    function update(renderer,scene,camera,controls){
        renderer.render(scene,camera);
        var plane=scene.getObjectByName('plane-1');
        // plane.rotation.y+=0.001;
        // plane.rotation.x+=0.001;
        
        // scene.traverse(function(child){
        //     child.scale.x+=0.001;
        // });
        requestAnimationFrame(function(){
            update(renderer,scene,camera,controls);
        });
    }
  return (
    <div className='container' id='webgl'>
        
    </div>
  )
}

export default RectangleBoxes