import React, { ReactElement } from 'react';
import styles from './ImgComponent.module.scss';

declare type ImgSize = 'small' | 'medium' | 'large';
declare type Aligned = 'left' | 'right';

export interface ImgComponentProps {
  id: string;
  imgAligned?: Aligned | string;
  imgSize: ImgSize | string;
  imgRadius?: string | undefined;
  imgSrc: string;
  isStreamlined?: boolean;
}

export const ImgComponent = (props: ImgComponentProps): ReactElement => {
  const { id, imgAligned, imgSize, imgRadius, imgSrc, isStreamlined } = props;
  const imgDefineSize = () => {
    if (imgSize === 'small') {
      return 50;
    } else if (imgSize === 'medium') {
      return 250;
    } else if (imgSize === 'large') {
      return 350;
    }
  };

  const imgPosition = () => {
    if (imgAligned === 'left') {
      return 'left';
    } else if (imgAligned === 'right') {
      return 'right';
    }
  };

  return (
    <img
      id={id}
      className={styles.img}
      src={imgSrc}
      width={imgDefineSize()}
      style={{ borderRadius: imgRadius, float: imgPosition()}}
      alt='kirill lox'
    ></img>
  );
};
