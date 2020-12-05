import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import {
    useValue,
    onScrollEvent,
    interpolateColor,
} from "react-native-redash";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75,
backgroundColor: "green"
    },
    footer: {
        flex: 1,
    },
    footerItem: {
        flex: 1,
        borderTopLeftRadius: 75,
backgroundColor: "white"
    },
});
const Onboarding = () => {
    // lazy  ref of animated value
    // use scroll event
    //
    return (
        <View style={styles.container}>
            <View style={[styles.slider]}>
                <ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Slide label="Learning" />
                    <Slide label="React" right />
                    <Slide label="Native" />
                    <Slide label="is Fun" right />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{...StyleSheet.absoluteFillObject }}/>
                <View style={styles.footerItem}></View>
            </View>
        </View>
    );
};
export default Onboarding;
