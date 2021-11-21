import { AmbientLight, AxesHelper, BoxBufferGeometry, GridHelper, Mesh, MeshStandardMaterial, MOUSE, Object3D, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three"
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//干净的three引擎
export class TEngine {
    //npm i --save-dev @types/three 提示
    //dom对象
    private dom: HTMLElement
    //渲染器
    private renderer: WebGLRenderer
    //场景
    private scene: Scene
    //透视相机
    private camera: PerspectiveCamera

    constructor(dom: HTMLElement) {
        this.renderer = new WebGLRenderer({
            //添加抗锯齿
            antialias: true
        }
        )
        this.renderer.shadowMap.enabled=true
        
        this.dom = dom
        this.scene = new Scene()
        //dom.offsetWidth / dom.offsetHeight 宽高
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)
        //设置相机位置
        this.camera.position.set(30, 70, 110)
        //看的位置
        this.camera.lookAt(new Vector3(0, 0, 0))
        //向上看
        this.camera.up = new Vector3(0, 1, 0)

        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)



        //通过相机渲染场景
        // this.renderer.render(this.scene, this.camera)

        //初始性能监视器
        const stats = Stats()
        const statsdom = stats.domElement
        statsdom.style.position = 'fixed'
        statsdom.style.top = '0'
        statsdom.style.right = '5px'
        statsdom.style.left = 'unset'

        //初始OrbitControls
        const orbitControls: OrbitControls = new OrbitControls(this.camera, this.renderer.domElement)
        //自带旋转
        // orbitControls.autoRotate=true
        //阻尼感
        orbitControls.enableDamping = true
        //设置控制器 鼠标点击事件  左键留着选中物体
        orbitControls.mouseButtons = {
            LEFT: null as unknown as MOUSE,
            MIDDLE: MOUSE.DOLLY,
            RIGHT: MOUSE.ROTATE
        }

        const renderfun = () => {
            // this.camera.position.x += 0.01
            orbitControls.update()
            this.renderer.render(this.scene, this.camera)
            //更新帧率
            stats.update()
            //刷新
            requestAnimationFrame(renderfun)
        }
        renderfun()

        dom.appendChild(this.renderer.domElement)
        dom.appendChild(statsdom)
    }

    //...不定参数
    addObject(...object: Object3D[]) {
        object.forEach(item => {
            this.scene.add(item)
        })
    }
}