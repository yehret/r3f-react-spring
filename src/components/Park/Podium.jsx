import { useSpring } from '@react-spring/three';
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
        bearPositionY: 0.5,
        bearScale: ANIMAL_SCALE_GROW,
        bearPodiumRotation: Math.PI,
        bearPodiumScale: 1,
        bearPodiumColor: '#6f2f23',
      },
      {
        dogPositionY: 0.5,
        dogScale: ANIMAL_SCALE_GROW,
        dogPodiumRotation: Math.PI,
        dogPodiumScale: 1,
        dogPodiumColor: '#6f2f23',
      },
      {
        duckPositionY: 0.5,
        duckScale: ANIMAL_SCALE_GROW,
        duckPodiumRotation: Math.PI,
        duckPodiumScale: 1,
        duckPodiumColor: '#6f2f23',
      },
    ],
  });

  return (
    <group {...props}>
      <group position-y={bearPositionY} scale-x={bearScale} scale-y={bearScale} scale-z={bearScale}>
        <Bear />
      </group>
      <mesh scale-y={bearPodiumScale} rotation-y={bearPodiumRotation}>
        <boxGeometry />
        <meshStandardMaterial color={bearPodiumColor} />
      </mesh>

      <group position={[3, 0, 0]}>
        <group position-y={dogPositionY} scale-x={dogScale} scale-y={dogScale} scale-z={dogScale}>
          <Dog />
        </group>
        <mesh scale-y={dogPodiumScale} rotation-y={dogPodiumRotation}>
          <boxGeometry />
          <meshStandardMaterial color={dogPodiumColor} />
        </mesh>
      </group>
      <group position={[6, 0, 0]}>
        <group
          position-y={duckPositionY}
          scale-x={duckScale}
          scale-y={duckScale}
          scale-z={duckScale}>
          <Duck />
        </group>
        <mesh scale-y={duckPodiumScale} rotation-y={duckPodiumRotation}>
          <boxGeometry />
          <meshStandardMaterial color={duckPodiumColor} />
        </mesh>
      </group>
    </group>
  );
};
