// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'
import CustomNavbar from './components/navbar/index'
import CustomFooter from './components/Footer'

const VerticalLayout = props => {
    return (
        <Layout 
        navbar={<CustomNavbar {...props} />} 
        footer={<CustomFooter {...props} />} 
        {...props}>
            {props.children}
        </Layout>
    )
}

export default VerticalLayout
