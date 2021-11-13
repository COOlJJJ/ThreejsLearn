import {
    Mesh, BoxBufferGeometry, MeshStandardMaterial, SphereBufferGeometry, Object3D
} from 'three'

export const objects: Object3D[] = []


//地面
const stage: Mesh = new Mesh(
    new BoxBufferGeometry(200, 10, 200),
    new MeshStandardMaterial({ color: 'rgb(150,150,150)' })//标准材质
)

const box: Mesh = new Mesh(//网格物体
    new BoxBufferGeometry(10, 10, 10),//几何对象
    new MeshStandardMaterial({ color: 'rgb(0,255,0)' })//标准材质
)

// const sphere: Mesh = new Mesh(
//     new SphereBufferGeometry(5),
//     new MeshStandardMaterial({ color: 'rgb(255,0,0)' })
// )
stage.position.y = -5
box.position.y = 5
objects.push(stage, box)
