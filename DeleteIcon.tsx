import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const DeleteIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6683" transform="translate(0 -.184)">
      <Circle
        data-name="Ellipse 262"
        cx={20}
        cy={20}
        r={20}
        transform="translate(0 .184)"
        fill="#fff"
      />
      <G data-name="Group 5670">
        <G data-name="Group 5668">
          <Path
            data-name="Path 1945"
            d="M22.978 27.684h-5.956a3.247 3.247 0 0 1-3.122-2.863l-1.393-11.145a.883.883 0 0 1 .876-.992h13.235a.883.883 0 0 1 .876.992l-1.393 11.145a3.247 3.247 0 0 1-3.123 2.863Zm-8.6-13.235 1.269 10.154a1.479 1.479 0 0 0 1.371 1.317h5.956a1.479 1.479 0 0 0 1.371-1.317l1.269-10.154Z"
            fill="rgba(26,37,82,0.5)"
          />
        </G>
        <G data-name="Group 5669">
          <Path
            data-name="Path 1946"
            d="M21.89 17.945h-3.779a1.008 1.008 0 0 1 0-2.015h3.779a1.008 1.008 0 0 1 0 2.015Z"
            fill="rgba(26,37,82,0.5)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default DeleteIcon
