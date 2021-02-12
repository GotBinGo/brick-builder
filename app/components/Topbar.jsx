import React from 'react';

import Button from 'components/Button';
import ColorPicker from 'components/ColorPicker';
import BrickPicker from 'components/BrickPicker';

import styles from 'styles/components/topbar';


const Topbar = ({
  mode,
  onClickSetMode,
  color,
  onClickSetColor,
  grid,
  onClickToggleGrid,
  brickSize,
  onClickSetBrick,
  utilsOpen,
  onClickToggleUtils,
  children
}) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.section}>
      <Button
          active={grid}
          onClick={onClickToggleGrid}
          icon="grid"
          text="Grid" />
      <Button

          icon="refresh"
          text="R billentyű" />
        <Button


          icon="trash-a"
          text="D billentyű" />

      </div>
      <div className={styles.rightSection}>
        <Button
          active={utilsOpen}
          onClick={onClickToggleUtils}
          icon="navicon-round"
          text="Menü" />
      </div>
      {children}
    </div>
  );
}


export default Topbar;
