import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const ExitIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6208" transform="translate(-5 -5)">
      <Circle
        data-name="Ellipse 27"
        cx={20}
        cy={20}
        r={20}
        transform="rotate(180 22.5 22.5)"
        fill="#fff"
      />
      <G data-name="Group 5472">
        <Path
          data-name="Path 1916"
          d="m26.419 25.248 4.348-4.344a1.012 1.012 0 1 0-1.43-1.432l-4.348 4.343-4.347-4.351a1.012 1.012 0 1 0-1.432 1.43l4.346 4.351-4.354 4.343a1.012 1.012 0 0 0 1.43 1.433l4.354-4.344 4.34 4.351a1.012 1.012 0 0 0 1.433-1.43Z"
          fill="#1a2552"
        />
      </G>
    </G>
  </Svg>
)

export default ExitIcon
