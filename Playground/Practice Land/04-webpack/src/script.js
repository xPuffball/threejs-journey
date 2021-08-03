import './style.css'
import * as THREE from 'three'
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Scene
const scene = new THREE.Scene;

// Object
const PyramidGeometry = new THREE.BufferGeometry()

const positionsArray = new Float32Array(15)
positionsArray[0] = 0
positionsArray[1] = 1
positionsArray[2] = 0

positionsArray[3] = -0.5
positionsArray[4] = 0
positionsArray[5] = 0.5

positionsArray[6] = 0.5
positionsArray[7] = 0
positionsArray[8] = -0.5

positionsArray[9] = -0.5
positionsArray[10] = 0
positionsArray[11] = -0.5

positionsArray[12] = 0.5
positionsArray[13] = 0
positionsArray[14] = -0.5

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
PyramidGeometry.setAttribute('position', positionsAttribute)

const pyramid = new THREE.Mesh(
    PyramidGeometry,
    new THREE.MeshBasicMaterial({ color: "white"})
)
scene.add(pyramid)

//
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight 

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
camera.position.y = 3
camera.lookAt(pyramid.position)
scene.add(camera)

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    pyramid.rotation.y = elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

