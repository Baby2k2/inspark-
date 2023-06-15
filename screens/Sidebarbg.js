import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const Sidebarbg = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sidebarbg}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <LinearGradient
        style={[styles.sidebarOpen, styles.vectorIconPosition]}
        locations={[0, 1]}
        colors={["#ff7373", "rgba(255, 255, 255, 0)"]}
      >
        <View style={styles.divider} />
        <View style={[styles.navigation, styles.navigationSpaceBlock]}>
          <Pressable
            style={[styles.link, styles.linkFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.label, styles.labelFlexBox]}>HOME</Text>
            <View style={[styles.analytics1, styles.analytics1Layout]} />
          </Pressable>
          <Pressable
            style={[styles.link1, styles.linkSpaceBlock1]}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={[styles.label, styles.labelFlexBox]}>ABOUT US</Text>
          </Pressable>
          <Pressable
            style={[styles.dropdown, styles.linkSpaceBlock1]}
            onPress={() => navigation.navigate("Products")}
          >
            <View style={[styles.link2, styles.linkFlexBox]}>
              <Text style={[styles.label, styles.labelFlexBox]}>PRODUCTS</Text>
            </View>
            <View style={styles.linksContainer}>
              <Pressable
                style={styles.linkSpaceBlock}
                onPress={() => navigation.navigate("Products")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  STARTUPS
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Products")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  HEALTHCARE
                </Text>
              </Pressable>
              <View style={[styles.link4, styles.linkSpaceBlock]}>
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  PUBLICATIONS
                </Text>
              </View>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Products")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  EDUCABS
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Products")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  YOUNGERS BLOG
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Products")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  BLISSFUL SHOPPING
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Products")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  PLANT SET GROW
                </Text>
              </Pressable>
            </View>
          </Pressable>
          <View style={[styles.dropdown, styles.linkSpaceBlock1]}>
            <Pressable
              style={[styles.link2, styles.linkFlexBox]}
              onPress={() => navigation.navigate("ServicesMain")}
            >
              <Text style={[styles.label, styles.labelFlexBox]}>SERVICES</Text>
            </Pressable>
            <View style={styles.linksContainer}>
              <Pressable
                style={styles.linkSpaceBlock}
                onPress={() => navigation.navigate("Services1")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  GRAPHIC DESIGNING
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Services2")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  DIGITAL MARKETING
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Services3")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  DEVELOPMENT
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Services4")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  CLOUD COMMUNICATION
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Services5")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  CONTENT
                </Text>
              </Pressable>
              <Pressable
                style={[styles.link4, styles.linkSpaceBlock]}
                onPress={() => navigation.navigate("Services6")}
              >
                <Text style={[styles.label3, styles.labelFlexBox]}>
                  PUBLICATIONS
                </Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            style={[styles.link1, styles.linkSpaceBlock1]}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Image
              style={styles.analytics1Layout}
              contentFit="cover"
              source={require("../assets/icon--settings.png")}
            />
            <Text style={[styles.label17, styles.labelFlexBox]}>
              CONTACT US
            </Text>
          </Pressable>
          <View style={[styles.link18, styles.linkSpaceBlock1]} />
        </View>
        <Pressable
          style={styles.navigationSpaceBlock}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <View style={[styles.link, styles.linkFlexBox]}>
            <Image
              style={styles.analytics1Layout}
              contentFit="cover"
              source={require("../assets/icon--helpcircle.png")}
            />
            <Text style={[styles.label17, styles.labelFlexBox]}>Help</Text>
          </View>
        </Pressable>
      </LinearGradient>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={[styles.homeIndicator, styles.homeindicatorPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  navigationSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  linkFlexBox: {
    alignItems: "center",
    borderRadius: Border.br_5xs,
  },
  labelFlexBox: {
    textAlign: "left",
    fontWeight: "500",
    flex: 1,
  },
  analytics1Layout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  linkSpaceBlock1: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  linkSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    width: 172,
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  homeindicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: 430,
    height: 629,
  },
  divider: {
    borderRadius: Border.br_11xs,
    backgroundColor: "#f6f6f6",
    height: 2,
    alignSelf: "stretch",
  },
  label: {
    color: Color.black,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  analytics1: {
    marginLeft: 12,
  },
  link: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  link1: {
    alignItems: "center",
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
  },
  link2: {
    backgroundColor: Color.aliceblue,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  label3: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    lineHeight: 16,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  link4: {
    marginTop: 4,
  },
  linksContainer: {
    marginTop: 12,
    width: 172,
  },
  dropdown: {
    alignItems: "flex-end",
  },
  label17: {
    fontFamily: FontFamily.interMedium,
    marginLeft: 12,
    color: Color.black,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
  },
  link18: {
    alignItems: "center",
    borderRadius: Border.br_5xs,
    marginTop: 8,
  },
  navigation: {
    flex: 1,
    marginTop: 24,
  },
  sidebarOpen: {
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRightWidth: 1,
    width: 256,
    height: 850,
    padding: 24,
    backgroundColor: "transparent",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    marginLeft: -187,
    top: 881,
    width: 375,
    height: 34,
  },
  sidebarbg: {
    backgroundColor: Color.labelColorDarkPrimary,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default Sidebarbg;
