import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: 'black',
        letterSpacing: 4,
        fontWeight: 'black',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const Title = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>EMPLOYMENT CONTRACT <br/>AGREEMENT</Text>
    </View>
);

export default Title;