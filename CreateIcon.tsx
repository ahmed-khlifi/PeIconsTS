import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const CreateIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <G data-name="Group 6067">
      <G data-name="Group 6076">
        <G data-name="Ellipse 317" fill="#fff" stroke="#f6f6f6" strokeWidth={2}>
          <Circle cx={25} cy={25} r={25} stroke="none" />
          <Circle cx={25} cy={25} r={24} fill="none" />
        </G>
        <G
          data-name="Group 6446"
          fill="none"
          stroke="#1a2552"
          strokeLinecap="round"
          strokeWidth={2.5}
        >
          <Path data-name="Line 207" d="M17.93 25H32.07" />
          <Path data-name="Line 208" d="M25.001 17.929v14.142" />
        </G>
      </G>
    </G>
  </Svg>
)

export default CreateIcon
