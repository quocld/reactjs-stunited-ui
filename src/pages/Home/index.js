import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return <div className={cx('home-content')}>Home Page</div>;
}

export default Home;
