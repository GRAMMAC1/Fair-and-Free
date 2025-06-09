import { cva } from 'class-variance-authority';

export const titleStyle = cva('font-bold text-[40px] text-[var(--selected-text-color)]', {
  variants: {
    font: {
      kodchasan: 'font-[Kodchasan]',
      Inter: 'font-[Inter]',
      ks: 'font-[Kodchasan-SemiBold]',
    }
  }
})

export const normalTextStyle = cva('text-[var(--selected-text-color)] text-[15px] font-normal', {
  variants: {
    font: {
      Inter: 'font-[Inter]',
      km: 'font-[Kodchasan-Medium]',
    }
  },
  defaultVariants: {
    font: 'Inter'
  }
})