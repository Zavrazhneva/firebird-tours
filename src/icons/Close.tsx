import React, { type FC } from 'react'
import { type IconProps } from '../models/icon'

const Close: FC<IconProps> = (props) => (
    <svg
        {...props}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="close-icon"
        {...props}
    >
        <path
            d="M17 7L7 17"
            stroke="#AFB4BB"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.00391 7L17.0039 17"
            stroke="#AFB4BB"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Close
