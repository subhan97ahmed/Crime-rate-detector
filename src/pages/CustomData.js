import log1 from '../logo1.png'
import "../App.less"
import { Image } from 'antd';
import bg from '../bg.jpg'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import MapContainer from '../components/MapContainer';
import { Typography } from 'antd';
import { Table } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Search } = Input;


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
    },{
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },{
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },{
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },{
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },{
        key: '1',
        area: 'Saddar town',
        crimeType: 'Murder',
        location: '25.123, 23.034',
        noOfIncident: '70',
        date: '12-12-20'
    },{
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

function CustomData() {
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ overflow: 'hidden' }}>
                        <Image src={log1} height={100} width={100} style={{ marginTop: "-20px" }} preview={false} ></Image>
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Custom Data</Menu.Item>
                        <Menu.Item key="3">About</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                    <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
                        <div style={{ textAlign: 'center' }}>
                            <Title style={{ color: "#6aceef" }}>Custom Data</Title>
                        </div>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)', height: '40%', width: '70%', 
                        }}>
                            <Table dataSource={dataSource} columns={columns} bordered={true} size="middle" >

                            </Table>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: "#2E2A2B", color: "white" }}>Design ©2021 Created by Team B</Footer>
            </Layout>
        </div>
    );
}

export default CustomData;