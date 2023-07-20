import { useSpring, animated } from '@react-spring/three';
import Bear from './Bear';
import Dog from './Dog';
import Duck from './Duck';

const ANIMAL_SCALE = 1.36;
const ANIMAL_SCALE_GROW = 2;

const bearPositionY = 0.25;
const bearScale = ANIMAL_SCALE;
const bearPodiumRotation = 0;
const bearPodiumScale = 0.5;
const bearPodiumColor = '#906efa';

const dogPositionY = 0.25;
const dogScale = ANIMAL_SCALE;
const dogPodiumRotation = 0;
const dogPodiumScale = 0.5;
const dogPodiumColor = '#906efa';

const duckPositionY = 0.25;
const duckScale = ANIMAL_SCALE;
const duckPodiumRotation = 0;
const duckPodiumScale = 0.5;
const duckPodiumColor = '#906efa';

export const Podium = (props) => {
  const {
    bearPositionY,
    bearScale,
    bearPodiumRotation,
    bearPodiumScale,
    bearPodiumColor,

    dogPositionY,
    dogScale,
    dogPodiumRotation,
    dogPodiumScale,
    dogPodiumColor,

    duckPositionY,
    duckScale,
    duckPodiumRotation,
    duckPodiumScale,
    duckPodiumColor,
  } = useSpring({
    from: {
      bearPositionY: 0.25,
      bearScale: ANIMAL_SCALE,
      bearPodiumRotation: 0,
      bearPodiumScale: 0.5,
      bearPodiumColor: '#906efa',
      dogPositionY: 0.25,
      dogScale: ANIMAL_SCALE,
      dogPodiumRotation: 0,
      dogPodiumScale: 0.5,
      dogPodiumColor: '#906efa',
      duckPositionY: 0.25,
      duckScale: ANIMAL_SCALE,
      duckPodiumRotation: 0,
      duckPodiumScale: 0.5,
      duckPodiumColor: '#906efa',
    },
    to: [
      {
        bearScale: ANIMAL_SCALE_GROW,
        bearPositionY: 0.5,
        bearPodiumScale: 1,
        bearPodiumRotation: Math.PI,
        bearPodiumColor: '#6f2f23',
      },
      {
        dogScale: ANIMAL_SCALE_GROW,
        dogPositionY: 0.5,
        dogPodiumScale: 1,
        dogPodiumRotation: Math.PI,
        dogPodiumColor: '#cea77d',
      },
      {
        duckScale: ANIMAL_SCALE_GROW,
        duckPositionY: 0.5,
        duckPodiumScale: 1,
        duckPodiumRotation: Math.PI,
        duckPodiumColor: 'yellow',
      },
      {
        duckScale: ANIMAL_SCALE,
        duckPositionY: 0.25,
        duckPodiumScale: 0.5,
        duckPodiumRotation: 0,
        duckPodiumColor: '#906efa',
        dogScale: ANIMAL_SCALE,
        dogPositionY: 0.25,
        dogPodiumScale: 0.5,
        dogPodiumRotation: 0,
        dogPodiumColor: '#906efa',
        bearScale: ANIMAL_SCALE,
        bearPositionY: 0.25,
        bearPodiumScale: 0.5,
        bearPodiumRotation: 0,
        bearPodiumColor: '#906efa',
      },
    ],
    config: {
      mass: 4,
      tension: 700,
      friction: 40,
    },
    loop: true,
  });

  return (
    <group {...props}>
      <animated.group
        position-y={bearPositionY}
        scale-x={bearScale}
        scale-y={bearScale}
        scale-z={bearScale}>
        <Bear />
      </animated.group>
      <animated.mesh scale-y={bearPodiumScale} rotation-y={bearPodiumRotation}>
        <boxGeometry />
        <meshStandardMaterial color={bearPodiumColor} />
      </animated.mesh>

      <group position={[3, 0, 0]}>
        <animated.group
          position-y={dogPositionY}
          scale-x={dogScale}
          scale-y={dogScale}
          scale-z={dogScale}>
          <Dog />
        </animated.group>
        <animated.mesh scale-y={dogPodiumScale} rotation-y={dogPodiumRotation}>
          <boxGeometry />
          <meshStandardMaterial color={dogPodiumColor} />
        </animated.mesh>
      </group>
      <group position={[6, 0, 0]}>
        <animated.group
          position-y={duckPositionY}
          scale-x={duckScale}
          scale-y={duckScale}
          scale-z={duckScale}>
          <Duck />
        </animated.group>
        <animated.mesh scale-y={duckPodiumScale} rotation-y={duckPodiumRotation}>
          <boxGeometry />
          <meshStandardMaterial color={duckPodiumColor} />
        </animated.mesh>
      </group>
    </group>
  );
};
