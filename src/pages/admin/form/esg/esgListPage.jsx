import NoticeBoard from '../../../../components/admin/noticeBoard';
import Layout from '../../../../containers/adminLayoutContainer';

export default function EsgListPage() {
  return (
    <Layout>
      <NoticeBoard title={'title'} data={'hi'} />
    </Layout>
  );
}
