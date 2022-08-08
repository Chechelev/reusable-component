import React, { ReactElement } from 'react';

import styles from './Button.module.scss';

export interface IButtonProps {
  id: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
}

export const Button = (props: IButtonProps): ReactElement => {
  const { id, buttonText, buttonDisabled, onButtonClick } = props;
  return (
    <button id={id} onClick={onButtonClick} disabled={buttonDisabled} className={styles.button}>
      {buttonText}
    </button>
  );
};
