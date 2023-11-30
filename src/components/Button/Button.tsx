import React, { PropsWithChildren, useCallback, useRef } from 'react';
import { SIZE, THEME } from 'app/constants/common';
import { Callback, ClassName } from 'app/types/common';
import { useComponentDidMount } from 'app/hooks/useComponentDidMount';
import classNames from 'classnames';
import './Button.scss';

export enum BUTTON_TYPE {
  SUBMIT = 'submit',
  BUTTON = 'button',
}

type Props = ClassName & {
  theme?: THEME;
  size?: SIZE;
  type?: BUTTON_TYPE;
  autoFocus?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  buttonRef?: any;
  onClick?: Callback;
};

export const Button = ({
  className,
  theme = THEME.PRIMARY,
  size = SIZE.M,
  children,
  type = BUTTON_TYPE.BUTTON,
  autoFocus = false,
  disabled = false,
  rounded = false,
  buttonRef,
  onClick,
}: PropsWithChildren<Props>) => {
  const bRef = useRef<any>();

  useComponentDidMount(() => {
    if (autoFocus === true) {
      bRef.current?.focus();
    }
  });

  const setRef = useCallback(
    (ref: any) => {
      bRef.current = ref;

      if (buttonRef) {
        if (typeof buttonRef === 'function') {
          buttonRef(ref);
        } else {
          buttonRef.current = ref;
        }
      }
    },
    [buttonRef],
  );

  return (
    <button
      className={classNames(
        'button',
        {
          'button--rounded': rounded,
          'button--large-secondary': size === SIZE.L && theme === THEME.SECONDARY,
        },
        `button--size-${size}`,
        `button--theme-${theme}`,
        className,
      )}
      ref={setRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
