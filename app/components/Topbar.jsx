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
        {/* <div className={styles.title}>
          Scene
        </div> */}
        <Button
          active={grid}
          onClick={onClickToggleGrid}
          icon="grid"
          text="Grid" />
      </div>
      <div className={styles.rightSection}>
        <Button
          active={utilsOpen}
          onClick={onClickToggleUtils}
          icon="navicon-round"
          text="Utils" />
      </div>
      {children}
    </div>
  );
}


export default Topbar;
