import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone14ProMax6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14ProMax6}>
      <Text style={[styles.talkToAn, styles.back1Typo]}>TALK TO AN EXPERT</Text>
      <Text style={styles.toHelpUs}>
        To help us speed things up, we just need a few key details.
      </Text>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.back1, styles.back1Typo]}> Back</Text>
      </Pressable>
      <View style={styles.submit}>
        <Image
          style={[styles.submitBackgroundIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/submit-background.png")}
        />
        <Text style={styles.submit1}>Submit</Text>
      </View>
      <View style={[styles.nameInputDark2, styles.nameLayout]}>
        <View style={[styles.background, styles.backgroundBorder]} />
        <View style={[styles.name, styles.namePosition]}>
          <Text style={[styles.name1, styles.name1Typo]}>First name*</Text>
        </View>
      </View>
      <View style={[styles.emailInputDark2, styles.emailPosition]}>
        <View style={[styles.background, styles.backgroundBorder]} />
        <View style={[styles.email, styles.namePosition]}>
          <Text style={[styles.email1, styles.name1Typo]}>Email*</Text>
        </View>
      </View>
      <View style={[styles.emailInputDark21, styles.emailPosition]}>
        <View style={[styles.background, styles.backgroundBorder]} />
        <View style={[styles.email, styles.namePosition]}>
          <Text style={[styles.email1, styles.name1Typo]}>Industry</Text>
        </View>
      </View>
      <View style={[styles.newsletterSignupDark, styles.newsletterFlexBox]}>
        <View style={[styles.newsletterSignupDarkChild, styles.iconLayout]} />
        <Text style={styles.iWouldLike}>
          I would like to receive details of products ,service and events.*
        </Text>
      </View>
      <View style={[styles.nameInputDark3, styles.nameLayout]}>
        <View style={[styles.background, styles.backgroundBorder]} />
        <View style={[styles.name, styles.namePosition]}>
          <Text style={[styles.name1, styles.name1Typo]}>Last name*</Text>
        </View>
      </View>
      <View style={[styles.background4, styles.backgroundBorder]} />
      <Text style={[styles.howCanWe, styles.name1Typo]}>
        How can we help you?*
      </Text>
      <View style={[styles.newsletterSignupDark1, styles.newsletterFlexBox]}>
        <View style={[styles.newsletterSignupDarkChild, styles.iconLayout]} />
        <Text style={styles.iWouldLike}>
          I consent to processing of my personal data entered above.*
        </Text>
      </View>
      <View style={styles.statusbarIphone678Se}>
        <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
        <View style={[styles.rightSide, styles.sidePosition]}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Text style={[styles.text, styles.timeTypo]}>100%</Text>
          <Image
            style={[styles.alarmIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/alarm1.png")}
          />
          <Image
            style={[styles.bluetoothIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bluetooth1.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.sidePosition]}>
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal1.png")}
          />
          <Text style={[styles.carrier, styles.timeTypo]}>Figma</Text>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
        </View>
      </View>
      <View style={[styles.homeindicator, styles.backPosition]}>
        <View style={[styles.homeIndicator, styles.backPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back1Typo: {
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.labelColorDarkPrimary,
  },
  backPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  nameLayout: {
    height: 39,
    width: 158,
    top: 258,
    position: "absolute",
  },
  backgroundBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
  },
  namePosition: {
    left: 7,
    position: "absolute",
  },
  name1Typo: {
    fontSize: 14,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  emailPosition: {
    width: 380,
    left: 25,
    position: "absolute",
  },
  newsletterFlexBox: {
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 0,
    left: 45,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: 14,
    height: 14,
  },
  timeTypo: {
    fontFamily: FontFamily.satisfy,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.labelColorDarkPrimary,
  },
  sidePosition: {
    top: 3,
    position: "absolute",
  },
  talkToAn: {
    top: 131,
    fontSize: FontSize.size_xl,
    lineHeight: 9,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    left: 41,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  toHelpUs: {
    top: 153,
    fontSize: FontSize.buttonMedium_size,
    lineHeight: 15,
    width: 272,
    height: 54,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    left: 41,
    position: "absolute",
  },
  back1: {
    marginLeft: -180,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  back: {
    top: 53,
  },
  submitBackgroundIcon: {
    left: 0,
    borderRadius: 9,
    width: 96,
    height: 33,
  },
  submit1: {
    top: 4,
    left: 16,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  submit: {
    top: 769,
    left: 54,
    width: 80,
    height: 37,
    position: "absolute",
  },
  background: {
    height: "77.27%",
    top: "22.73%",
    right: "0%",
    bottom: "0%",
    borderBottomWidth: 0.9,
    backgroundColor: Color.background,
    borderStyle: "solid",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  name1: {
    top: "-25%",
    left: "0%",
  },
  name: {
    top: 17,
    width: 43,
    height: 14,
  },
  nameInputDark2: {
    left: 25,
    height: 39,
    width: 158,
    top: 258,
  },
  email1: {
    top: "-50%",
    left: "0%",
  },
  email: {
    top: 19,
    width: 39,
    height: 11,
  },
  emailInputDark2: {
    top: 321,
    height: 38,
  },
  emailInputDark21: {
    top: 389,
    height: 33,
  },
  newsletterSignupDarkChild: {
    borderRadius: 4,
    borderWidth: 0.9,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  iWouldLike: {
    fontSize: FontSize.size_2xs_6,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 7.07,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
  },
  newsletterSignupDark: {
    top: 659,
  },
  nameInputDark3: {
    left: 222,
    height: 39,
    width: 158,
    top: 258,
  },
  background4: {
    height: "15.13%",
    width: "88.37%",
    top: "50.54%",
    right: "5.81%",
    bottom: "34.33%",
    left: "5.81%",
    borderBottomWidth: 1,
    backgroundColor: Color.background,
    borderStyle: "solid",
    position: "absolute",
  },
  howCanWe: {
    top: 482,
    left: 35,
  },
  newsletterSignupDark1: {
    top: 695,
  },
  time: {
    marginLeft: -25,
    top: "15%",
    fontWeight: "600",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  batteryIcon: {
    top: 2,
    right: 0,
    width: 27,
    height: 12,
    position: "absolute",
  },
  text: {
    right: 30,
    textAlign: "right",
    top: 0,
    position: "absolute",
  },
  alarmIcon: {
    right: 77,
    top: 0,
    position: "absolute",
  },
  bluetoothIcon: {
    right: 62,
    top: 0,
    position: "absolute",
  },
  rightSide: {
    right: 6,
    width: 91,
    height: 16,
  },
  mobileSignalIcon: {
    width: 21,
    height: 14,
  },
  carrier: {
    letterSpacing: 0,
    marginLeft: 4,
    textAlign: "left",
  },
  wifiIcon: {
    width: 15,
    marginLeft: 4,
    height: 14,
  },
  leftSide: {
    left: 4,
    flexDirection: "row",
    top: 3,
    overflow: "hidden",
  },
  statusbarIphone678Se: {
    top: 9,
    left: 3,
    width: 430,
    height: 26,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    marginLeft: -187,
    top: 878,
    width: 375,
    height: 34,
  },
  iphone14ProMax6: {
    backgroundColor: "rgba(6, 6, 6, 0.89)",
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14ProMax6;
