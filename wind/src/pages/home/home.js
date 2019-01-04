import styles from './home.css'
import { connect } from 'dva';
import { Row, Col, Input, Carousel, Icon } from 'antd';

const Search = Input.Search;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            navContent: [],
            placeholder: '连续三天上涨的股票'
        }
    }

    componentWillMount = () => {
        this.props.dispatch({ type: 'menus/getnav' }).then(() => {
            this.showNavContent(0);
        });
    }

    showNavContent = (activeIndex) => {
        const menus = this.props.menus.nav;
        let list = [], list2 = [], navContent = [];
        if (menus) {
            list = menus.find((m1, i) => {
                return i == activeIndex;
            })
            if (list && list.sub) {
                list.sub.map((m2, j) => {
                    list2 = [];
                    if (m2.sub) {
                        m2.sub.map((m3, k) => {
                            list2.push(<span key={k}>{m3.name}<small> {m3.key}</small></span>)
                        })
                    }
                    navContent.push(
                        <div key={j} className={styles.pane}>
                            <div className={styles.title}>{m2.name}</div>
                            <div className={styles.content}>
                                {list2}
                            </div>
                        </div>
                    )
                })
            }
        }
        this.setState({
            activeIndex: activeIndex,
            navContent: navContent
        });
    }

    onClick = (e) => {
        const activeIndex = e.currentTarget.getAttribute('index');
        this.showNavContent(activeIndex);
    }

    render() {
        const menus = this.props.menus.nav;
        const activeIndex = this.state.activeIndex;
        let nav = [];
        if (menus) {
            menus.map((m1, i) => {
                nav.push(
                    <li key={i}
                        index={i}
                        onClick={this.onClick}
                        className={activeIndex == i ? styles.active : ''}
                    >
                        <div>{m1.name}</div>
                        <div><small>{m1.en}</small></div>
                    </li>
                );
            });
        }
        return (
            <Row>
                <Col span={1} className={styles.nav}>
                    <ul>{nav}</ul>
                </Col>
                <Col span={7} className={styles.menus}>
                    {this.state.navContent}
                </Col>
                <Col span={15} className={styles.container}>
                    <Row>
                        <Col span={12} offset={6} className={styles.search}>
                            <Search
                                placeholder={this.state.placeholder}
                                onChange={this.onChange}
                                onSearch={this.onSearch}
                                style={{ width: '100%' }}
                                enterButton
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className={styles.advertising}>
                            <Carousel autoplay>
                                <div className={styles.empty}></div>
                                <div className={styles.empty2}></div>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} className={styles.stock}>
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="4">热门股票</th>
                                    </tr>
                                    <tr>
                                        <th>代码</th><th>名称</th><th>最新价</th><th>涨跌幅</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AAPL</td><td>苹果公司(APPLE)</td><td className={styles.up}>157.92</td><td className={styles.up}>0.11%</td>
                                    </tr>
                                    <tr>
                                        <td>TSLA</td><td>特斯拉</td><td className={styles.down}>310.12</td><td className={styles.down}>-6.81%</td>
                                    </tr>
                                    <tr>
                                        <td>AMZN</td><td>亚马逊(AMAZON)</td><td className={styles.up}>1539.13</td><td className={styles.up}>2.47%</td>
                                    </tr>
                                    <tr>
                                        <td>BABA</td><td>阿里巴巴</td><td className={styles.down}>136.70</td><td className={styles.down}>-0.27%</td>
                                    </tr>
                                    <tr>
                                        <td>FB</td><td>FACEBOOK</td><td className={styles.up}>135.68</td><td className={styles.up}>3.50%</td>
                                    </tr>
                                    <tr>
                                        <td>600519</td><td>贵州茅台</td><td className={styles.up}>600.00</td><td className={styles.up}>0.17%</td>
                                    </tr>
                                    <tr>
                                        <td>601318</td><td>中国平安</td><td className={styles.down}>55.17</td><td className={styles.down}>-0.02%</td>
                                    </tr>
                                    <tr>
                                        <td>600588</td><td>用友网络</td><td className={styles.up}>22.20</td><td className={styles.up}>1.93%</td>
                                    </tr>
                                    <tr>
                                        <td>002027</td><td>分众传媒</td><td className={styles.down}>5.00</td><td className={styles.down}>-0.40%</td>
                                    </tr>
                                    <tr>
                                        <td>000963</td><td>华东医药</td><td className={styles.down}>23.75</td><td className={styles.down}>-0.25%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col span={14} className={styles.block}>
                            <div className={styles.pane}>
                                <div className={styles.title}>会议</div>
                                <Row>
                                    <Col span={6} className={styles.img}></Col>
                                    <Col span={17} className={styles.content}>
                                        <p><strong>大咖说——2019年上半年牛股策略猪年大爱</strong></p>
                                        <div>时间：1月10日(周四)16:00-17:00</div>
                                        <div>主讲：叶飞</div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.pane}>
                                <div className={styles.title}>推荐</div>
                                <Row>
                                    <Col span={6} className={styles.img}></Col>
                                    <Col span={17} className={styles.content}>
                                        <p><strong>资金报价——资金交易员的工作助手</strong></p>
                                        <div>资金报价(MMQ)是一个集资金行情展示、分析、报价于一体的平台，是资金交易员的日常工作工具。</div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default connect(({ menus }) => ({ menus }))(HomePage);