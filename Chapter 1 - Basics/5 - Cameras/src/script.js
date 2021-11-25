import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const canvas = document.querySelector('.webgl')

const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'pink'})
)

scene.add(box)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.z = 3
camera.lookAt(box.position)
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer(
    {canvas: canvas}
)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => 
    {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = - (event.clientY / sizes.height - 0.5)
        
        console.log(cursor.x, cursor.y)
})

window.addEventListener('resize', () => {
    console.log('window has been resized')

    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
    
const tick = () => {
    // camera.position.x = cursor.x * 5
    // camera.position.y = cursor.y * 5
    camera.lookAt(box.position)

    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()