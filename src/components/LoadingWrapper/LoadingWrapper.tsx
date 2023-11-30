import React, { Children, Fragment, isValidElement, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { LoadingSpinner } from 'app/components/LoadingWrapper/LoadingSpinner';

const ELEMENT_TYPE = {
  INPUT: 'input',
  TEXTAREA: 'textarea',
};

type Props = {
  loading?: boolean;
};

export const LoadingWrapper = ({ children, loading = false }: PropsWithChildren<Props>) => {
  if (Children.count(children) > 1) {
    return (
      <div className="loading-wrapper">
        {children}

        {loading && <LoadingSpinner />}
      </div>
    );
  }

  if (!isValidElement(children)) {
    return null;
  }

  const disabled = children.props.disabled || loading;

  if (children.type === ELEMENT_TYPE.INPUT || children.type === ELEMENT_TYPE.TEXTAREA) {
    return (
      <div className="loading-wrapper">
        {/*eslint-disable-next-line*/}
        {/*@ts-ignore*/}
        {React.cloneElement(children, { disabled })}

        {loading && <LoadingSpinner />}
      </div>
    );
  }

  return React.cloneElement(children, {
    // eslint-disable-next-line
    // @ts-ignore
    className: classNames('loading-wrapper', children.props.className),
    children: (
      <Fragment>
        {children.props.children}

        {loading && <LoadingSpinner />}
      </Fragment>
    ),
    disabled,
  });
};
