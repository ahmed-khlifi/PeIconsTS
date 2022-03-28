import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const ChevronBigLeft = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} {...props}>
    <G data-name="Group 6455">
      <G data-name="Group 5469" transform="translate(.5 .5)">
        <Circle
          data-name="Ellipse 28"
          cx={30}
          cy={30}
          r={30}
          transform="rotate(180 30 30)"
          fill="#fff"
          stroke="#f3f4f5"
        />
        <G data-name="Group 5468">
          <G data-name="Group 5467">
            <Path
              data-name="Path 1915"
              d="M32.816 21.271a1.52 1.52 0 0 1 1.075 2.594L27.364 30.4l6.527 6.535a1.521 1.521 0 0 1-2.155 2.148l-7.6-7.609a1.52 1.52 0 0 1 0-2.148l7.6-7.609a1.514 1.514 0 0 1 1.08-.446Z"
              fill="#1a2552"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default ChevronBigLeft
