import Layout from '../components/Layout';
import Board from '../parts/Board';

export default function Index() {
    return (
        <Layout>
            <Board size={10} width={100} count={30} />
        </Layout>
    );
}