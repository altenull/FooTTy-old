// @flow
import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import HeaderWrapper from 'components/common/HeaderWrapper';
import { FaGlobe, FaFacebookSquare, FaTwitter, FaInstagram, FaYoutubePlay } from 'react-icons/lib/fa';

const cx = classNames.bind(styles);

type Props = {
  badge: string,
  teamName: string,
  webSite: ?string,
  facebook: ?string,
  twitter: ?string,
  instagram: ?string,
  youtube: ?string
}

const Header = ({
  badge,
  teamName,
  webSite,
  facebook,
  twitter,
  instagram,
  youtube
}: Props) => {
  return (
    <HeaderWrapper>
      <div className={cx('header', 'slide-enter')}>
        <div className={cx('logo')}>
          <img src={`${badge}`} alt={teamName} />
          <h1>
            {teamName}
          </h1>
        </div>
        <div className={cx('spacer')}></div>
        <div className={cx('social-links')}>
          { webSite &&
            <a
              href={`http://${webSite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
            </a>
          }
          { facebook &&
            <a
              href={`http://${facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          }
          { twitter &&
            <a
              href={`http://${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          }
          { instagram &&
            <a
              href={`http://${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          }
          { youtube &&
            <a
              href={`http://${youtube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubePlay />
            </a>
          }
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;