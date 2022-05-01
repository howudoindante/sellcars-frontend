import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { useRouter } from 'next/router';
import Header from '../Header/Header';
const PageLayout = (props) => {
const router = useRouter();
  return (
    <Layout style={{ background: '#ffffff' }}>
      <Header activeTab={router.pathname} />
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: '50px' }}
      >
          {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        My social: <a href='https://github.com/marcusblanco'>GitHub</a>
      </Footer>
    </Layout>
  );
};

export default PageLayout;