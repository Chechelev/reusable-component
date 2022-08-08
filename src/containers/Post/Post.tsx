import { ReactElement, ReactNode, useState } from 'react';

import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { ImgComponent } from '../../components/ImgComponent';
import { Text } from '../../components/Text';
import { ToggleSwitch } from '../../components/ToggleSwitch';

import { IButtonProps } from '../../components/Button/Button';
import { ICheckboxProps } from '../../components/Checkbox/Checkbox';
import { ImgComponentProps } from '../../components/ImgComponent/ImgComponent';
import { IToggleSwitchProps } from '../../components/ToggleSwitch/ToggleSwitch';
import { ITextProps } from '../../components/Text/Text';

import styles from './Post.module.scss';

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export interface IPostProps extends IButtonProps, ICheckboxProps, ImgComponentProps, IToggleSwitchProps, ITextProps {
  id: string;
  children?: ReactNode;
  customAttrs?: Record<string, string>;
}

export const Post = (props: IPostProps): ReactElement => {
  const {
    id,

    imgAligned,
    imgSize,
    imgRadius,
    imgSrc,
    isStreamlined,
    customAttrs = {},

    textContent,
    textStyle,
    textWeight,
    isClickable,

    checkboxName,
    checkboxChecked,
    checkboxValue,

    toggleLabel,
    toggleDisabled,
    toggleDescription,
    isToggleChecked,

    buttonText,
    buttonDisabled,
  } = props;

  const [toggleChange, setToggleChange] = useState(isToggleChecked);

  const onSetToggleChange = (checked: any) => {
    setToggleChange(checked);
  };

  const handleButtonClick = () => {
    alert('check image "alt" tag');
  };
  console.log(typeof id);
  return (
    <div className={styles.post} style={{ display: isStreamlined ? 'block' : 'flex' }}>
      <div className={styles.img__wrapper}>
        <ImgComponent
          id={id}
          imgAligned={imgAligned}
          imgSize={imgSize}
          imgRadius={imgRadius}
          imgSrc={imgSrc}
        ></ImgComponent>
      </div>
      <div className={styles.text__wrapper}>
        <Text
          id={id}
          textContent={textContent}
          textStyle={textStyle}
          textWeight={textWeight}
          isClickable={isClickable}
        ></Text>
      </div>
      <div className={styles.inputs__wrapper}>
        <Checkbox
          id={id}
          checkboxName={checkboxName}
          checkboxChecked={checkboxChecked}
          checkboxValue={checkboxValue}
        ></Checkbox>
        <ToggleSwitch
          id={id}
          toggleLabel={toggleLabel}
          onChange={onSetToggleChange}
          isToggleChecked={toggleChange}
          toggleDisabled={toggleDisabled}
          toggleDescription={toggleDescription}
        />
      </div>
      <div className={styles.button__wrapper}>
        <Button
          id={id}
          buttonText={buttonText}
          buttonDisabled={buttonDisabled}
          onButtonClick={handleButtonClick}
        ></Button>
      </div>
    </div>
  );
};
