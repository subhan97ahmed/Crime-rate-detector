import log1 from '../logo1.png'
import "../App.less"
import { Image } from 'antd';
import bg from '../bg.jpg'
import { Layout, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import { Table } from 'antd';
import NavBar from '../components/NavBar';

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
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },
    {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },
    {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },
    {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    }, {
        key: '1',
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

const txtColor = "#6aceef"
const footerBgColor = "#2E2A2B"
const footerTxtColor = "#FFFFFF"
function CustomData() {
    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ overflow: 'hidden' }}>
                        <Image src={log1} height={100} width={100} style={{ marginTop: "-20px" }} preview={false} ></Image>
                    </div>
                    <NavBar selectedOp='2' />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
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