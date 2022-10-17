import type * as Stitches from '@stitches/react';
import { createUtil } from './create';

type Padding = Stitches.PropertyValue<'padding'>;

const paddingUtils = {
  // Abbreviated padding properties
  pt: createUtil<Padding>(['paddingTop']),
  //pt: (value: any) => ({
  //  paddingTop: value,
  //}),
  pr: createUtil<Padding>(['paddingRight']),
  //pr: (value: any) => ({
  //  paddingRight: value,
  //}),
  pb: createUtil<Padding>(['paddingBottom']),
  //pb: (value: any) => ({
  //  paddingBottom: value,
  //}),
  pl: createUtil<Padding>(['paddingLeft']),
  //pl: (value: any) => ({
  //  paddingLeft: value,
  //}),
  px: createUtil<Padding>(['paddingLeft', 'paddingRight']),
  //px: (value: any) => ({
  //  paddingLeft: value,
  //  paddingRight: value,
  //}),
  py: createUtil<Padding>(['paddingTop', 'paddingBottom']),
  //py: (value: any) => ({
  //  paddingTop: value,
  //  paddingBottom: value,
  //}),
  pxy: ([v, h]: [Padding, Padding]) => ({
    paddingTop: v,
    paddingBottom: v,
    paddingLeft: h,
    paddingRight: h,
  }),
};

export default paddingUtils;
