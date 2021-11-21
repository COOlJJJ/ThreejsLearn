import {
    AmbientLight, Object3D, PointLight, SpotLight
} from 'three'

export const lights: Object3D[] = []

//颜色和强度
const ambientLight: AmbientLight = new AmbientLight('rgb(0,0,0)', 1)

//点光
export const pointLight: PointLight = new PointLight(
    'rgb(255,255,255)',
    0.7,
    50,
    0.1
)
//聚光灯
export const spotLight: SpotLight = new SpotLight(
    'rgb(255,255,0)',
    0.7,
    50,
    Math.PI / 180 * 45,
    0,
    0)
//开启阴影 
spotLight.castShadow = true

pointLight.position.set(20, 30, 20)

spotLight.position.set(-20, 20, -30)

lights.push(ambientLight, pointLight, spotLight)