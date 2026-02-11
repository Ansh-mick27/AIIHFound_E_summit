'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function VerticalShaderBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Vertical Shader Material with Cyberpunk Colors
        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                distortion: { value: 0.3 },
                colorSplit: { value: 0.15 },
                // Cyberpunk color palette - Purple and Cyan
                color1: { value: new THREE.Color(0xBD34FE) }, // Purple
                color2: { value: new THREE.Color(0x06b6d4) }, // Cyan
                color3: { value: new THREE.Color(0x8B5CF6) }, // Light Purple
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform float distortion;
        uniform float colorSplit;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;

        void main() {
          // Normalized pixel coordinates (from -1 to 1)
          vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
          
          // VERTICAL orientation - swap x and y logic
          float xScale = 2.0;
          float yScale = 0.15 * distortion;
          
          // Color offsets for RGB split effect
          float rx = p.x + colorSplit;
          float gx = p.x;
          float bx = p.x - colorSplit;
          
          // Vertical beams - use p.x instead of p.y and sin based on p.y
          float r = 0.05 / abs(p.x + sin((p.y + time) * xScale) * yScale);
          float g = 0.05 / abs(p.x + sin((p.y + time * 0.9) * xScale) * yScale);
          float b = 0.05 / abs(p.x + sin((p.y + time * 1.1) * xScale) * yScale);
          
          // Apply cyberpunk colors with intensity
          vec3 color = color1 * r + color2 * g + color3 * b;
          
          // Add glow effect
          float intensity = (r + g + b) * 0.3;
          color = mix(color, vec3(1.0), intensity * 0.2);
          
          gl_FragColor = vec4(color, 0.7);
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        // Create plane geometry
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(mesh);

        // Animation loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            shaderMaterial.uniforms.time.value += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            renderer.setSize(width, height);
            shaderMaterial.uniforms.resolution.value.set(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);

            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }

            geometry.dispose();
            shaderMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
}
