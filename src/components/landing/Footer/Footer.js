// @flow
import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import FooterWrapper from 'components/common/FooterWrapper';
import { FaGithub, FaLinkedin } from 'react-icons/lib/fa';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <FooterWrapper>
      <div className={cx('footer', 'slide-enter')}>
        <span>
          COPYRIGHT © 2018 Heonyoung Kim.
        </span>
        <div className={cx('social-links')}>
          <a
            href="https://www.linkedin.com/in/heonyoungkim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/altenull/FooTTy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;