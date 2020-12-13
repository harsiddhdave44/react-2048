import styled, { css } from 'styled-components';
import { getTileFontSize } from '../../../utils/common';

export interface StyledTileProps {
  width: number;
  height: number;
  value: number;
  x: number;
  y: number;
}

const getCommonTileStyles = ({
  width,
  height,
  value,
  x,
  y,
}: StyledTileProps) => css`
  width: ${width}px;
  height: ${height}px;
  font-size: ${getTileFontSize(width, height, value)}px;
  transform: ${`translate(${x}px, ${y}px)`};
`;

const StyledTile = styled.div<StyledTileProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  transition: transform 0.13s ease-in-out;
  background: none;
  ${getCommonTileStyles};
`;

export default StyledTile;
