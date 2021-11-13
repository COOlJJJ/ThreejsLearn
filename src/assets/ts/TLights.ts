import {
    AmbientLight, Object3D, PointLight
} from 'three'

export const lights: Object3D[] = []

//颜色和强度
const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 1)

const pointLight: PointLight = new PointLight(
    'rgb(255,255,255)',
    0.7,
    200,
    0.1
)

lights.push(ambientLight,pointLight)