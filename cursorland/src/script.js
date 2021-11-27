import './style.css'
import * as THREE from 'three'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

// Scene
const scene = new THREE.Scene()
const canvas = document.querySelector('.webgl')

// Letter
let text
let names = ['Jaemin', 'Nick', 'Jacky']
let i = 0;
let selectedName = names[i];
const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => 
    {
        const textGeometry = new TextGeometry(
            selectedName,
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
        const textMaterial = new THREE.MeshNormalMaterial()
        text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
        renderer.render(scene, camera)
    }
)
    
// Camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 5;
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer(
    {canvas: canvas}
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {
    if(text) {
        text.rotation.y = clock.getElapsedTime() * 2
    }

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

window.addEventListener('click', (event) => {
    if(i >= 2) {
        i = 0;
        selectedName = names[i]
    } else {
        i += 1;
        selectedName = names[i]
    }
    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => 
        {
            const textGeometry = new TextGeometry(
                selectedName,
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
            const textMaterial = new THREE.MeshNormalMaterial()
            text = new THREE.Mesh(textGeometry, textMaterial)
            text.position.x = ((event.clientX / window.innerWidth) - 0.5) * 12.5
            text.position.y = -((event.clientY / window.innerHeight) - 0.5) * 7.5
            scene.add(text)
            renderer.render(scene, camera)
        }
    )
})

window.addEventListener('mousemove', (event) => {
    text.position.x = ((event.clientX / window.innerWidth) - 0.5) * 12.5
    text.position.y = -((event.clientY / window.innerHeight) - 0.5) * 7.5
    renderer.render(scene, camera)
})

window.addEventListener('resize', (event) => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)
})