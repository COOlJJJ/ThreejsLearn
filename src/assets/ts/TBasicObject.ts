import { Mesh, BoxBufferGeometry, MeshStandardMaterial, SphereBufferGeometry, Object3D, PlaneBufferGeometry } from 'three'
import { pictureTexture } from './TTextures'

export const objects: Object3D[] = []


//地面
const stage: Mesh = new Mesh(
    new BoxBufferGeometry(200, 10, 200),
    new MeshStandardMaterial({ color: 'rgb(150,150,150)', roughness: 0 }),//标准材质 roughness光滑度

)
stage.receiveShadow = true

const box: Mesh = new Mesh(//网格物体
    new BoxBufferGeometry(10, 10, 10),//几何对象
    new MeshStandardMaterial({ color: 'rgb(0,255,0)'  })//标准材质 metalness金属度 1 越像
)
//阴影
box.castShadow = true
box.receiveShadow = true

// const sphere: Mesh = new Mesh(
//     new SphereBufferGeometry(5),
//     new MeshStandardMaterial({ color: 'rgb(255,0,0)' })
// )
stage.position.y = -5
box.position.y = 5

//相框
const plane: Mesh = new Mesh(
    new PlaneBufferGeometry(192, 108),
    new MeshStandardMaterial({
        map: pictureTexture
    })
)
plane.position.y = 30
plane.scale.set(0.3, 0.3, 0.3)
objects.push(stage, box, plane)
