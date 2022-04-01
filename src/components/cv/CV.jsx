import React from 'react';
import { cv1,cv2 } from './imports';
import { Document, Page, View, Image } from '@react-pdf/renderer';

const CV = () => {

    return (
        <Document>
            <Page size="A5" style={{paddingBottom: -20}}>
                <View>
                    <Image src={cv1} alt="Currículum Vitae de Damian Arp" />
                </View>
            </Page>
            <Page size="A5" style={{paddingBottom: -20}}>
                <View>
                    <Image src={cv2} alt="Currículum Vitae de Damian Arp" />
                </View>
            </Page>
        </Document>
    )
}

export default CV;