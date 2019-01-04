import styles from './pagelist.css';
import { Tabs, Icon } from 'antd';
import HomePage from '../../pages/home/home';
import SearchPage from '../../pages/search/search';

const TabPane = Tabs.TabPane;

class PageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: '/home/home',
            panes: [
                { title: '首页', content: <HomePage callback={this.callback.bind(this)}></HomePage>, key: '/home/home', closable: false },
                { title: <Icon type="plus" />, content: <SearchPage callback={this.callback.bind(this)}></SearchPage>, key: '/search/search', closable: false }
            ]
        };
    }

    callback = (action) => {
        this.add(action);
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = (action) => {
        let that = this;
        let activeKey = action.key;
        const panes = that.state.panes;
        const pane = panes.find(item => item.key == activeKey);
        if (pane) {
            activeKey = pane.key;
            that.setState({ activeKey });
        } else {
            import('../../pages' + activeKey).then((page) => {
                panes.splice(1, 0, { title: action.title, content: <page.default callback={this.callback.bind(this)} />, key: activeKey });
                that.setState({ panes, activeKey });
            });
        }
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <Tabs
                hideAdd
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {
                    this.state.panes.map(pane =>
                        <TabPane
                            tab={pane.title}
                            key={pane.key}
                            closable={pane.closable}
                        >
                            {pane.content}
                        </TabPane>
                    )
                }
            </Tabs>
        )
    }
}

export default PageList;