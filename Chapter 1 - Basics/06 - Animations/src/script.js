import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube1 = new THREE.Mesh(geometry, material)
scene.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "blue"})
)
scene.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "green"})
)
scene.add(cube3)

const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "yellow"})
)
scene.add(cube4)

// Sizes 
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Animate

const clock = new THREE.Clock()

const tick = () => {
    const timeElapsed = clock.getElapsedTime();
    cube1.position.x = Math.sin(timeElapsed)
    cube1.position.y = Math.cos(timeElapsed)

    cube2.position.x = -Math.sin(timeElapsed)
    cube2.position.y = -Math.cos(timeElapsed)

    cube3.position.x = Math.sin(timeElapsed + Math.PI * 0.5)
    cube3.position.y = Math.cos(timeElapsed + Math.PI * 0.5)

    cube4.position.x = -Math.sin(timeElapsed + Math.PI * 0.5)
    cube4.position.y = -Math.cos(timeElapsed + Math.PI * 0.5)
    
    camera.position.z = 4 * Math.sin(timeElapsed) + 5.5

    renderer.render(scene,camera)

    window.requestAnimationFrame(tick)


}

tick()
