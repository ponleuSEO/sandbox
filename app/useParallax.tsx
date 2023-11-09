import { MotionValue, clamp, useTransform } from 'framer-motion';

export default function useParallax(
  value: MotionValue<number>,
  from: number,
  to: number
) {
  return useTransform(value, [0, 1], [from, to], { clamp: true });
}
