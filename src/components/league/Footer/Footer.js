// @flow
import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import FooterWrapper from 'components/common/FooterWrapper';
import { FaArrowCircleOLeft } from 'react-icons/lib/fa';

const cx = classNames.bind(styles);

type Props = {
  onClick(): void
}

const Footer = ({onClick}: Props) => {
  return (
    <FooterWrapper>
      <div className={cx('footer', 'slide-enter')}>
        <div className={cx('navigation')} onClick={onClick}>
          <FaArrowCircleOLeft/>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;