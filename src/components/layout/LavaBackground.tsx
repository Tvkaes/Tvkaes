import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                            dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float time = uTime * 0.06;
    
    // Create flowing distortion
    float distortion1 = fbm(uv * 2.0 + time * 0.5);
    float distortion2 = fbm(uv * 3.0 - time * 0.3 + vec2(5.2, 1.3));
    
    vec2 distortedUv = uv + vec2(distortion1, distortion2) * 0.15;
    
    // Create lava-like blobs
    float noise1 = fbm(distortedUv * 1.5 + time);
    float noise2 = fbm(distortedUv * 2.0 - time * 0.7 + vec2(10.0, 3.0));
    float noise3 = fbm(distortedUv * 1.0 + time * 0.5 + vec2(-5.0, 7.0));
    
    // Color palette - matching brand colors (cyan, purple, orange)
    vec3 color1 = vec3(0.0, 0.65, 0.78);   // Primary cyan #00a6c7
    vec3 color2 = vec3(0.43, 0.16, 0.85);  // Secondary purple #6d28d9
    vec3 color3 = vec3(0.92, 0.35, 0.05);  // Accent orange #ea580c
    vec3 color4 = vec3(0.98, 0.98, 1.0);   // Light base
    
    // Mix colors based on noise
    float t1 = smoothstep(-0.3, 0.5, noise1);
    float t2 = smoothstep(-0.2, 0.6, noise2);
    float t3 = smoothstep(-0.4, 0.4, noise3);
    
    vec3 finalColor = mix(color4, color1, t1 * 0.4);
    finalColor = mix(finalColor, color2, t2 * 0.35);
    finalColor = mix(finalColor, color3, t3 * 0.25);
    
    // Add subtle glow effect
    float glow = fbm(distortedUv * 4.0 + time * 0.8);
    finalColor += vec3(0.05) * smoothstep(0.2, 0.8, glow);
    
    // Soft vignette
    float vignette = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.2);
    finalColor = mix(finalColor * 0.95, finalColor, vignette);
    
    // Keep it light and subtle
    finalColor = mix(vec3(1.0), finalColor, 0.35);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

function LavaPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }), [])

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export function LavaBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: false }}
      >
        <LavaPlane />
      </Canvas>
    </div>
  )
}
