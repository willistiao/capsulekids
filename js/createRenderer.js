import 'regenerator-runtime/runtime';
import * as THREE from "three";

export default function createRenderer() {
  const app = document.getElementById("app");
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  app.appendChild(renderer.domElement);
  return renderer;
}