import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()


const stairs = new THREE.Group()
stairs.rotation.y = Math.PI * 0.25
scene.add(stairs)

const bottom = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 3),
    new THREE.MeshBasicMaterial({color: 'red'})
)
bottom.position.y = -1;
stairs.add(bottom)

const middle = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 2),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
middle.position.set(0, 0, -0.5)
stairs.add(middle)

const top = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 1),
    new THREE.MeshBasicMaterial({color: 'green'})
)
top.position.set(0, 1, -1)
stairs.add(top)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 4;
camera.position.y = 2;
camera.lookAt(stairs.position)
scene.add(camera)

const renderer = new THREE.WebGLRenderer(
    {canvas: document.querySelector('.webgl')}
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const tick = () => {
    stairs.rotation.y = stairs.rotation.y + 0.005
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()