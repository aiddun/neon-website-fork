import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const underlineCommonStyles =
  'relative transition-colors duration-500 before:absolute before:z-[-1] before:-bottom-1.5 before:left-0 before:h-1.5 before:w-full before:transition-all before:duration-500 hover:before:bottom-full hover:before:opacity-0';

const styles = {
  base: 'inline-flex !leading-none',
  size: {
    md: 'text-xl font-semibold',
    sm: 'text-lg',
  },
  theme: {
    'normal-black': 'text-black transition-colors duration-200 hover:text-primary-1',
    'normal-white': 'text-white transition-colors duration-200 hover:text-primary-1',
    'underline-primary-1': `${underlineCommonStyles} before:bg-primary-1 hover:text-primary-1`,
    'underline-secondary-3': `${underlineCommonStyles} before:bg-secondary-3 hover:text-secondary-3`,
    'underline-secondary-5': `${underlineCommonStyles} before:bg-secondary-5 hover:text-secondary-5`,
  },
};

const Link = ({ className: additionalClassName, size, theme, to, children, ...props }) => {
  const className = clsx(
    theme && size && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Link;
