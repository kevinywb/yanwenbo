import styles from './search.css';
import { Input, Carousel, Icon } from 'antd';

const Search = Input.Search;

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: '股价小于30元'
        }
    }

    onSearch = (val, e) => {
        this.props.callback({ key: '/search/searchresult', title: '搜索页', page: val });
    }

    onChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <div className={styles.top}>搜一下</div>
                <div className={styles.center}>
                    <Search
                        placeholder={this.state.placeholder}
                        onChange={this.onChange}
                        onSearch={this.onSearch}
                        size="large"
                        style={{ width: '700px' }}
                        enterButton
                    />
                </div>
                <Carousel autoplay className={styles.bottom}>
                    <div>
                        <ul className={styles.left}>
                            <li className={styles.title}><Icon type="like" theme="twoTone" /> 热搜</li>
                            <li><a href='#'>联合石化</a></li>
                            <li><a href='#'>规模以上工业企业利润</a></li>
                            <li><a href='#'>中国石化</a></li>
                            <li><a href='#'>丰盛控股</a></li>
                            <li><a href='#'>中信国安</a></li>
                        </ul>
                        <ul className={styles.right}>
                            <li className={styles.title}><Icon type="like" theme="twoTone" /> 热点</li>
                            <li><a href='#'>智能汽车</a></li>
                            <li><a href='#'>特斯拉</a></li>
                            <li><a href='#'>三农</a></li>
                            <li><a href='#'>ST概念</a></li>
                            <li><a href='#'>华为概念</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.left}>
                            <li className={styles.title}><Icon type="like" theme="twoTone" /> 推荐问句</li>
                            <li><a href='#'>营业收入在10亿到30亿之间的股票</a></li>
                            <li><a href='#'>评级是AAA，剩余期限大于10年的债券</a></li>
                            <li><a href='#'>超高收益的债券</a></li>
                            <li><a href='#'>今日涨停的股票</a></li>
                            <li><a href='#'>股价跌破员工持股成本</a></li>
                        </ul>
                        <ul className={styles.right}>
                            <li className={styles.title}>&nbsp;</li>
                            <li><a href='#'>2017年12月最新发的信用债</a></li>
                            <li><a href='#'>国信证券承销的债券</a></li>
                            <li><a href='#'>浮动利率债券</a></li>
                            <li><a href='#'>私募可交换债有哪些呢</a></li>
                            <li><a href='#'>水泥企业发债</a></li>
                        </ul>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default SearchPage