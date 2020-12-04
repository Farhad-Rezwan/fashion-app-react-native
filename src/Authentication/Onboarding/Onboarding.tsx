import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { useValue, onScrollEvent, interpolateColor, interpolatePath, ColorSpace } from "react-native-redash";
import Animated, {interpolateColors} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider: {
        height: SLIDE_HEIGHT,
backgroundColor: "cyan",
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
    footerItem: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 75,
    },
});
const Onboarding = () => {
    // lazy  ref of animated value
    // use scroll event
    //
    return (
        <View style={styles.container}>
            <Animated.View style={styles.slider}>
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Slide label="Relaxed" />
                    <Slide label="Playful" right />
                    <Slide label="Excentric" />
                    <Slide label="Funcky" right />
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: "cyan",
                    }}
                />
                <View style={styles.footerItem}></View>
            </View>
        </View>
    );
};
export default Onboarding;
