import { useLoader } from "@react-three/fiber";
import { ShaderMaterial, Texture, TextureLoader, Vector3 } from "three";

const defaultSunDirection = new Vector3(-2, 0.5, 1.5).normalize();

function getEarthMaterial(
  {
    dayMap,
    nightMap,
    cloudMap,
  }: { dayMap: Texture; nightMap: Texture; cloudMap: Texture },
  sunDirection = defaultSunDirection // Default sun direction if not provided
) {
  // Uniforms for the shader material, linking textures and sun direction
  const uniforms = {
    dayTexture: { value: dayMap },
    nightTexture: { value: nightMap },
    cloudsTexture: { value: cloudMap },
    sunDirection: { value: sunDirection },
  };

  // Vertex shader: processes vertices for rendering
  const vs = `
        varying vec2 vUv;          // Pass UV coordinates to the fragment shader
        varying vec3 vNormal;      // Pass normal vector to the fragment shader
        varying vec3 vPosition;    // Pass vertex position to the fragment shader
  
        void main() {
          // Calculate the position of the vertex in the world
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * modelPosition;
  
          // Transform the normal vector to world space
          vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
  
          // Assign varying variables for use in the fragment shader
          vUv = uv;
          vNormal = modelNormal;
          vPosition = modelPosition.xyz;
        }
      `;

  // Fragment shader: calculates the color of each pixel
  const fs = `
        uniform sampler2D dayTexture;   // Day texture (Earth's daylight map)
        uniform sampler2D nightTexture; // Night texture (Earth's night map)
        uniform sampler2D cloudsTexture; // Cloud texture
        uniform vec3 sunDirection;     // Direction of the sun
  
        varying vec2 vUv;              // UV coordinates from the vertex shader
        varying vec3 vNormal;          // Normal vector from the vertex shader
        varying vec3 vPosition;        // Position from the vertex shader
  
        void main() {
          vec3 viewDirection = normalize(vPosition - cameraPosition); // Direction from the camera to the fragment
          vec3 normal = normalize(vNormal);                          // Normalize the normal vector
          vec3 color = vec3(0.0);                                    // Initialize the output color
  
          // Calculate the orientation of the surface relative to the sun
          float sunOrientation = dot(sunDirection, normal);
  
          // Blend between day and night textures based on sun orientation
          float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
          vec3 dayColor = texture(dayTexture, vUv).rgb;
          vec3 nightColor = texture(nightTexture, vUv).rgb;
          color = mix(nightColor, dayColor, dayMix);
  
          // Fetch the specular and alpha (cloud coverage) components from the cloud texture
          vec2 specularCloudsColor = texture(cloudsTexture, vUv).rg;
  
          // Adjust cloud visibility based on the specular alpha channel and sun exposure
          float cloudsMix = smoothstep(0.0, 1.0, specularCloudsColor.g);
          cloudsMix *= dayMix;
          color = mix(color, vec3(1.0), cloudsMix);
  
          // Reflection for specular highlights
          vec3 reflection = reflect(-sunDirection, normal);
          float specular = -dot(reflection, viewDirection);
          
          // Add specular effects (currently commented out)
          // specular = max(specular, 0.0);
          // specular = pow(specular, 0.5);
          // specular *= specularCloudsColor.r;
          // color += specular * 0.5;
  
          // Set the final color as the fragment output
          gl_FragColor = vec4(color, 1.0);
        }
      `;

  // Create and return a ShaderMaterial with the defined shaders and uniforms
  const material = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs,
  });
  return material;
}

const EarthMaterial = ({ sunDirection }: { sunDirection: Vector3 }) => {
  const dayMap = useLoader(TextureLoader, "./earth-daymap-4k.jpg");
  const nightMap = useLoader(TextureLoader, "./earth-nightmap-4k.jpg");
  const cloudMap = useLoader(TextureLoader, "./earth-clouds-4k.jpg");

  const material = getEarthMaterial(
    { dayMap, nightMap, cloudMap },
    sunDirection
  );

  return <primitive object={material} />;
};

export default EarthMaterial;
