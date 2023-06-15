import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ContactUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactUs}>
      <View style={[styles.contact, styles.faqLayout]}>
        <Image
          style={[styles.iphone14ProMax5, styles.faqPosition]}
          contentFit="cover"
          source={require("../assets/iphone-14-pro-max--5.png")}
        />
        <View style={[styles.image1514Wrapper, styles.faqPosition]}>
          <Image
            style={styles.image1514Icon}
            contentFit="cover"
            source={require("../assets/image-1512.png")}
          />
        </View>
        <Image
          style={styles.image1497Icon}
          contentFit="cover"
          source={require("../assets/image-1497.png")}
        />
        <Text style={[styles.text, styles.textClr]} />
        <View style={styles.image1473} />
        <Text style={styles.haveAnyQueryContainer}>
          <Text style={styles.haveAnyQueryContainer1}>
            <Text
              style={styles.haveAnyQuery}
            >{`Have any query related to how this digital transformation occur? Book your free call.
`}</Text>
            <Text style={styles.text1}>{`
              `}</Text>
          </Text>
        </Text>
        <Image
          style={[styles.image1500Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-1500.png")}
        />
        <Image
          style={[styles.image1501Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-15011.png")}
        />
        <Image
          style={[styles.image1502Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-15011.png")}
        />
        <Image
          style={[styles.image1503Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-1503.png")}
        />
        <Image
          style={[styles.image1504Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1504.png")}
        />
        <Image
          style={[styles.image1505Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1505.png")}
        />
        <View style={[styles.faq, styles.faqPosition]}>
          <Image
            style={styles.faqChild}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-25.png")}
            />
            <View style={[styles.groupItem, styles.groupLayout]} />
          </View>
          <View style={[styles.faqInner, styles.faqInnerLayout]}>
            <View
              style={[
                styles.whatIsWebflowAndWhyIsItParent,
                styles.faqInnerLayout,
              ]}
            >
              <Text style={[styles.whatIsWebflow, styles.webflowLayout]}>
                What is Webflow and why is it the best website builder?
              </Text>
              <Image
                style={styles.groupInner}
                contentFit="cover"
                source={require("../assets/group-35602.png")}
              />
              <Text style={[styles.vitaeCongueEu, styles.howDoYou1Position]}>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </Text>
              <View style={[styles.lineView, styles.groupChildPosition1]} />
              <Text style={styles.whatIsYour}>
                What is your favorite template from BRIX Templates?
              </Text>
              <Image
                style={[styles.groupIcon, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-35621.png")}
              />
              <View style={[styles.groupChild1, styles.groupChildPosition1]} />
              <Text style={[styles.whenWasWebflow, styles.howDoYou1Position]}>
                When was Webflow officially launched?
              </Text>
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356211.png")}
              />
              <View style={[styles.groupChild3, styles.groupChildPosition1]} />
              <Text style={[styles.howDoYou, styles.howDoYouLayout]}>
                How do you clone a template from the Showcase?
              </Text>
              <Image
                style={[styles.groupChild4, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356212.png")}
              />
              <View style={[styles.groupChild5, styles.groupChildPosition1]} />
              <Text style={[styles.howDoYou1, styles.howDoYou1Position]}>
                How do you integrate Jetboost with Webflow?
              </Text>
              <Image
                style={[styles.groupChild6, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356213.png")}
              />
              <View style={[styles.groupChild7, styles.groupChildPosition1]} />
              <Text style={[styles.whyIsBrix, styles.howDoYouLayout]}>
                Why is BRIX Templates the best Webflow agency?
              </Text>
              <Image
                style={[styles.groupChild8, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356214.png")}
              />
            </View>
          </View>
          <Text style={styles.faqs}>FAQs</Text>
        </View>
        <View style={[styles.groupParent, styles.faqPosition]}>
          <View style={[styles.groupContainer, styles.contact1Position]}>
            <View style={styles.contactParent}>
              <Text style={[styles.contact1, styles.linksTypo]}>Contact</Text>
              <View style={styles.groupView}>
                <Image
                  style={styles.groupChild9}
                  contentFit="cover"
                  source={require("../assets/group-356371.png")}
                />
                <Text style={styles.text2}> +91 9407116798</Text>
              </View>
              <Image
                style={styles.image1501Icon1}
                contentFit="cover"
                source={require("../assets/image-1501.png")}
              />
            </View>
            <View style={[styles.linksWrapper, styles.linksPosition]}>
              <Text style={[styles.links, styles.linksPosition]}>Links</Text>
            </View>
            <View style={styles.investmentPosition}>
              <Text
                style={[styles.investmentDisclosure, styles.investmentPosition]}
              >
                investment disclosure
              </Text>
            </View>
            <View style={styles.faqsParent}>
              <Text style={[styles.faqs1, styles.faqs1Typo]}>FAQs</Text>
              <Text style={[styles.termsAndConditions, styles.faqs1Typo]}>
                Terms and Conditions
              </Text>
              <Text style={[styles.privacyPolicy, styles.faqs1Typo]}>
                Privacy Policy
              </Text>
            </View>
          </View>
          <Text style={styles.insparktechnologies2023}>
            Insparktechnologies 2023 @ All Right Reserved
          </Text>
          <Text style={styles.insparktechnologiesgmailcom}>
            insparktechnologies@gmail.com
          </Text>
          <Text style={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Lacinia malesuada
            ullamcorper non eu aenean. Quam eu nunc scelerisque vitae.
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={[styles.label, styles.labelTypo]}>Services</Text>
        </Pressable>
        <Text style={[styles.bookNow, styles.labelTypo]}>Book Now</Text>
        <Text style={[styles.text3, styles.text3Typo]}> +91 9407116798</Text>
        <Text
          style={[
            styles.businessinsparktechnologiesc,
            styles.businessinsparktechnologiescTypo,
          ]}
        >
          business@insparktechnologies.com
        </Text>
        <Text
          style={[
            styles.insparktechnologiesgmailcom1,
            styles.businessinsparktechnologiescTypo,
          ]}
        >
          insparktechnologies@gmail.com
        </Text>
        <Image
          style={[styles.image1534Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1534.png")}
        />
        <View style={[styles.statusbarIphone678Se, styles.faqPosition]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Text style={[styles.text4, styles.timeTypo]}>100%</Text>
            <Image
              style={[styles.alarmIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/alarm.png")}
            />
            <Image
              style={[styles.bluetoothIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bluetooth.png")}
            />
          </View>
          <View style={styles.leftSide}>
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Text style={[styles.carrier, styles.timeTypo]}>Figma</Text>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
          </View>
        </View>
      </View>
      <Text
        style={[styles.whatsOnYour, styles.wereHereToPosition]}
      >{`What’s on your

 mind?`}</Text>
      <Text
        style={[styles.wereHereTo, styles.wereHereToPosition]}
      >{`We’re here to help! Tell us what you’re looking for
 and we’ll get you connected to the right people`}</Text>
      <Pressable
        style={[styles.button1, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("ServicesMain")}
      >
        <Text style={[styles.label1, styles.labelTypo]}>Services</Text>
      </Pressable>
      <Text style={[styles.glorifyYourBusinessContainer, styles.textClr]}>
        <Text style={styles.glorifyYourBusiness}>{`Glorify Your Business With Us
`}</Text>
        <Text style={styles.blankLine}> </Text>
      </Text>
      <Pressable
        style={styles.image1550}
        onPress={() => navigation.navigate("Sidebarbg")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-1550.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  faqLayout: {
    width: 430,
    left: 0,
  },
  faqPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textClr: {
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: 50,
    position: "absolute",
  },
  iconLayout1: {
    height: 34,
    width: 35,
    left: 35,
    position: "absolute",
  },
  iconPosition: {
    top: 1284,
    width: 50,
    height: 50,
    position: "absolute",
  },
  groupLayout: {
    height: 287,
    width: 430,
    left: 0,
    position: "absolute",
  },
  faqInnerLayout: {
    height: 447,
    width: 390,
    position: "absolute",
  },
  webflowLayout: {
    height: 20,
    fontSize: 12,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
  },
  howDoYou1Position: {
    color: Color.darkslategray_300,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  groupChildPosition1: {
    borderTopWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    height: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    width: 8,
    position: "absolute",
  },
  howDoYouLayout: {
    width: 314,
    color: Color.darkslategray_300,
    height: 20,
    fontSize: 12,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
    position: "absolute",
  },
  contact1Position: {
    left: 7,
    position: "absolute",
  },
  linksTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
  },
  linksPosition: {
    height: 13,
    width: 27,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  investmentPosition: {
    width: 116,
    height: 3,
    right: 0,
    top: 0,
    position: "absolute",
  },
  faqs1Typo: {
    height: 22,
    color: Color.gray_1200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.accessibleSystemOrangeLight,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.size_xl,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  text3Typo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  businessinsparktechnologiescTypo: {
    left: 91,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg_5,
    lineHeight: 20,
    width: 332,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.satisfy,
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  iconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  wereHereToPosition: {
    left: 28,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  iphone14ProMax5: {
    width: 430,
    left: 0,
    top: 0,
    height: 932,
  },
  image1514Icon: {
    left: 164,
    width: 65,
    height: 56,
    top: 42,
    position: "absolute",
  },
  image1514Wrapper: {
    left: -136,
    width: 619,
    height: 478,
    top: 0,
  },
  image1497Icon: {
    top: 334,
    width: 722,
    height: 648,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 301,
    left: 114,
    fontFamily: FontFamily.roboto,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
  },
  image1473: {
    top: 94,
    left: 12,
    width: 70,
    height: 46,
    position: "absolute",
  },
  haveAnyQuery: {
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  text1: {
    fontFamily: FontFamily.montserratRegular,
  },
  haveAnyQueryContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  haveAnyQueryContainer: {
    top: 928,
    left: 25,
    width: 361,
    height: 137,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  image1500Icon: {
    top: 1035,
    left: 30,
    width: 45,
  },
  image1501Icon: {
    top: 1096,
  },
  image1502Icon: {
    top: 1142,
  },
  image1503Icon: {
    top: 1286,
    left: 38,
    width: 50,
  },
  image1504Icon: {
    left: 135,
  },
  image1505Icon: {
    left: 323,
  },
  faqChild: {
    left: -56,
    width: 229,
    height: 100,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.darkslategray_400,
    top: 0,
  },
  rectangleParent: {
    top: 892,
    display: "none",
  },
  whatIsWebflow: {
    color: Color.dodgerblue,
    width: 351,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 8,
    left: 368,
    height: 0,
    width: 8,
    position: "absolute",
  },
  vitaeCongueEu: {
    top: 28,
    fontSize: 10,
    lineHeight: 17,
    width: 341,
    height: 62,
    fontFamily: FontFamily.montserratRegular,
  },
  lineView: {
    top: 111,
  },
  whatIsYour: {
    top: 139,
    width: 332,
    color: Color.darkslategray_300,
    height: 20,
    fontSize: 12,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 140,
    left: 363,
    height: 10,
  },
  groupChild1: {
    top: 327,
  },
  whenWasWebflow: {
    top: 355,
    width: 251,
    height: 20,
    fontSize: 12,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
  },
  groupChild2: {
    top: 356,
    left: 363,
    height: 10,
  },
  groupChild3: {
    top: 183,
  },
  howDoYou: {
    top: 211,
  },
  groupChild4: {
    top: 212,
    left: 363,
    height: 10,
  },
  groupChild5: {
    top: 399,
  },
  howDoYou1: {
    top: 427,
    width: 290,
    height: 20,
    fontSize: 12,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
  },
  groupChild6: {
    top: 428,
    left: 363,
    height: 10,
  },
  groupChild7: {
    top: 255,
  },
  whyIsBrix: {
    top: 283,
  },
  groupChild8: {
    top: 284,
    left: 364,
  },
  whatIsWebflowAndWhyIsItParent: {
    left: 0,
    top: 0,
  },
  faqInner: {
    top: 86,
    left: 22,
  },
  faqs: {
    marginLeft: -42,
    top: 27,
    fontSize: FontSize.size_17xl,
    lineHeight: 7,
    width: 84,
    height: 14,
    left: "50%",
    color: Color.darkslategray_300,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    position: "absolute",
  },
  faq: {
    top: 1410,
    height: 618,
    width: 430,
    left: 0,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  contact1: {
    height: 8,
    color: Color.labelColorDarkPrimary,
    left: 7,
    position: "absolute",
    width: 50,
    top: 0,
  },
  groupChild9: {
    right: 96,
    maxWidth: "100%",
    height: 17,
    top: 3,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  text2: {
    letterSpacing: 1,
    height: 3,
    width: 91,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    left: 24,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupView: {
    top: 26,
    left: 3,
    right: 0,
    height: 20,
    position: "absolute",
  },
  image1501Icon1: {
    top: 76,
    width: 22,
    height: 14,
    left: 0,
    position: "absolute",
  },
  contactParent: {
    right: 281,
    height: 90,
    left: 0,
    top: 0,
    position: "absolute",
  },
  links: {
    marginLeft: -13.5,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  linksWrapper: {
    marginLeft: -20.5,
  },
  investmentDisclosure: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  faqs1: {
    width: 29,
    top: 0,
  },
  termsAndConditions: {
    top: 17,
    width: 64,
  },
  privacyPolicy: {
    width: 39,
    top: 42,
  },
  faqsParent: {
    top: 29,
    left: 178,
    height: 64,
    width: 64,
    position: "absolute",
  },
  groupContainer: {
    top: 13,
    right: 24,
    height: 93,
  },
  insparktechnologies2023: {
    marginLeft: -94,
    top: 133,
    fontSize: FontSize.size_5xs,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
    left: "50%",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  insparktechnologiesgmailcom: {
    top: 85,
    left: 34,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 46,
    left: 289,
    fontSize: 6,
    lineHeight: 10,
    fontFamily: FontFamily.interRegular,
    width: 121,
    height: 71,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 2031,
    backgroundColor: Color.gray_600,
    height: 158,
    width: 430,
    left: 0,
  },
  label: {
    color: Color.labelColorDarkPrimary,
    display: "none",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    textAlign: "center",
  },
  button: {
    top: 1187,
    left: 149,
  },
  bookNow: {
    top: 1200,
    left: 169,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    lineHeight: 22,
    position: "absolute",
  },
  text3: {
    top: 1050,
    left: 83,
    fontSize: FontSize.size_lg_5,
    fontFamily: FontFamily.montserratSemibold,
    lineHeight: 20,
    width: 332,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  businessinsparktechnologiesc: {
    top: 1098,
  },
  insparktechnologiesgmailcom1: {
    top: 1149,
  },
  image1534Icon: {
    left: 223,
  },
  time: {
    marginLeft: -25,
    top: "15%",
    fontWeight: "600",
    fontFamily: FontFamily.satisfy,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  batteryIcon: {
    top: 2,
    height: 12,
    width: 27,
    right: 0,
    position: "absolute",
  },
  text4: {
    right: 30,
    textAlign: "right",
    top: 0,
    position: "absolute",
  },
  alarmIcon: {
    right: 77,
  },
  bluetoothIcon: {
    right: 62,
  },
  rightSide: {
    right: 6,
    height: 16,
    width: 91,
    top: 3,
    position: "absolute",
  },
  mobileSignalIcon: {
    width: 21,
    height: 14,
  },
  carrier: {
    marginLeft: 4,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.satisfy,
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
    position: "absolute",
  },
  statusbarIphone678Se: {
    top: 9,
    height: 26,
    width: 430,
    left: 0,
  },
  contact: {
    height: 2137,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 430,
    top: 0,
    position: "absolute",
  },
  whatsOnYour: {
    top: 123,
    fontSize: FontSize.size_21xl,
    width: 308,
    height: 60,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
  },
  wereHereTo: {
    top: 229,
    fontSize: FontSize.size_mini,
    letterSpacing: -0.1,
    lineHeight: 15,
    width: 386,
    height: 36,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  label1: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    textAlign: "center",
  },
  button1: {
    top: 295,
    left: 24,
    justifyContent: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.accessibleSystemOrangeLight,
    borderRadius: Border.br_3xs,
  },
  glorifyYourBusiness: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  blankLine: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.montserratRegular,
  },
  glorifyYourBusinessContainer: {
    top: 396,
    left: 23,
    textAlign: "left",
    lineHeight: 22,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image1550: {
    left: 383,
    top: 60,
    width: 32,
    height: 23,
    position: "absolute",
  },
  contactUs: {
    flex: 1,
    opacity: 0.9,
    height: 932,
    width: "100%",
  },
});

export default ContactUs;
