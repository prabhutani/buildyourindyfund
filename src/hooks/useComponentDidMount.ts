/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from 'react';

export function useComponentDidMount(fn: EffectCallback) {
  useEffect(fn, []);
}
