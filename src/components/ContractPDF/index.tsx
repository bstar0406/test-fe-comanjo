import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import Title from './Title'
import Parties from "./Parties";
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
});

const ContractPDF = (props:any) => {
    console.log('contract')
    console.log(props.contract)
    console.log('user')
    console.log(props.user)
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <Title />
                <Parties user={props.user} contract={props.contract} company={props.contract.companyId} />
            </Page>
        </Document>
    );
}

export default ContractPDF;