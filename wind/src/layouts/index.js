import styles from './index.css';
import { connect } from 'dva';
import { Layout, Tabs, Button } from 'antd';
import MenuList from '../components/menulist/menulist'
import PageList from '../components/pagelist/pagelist'


const {
  Header, Footer, Content,
} = Layout;

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.dispatch({ type: 'menus/getall' });
  }

  render() {
    return (
      <div>
        <Layout>
          <Header className={styles.header}>
            <MenuList menus={this.props.menus.all}></MenuList>
          </Header>
          <Content>
            <PageList></PageList>
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    )
  }
}

export default connect(({ menus }) => ({ menus }))(BasicLayout);