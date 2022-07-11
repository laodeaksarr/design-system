import React from 'react';
import { styled } from '@/lib/stitches.config';
import { EMProps, StrongProps } from './Typography.types';

/**
 * lineheight
 * 1.9 p li
 *
 * 1.6818 h1 h2 h3
 *
 * 1.45 // Inline code
 * 1.5 // Image ToC Search Result
 *
 * 1.625 // Text Area Text Input
 */

const Text = styled('span', {
  margin: '0 0 2.25rem 0',
  padding: 0,
  textRendering: 'optimizeLegibility',

  variants: {
    // line heights / leading (define token)
    // rename space to tracking (define token)
    // composed variant => gradient = true => variant = default ?
    // Follow dynamic metrics https://rsms.me/inter/dynmetrics/
    outline: {
      true: {
        color: 'transparent !important',
        WebkitTextStrokeColor: 'var(--laodeaksar-colors-typeface-primary)',
        WebkitTextStrokeWidth: '1px',
      },
    },
    spaced: {
      true: {
        letterSpacing: '0.3px',
        lineHeight: 1.9,
      },
    },
    family: {
      default: {
        fontFamily: '$default',
      },
      display: {
        fontFamily: '$display',
      },
      mono: {
        fontFamily: '$mono',
      },
      numeric: {
        fontFamily: '$numeric',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
      7: {
        fontSize: '$7',
      },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    variant: {
      default: { color: 'currentColor' },
      primary: { color: 'var(--laodeaksar-colors-typeface-primary)' },
      secondary: { color: 'var(--laodeaksar-colors-typeface-secondary)' },
      tertiary: { color: 'var(--laodeaksar-colors-typeface-tertiary)' },
      info: { color: 'var(--laodeaksar-colors-brand)' },
      success: { color: 'var(--laodeaksar-colors-success)' },
      warning: { color: 'var(--laodeaksar-colors-warning)' },
      danger: { color: 'var(--laodeaksar-colors-danger)' },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
      4: {
        fontWeight: '$4',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      ellipsis: {
        true: {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
      },
    },
  },
  defaultVariants: {
    family: 'default',
    size: '3',
    variant: 'default',
    weight: '2',
    spaced: true,
  },
});

// TODO: Add SUP component + examples with fractions
// EXPLORE: Smart fraction component ? replace / with &fracl; ?
// http://www.meticulous.org.uk/meticulous/websolutions/coding_tests/fractions.html
// EXPLORE: Footnote component: http://microformats.org/wiki/footnotes-examples https://2ality.com/2011/12/footnotes.html

const EM = React.forwardRef<React.ElementRef<'em'>, EMProps>((props, ref) => {
  return (
    <Text
      {...props}
      as="em"
      variant="tertiary"
      weight="3"
      ref={ref}
      spaced={false}
      style={{
        letterSpacing: '-0.3px',
      }}
    />
  );
});

EM.displayName = 'EM';

const Strong = React.forwardRef<React.ElementRef<'strong'>, StrongProps>(
  (props, ref) => {
    return (
      <Text {...props} as="strong" variant="primary" weight="4" ref={ref} />
    );
  }
);

Strong.displayName = 'Strong';

export default Text;
export { EM, Strong };
