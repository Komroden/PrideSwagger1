import React from 'react';
import {PulseLoader} from "react-spinners";
import {css} from "@emotion/react";

export const Loader = ({loading}) => {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return (
        <PulseLoader loading={loading} css={override} size={15}/>
    );
};

