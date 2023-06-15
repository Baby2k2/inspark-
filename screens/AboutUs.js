import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUs}>
      <View style={styles.contactParent}>
        <View style={[styles.contact, styles.contactBg]}>
          <View style={styles.connectorLine} />
          <View style={styles.connectorLine1} />
          <View style={styles.image1514Parent}>
            <Image
              style={styles.image1514Icon}
              contentFit="cover"
              source={require("../assets/image-1512.png")}
            />
            <LinearGradient
              style={[styles.frameWrapper, styles.frameWrapperLayout]}
              locations={[0, 1]}
              colors={["rgba(201, 97, 222, 0.8)", "rgba(41, 87, 163, 0.8)"]}
            >
              <View
                style={[
                  styles.designerstandingconfidentParent,
                  styles.frameWrapperLayout,
                ]}
              >
                <Image
                  style={styles.designerstandingconfidentIcon}
                  contentFit="cover"
                  source={require("../assets/designerstandingconfident1.png")}
                />
                <Text style={[styles.myNameIsContainer, styles.ourStoryClr]}>
                  <Text style={styles.myNameIs}>
                    My name is Sourasith Phomhome. I’m a UI Designer and a
                    instrutor based in Montreal. I’m curently working with
                    Design+Code. I’m passionate about creating digital
                    experiences and teaching design. My goal is to help
                    beginners to grow their skills...
                  </Text>
                  <Text style={styles.readMoreTypo}>read more</Text>
                </Text>
                <Text style={[styles.ourStory, styles.readMoreTypo]}>{`OUR
 STORY`}</Text>
                <Image
                  style={[styles.smallCircleIcon, styles.smallCircleIconLayout]}
                  contentFit="cover"
                  source={require("../assets/small-circle.png")}
                />
              </View>
            </LinearGradient>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
          <Text style={[styles.text, styles.textClr]} />
          <View style={styles.image1473} />
          <View style={styles.image1502} />
          <View style={[styles.statusbarIphone678Se, styles.component23Layout]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
            <View style={styles.rightSide}>
              <Image
                style={styles.batteryIcon}
                contentFit="cover"
                source={require("../assets/battery.png")}
              />
              <Text style={[styles.text1, styles.timeTypo]}>100%</Text>
              <Image
                style={[styles.alarmIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/alarm.png")}
              />
              <Image
                style={[styles.bluetoothIcon, styles.iconLayout1]}
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
          <View style={[styles.getInTouchParent, styles.groupChildLayout4]}>
            <Text style={[styles.getInTouch, styles.getInTouchTypo]}>
              Get in Touch
            </Text>
            <Image
              style={[styles.groupChild, styles.groupChildLayout3]}
              contentFit="cover"
              source={require("../assets/rectangle-19.png")}
            />
            <View style={[styles.button, styles.groupChildLayout3]}>
              <Text style={[styles.label, styles.labelTypo]}>Services</Text>
            </View>
            <Pressable
              style={styles.contactUs}
              onPress={() => navigation.navigate("ContactUs")}
            >
              <Text style={[styles.contactUs1, styles.labelTypo]}>
                Contact Us
              </Text>
            </Pressable>
          </View>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <View style={styles.contactChild} />
          <Text style={[styles.whyUs, styles.whyUsTypo]}>WHY US ?</Text>
          <LinearGradient
            style={[styles.cover, styles.coverLayout]}
            locations={[0, 1]}
            colors={["#586fac", "rgba(38, 158, 239, 0)"]}
          >
            <ImageBackground
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cover1.png")}
            >
              <View style={styles.content}>
                <Text style={styles.byChoosingInspark}>
                  By choosing Inspark Technologies, you can benefit from our
                  expertise in cutting-edge technology solutions, tailored to
                  your specific needs, to drive business growth, efficiency, and
                  innovation.
                </Text>
                <View style={[styles.groupParent, styles.groupParentLayout]}>
                  <View style={styles.shapeWithTextParent}>
                    <View style={[styles.shapeWithText, styles.shapeLayout]} />
                    <View style={styles.view} />
                  </View>
                  <View style={styles.loremIpsumDolorSitAmetCon} />
                  <View
                    style={[
                      styles.theStampActWasVeryUnpopul,
                      styles.theStampActWasVeryUnpopulBg,
                    ]}
                  />
                </View>
              </View>
              <Text style={[styles.unleashYourPotential, styles.ourStoryClr]}>
                "Unleash Your Potential with Inspark: Igniting Innovation,
                Transforming Success!"
              </Text>
              <Image
                style={styles.sketchAnnotationElementBrusIcon}
                contentFit="cover"
                source={require("../assets/sketchannotationelementbrushpenabstractdotflake1.png")}
              />
              <Image
                style={styles.illustrationsIcon}
                contentFit="cover"
                source={require("../assets/illustrations1.png")}
              />
            </ImageBackground>
          </LinearGradient>
          <View style={styles.groupContainer}>
            <View style={styles.shapeWithTextParent}>
              <View style={[styles.shapeWithText1, styles.shapeLayout]} />
              <View style={styles.view} />
            </View>
            <View style={styles.loremIpsumDolorSitAmetCon} />
            <View
              style={[
                styles.loremIpsumDolorNisiNetusS,
                styles.theStampActWasVeryUnpopulBg,
              ]}
            />
            <View style={[styles.frameView, styles.groupParentLayout]}>
              <View style={styles.shapeWithTextParent}>
                <View style={[styles.shapeWithText2, styles.shapeLayout]} />
                <View style={styles.view} />
              </View>
              <View style={styles.loremIpsumDolorSitAmetCon} />
              <View
                style={[
                  styles.theStampActWasVeryUnpopul,
                  styles.theStampActWasVeryUnpopulBg,
                ]}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <View style={styles.shapeWithTextParent}>
                <View style={[styles.shapeWithText3, styles.shapeLayout]} />
                <View style={styles.view} />
              </View>
              <View style={styles.loremIpsumDolorSitAmetCon} />
              <View
                style={[
                  styles.theStampActWasVeryUnpopul,
                  styles.theStampActWasVeryUnpopulBg,
                ]}
              />
            </View>
          </View>
          <View style={[styles.contactInner, styles.contactBg]}>
            <View style={[styles.timelineParent, styles.faqLayout]}>
              <Text style={[styles.timeline, styles.eventTypo]}>Timeline</Text>
              <View style={[styles.component23, styles.component23Layout]}>
                <View style={[styles.component23Child, styles.childPosition]} />
                <View
                  style={[styles.component23Item, styles.component23Position]}
                />
                <View
                  style={[styles.component23Inner, styles.component23Position]}
                />
                <View
                  style={[styles.rectangleView, styles.component23Position]}
                />
              </View>
              <Text style={[styles.event, styles.eventLayout]}>Event</Text>
              <Text style={[styles.event1, styles.eventLayout]}>Event</Text>
              <Text style={styles.event2}>Event</Text>
              <Text style={[styles.event3, styles.eventLayout]}>Event</Text>
              <View style={[styles.squarethird, styles.componentLayout]}>
                <Image
                  style={[styles.squarethirdChild, styles.childPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-13.png")}
                />
                <Text style={[styles.text2, styles.textTypo]}>4</Text>
              </View>
              <View style={[styles.component21, styles.componentLayout]}>
                <Image
                  style={[styles.squarethirdChild, styles.childPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-131.png")}
                />
                <Text style={[styles.text3, styles.textTypo]}>3</Text>
              </View>
              <View style={[styles.component22, styles.componentLayout]}>
                <Image
                  style={[styles.squarethirdChild, styles.childPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-132.png")}
                />
                <Text style={styles.text4}>2</Text>
              </View>
              <View style={[styles.component24, styles.componentLayout]}>
                <Image
                  style={[styles.squarethirdChild, styles.childPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-133.png")}
                />
                <Text style={[styles.text5, styles.textTypo]}>1</Text>
              </View>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <View style={[styles.groupInner, styles.groupLayout]} />
              <View style={[styles.lineView, styles.groupLayout]} />
              <View style={[styles.groupChild1, styles.groupLayout]} />
              <Text style={[styles.descriptionOfThe, styles.descriptionLayout]}>
                Description of the stage with all detailes of the steps taken
              </Text>
              <Text style={[styles.descriptionOfThe1, styles.descriptionTypo]}>
                Description of the stage with all detailes of the steps taken
              </Text>
              <Text
                style={[styles.descriptionOfThe2, styles.descriptionLayout]}
              >
                Description of the stage with all detailes of the steps taken
              </Text>
              <Text style={[styles.descriptionOfThe3, styles.descriptionTypo]}>
                Description of the stage with all detailes of the steps taken
              </Text>
              <Image
                style={[styles.polygonIcon, styles.polygonIconLayout]}
                contentFit="cover"
                source={require("../assets/polygon-1.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/polygon-3.png")}
              />
              <Image
                style={[styles.groupChild3, styles.groupChildPosition2]}
                contentFit="cover"
                source={require("../assets/polygon-2.png")}
              />
              <Image
                style={[styles.groupChild4, styles.groupChildPosition2]}
                contentFit="cover"
                source={require("../assets/polygon-4.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.groupParent2}>
          <View style={[styles.groupParent3, styles.contact1Position]}>
            <View style={styles.contactGroup}>
              <Text style={[styles.contact1, styles.linksTypo]}>Contact</Text>
              <View style={styles.groupParent4}>
                <Image
                  style={[styles.groupIcon, styles.groupPosition]}
                  contentFit="cover"
                  source={require("../assets/group-35637.png")}
                />
                <Text style={styles.text6}> +91 9407116798</Text>
              </View>
              <Image
                style={styles.image1501Icon}
                contentFit="cover"
                source={require("../assets/image-1501.png")}
              />
            </View>
            <View style={[styles.linksWrapper, styles.eventLayout]}>
              <Text style={[styles.links, styles.linksTypo]}>Links</Text>
            </View>
            <View style={styles.investmentPosition}>
              <Text
                style={[styles.investmentDisclosure, styles.investmentPosition]}
              >
                investment disclosure
              </Text>
            </View>
            <View style={[styles.faqsParent, styles.descriptionLayout]}>
              <Text style={[styles.faqs, styles.faqsTypo]}>FAQs</Text>
              <Text style={[styles.termsAndConditions, styles.faqsTypo]}>
                Terms and Conditions
              </Text>
              <Text style={[styles.privacyPolicy, styles.faqsTypo]}>
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
          <Text style={[styles.loremIpsumDolor, styles.ourStoryClr]}>
            Lorem ipsum dolor sit amet consectetur. Lacinia malesuada
            ullamcorper non eu aenean. Quam eu nunc scelerisque vitae.
          </Text>
        </View>
      </View>
      <Text
        style={[styles.buildYourBusiness, styles.buildingOnBeliefLayout]}
      >{`Build your


business 


with us...

`}</Text>
      <Text style={[styles.buildingOnBelief, styles.buildingOnBeliefPosition]}>
        Building on belief
      </Text>
      <Image
        style={styles.aboutUsChild}
        contentFit="cover"
        source={require("../assets/group-1190.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.groupParent5}>
          <View style={styles.rectangleParent}>
            <Image
              style={[styles.rectangleIcon, styles.groupChild7Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-18.png")}
            />
            <View style={[styles.groupChild5, styles.groupChildLayout2]} />
            <View style={[styles.groupChild6, styles.groupChildLayout2]} />
            <View style={styles.loremIpsumDolorSitAmetCoParent}>
              <Text
                style={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus neque, lorem sit in mattis. Vehicula eget eget tellus `}</Text>
              <Text
                style={[styles.readMore1, styles.readTypo]}
              >{`Read More `}</Text>
              <Text style={[styles.agustus2022, styles.agustusTypo]}>
                17 Agustus 2022
              </Text>
              <Text style={[styles.name, styles.nameTypo]}>NAME</Text>
            </View>
            <View style={styles.loremIpsumDolorSitAmetCoGroup}>
              <Text
                style={[styles.loremIpsumDolor2, styles.loremTypo]}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus neque, lorem sit in mattis. Vehicula eget eget tellus `}</Text>
              <Text
                style={[styles.readMore2, styles.readTypo]}
              >{`Read More `}</Text>
              <Text style={[styles.agustus20221, styles.agustusTypo]}>
                17 Agustus 2022
              </Text>
              <Text style={[styles.name, styles.nameTypo]}>NAME</Text>
            </View>
            <Image
              style={[styles.groupChild7, styles.groupChild7Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-15.png")}
            />
          </View>
          <Text
            style={styles.loremIpsumDolor3}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus neque, lorem sit in mattis. Vehicula eget eget tellus `}</Text>
          <View
            style={[
              styles.loremIpsumDolorSitAmetCoContainer,
              styles.ourTeamPosition,
            ]}
          >
            <Text
              style={[styles.loremIpsumDolor4, styles.loremTypo]}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus neque, lorem sit in mattis. Vehicula eget eget tellus `}</Text>
            <Text
              style={[styles.readMore3, styles.readTypo]}
            >{`Read More `}</Text>
            <Text style={[styles.agustus20222, styles.agustusTypo]}>
              17 Agustus 2022
            </Text>
            <Text style={[styles.name2, styles.nameTypo]}>NAME</Text>
            <View style={[styles.groupChild8, styles.groupChildLayout3]} />
          </View>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-14.png")}
          />
          <View style={[styles.frameItem, styles.groupChildLayout2]} />
          <Image
            style={[styles.frameInner, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <View
            style={[
              styles.loremIpsumDolorSitAmetCoParent1,
              styles.buildingOnBeliefPosition,
            ]}
          >
            <Text
              style={[styles.loremIpsumDolor2, styles.loremTypo]}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus neque, lorem sit in mattis. Vehicula eget eget tellus `}</Text>
            <Text
              style={[styles.readMore2, styles.readTypo]}
            >{`Read More `}</Text>
            <Text style={[styles.agustus20223, styles.agustusTypo]}>
              17 Agustus 2022
            </Text>
            <Text style={[styles.name, styles.nameTypo]}>NAME</Text>
          </View>
          <Text style={[styles.ourTeam, styles.ourTeamPosition]}>OUR TEAM</Text>
        </View>
        <Text style={[styles.overTheYears, styles.coverLayout]}>
          over the years
        </Text>
      </View>
      <Pressable
        style={styles.image1550}
        onPress={() => navigation.navigate("Sidebarbg")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-1550.png")}
        />
      </Pressable>
      <View style={[styles.faq, styles.faqLayout]}>
        <Image
          style={styles.faqChild}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupChildLayout1]}>
          <Image
            style={[styles.groupChild9, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-25.png")}
          />
          <View style={[styles.groupChild10, styles.groupChildLayout1]} />
        </View>
        <View style={[styles.faqInner, styles.faqInnerLayout]}>
          <View
            style={[
              styles.whatIsWebflowAndWhyIsItParent,
              styles.faqInnerLayout,
            ]}
          >
            <Text style={[styles.whatIsWebflow, styles.whatTypo]}>
              What is Webflow and why is it the best website builder?
            </Text>
            <Image
              style={styles.groupChild11}
              contentFit="cover"
              source={require("../assets/group-35602.png")}
            />
            <Text style={[styles.vitaeCongueEu, styles.faqs1Clr]}>
              Vitae congue eu consequat ac felis placerat vestibulum lectus
              mauris ultrices. Cursus sit amet dictum sit amet justo donec enim
              diam porttitor lacus luctus accumsan tortor posuere.
            </Text>
            <View style={[styles.groupChild12, styles.groupChildPosition1]} />
            <Text style={[styles.whatIsYour, styles.faqs1Clr]}>
              What is your favorite template from BRIX Templates?
            </Text>
            <Image
              style={[styles.groupChild13, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-35621.png")}
            />
            <View style={[styles.groupChild14, styles.groupChildPosition1]} />
            <Text style={[styles.whenWasWebflow, styles.faqs1Clr]}>
              When was Webflow officially launched?
            </Text>
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-356211.png")}
            />
            <View style={[styles.groupChild16, styles.groupChildPosition1]} />
            <Text style={[styles.howDoYou, styles.howDoYouLayout]}>
              How do you clone a template from the Showcase?
            </Text>
            <Image
              style={[styles.groupChild17, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-356212.png")}
            />
            <View style={[styles.groupChild18, styles.groupChildPosition1]} />
            <Text style={[styles.howDoYou1, styles.faqs1Clr]}>
              How do you integrate Jetboost with Webflow?
            </Text>
            <Image
              style={[styles.groupChild19, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-356213.png")}
            />
            <View style={[styles.groupChild20, styles.groupChildPosition1]} />
            <Text style={[styles.whyIsBrix, styles.howDoYouLayout]}>
              Why is BRIX Templates the best Webflow agency?
            </Text>
            <Image
              style={[styles.groupChild21, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-356214.png")}
            />
          </View>
        </View>
        <Text style={[styles.faqs1, styles.faqs1Clr]}>FAQs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactBg: {
    backgroundColor: Color.labelColorDarkPrimary,
    overflow: "hidden",
  },
  frameWrapperLayout: {
    width: 365,
    position: "absolute",
  },
  ourStoryClr: {
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  readMoreTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  smallCircleIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
  },
  textClr: {
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  component23Layout: {
    height: 26,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.satisfy,
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  iconLayout1: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  groupChildLayout4: {
    height: 280,
    width: 505,
  },
  getInTouchTypo: {
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  groupChildLayout3: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
  },
  whyUsTypo: {
    height: 37,
    width: 391,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  coverLayout: {
    width: 391,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupParentLayout: {
    height: 800,
    width: 346,
    position: "absolute",
  },
  shapeLayout: {
    height: 174,
    width: 172,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    backgroundColor: Color.violet,
    borderRadius: Border.br_7xs,
  },
  theStampActWasVeryUnpopulBg: {
    backgroundColor: Color.blueviolet_100,
    width: 240,
  },
  faqLayout: {
    height: 618,
    position: "absolute",
  },
  eventTypo: {
    fontSize: 17,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  component23Position: {
    bottom: "0%",
    top: "0%",
    width: "25%",
    height: "100%",
    position: "absolute",
  },
  eventLayout: {
    height: 13,
    position: "absolute",
  },
  componentLayout: {
    height: 63,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  textTypo: {
    color: Color.lavenderblush_100,
    fontSize: 24,
    width: "16.17%",
    height: "40.2%",
    fontFamily: FontFamily.loraBold,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    borderTopWidth: 1.5,
    borderStyle: "solid",
    position: "absolute",
  },
  descriptionLayout: {
    height: 64,
    position: "absolute",
  },
  descriptionTypo: {
    width: 81,
    height: 64,
    color: Color.gray_400,
    fontFamily: FontFamily.loraRegular,
    fontSize: 11,
    textAlign: "center",
    position: "absolute",
  },
  polygonIconLayout: {
    height: 18,
    left: 179,
  },
  groupPosition: {
    right: 96,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChildPosition2: {
    right: 168,
    height: 18,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  contact1Position: {
    left: 7,
    position: "absolute",
  },
  linksTypo: {
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
  },
  investmentPosition: {
    width: 116,
    height: 3,
    right: 0,
    top: 0,
    position: "absolute",
  },
  faqsTypo: {
    height: 22,
    color: Color.gray_1200,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  buildingOnBeliefLayout: {
    lineHeight: 15,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  buildingOnBeliefPosition: {
    left: 50,
    position: "absolute",
  },
  groupChild7Layout: {
    height: 153,
    width: 212,
    left: 103,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 211,
    width: 418,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  readTypo: {
    fontFamily: FontFamily.montserratBold,
    left: 334,
    width: 84,
    fontSize: FontSize.size_sm,
    height: 13,
    color: Color.labelColorLightPrimary,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  agustusTypo: {
    width: 119,
    fontSize: FontSize.size_sm,
    height: 13,
    fontFamily: FontFamily.montserratRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  nameTypo: {
    width: 201,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    height: 22,
    color: Color.labelColorLightPrimary,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  loremTypo: {
    height: 39,
    width: 395,
    fontSize: FontSize.size_sm,
    left: 3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  ourTeamPosition: {
    left: 43,
    position: "absolute",
  },
  frameLayout: {
    left: 133,
    height: 153,
    width: 212,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout1: {
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
  whatTypo: {
    fontSize: 12,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
    left: 0,
  },
  faqs1Clr: {
    color: Color.darkslategray_300,
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition1: {
    borderTopWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.5)",
    height: 0,
    width: 390,
    borderStyle: "solid",
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
    fontSize: 12,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  connectorLine: {
    height: 164,
    width: 8,
    borderWidth: 8,
    borderColor: "#c4c4c4",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
  },
  connectorLine1: {
    height: 172,
    width: 8,
    borderWidth: 8,
    borderColor: "#c4c4c4",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
  },
  image1514Icon: {
    top: 5,
    left: 175,
    width: 65,
    height: 56,
    position: "absolute",
  },
  designerstandingconfidentIcon: {
    width: 540,
    height: 1080,
    left: 0,
    top: 0,
    position: "absolute",
  },
  myNameIs: {
    fontFamily: FontFamily.poppinsRegular,
  },
  myNameIsContainer: {
    top: 204,
    left: 174,
    fontSize: 14,
    lineHeight: 17,
    width: 187,
    height: 221,
    textAlign: "left",
  },
  ourStory: {
    top: 122,
    fontSize: FontSize.size_8xl_1,
    left: 186,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  smallCircleIcon: {
    height: "47.56%",
    width: "99.76%",
    top: "49.82%",
    bottom: "2.62%",
    left: "0.24%",
    position: "absolute",
  },
  designerstandingconfidentParent: {
    top: -111,
    borderBottomRightRadius: 261,
    borderBottomLeftRadius: 261,
    height: 476,
    overflow: "hidden",
    left: 0,
  },
  frameWrapper: {
    marginLeft: -125.5,
    top: 312,
    borderRadius: 219,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 0.6,
    height: 365,
    backgroundColor: "transparent",
    left: "50%",
    borderStyle: "solid",
    width: 365,
  },
  vectorIcon: {
    left: 153,
    height: 650,
    width: 430,
    top: 0,
    position: "absolute",
  },
  image1514Parent: {
    top: 34,
    left: -153,
    width: 619,
    height: 677,
    overflow: "hidden",
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
    letterSpacing: 0,
  },
  image1473: {
    top: 94,
    left: 12,
    width: 70,
    height: 46,
    position: "absolute",
  },
  image1502: {
    top: 1142,
    width: 35,
    height: 34,
    left: 35,
    position: "absolute",
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
    height: 12,
    right: 0,
    width: 27,
    position: "absolute",
  },
  text1: {
    right: 30,
    textAlign: "right",
    top: 0,
    position: "absolute",
  },
  alarmIcon: {
    right: 77,
    height: 14,
  },
  bluetoothIcon: {
    right: 62,
    height: 14,
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
    letterSpacing: 0,
    fontFamily: FontFamily.satisfy,
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
    position: "absolute",
  },
  statusbarIphone678Se: {
    top: 4,
    left: 1,
    overflow: "hidden",
    width: 430,
  },
  getInTouch: {
    top: 18,
    left: 97,
    fontSize: 48,
    width: 322,
    height: 65,
    position: "absolute",
  },
  groupChild: {
    height: 280,
    width: 505,
    left: 0,
    top: 0,
  },
  label: {
    display: "none",
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "center",
  },
  button: {
    top: 179,
    backgroundColor: Color.accessibleSystemOrangeLight,
    height: 67,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 186,
  },
  contactUs1: {
    display: "flex",
    width: 96,
    height: 31,
    fontFamily: FontFamily.abrilFatfaceRegular,
    alignItems: "center",
    textAlign: "left",
  },
  contactUs: {
    top: 198,
    left: 211,
    position: "absolute",
  },
  getInTouchParent: {
    top: 3918,
    left: -32,
    position: "absolute",
  },
  vectorIcon1: {
    top: 368,
    height: 564,
    width: 430,
    left: 0,
    position: "absolute",
  },
  contactChild: {
    top: 823,
    left: -14,
    width: 444,
    height: 847,
    position: "absolute",
  },
  whyUs: {
    top: 3476,
    left: 111,
    position: "absolute",
  },
  byChoosingInspark: {
    left: -22,
    fontSize: FontSize.size_mid,
    lineHeight: 23,
    width: 223,
    height: 169,
    opacity: 0.64,
    fontFamily: FontFamily.montserratRegular,
    top: 53,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  shapeWithText: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  view: {
    width: 191,
    height: 59,
    backgroundColor: Color.violet,
    borderRadius: Border.br_7xs,
  },
  shapeWithTextParent: {
    width: 346,
    height: 172,
  },
  loremIpsumDolorSitAmetCon: {
    backgroundColor: Color.plum_100,
    width: 240,
    height: 280,
  },
  theStampActWasVeryUnpopul: {
    height: 256,
  },
  groupParent: {
    top: -52,
    left: 790,
  },
  content: {
    top: 74,
    left: 45,
    height: 137,
    width: 251,
    position: "absolute",
  },
  unleashYourPotential: {
    top: 14,
    left: 21,
    fontSize: 20,
    lineHeight: 35,
    width: 279,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
  },
  sketchAnnotationElementBrusIcon: {
    top: 285,
    left: 92,
    width: 131,
    height: 124,
    opacity: 0.3,
    position: "absolute",
  },
  illustrationsIcon: {
    top: 151,
    left: 215,
    width: 205,
    height: 205,
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_6xl,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  cover: {
    top: 3534,
    height: 370,
    left: 19,
  },
  shapeWithText1: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  loremIpsumDolorNisiNetusS: {
    height: 239,
  },
  shapeWithText2: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  frameView: {
    top: -12,
    left: 945,
  },
  shapeWithText3: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  groupParent1: {
    top: -6,
    left: 481,
  },
  groupContainer: {
    top: 1944,
    left: 58,
    width: 1387,
    height: 849,
    position: "absolute",
  },
  timeline: {
    width: 200,
    height: 30,
    left: 19,
    color: Color.labelColorLightPrimary,
    position: "absolute",
    top: 0,
  },
  component23Child: {
    right: "75%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Color.lightsteelblue_100,
    width: "25%",
    left: "0%",
  },
  component23Item: {
    right: "50%",
    left: "25%",
    backgroundColor: Color.skyblue,
  },
  component23Inner: {
    right: "25%",
    backgroundColor: "rgba(199, 37, 37, 0.56)",
    left: "50%",
  },
  rectangleView: {
    left: "75%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Color.lightseagreen,
    right: "0%",
    top: "0%",
  },
  component23: {
    top: 606,
    right: -405,
    left: 130,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  event: {
    top: 396,
    left: 20,
    color: Color.skyblue,
    width: 54,
    fontSize: 17,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
  },
  event1: {
    top: 525,
    left: 201,
    color: Color.lightsteelblue_100,
    width: 53,
    fontSize: 17,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
  },
  event2: {
    top: 236,
    color: "#cc0a11",
    width: 51,
    fontFamily: FontFamily.loraBold,
    fontSize: 17,
    left: 211,
    height: 12,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  event3: {
    color: Color.lightseagreen,
    width: 52,
    top: 96,
    fontSize: 17,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    left: 19,
  },
  squarethirdChild: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  text2: {
    top: "42.5%",
    left: "77.91%",
  },
  squarethird: {
    top: 565,
    right: 224,
    left: 10,
  },
  text3: {
    top: "41.36%",
    left: "74.34%",
  },
  component21: {
    top: 436,
    right: 15,
    left: 219,
  },
  text4: {
    top: "42.45%",
    left: "71.85%",
    color: "#fcf1f1",
    fontSize: 24,
    width: "16.17%",
    height: "40.2%",
    fontFamily: FontFamily.loraBold,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  component22: {
    top: 274,
    right: 232,
    left: 2,
  },
  text5: {
    top: "42.49%",
    left: "71.65%",
  },
  component24: {
    top: 132,
    right: 5,
    left: 229,
  },
  groupItem: {
    top: 534,
    right: 166,
    left: 82,
    borderColor: "#c1cde3",
  },
  groupInner: {
    top: 246,
    right: 171,
    left: 73,
    borderColor: "#cc0a11",
  },
  lineView: {
    top: 107,
    right: 68,
    left: 177,
    borderColor: "#d5f8ef",
  },
  groupChild1: {
    top: 404,
    right: 76,
    left: 169,
    borderColor: "#83cae8",
  },
  descriptionOfThe: {
    top: 420,
    width: 82,
    color: Color.gray_400,
    fontFamily: FontFamily.loraRegular,
    fontSize: 11,
    height: 64,
    textAlign: "center",
    left: 1,
  },
  descriptionOfThe1: {
    top: 116,
    left: 0,
  },
  descriptionOfThe2: {
    top: 554,
    left: 191,
    width: 82,
    color: Color.gray_400,
    fontFamily: FontFamily.loraRegular,
    fontSize: 11,
    height: 64,
    textAlign: "center",
  },
  descriptionOfThe3: {
    top: 256,
    left: 204,
  },
  polygonIcon: {
    top: 527,
    right: 95,
    maxWidth: "100%",
    height: 18,
    left: 179,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild2: {
    top: 239,
    height: 18,
    left: 179,
  },
  groupChild3: {
    top: 413,
    left: 107,
  },
  groupChild4: {
    left: 108,
    top: 116,
  },
  timelineParent: {
    top: 10,
    right: 10,
    left: 9,
  },
  contactInner: {
    top: 2783,
    left: 56,
    width: 312,
    height: 626,
    position: "absolute",
  },
  contact: {
    height: 4321,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  contact1: {
    width: 50,
    height: 8,
    left: 7,
    position: "absolute",
    top: 0,
  },
  groupIcon: {
    height: 17,
    top: 3,
    left: 0,
  },
  text6: {
    left: 24,
    letterSpacing: 1,
    height: 3,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratRegular,
    width: 91,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    top: 0,
    position: "absolute",
  },
  groupParent4: {
    top: 26,
    height: 20,
    left: 3,
    right: 0,
    position: "absolute",
  },
  image1501Icon: {
    width: 22,
    top: 76,
    height: 14,
    left: 0,
    position: "absolute",
  },
  contactGroup: {
    right: 281,
    height: 90,
    left: 0,
    top: 0,
    position: "absolute",
  },
  links: {
    marginLeft: -13.5,
    height: 13,
    position: "absolute",
    width: 27,
    left: "50%",
    top: 0,
  },
  linksWrapper: {
    marginLeft: -20.5,
    width: 27,
    height: 13,
    left: "50%",
    top: 0,
  },
  investmentDisclosure: {
    textTransform: "capitalize",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
  },
  faqs: {
    width: 29,
    top: 0,
  },
  termsAndConditions: {
    top: 17,
    width: 64,
  },
  privacyPolicy: {
    top: 42,
    width: 39,
  },
  faqsParent: {
    left: 178,
    width: 64,
    top: 29,
  },
  groupParent3: {
    top: 13,
    right: 24,
    height: 93,
  },
  insparktechnologies2023: {
    marginLeft: -94,
    top: 133,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    left: "50%",
    position: "absolute",
  },
  insparktechnologiesgmailcom: {
    left: 34,
    top: 85,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
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
    textAlign: "left",
  },
  groupParent2: {
    top: 4812,
    backgroundColor: Color.gray_600,
    height: 158,
    left: 1,
    overflow: "hidden",
    width: 430,
    position: "absolute",
  },
  contactParent: {
    height: 4970,
    overflow: "hidden",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buildYourBusiness: {
    top: 126,
    left: 42,
    width: 220,
    height: 126,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  buildingOnBelief: {
    top: 268,
    fontSize: FontSize.size_mini,
    letterSpacing: -0.1,
    fontFamily: FontFamily.montserratSemibold,
    lineHeight: 15,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontWeight: "600",
  },
  aboutUsChild: {
    top: 555,
    width: 785,
    height: 330,
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 372,
  },
  groupChild5: {
    top: 350,
    left: 0,
  },
  groupChild6: {
    left: 0,
    top: 0,
  },
  loremIpsumDolor1: {
    height: 38,
    width: 395,
    fontSize: FontSize.size_sm,
    top: 29,
    left: 3,
    fontFamily: FontFamily.montserratRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  readMore1: {
    width: 84,
    top: 76,
  },
  agustus2022: {
    top: 96,
    left: 0,
  },
  name: {
    top: 0,
  },
  loremIpsumDolorSitAmetCoParent: {
    height: 109,
    top: 229,
    width: 418,
    left: 0,
    position: "absolute",
  },
  loremIpsumDolor2: {
    top: 30,
  },
  readMore2: {
    top: 77,
    width: 84,
  },
  agustus20221: {
    top: 90,
    left: 0,
  },
  loremIpsumDolorSitAmetCoGroup: {
    top: 572,
    height: 103,
    width: 418,
    left: 0,
    position: "absolute",
  },
  groupChild7: {
    top: 29,
  },
  rectangleParent: {
    left: 581,
    width: 419,
    height: 675,
    top: 113,
    position: "absolute",
  },
  loremIpsumDolor3: {
    width: 377,
    height: 29,
    fontSize: FontSize.size_sm,
    left: 50,
    fontFamily: FontFamily.montserratRegular,
    top: 53,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  loremIpsumDolor4: {
    top: 258,
  },
  readMore3: {
    top: 306,
    width: 84,
  },
  agustus20222: {
    top: 318,
    left: 1,
  },
  name2: {
    top: 229,
  },
  groupChild8: {
    height: 212,
    width: 418,
    left: 0,
    top: 0,
  },
  loremIpsumDolorSitAmetCoContainer: {
    height: 331,
    width: 418,
    top: 113,
  },
  frameChild: {
    top: 142,
  },
  frameItem: {
    top: 475,
    left: 35,
  },
  frameInner: {
    top: 503,
  },
  agustus20223: {
    top: 85,
    left: 3,
    width: 119,
  },
  loremIpsumDolorSitAmetCoParent1: {
    top: 700,
    height: 98,
    width: 418,
  },
  ourTeam: {
    height: 37,
    width: 391,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    top: 0,
  },
  groupParent5: {
    width: 1088,
    height: 859,
    left: 0,
    top: 0,
    position: "absolute",
  },
  overTheYears: {
    top: 887,
    left: 62,
    height: 58,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  frameParent: {
    top: 979,
    width: 441,
    height: 927,
    left: 0,
    position: "absolute",
  },
  image1550: {
    left: 383,
    top: 60,
    width: 32,
    height: 23,
    position: "absolute",
  },
  faqChild: {
    left: -56,
    width: 229,
    height: 100,
    top: 0,
    position: "absolute",
  },
  groupChild9: {
    top: 0,
  },
  groupChild10: {
    backgroundColor: Color.darkslategray_400,
    top: 0,
  },
  rectangleGroup: {
    top: 892,
    display: "none",
  },
  whatIsWebflow: {
    color: Color.dodgerblue,
    width: 351,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupChild11: {
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
    left: 0,
  },
  groupChild12: {
    top: 111,
  },
  whatIsYour: {
    top: 139,
    width: 332,
    fontSize: 12,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
    left: 0,
  },
  groupChild13: {
    top: 140,
    left: 363,
    height: 10,
  },
  groupChild14: {
    top: 327,
  },
  whenWasWebflow: {
    top: 355,
    fontSize: 12,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
    left: 0,
    width: 251,
  },
  groupChild15: {
    top: 356,
    left: 363,
    height: 10,
  },
  groupChild16: {
    top: 183,
  },
  howDoYou: {
    top: 211,
  },
  groupChild17: {
    top: 212,
    left: 363,
    height: 10,
  },
  groupChild18: {
    top: 399,
  },
  howDoYou1: {
    top: 427,
    width: 290,
    fontSize: 12,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
    left: 0,
  },
  groupChild19: {
    top: 428,
    left: 363,
    height: 10,
  },
  groupChild20: {
    top: 255,
  },
  whyIsBrix: {
    top: 283,
  },
  groupChild21: {
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
  faqs1: {
    marginLeft: -42,
    top: 27,
    fontSize: FontSize.size_17xl,
    lineHeight: 7,
    width: 84,
    fontFamily: FontFamily.abrilFatfaceRegular,
    height: 14,
    left: "50%",
  },
  faq: {
    top: 4194,
    backgroundColor: Color.labelColorDarkPrimary,
    overflow: "hidden",
    width: 430,
    left: 0,
  },
  aboutUs: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default AboutUs;
