
import styles from './menulist.css';
import { Popover, Divider, Icon } from 'antd';

class MenuList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menus = this.props.menus;
        let list = [], list2 = [], list3 = [];
        if (menus) {
            menus.map((m1, i) => {
                list2 = [];
                if (m1.sub) {
                    m1.sub.map((m2, j) => {
                        list3 = [];
                        if (m2.sub) {
                            m2.sub.map((m3, k) => {
                                if (m3.type && m3.type == 'divider') {
                                    list3.push(
                                        <li key={k}><Divider className={styles.divider}></Divider></ li >
                                    )
                                } else {
                                    list3.push(<li key={k}> {m3.name}</li >)
                                }
                            })
                            list2.push(
                                <Popover
                                    key={j}
                                    placement="right"
                                    content={<ul className={styles.sub}>{list3}</ul>}
                                    trigger="hover"
                                >
                                    <li>
                                        {m2.name}
                                        <span className={styles.right}><Icon type="right" /></span>
                                    </li >
                                </Popover>
                            )
                        } else {
                            if (m2.type && m2.type == 'divider') {
                                list2.push(
                                    <li key={j}><Divider className={styles.divider}></Divider></ li >
                                )
                            } else {
                                list2.push(
                                    <li key={j}>
                                        {m2.name}
                                    </li >
                                )
                            }
                        }
                    })
                }
                list.push(
                    <li key={i}>
                        <Popover
                            placement="bottomLeft"
                            content={<ul className={styles.sub}>{list2}</ul>}
                            trigger="click"
                        >
                           {m1.name}
                        </Popover>
                    </li >
                )
            })
        }

        return (
            <div>
                <ul className={styles.left} >
                    <li><span className={styles.brand}><Icon type="trademark" /></span></li>
                    {list}
                </ul>
                <ul className={styles.right}>
                    <li><Icon type="bell" /></li>
                    <li><Icon type="message" /></li>
                    <li><Icon type="scissor" /></li>
                    <li><Icon type="home" /></li>
                </ul>
            </div >
        );
    }
}

export default MenuList;