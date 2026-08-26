"use client";

import * as THREE from "three";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";

import { Environment, Lightformer, useGLTF, useTexture } from "@react-three/drei";

import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";

import { MeshLineGeometry, MeshLineMaterial } from "meshline";

// Suppress harmless Three.js internal deprecation and shader compilation warnings
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      args[0] &&
      typeof args[0] === "string" &&
      (args[0].includes("THREE.Clock") ||
       args[0].includes("deprecated parameters for the initialization function") ||
       args[0].includes("THREE.WebGLProgram: Program Info Log") ||
       args[0].includes("warning X4122"))
    ) {
      return;
    }
    originalWarn(...args);
  };
}

extend({
  MeshLineGeometry,
  MeshLineMaterial,
});

const GLTF_PATH = "/assets/cards.glb";
const TEXTURE_PATH = "/assets/new.jpeg";

useGLTF.preload(GLTF_PATH);
useTexture.preload(TEXTURE_PATH);

export default function BandCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 10 }}>
      <Suspense fallback={null}>
        <Canvas
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
          camera={{
            position: isMobile ? [0, 0, 15] : [0, 0, 13],
            fov: isMobile ? 32 : 25,
          }}
          style={{
            background: "transparent",
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
            touchAction: "none",
          }}
        >
          <ambientLight intensity={1.2} />

          <Physics interpolate gravity={[0, -25, 0]} timeStep={1 / 60}>
            <Band isMobile={isMobile} />
          </Physics>

          <Environment blur={0.75}>
            <Lightformer
              intensity={1.2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={1.5}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={1.5}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
}

function Band({ isMobile, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(null);
  const fixed = useRef(null);
  const j1 = useRef(null);
  const j2 = useRef(null);
  const j3 = useRef(null);
  const card = useRef(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const gltf = useGLTF(GLTF_PATH);
  const nodes = gltf?.nodes || {};
  const materials = gltf?.materials || {};

  useEffect(() => {
    if (materials?.base?.map) {
      materials.base.map.anisotropy = 16;
      materials.base.map.minFilter = THREE.LinearMipmapLinearFilter;
      materials.base.map.magFilter = THREE.LinearFilter;
      materials.base.map.needsUpdate = true;
    }
  }, [materials]);

  const texture = useMemo(() => {
    if (typeof window === "undefined") return new THREE.Texture();
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#111111"; // Dark grey/black for the strap
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 80px 'Arial', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("NITHESH", canvas.width / 2, canvas.height / 2 + 5);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, []);

  const { width, height } = useThree((state) => state.size);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState(null);
  const [hovered, hover] = useState(false);
  const canDrag = true;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (hovered && canDrag) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged !== null && card.current && canDrag) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());

      const newX = vec.x - dragged.x;
      let newY = vec.y - dragged.y;
      const newZ = 0;

      if (isMobile) {
        vec.multiplyScalar(0.92);
      }

      const limit = isMobile ? -0.05 : -0.2;
      if (state.pointer.y < limit) {
        newY = card.current.translation().y;
      }

      card.current.setNextKinematicTranslation({ x: newX, y: newY, z: newZ });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      [j1, j2].forEach((ref) => {
        const trans = ref.current.translation();
        const transVec = new THREE.Vector3(trans.x, trans.y, trans.z);

        if (!ref.current.lerped) {
          ref.current.lerped = transVec.clone();
        }

        const d = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(transVec))
        );

        ref.current.lerped.lerp(
          transVec,
          delta * (minSpeed + d * (maxSpeed - minSpeed))
        );
      });

      const transJ3 = j3.current.translation();
      const transFixed = fixed.current.translation();
      curve.points[0].copy(new THREE.Vector3(transJ3.x, transJ3.y, transJ3.z));
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(new THREE.Vector3(transFixed.x, transFixed.y, transFixed.z));

      if (band.current?.geometry) {
        let hasNaN = false;
        for (let i = 0; i < 4; i++) {
          if (isNaN(curve.points[i].x) || isNaN(curve.points[i].y) || isNaN(curve.points[i].z)) {
            hasNaN = true;
            break;
          }
        }
        if (!hasNaN) {
          band.current.geometry.setPoints(curve.getPoints(32));
        }
      }

      const angvel = card.current.angvel();
      const rotation = card.current.rotation();
      ang.set(angvel.x, angvel.y, angvel.z);
      rot.set(rotation.x, rotation.y, rotation.z);

      if (!isNaN(ang.x) && !isNaN(ang.y) && !isNaN(ang.z)) {
        card.current.setAngvel({
          x: ang.x,
          y: ang.y - rot.y * 0.25,
          z: ang.z,
        });
      }
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={isMobile ? [1.2, 3, 0] : [3, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />

        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={isMobile ? 1.7 : 2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => canDrag && hover(true)}
            onPointerOut={() => canDrag && hover(false)}
            onPointerUp={(e) => {
              if (!canDrag) return;
              e.stopPropagation();
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              if (!canDrag) return;
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            {nodes?.card?.geometry && (
              <mesh geometry={nodes.card.geometry}>
                <meshPhysicalMaterial
                  {...materials.base}
                  roughness={0.65}
                  metalness={0.02}
                  clearcoat={0.1}
                  clearcoatRoughness={0.3}
                />
              </mesh>
            )}

            {nodes?.clip?.geometry && (
              <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            )}

            {nodes?.clamp?.geometry && (
              <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            )}
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          transparent
          opacity={0.9}
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
