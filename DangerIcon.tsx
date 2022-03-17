import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const DangerIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <G data-name="Group 6722">
      <G data-name="Group 6264">
        <Circle data-name="Ellipse 339" cx={25} cy={25} r={25} fill="#e40334" />
        <G data-name="Group 6686" fill="none" stroke="#fff" strokeWidth={2}>
          <G data-name="Ellipse 394" transform="translate(15.312 16.25)">
            <Circle cx={9.375} cy={9.375} r={9.375} stroke="none" />
            <Circle cx={9.375} cy={9.375} r={8.375} />
          </G>
          <Path
            data-name="Line 242"
            strokeLinecap="round"
            d="m33.749 16.875-17.5 17.5"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default DangerIcon
