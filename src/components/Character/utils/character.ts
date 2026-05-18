import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

// 🎨 Color Config
const clothingColors = {
  shirt: "#f2cbcb",
  tshirt: "#f4e5e5",   // 🔥 change this to any color you want
  skin: "#E8B4A8",
  pant: "#070708",
  shoe: "#8b4513",
  cap: "#5b4d4d",
};

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();

  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );

        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        loader.load(
          blobUrl,
          async (gltf) => {
            const character = gltf.scene;

            await renderer.compileAsync(character, camera, scene);

            const skinParts = [
              "skin",
              "face",
              "head",
              "hand",
              "arm",
              "ear",
              "neck",
              "leg"
            ];

            const pantParts = ["pant", "trouser"];
            const shoeParts = ["shoe"];
            const capParts = ["cap", "hat"];

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                console.log("Mesh Name:", mesh.name);

                const name = mesh.name.toLowerCase();
                let newColor: string | null = null;

                // 👕 T-SHIRT FIRST (VERY IMPORTANT)
                if (
                  name.includes("shirt") ||
                  name.includes("tshirt") ||
                  name.includes("top") ||
                  name.includes("torso") ||
                  name.includes("cloth")
                ) {
                  newColor = clothingColors.tshirt;
                }

                // 👖 Pants
                else if (pantParts.some(part => name.includes(part))) {
                  newColor = clothingColors.pant;
                }

                // 👞 Shoes
                else if (shoeParts.some(part => name.includes(part))) {
                  newColor = clothingColors.shoe;
                }

                // 🧢 Cap
                else if (capParts.some(part => name.includes(part))) {
                  newColor = clothingColors.cap;
                }

                // 🧑 Skin (LOW priority so it doesn’t override clothes)
                else if (skinParts.some(part => name.includes(part))) {
                  newColor = clothingColors.skin;
                }

                if (newColor) {
                  const newMat = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(newColor),
                    map: null, // remove original texture
                    roughness: 0.5,
                    metalness: 0.1,
                  });

                  mesh.material = newMat;
                }

                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            // 🎬 Animations
            setCharTimeline(character, camera);
            setAllTimeline();

            // 🦶 Foot fix
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");

            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;

            dracoLoader.dispose();

            resolve(gltf);
          },
          undefined,
          (error) => {
            console.error("❌ Error loading GLTF:", error);
            reject(error);
          }
        );
      } catch (err) {
        console.error("❌ Decryption error:", err);
        reject(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
