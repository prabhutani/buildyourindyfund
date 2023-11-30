import React, { PropsWithChildren } from 'react';
import { LoadingWrapper } from 'app/components/LoadingWrapper/LoadingWrapper';
import { Button, BUTTON_TYPE } from 'app/components/Button/Button';
import { SIZE, THEME } from 'app/constants/common';
import { Callback, ClassName } from 'app/types/common';

type Props = ClassName & {
  loading?: boolean;
  theme?: THEME;
  size?: SIZE;
  type?: BUTTON_TYPE;
  autoFocus?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  buttonRef?: any;
  onClick?: Callback;
};

export const ProgressButton = ({
  className,
  loading = false,
  theme,
  size,
  children,
  type,
  disabled,
  rounded,
  buttonRef,
  onClick,
  ...restProps
}: PropsWithChildren<Props>) => {
  return (
    <LoadingWrapper loading={loading}>
      <Button
        className={className}
        theme={theme}
        size={size}
        type={type}
        disabled={disabled}
        rounded={rounded}
        buttonRef={buttonRef}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </Button>
    </LoadingWrapper>
  );
};
