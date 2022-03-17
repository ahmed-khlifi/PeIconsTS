import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const TrendIconInactive = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6662" transform="translate(-273 -834)">
      <Circle
        data-name="Ellipse 314"
        cx={20}
        cy={20}
        r={20}
        transform="translate(273 834)"
        fill="#fff"
      />
      <Path
        data-name="Path 15216"
        d="M287.5 858.134a6.006 6.006 0 0 0 4.528 4.244 6.081 6.081 0 0 0 1.207.121 5.936 5.936 0 0 0 3.776-10.5l-.02-.016a17.294 17.294 0 0 1-2.719-2.737 14.652 14.652 0 0 1-2.114-3.743 6.3 6.3 0 0 0-1.062 3.34 9.153 9.153 0 0 0 .644 2.67 4.725 4.725 0 0 1-.252 4.18 4.852 4.852 0 0 1-3.505 2.4 4.614 4.614 0 0 1-.483.041Z"
        fill="none"
        stroke="#1a2552"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
)

export default TrendIconInactive
