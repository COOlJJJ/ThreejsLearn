import { AxesHelper, GridHelper, Object3D, PointLightHelper, SpotLightHelper } from 'three'
import { pointLight, spotLight } from './TLights'

export const helpers: Object3D[] = []

//辅助线
const axesHelper: AxesHelper = new AxesHelper(500)
//网格线
const gridHelper: GridHelper = new GridHelper(500, 100, 'rgb(255,255,255)', 'rgb(255,255,255)')
//点光辅助
const pointLightHelper: PointLightHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color)
//聚光灯辅助
const spotLightHelper: SpotLightHelper = new SpotLightHelper(spotLight, spotLight.color)

helpers.push(axesHelper, gridHelper, pointLightHelper, spotLightHelper)