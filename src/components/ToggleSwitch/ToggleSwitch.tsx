import React, { ReactElement } from 'react';
import './ToggleSwitch.scss';

export interface IToggleSwitchProps {
  id: string;
  toggleLabel: string;
  onChange?: (isChecked: boolean) => void;
  'data-on'?: string;
  isToggleChecked: boolean | undefined;
  'data-off'?: string;
  toggleDescription?: string;
  toggleDisabled?: boolean;
}

export const ToggleSwitch = (props: IToggleSwitchProps): ReactElement => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event.target.checked);
  };

  const labelId = `label-${props.id}`;
  const descriptionId = `description-${props.id}`;
  const labelBy = labelId + ' ' + descriptionId;

  return (
    <label htmlFor={props.id} className='switch'>
      <input
        id={props.id}
        type='checkbox'
        role='switch'
        data-on={props['data-on']}
        checked={props.isToggleChecked}
        data-off={props['data-off']}
        onChange={onChange}
        disabled={props.toggleDisabled}
        aria-checked={props.isToggleChecked}
        aria-labelledby={labelBy}
      />
      <div className='switch-labels'>
        <span id={labelId}>{props.toggleLabel}</span>
        {props.toggleDescription && <p id={descriptionId}>{props.toggleDescription}</p>}
      </div>
    </label>
  );
};

ToggleSwitch.defaultProps = {
  'data-on': 'ON',
  'data-off': 'OFF',
};
