import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('full-width-header')}>
            <header className={cx('header')}>
                <div className={cx('menu-area')}>
                    <div className={cx('container')}>
                        <div className={cx('main-menu')}>
                            <div className={cx('main-menu-side-box')}>
                                <div className={cx('logo-part')}>
                                    <div className={cx('logo-part__img')}>
                                        <img
                                            src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png"
                                            alt="logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('main-menu-btn-box')}>
                                <ul className={cx('main-menu-header')}>
                                    <li className={cx('main-menu-header__home-btn')}>
                                        <a>HOME</a>
                                    </li>
                                    <li>
                                        <a>ABOUT DEVPLUS</a>
                                    </li>
                                    <li>
                                        <a className={cx('main-menu-header__sub-btn')}>OUR PROGRAMME</a>
                                        <ul className={cx('main-menu-header__sub-menu')}>
                                            <li>
                                                <a href="./src/pages/OurProgramme/Oneplus/index.html">
                                                    One plus campus
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./src/pages/OurProgramme/TwoPlus/index.html">
                                                    Two plus campus
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./src/pages/OurProgramme/ThreePlus/index.html">
                                                    Three plus campus
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>DEVPLUS ACTIVITIES</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('main-menu-side-box')}>
                                <div className={cx('expand-menu-btn')}>
                                    <a>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
