import * as THREE from 'three'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scene

const scene = new THREE.Scene()
const canvas = document.querySelector('.webgl4')

// Lights
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.PointLight(color, intensity);
light.position.set(1, 1, 1)
scene.add(light);

// Objects

// Text
let text;
const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => 
    {
        const textGeometry = new TextGeometry(
            'Dev',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        textGeometry.center()
        const textMaterial = new THREE.MeshStandardMaterial({color: 'white'})
        text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
    }
)

// Camera
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.z = 3;
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas
    }
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {
    if(text !== undefined) {
        text.rotation.y = clock.getElapsedTime() * 2;
    }

    controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

window.addEventListener('resize', (event) => {
    sizes.width = event.target.innerWidth / 2
    sizes.height = event.target.innerHeight / 2

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.render(camera, scene)
})