import "../App.less"
import bg from '../bg.jpg'
import { Layout,Typography,Table} from 'antd';
import NavBar from '../components/NavBar';
import NavLogo from '../components/NavLogo'
import * as conColors from '../colors'
const { Title } = Typography;
const { Header, Content, Footer } = Layout;


// demo data
const dataSource = [
    {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },
     {
        key: '2',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '3',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '4',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },
];

const columns = [
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Crime Type',
        dataIndex: 'crimeType',
        key: 'crimeType',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'No of Incident',
        dataIndex: 'noOfIncident',
        key: 'noOfIncident',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
];

const txtColor = conColors.txtColor
const footerBgColor = conColors.footerBgColor
const footerTxtColor = conColors.footerTxtColor
function CustomData() {
    return (
        <>
            <Layout className="customdata">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <NavLogo></NavLogo>
                    <NavBar selectedOp='2' />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
                    <div style={{ margin: '16px 0' }}></div>
                    <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
                        <div style={{ textAlign: 'center' }}>
                            <Title style={{ color: txtColor }}>Custom Data</Title>
                        </div>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)', height: '40%', width: '70%',
                        }}>
                            <Table dataSource={dataSource} columns={columns} />
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: footerBgColor, color: footerTxtColor }}>Design ©2021 Created by Team B</Footer>
            </Layout>
        </>
    );
}

export default CustomData;