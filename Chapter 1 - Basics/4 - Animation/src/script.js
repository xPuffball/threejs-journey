import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()

const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

scene.add(box)

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer(
    {
        canvas: document.querySelector('.webgl')
    }
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    box.rotation.x = elapsedTime * 0.25
    box.rotation.y = elapsedTime * 5

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()