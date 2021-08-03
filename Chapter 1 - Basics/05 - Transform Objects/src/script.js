import './style.css'
import * as THREE from 'three'
import { Group } from 'three'

// // 4 Properties to Transform Objects
// // position (to move the object)
// // scale (to resize the object)
// // rotation (to rotate the object)
// // quaternion (to also rotate the object; more about that later)

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// // Axes Helper
// const axesHelper = new THREE.AxesHelper
// scene.add(axesHelper)

// /**
//  * Objects
//  */
// const group = new THREE.Group()
// group.scale.y = 2
// group.rotation.y = 0.2
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: "red"})
// )
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: "red"})
// )
// cube2.position.x = -1.5
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: "red"})
// )
// cube3.position.x = 1.5
// group.add(cube3)
// // mesh.scale.x = 2
// // mesh.scale.y = 0.25
// // mesh.scale.z = 0.5 

// /**
//  * Sizes
//  */
// const sizes = {
//     width: 800,
//     height: 600
// }

// /**
//  * Camera
//  */
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3

// // console.log(mesh.position.length())
// // console.log(mesh.position.distanceTo(camera.position))
// // console.log(mesh.position.normalize())
// // mesh.position.set(0.7, - 0.6, 1)

// // camera.lookAt(new THREE.Vector3(0, - 1, 0))
// scene.add(camera)

// /**
//  * Renderer
//  */

// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

// Scene
const scene = new THREE.Scene()

// Objects
const decontructedCube = new THREE.Group()
decontructedCube.scale.x = 2
decontructedCube.scale.y = 2
decontructedCube.scale.z = 2

scene.add(decontructedCube)

const side1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.01, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
side1.position.y = 0.6
decontructedCube.add(side1)

const side2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.01, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
side2.position.y = -0.6
decontructedCube.add(side2)

const side3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.01, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
side3.position.x = -0.6
side3.rotation.z = Math.PI * 0.5
decontructedCube.add(side3)

const side4 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.01, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
side4.position.x = 0.6
side4.rotation.z = Math.PI * 0.5
decontructedCube.add(side4)

const side5 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.01, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
side5.rotation.x = Math.PI * 0.5
side5.position.z = -0.6
decontructedCube.add(side5)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.25),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
scene.add(sphere)

const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.set(0, 3, 3)
camera.lookAt(0, 0, 0)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl")
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)