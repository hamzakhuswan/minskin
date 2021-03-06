import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
const loadSkin = (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      const skin = gltf.scene;
      let head;
      skin.position.y = -.5
      skin.traverse(obj => {
        obj.castShadow = true;
        if (obj.name === "head") return head = obj;
        if (obj.isMesh) {
          obj.material.transparent = true;
          obj.material.alphaTest = 0.5;
        }
    });
      resolve({ skin, head })
    }, null, reject);
  });
};

export default loadSkin;
