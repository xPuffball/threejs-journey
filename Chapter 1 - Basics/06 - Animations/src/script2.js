import * as THREE from 'three'

const scene = new THREE.Scene()

const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "green"})
)

const mesh2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "red"})
)
mesh2.position.x = 1
mesh2.position.y = 1
scene.add(mesh)
scene.add(mesh2)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 5
scene.add(camera)

const renderer = new THREE.WebGLRenderer(
    {canvas: document.querySelector("canvas.webgl")}
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    mesh.rotation.y = elapsedTime
    mesh.rotation.x = elapsedTime

    mesh2.rotation.y = elapsedTime
    mesh2.rotation.x = elapsedTime
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()