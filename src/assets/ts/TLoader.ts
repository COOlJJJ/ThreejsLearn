import { Mesh, MeshLambertMaterial, Object3D } from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
export const loaders: Object3D[] = []

const loader: GLTFLoader = new GLTFLoader();
const stlloader: STLLoader = new STLLoader();

loader.load(
    './scene.gltf',
    (gltf) => {
        gltf.scene.position.set(25, 10, 40);
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.scale.set(10, 10, 10);
        loaders.push(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.log('An error happened' + error);
    }
);

loader.load(
    './scene.gltf',
    (gltf) => {
        gltf.scene.position.set(35, 10, 40);
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.scale.set(10, 10, 10);
        loaders.push(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.log('An error happened' + error);
    }
);

loader.load(
    './scene.gltf',
    (gltf) => {
        gltf.scene.position.set(15, 10, 40);
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.scale.set(10, 10, 10);
        loaders.push(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.log('An error happened' + error);
    }
);

stlloader.load('./SEAL-A2020.11.02.stl', (geometry) => {
    var mat = new MeshLambertMaterial({ color: 0xffffff });
    var mesh = new Mesh(geometry, mat);
    mesh.position.set(20, 2.5, 10)
    // mesh.rotation.x = 0.5 * Math.PI; //将模型摆正
    mesh.scale.set(0.1, 0.1, 0.1); //缩放
    geometry.center(); //居中显示
    loaders.push(mesh);

})
