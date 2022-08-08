import React, { ReactElement } from 'react';
import { Icon } from '../Icon/Icon';

import styles from './Text.module.scss';

export interface ITextProps {
  id: string;
  textContent: string;
  textStyle?: 'italic' | 'initial'| string;
  textWeight?: 'bold' | 'lighter'| string;
  isClickable?: boolean;
}

export const Text = (props: ITextProps): ReactElement => {
  const { id, textContent, textStyle, textWeight, isClickable } = props;

  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    navigator.clipboard.writeText(textContent);
    alert('Copied to clipboard');
  };
  return (
    <>
      {isClickable ? (
        <div id={id} className={styles.text} onClick={isClickable ? handleCopy : () => {}}>
          <span style={{ fontStyle: textStyle, fontWeight: textWeight }}>{textContent}</span>
          <Icon></Icon>
        </div>
      ) : (
        <div id={id} className={styles.text}>
          <span style={{ fontStyle: textStyle, fontWeight: textWeight }}>{textContent}</span>
        </div>
      )}
    </>
  );
};
