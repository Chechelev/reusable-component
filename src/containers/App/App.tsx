import React, { ReactElement } from 'react';

import { Post } from '../Post';
import  Data  from '../../data/data';
import styles from './App.module.scss';

const App = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {Data.map(
        (el) => (
          <Post
            key={el.id}
            id={el.id}
            textContent={el.textContent}
            textStyle={el.textStyle}
            textWeight={el.textWeight}
            isClickable={el.isClickable}
            imgAligned={el.imgAligned}
            imgSize={el.imgSize}
            imgSrc={el.imgSrc}
            imgRadius={el.imgRadius}
            isStreamlined={el.isStreamlined}
            checkboxName={el.checkboxName}
            checkboxChecked={el.checkboxChecked}
            checkboxValue={el.checkboxValue}
            buttonText={el.buttonText}
            buttonDisabled={el.buttonDisabled}
            toggleLabel={el.toggleLabel}
            toggleDisabled={el.toggleDisabled}
            toggleDescription={el.toggleDescription}
            isToggleChecked ={el.isToggleChecked}
            onChange={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          ></Post>
        )
      )}
    </div>
  );
};

export default App;
