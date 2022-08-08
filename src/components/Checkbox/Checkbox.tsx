import React, { ReactElement } from 'react';
//import styles from './Checkbox.module.scss';
// interface ICheckboxOwnProps {
//     checked: boolean;
//     onChange: (e: CheckboxChangeEvent) => void;
//     indeterminate?: boolean;
//     id?: string;
//     name?: string;
//     placeholder?: string;
//     autoFocus?: boolean;
//     alignRight?: boolean;
//     className?: string;
// }

export interface ICheckboxProps {
  id: string;
  checkboxName: string;
  checkboxChecked?: boolean;
  checkboxValue?: string;
}

export const Checkbox = (props: ICheckboxProps): ReactElement => {
  const { id, checkboxName, checkboxChecked, checkboxValue } = props;
  return (
    <div id={id} style={{ flexGrow: 1 }}>
      <input type='checkbox' className={'checkbox'} id={id} name={checkboxName} checked={checkboxChecked}></input>
      <label htmlFor={checkboxName}>{checkboxValue}</label>
    </div>
  );
};
