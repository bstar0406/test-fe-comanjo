import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: 'black',
        letterSpacing: 0,
        fontWeight: 900,
        fontSize: 20,
        textAlign: 'left',
        textDecoration: 'underline',
        textTransform: 'uppercase',
    },
    content: {
        color: 'black',
        marginLeft: '20px',
        letterSpacing: 0,
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'left',
    },
    employment: {
        color: 'black',
        marginLeft: '20px',
        letterSpacing: 0,
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'left',
        width: '50%',
        display: 'flex',
        flexDirection: 'row'
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green',
    },
    table: {
        fontSize: 10,
        width: 550,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "stretch",
        flexWrap: "nowrap",
        alignItems: "stretch"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "stretch",
        flexWrap: "nowrap",
        alignItems: "stretch",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 35
    },
    cell: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
    },
    header: {
        // backgroundColor: "#eee"
    },
    headerText: {
        fontSize: 11,
        fontWeight: 1200,
        color: "#1a245c",
        margin: 8
    },
    tableText: {
        margin: 10,
        fontSize: 10,
        color: '#00FFFF'
    }
});
const current = new Date();
const currentTime =current.getMonth() + "/" + current.getDay() + "/" + current.getFullYear()
const Parties = (props: any) => (

    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>PARTIES</Text>
        <Text style={styles.content}>
            This Employment Contract Agreement (hereinafter referred to as the “Agreement”) is
            entered into on {props.contract?.startWorkDate} (the “Effective Date”), by and between
            {" " + props.company?.name || ""}, with an address of {props.company?.address || ""}(hereinafter referred to
            as the “Employer”), and {props.user?.seeker.firstname + " " + props.user?.seeker.lastname || ""}, with an address of {props.user?.seeker.address}
            (hereinafter referred to as the “Employee”) (collectively referred to as the “Parties”).
        </Text>
        <Text style={styles.reportTitle}>DUTIES AND RESPONSIBILITIES</Text>
        <Text style={styles.content}>
            During the employment period, the Employee shall have the responsibility to perform the
            following duties:
        </Text>
        <Text style={styles.content}>
            {" " + props.contract?.duty || ""}
        </Text>
        <Text style={styles.content}>
            The Parties agree that any responsibilities provided in this Agreement may not be assigned to
            any other party unless both parties agree to the assignment in writing.
        </Text>
        <Text style={styles.reportTitle}>PAY AND COMPENSATION</Text>
        <Text style={styles.content}>
            The Parties hereby agree that the Employer will pay the Employee an annual/montly/weekly
            gross/netto salary of {" " + props.contract?.amount || ""}{props.contract?.currency || ""} and subject to regular deductions and
            withholdings as required by law
        </Text>
        <Text style={styles.content}>
            Whereas the Parties also agree that annual salary may be increased annually by an amount as
            may be approved by the Employer and, upon such increase, the increased amount shall
            thereafter be deemed to be the annual salary for purposes of this Agreement
        </Text>
        <Text style={styles.reportTitle}>BENEFITS</Text>
        <Text style={styles.content}>
            The Parties hereby agree that the Employee shall receive the benefits (Insurance, Holiday and
            Vacation) provided by the Employer as indicated below
        </Text>
        <Text style={styles.content}>
            {" " + props.contract?.benefit || ""}
        </Text>
        <Text style={styles.reportTitle}>WORKING HOURS AND LOCATION</Text>
        <Text style={styles.content}>
            - The Employee agrees that he/she will be working from {" " + props.contract?.dayOfWeek || ""}, with a {" " + props.contract?.breakMinutes || ""}(minutes) lunch break.<br />
            - In particular, the Employee agrees that he/she will work on average {" " + props.contract?.hoursInWeek || ""}
            hours per week.
            - The Employee’s place of work shall be located in {" " + props.contract?.workingCity || ""} or such other location
            as the Parties may agree upon from time to time.
        </Text>
        <Text style={styles.reportTitle}>TERMs OF AGREEMENT</Text>
        <Text style={styles.content}>
            - This agreement shall be considered accepted in all its terms at the time of its download.
            Work begins on date {" " + props.contract?.startDate || ""} and the employee is obliged to report to the workplace.
            - This Agreement will end on {" " + props.contract?.endDate || ""}.
            - Upon the end of the term of the Agreement, this Agreement will not be automatically
            renewed for a new term.
        </Text>
        <Text style={styles.reportTitle}>TERMINATION</Text>
        <Text style={styles.content}>
            - This Agreement may be terminated in case the following occurs:
            1. Immediately in case one of the Parties breaches this Agreement.
            2. At any given time by providing a written notice to the other party 10
            days prior to terminating the Agreement.
            - Upon terminating this Agreement, the Employee will be required to return all Employer’s
            materials, products or any other content at his/her earliest convenience
        </Text>
        <Text style={styles.reportTitle}>CONFIDENTIALITY</Text>
        <Text style={styles.content}>
            - All terms and conditions of this Agreement and any materials provided during the term of the
            Agreement must be kept confidential by the Employee, unless the disclosure is required
            pursuant to process of law.
            - Disclosing or using this information for any purpose beyond the scope of this Agreement, or
            beyond the exceptions set forth above, is expressly forbidden without the prior consent of the
            Employer.
        </Text>
        <Text style={styles.reportTitle}>INTELLECTUAL PROPERTY</Text>
        <Text style={styles.content}>
            - Hereby, the Employee agrees that any intellectual property provided to him/her by the
            Employer will remain the sole property of the Employer including, but not limited to,
            copyrights, patents, trade secret rights, and other intellectual property rights associated with
            any ideas, concepts, techniques, inventions, processes, works of authorship, Confidential
            Information or trade secrets
        </Text>
        <Text style={styles.reportTitle}>EXCLUSIVITY</Text>
        <Text style={styles.content}>
            - The Parties agree that this Agreement is not an exclusive arrangement and that the Employer
            is entitled to enter into other similar agreements with other employees.
            - However, the Employee is not entitled to enter into a similar agreement as long as he/she
            remains a party to this Agreement
        </Text>
        <Text style={styles.reportTitle}>LIMITATION OF LIABILITY</Text>
        <Text style={styles.content}>
            - In no event shall the Employer nor the Employee be individually liable for any damages for
            breach of duty by third parties, unless the Employer’s or Employee’s act or failure to act
            involves intentional misconduct, fraud, or a knowing violation of the law
        </Text>
        <Text style={styles.reportTitle}>SEVERABILITY</Text>
        <Text style={styles.content}>
            - In an event where any provision of this Agreement is found to be void and unenforceable by
            a court of competent jurisdiction, then the remaining provisions will remain to be enforced in
            accordance with the Parties’ intention
        </Text>
        <Text style={styles.reportTitle}>GOVERNING LAW</Text>
        <Text style={styles.content}>
            - This Agreement shall be governed by and construed in accordance with the laws of
            {" " + props.contract?.disputeCountry || ""}.
        </Text>
        <Text style={styles.reportTitle}>ALTERNATIVE DISPUTE RESOLUTION</Text>
        <Text style={styles.content}>
            - Any dispute or difference whatsoever arising out of or in connection with this Agreement
            shall be submitted to {" " + props.contract?.dispute || ""}  in accordance
            with, and subject to the laws of {" " + props.contract?.disputeCountry || ""}.
        </Text>
        <Text style={styles.reportTitle}>ATTORNEY FEES</Text>
        <Text style={styles.content}>
            - In the event of any dispute between the parties concerning the terms and provisions of this
            Agreement, the party prevailing in such dispute shall be entitled to collect from the other
            party all costs incurred in such dispute, including reasonable attorneys’ fees
        </Text>
        <Text style={styles.reportTitle}>ENTIRE AGREEMENT</Text>
        <Text style={styles.content}>
            - This Agreement contains the entire agreement and understanding among the Parties hereto
            with respect to the subject matter hereof, and supersedes all prior agreements,
            understandings, inducements and conditions, express or implied, oral or written, of any
            nature whatsoever with respect to the subject matter hereof. The express terms hereof control
            and supersede any course of performance and/or usage of the trade inconsistent with any of
            the terms hereof
        </Text>
        <Text style={styles.reportTitle}>AMENDMENTS</Text>
        <Text style={styles.content}>
            - The Parties agree that any amendments made to this Agreement must be in writing where
            they must be signed by both Parties to this Agreement.
            - As such, any amendments made by the Parties will be applied to this Agreement
        </Text>
        <Text style={styles.reportTitle}>SIGNATURE AND DATE</Text>
        <Text style={styles.content}>
            - The Parties hereby agree to the terms and conditions set forth in this Agreement and confirms
            the acceptance of it with the digital signature, or the timestamp by a smart contract.
        </Text>
        <View style={styles.table}>
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.reportTitle}>EMPLOYEE</Text>
                </Text>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.reportTitle}>EMPLOYER</Text>
                </Text>
            </View>
        </View>
        <View style={styles.table}>
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.content}>
                        Name: {" " + props.user?.seeker.firstname + " " + props.user?.seeker.lastname || ""}
                    </Text>
                </Text>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.content}>
                        Name: {" " + props.company?.name || ""}
                    </Text>
                </Text>
            </View>
        </View>
        <View style={styles.table}>
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.content}>
                        Signature: {" " + props.user?.seeker.firstname + " " + props.user?.seeker.lastname || ""}
                    </Text>

                </Text>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.content}>
                        Signature: {" " + props.company?.name || ""}
                    </Text>
                </Text>
            </View>
        </View>
        <View style={styles.table}>
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.content}>
                        Date: {currentTime}
                    </Text>
                </Text>
                <Text style={[styles.headerText, styles.cell]}>
                    <Text style={styles.content}>
                        Date: {currentTime}
                    </Text>
                </Text>
            </View>
        </View>
    </View>
);

export default Parties;