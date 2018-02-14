// @flow
import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import FooterWrapper from 'components/common/FooterWrapper';
import { FaArrowCircleOLeft, FaHome } from 'react-icons/lib/fa';

const cx = classNames.bind(styles);

type Props = {
  onClick(clickedButton: string): void
}

const Footer = ({onClick}: Props) => {
  return (
    <FooterWrapper>
      <div className={cx('footer', 'slide-enter')}>
        <div className={cx('navigation')}>
          <div className={cx('button')} onClick={() => onClick('back')}>
            <FaArrowCircleOLeft />
          </div>
          <div className={cx('button')} onClick={() => onClick('home')}>
            <FaHome />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;