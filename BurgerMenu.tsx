import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const BurgerMenu = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 5615">
      <G data-name="Group 5611" transform="translate(-829.663 -952.326)">
        <Circle
          data-name="Ellipse 255"
          cx={20}
          cy={20}
          r={20}
          transform="translate(829.663 952.326)"
          fill="#fff"
        />
        <G data-name="Group 5614">
          <G data-name="Group 5611">
            <Path
              data-name="Path 1929"
              d="M857.276 968.39H842.21a1.004 1.004 0 1 1 0-2.008h15.066a1.004 1.004 0 0 1 0 2.008Z"
              fill="#1a2552"
            />
          </G>
          <G data-name="Group 5612">
            <Path
              data-name="Path 1930"
              d="M857.276 973.41H842.21a1.004 1.004 0 1 1 0-2.008h15.066a1.004 1.004 0 0 1 0 2.008Z"
              fill="#1a2552"
            />
          </G>
          <G data-name="Group 5613">
            <Path
              data-name="Path 1931"
              d="M857.276 978.431H842.21a1.004 1.004 0 1 1 0-2.008h15.066a1.004 1.004 0 0 1 0 2.008Z"
              fill="#1a2552"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default BurgerMenu
