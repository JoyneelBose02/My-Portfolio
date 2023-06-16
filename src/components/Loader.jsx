import { Html, useProgress } from "@react-three/drei"; 
import { progress } from "framer-motion";

const Loader = () => {
  const {Progress} = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p 
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed}%</p>
    </Html>
  )
}

export default Loader