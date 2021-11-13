import { AmbientLight, AxesHelper, BoxBufferGeometry, GridHelper, Mesh, MeshStandardMaterial, MOUSE, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three"
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
        this.dom = dom
        this.scene = new Scene()
        //dom.offsetWidth / dom.offsetHeight 宽高
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)
        //设置相机位置
        this.camera.position.set(20, 20, 20)
        //看的位置
        this.camera.lookAt(new Vector3(0, 0, 0))
        //向上看
        this.camera.up = new Vector3(0, 1, 0)

        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)
        const box: Mesh = new Mesh(
            new BoxBufferGeometry(10, 10, 10),
            new MeshStandardMaterial({ color: 'rgb(0,255,0)' })
        )
        //颜色和强度
        const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 1)
        //辅助线
        const axesHelper: AxesHelper = new AxesHelper(500)
        //网格线
        const gridHelper: GridHelper = new GridHelper(500, 100, 'rgb(255,255,255)', 'rgb(255,255,255)')
        //控制器


        this.scene.add(box)
        this.scene.add(ambientLight)
        this.scene.add(axesHelper)
        this.scene.add(gridHelper)
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
            box.position.x += 0.01
            box.rotation.y += 0.01
            this.camera.position.x += 0.01
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
}