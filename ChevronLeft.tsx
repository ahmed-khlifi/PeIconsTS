import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const ChevronLeft = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 5471">
      <G data-name="Group 5469" transform="translate(-19 -50)">
        <Circle
          data-name="Ellipse 28"
          cx={20}
          cy={20}
          r={20}
          transform="rotate(180 29.5 45)"
          fill="#fff"
        />
        <G data-name="Group 5468">
          <G data-name="Group 5467">
            <Path
              data-name="Path 1915"
              d="M40.714 64.074a1.006 1.006 0 0 1 .712 1.717l-4.319 4.324 4.319 4.324a1.006 1.006 0 0 1-1.423 1.422l-5.029-5.035a1.006 1.006 0 0 1 0-1.422l5.029-5.035a1 1 0 0 1 .711-.295Z"
              fill="#1a2552"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default ChevronLeft
