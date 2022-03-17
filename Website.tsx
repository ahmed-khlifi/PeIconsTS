import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const Website = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 5620">
      <G data-name="Group 5621">
        <G data-name="Ellipse 256" fill="#fff" stroke="#f3f4f5">
          <Circle cx={20} cy={20} r={20} stroke="none" />
          <Circle cx={20} cy={20} r={19.5} fill="none" />
        </G>
        <G data-name="Group 5624">
          <G data-name="Group 5621">
            <Path
              data-name="Path 1932"
              d="M22.534 26.053a6.036 6.036 0 0 1-8.537-8.537 1 1 0 0 1 1.414 1.415 4.036 4.036 0 1 0 5.708 5.707 1 1 0 0 1 1.414 1.415Z"
              fill="#1a2552"
            />
          </G>
          <G data-name="Group 5622">
            <Path
              data-name="Path 1933"
              d="M26.055 22.533a1 1 0 0 1-1.415-1.415 4.036 4.036 0 0 0-5.707-5.707 1 1 0 0 1-1.415-1.415 6.036 6.036 0 1 1 8.537 8.537Z"
              fill="#1a2552"
            />
          </G>
          <G data-name="Group 5623">
            <Path
              data-name="Path 1934"
              d="m22.463 18.968-3.535 3.536a1 1 0 1 1-1.415-1.415l3.536-3.535a1 1 0 0 1 1.414 1.414Z"
              fill="#1a2552"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default Website
