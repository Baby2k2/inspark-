import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Services5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.services5}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.services, styles.servicesPosition]}>
        <Image
          style={[styles.image1565Icon, styles.iconLayout6]}
          contentFit="cover"
          source={require("../assets/image-1565.png")}
        />
        <Image
          style={[styles.image1556Icon, styles.iconLayout4]}
          contentFit="cover"
          source={require("../assets/image-15561.png")}
        />
        <View style={[styles.statusbarIphone678Se, styles.servicesPosition]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Text style={[styles.text, styles.timeTypo]}>100%</Text>
            <Image
              style={[styles.alarmIcon, styles.iconLayout3]}
              contentFit="cover"
              source={require("../assets/alarm.png")}
            />
            <Image
              style={[styles.bluetoothIcon, styles.iconLayout3]}
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
        <Text style={styles.text1} />
        <View style={styles.image1473} />
        <View style={[styles.insparkLogo1, styles.insparkLogo1Layout]} />
        <View style={styles.faq}>
          <Image
            style={[styles.faqChild, styles.icon3Position]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <View style={[styles.rectangleParent, styles.homeIndicatorPosition]}>
            <Image
              style={[styles.groupChild, styles.groupLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-25.png")}
            />
            <View style={[styles.groupItem, styles.groupLayout1]} />
          </View>
          <View style={[styles.faqInner, styles.faqInnerLayout]}>
            <View
              style={[
                styles.whatIsWebflowAndWhyIsItParent,
                styles.faqInnerLayout,
              ]}
            >
              <Text style={[styles.whatIsWebflow, styles.whatLayout]}>
                What is Webflow and why is it the best website builder?
              </Text>
              <Image
                style={[styles.groupInner, styles.iconLayout4]}
                contentFit="cover"
                source={require("../assets/group-35602.png")}
              />
              <Text style={styles.vitaeCongueEu}>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </Text>
              <View style={[styles.lineView, styles.groupChildPosition]} />
              <Text style={[styles.whatIsYour, styles.whatLayout]}>
                What is your favorite template from BRIX Templates?
              </Text>
              <Image
                style={[styles.groupIcon, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-35621.png")}
              />
              <View style={[styles.groupChild1, styles.groupChildPosition]} />
              <Text style={[styles.whenWasWebflow, styles.whatLayout]}>
                When was Webflow officially launched?
              </Text>
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356211.png")}
              />
              <View style={[styles.groupChild3, styles.groupChildPosition]} />
              <Text style={[styles.howDoYou, styles.howDoYouLayout]}>
                How do you clone a template from the Showcase?
              </Text>
              <Image
                style={[styles.groupChild4, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356212.png")}
              />
              <View style={[styles.groupChild5, styles.groupChildPosition]} />
              <Text style={[styles.howDoYou1, styles.whatLayout]}>
                How do you integrate Jetboost with Webflow?
              </Text>
              <Image
                style={[styles.groupChild6, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-356213.png")}
              />
              <View style={[styles.groupChild7, styles.groupChildPosition]} />
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
          <Text style={[styles.faqs, styles.orLayout]}>FAQs</Text>
        </View>
        <View style={[styles.groupParent, styles.servicesPosition]}>
          <View style={[styles.groupContainer, styles.contactPosition]}>
            <View style={styles.contactParent}>
              <Text style={[styles.contact, styles.linksTypo]}>Contact</Text>
              <View style={[styles.groupView, styles.whatLayout]}>
                <Image
                  style={styles.groupChild9}
                  contentFit="cover"
                  source={require("../assets/group-356371.png")}
                />
                <Text style={styles.text2}> +91 9407116798</Text>
              </View>
              <Image
                style={styles.image1501Icon}
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
              <Text
                style={[styles.termsAndConditions, styles.uiDesignPosition]}
              >
                Terms and Conditions
              </Text>
              <Text style={styles.privacyPolicy}>Privacy Policy</Text>
            </View>
          </View>
          <Text style={styles.insparktechnologies2023}>
            Insparktechnologies 2023 @ All Right Reserved
          </Text>
          <Text
            style={[styles.insparktechnologiesgmailcom, styles.contentPosition]}
          >
            insparktechnologies@gmail.com
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
            Lorem ipsum dolor sit amet consectetur. Lacinia malesuada
            ullamcorper non eu aenean. Quam eu nunc scelerisque vitae.
          </Text>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
        </View>
        <Image
          style={[styles.vectorIcon1, styles.servicesPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <View style={styles.servicesChild} />
        <View style={[styles.content, styles.contentPosition]} />
        <Pressable
          style={[styles.servicesItem, styles.frameLayout1]}
          onPress={() => navigation.navigate("Products")}
        />
        <LinearGradient
          style={[styles.wrapper, styles.frameLayout1]}
          locations={[0, 0.32, 0.71, 1]}
          colors={[
            "rgba(0, 141, 202, 0)",
            "rgba(24, 148, 202, 0)",
            "rgba(27, 106, 140, 0)",
            "rgba(136, 95, 78, 0)",
          ]}
        >
          <Pressable
            style={[styles.pressable, styles.iconLayout2]}
            onPress={() => navigation.navigate("Products")}
          />
        </LinearGradient>
        <Pressable
          style={[styles.container, styles.containerPosition]}
          onPress={() => navigation.navigate("Products")}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-4038.png")}
          />
        </Pressable>
        <LinearGradient
          style={[styles.servicesInner, styles.containerPosition]}
          locations={[0, 0.32, 0.71, 1]}
          colors={[
            "rgba(0, 141, 202, 0)",
            "rgba(24, 148, 202, 0)",
            "rgba(27, 106, 140, 0)",
            "rgba(136, 95, 78, 0)",
          ]}
        />
        <LinearGradient
          style={[styles.frame, styles.frameLayout1]}
          locations={[0, 0.32, 0.71, 1]}
          colors={[
            "rgba(0, 141, 202, 0)",
            "rgba(24, 148, 202, 0)",
            "rgba(27, 106, 140, 0)",
            "rgba(136, 95, 78, 0)",
          ]}
        >
          <Pressable
            style={[styles.pressable, styles.iconLayout2]}
            onPress={() => navigation.navigate("Products")}
          />
        </LinearGradient>
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Pressable
          style={styles.image1550}
          onPress={() => navigation.navigate("Sidebarbg")}
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/image-1550.png")}
          />
        </Pressable>
        <View style={[styles.servicesInner1, styles.ellipseParentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
            <Image
              style={[styles.ellipseParent, styles.ellipseParentLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-45.png")}
            />
            <Text style={styles.hireNow}>{`HIRE
NOW

`}</Text>
          </View>
        </View>
        <LinearGradient
          style={[styles.frameParent, styles.frameLayout]}
          locations={[0, 1]}
          colors={["rgba(201, 97, 222, 0.8)", "rgba(41, 87, 163, 0.8)"]}
        >
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-3.png")}
          />
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupFrame, styles.groupLayout]}>
              <View style={[styles.groupFrame, styles.groupLayout]}>
                <View style={styles.aboutUsParent}>
                  <Text style={[styles.aboutUs, styles.aboutUsTypo]}>
                    About Us
                  </Text>
                  <Text
                    style={[styles.etiamQuisTristique, styles.aboutUsTypo]}
                  >{`Etiam quis
tristique leo.`}</Text>
                  <Text style={[styles.loremIpsumIs, styles.loremTypo]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </Text>
                </View>
                <View style={styles.groupParent2}>
                  <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
                    <Image
                      style={[styles.ellipseGroup, styles.ellipseLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-20.png")}
                    />
                    <Text style={[styles.text3, styles.textTypo]}>21</Text>
                  </View>
                  <View style={[styles.ellipseContainer, styles.ellipseLayout]}>
                    <Image
                      style={[styles.ellipseGroup, styles.ellipseLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text4, styles.textTypo]}>19</Text>
                  </View>
                  <View style={[styles.ellipseParent1, styles.ellipseLayout]}>
                    <Image
                      style={[styles.ellipseGroup, styles.ellipseLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text5, styles.textTypo]}>6</Text>
                  </View>
                  <Text
                    style={[styles.yearsOfExperience, styles.yearsTypo]}
                  >{`Years
of experience`}</Text>
                  <Text
                    style={[styles.yearsOfExperience1, styles.yearsTypo]}
                  >{`Years
of experience`}</Text>
                  <Text style={styles.experirncedEmployees}>{`Experirnced
employees`}</Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
        <Text style={[styles.ourProcess, styles.ourProcessLayout]}>
          OUR PROCESS
        </Text>
        <View style={styles.uiDesignParent}>
          <View style={[styles.uiDesign, styles.uiDesignLayout]}>
            <View style={[styles.rectangleGroup, styles.uiDesignLayout]}>
              <View style={[styles.frameItem, styles.framePosition]} />
              <View style={styles.parent}>
                <Image
                  style={[styles.icon2, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/1.png")}
                />
                <Image
                  style={[styles.icon3, styles.icon3Position]}
                  contentFit="cover"
                  source={require("../assets/2.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/3.png")}
                />
              </View>
            </View>
            <View style={styles.uiDesignsWrapper}>
              <Text style={[styles.uiDesigns, styles.mockupsTypo]}>
                UI Designs
              </Text>
            </View>
          </View>
          <View style={[styles.design, styles.designLayout]}>
            <View style={[styles.rectangleContainer, styles.designLayout]}>
              <View style={[styles.frameInner, styles.designLayout]} />
              <Image
                style={[styles.d2Icon, styles.iconLayout6]}
                contentFit="cover"
                source={require("../assets/3d-2.png")}
              />
            </View>
            <View style={[styles.frameView, styles.viewLayout]}>
              <View style={[styles.rectangleView, styles.viewLayout]} />
              <Text style={[styles.mockups, styles.mockupsTypo]}>Mockups</Text>
            </View>
          </View>
          <View style={[styles.mockups1, styles.mockups1Position]}>
            <View style={[styles.rectangleContainer, styles.designLayout]}>
              <View style={[styles.frameInner, styles.designLayout]} />
              <Image
                style={styles.comp382}
                contentFit="cover"
                source={require("../assets/comp-38-2.png")}
              />
            </View>
            <View style={[styles.frameView, styles.viewLayout]}>
              <View style={[styles.rectangleView, styles.viewLayout]} />
              <Text style={[styles.mockups, styles.mockupsTypo]}>Mockups</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.recentWorks, styles.rectangleParentLayout]}>
          Recent Works
        </Text>
        <LinearGradient
          style={styles.cover}
          locations={[0, 1]}
          colors={["#586fac", "rgba(38, 158, 239, 0)"]}
        >
          <ImageBackground
            style={[styles.icon5, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/cover.png")}
          >
            <View style={styles.content1}>
              <Text style={styles.byChoosingInspark}>
                By choosing Inspark Technologies, you can benefit from our
                expertise in cutting-edge technology solutions, tailored to your
                specific needs, to drive business growth, efficiency, and
                innovation.
              </Text>
            </View>
            <Text style={styles.unleashYourPotential}>
              "Unleash Your Potential with Inspark: Igniting Innovation,
              Transforming Success!"
            </Text>
            <Image
              style={[
                styles.sketchAnnotationElementBrusIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/sketchannotationelementbrushpenabstractdotflake1.png")}
            />
            <Image
              style={[styles.illustrationsIcon, styles.contactGroupPosition]}
              contentFit="cover"
              source={require("../assets/illustrations1.png")}
            />
          </ImageBackground>
        </LinearGradient>
        <Text
          style={[styles.feelFreeTo, styles.contactUsFlexBox]}
        >{`Feel Free To Contact Us!
Transferring Solutions Next Moment`}</Text>
        <View style={styles.contactInfo}>
          <View style={styles.frameGroup}>
            <View style={styles.visitUsParent}>
              <Text style={styles.visitUs}>Visit us</Text>
              <Text
                style={[styles.westheimerRdSanta, styles.text6Typo]}
              >{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</Text>
            </View>
            <View style={[styles.contactGroup, styles.contactGroupPosition]}>
              <Text style={styles.visitUs}>Contact</Text>
              <View style={styles.contactcompanycomParent}>
                <Text style={[styles.contactcompanycom, styles.text6Typo]}>
                  contact@company.com
                </Text>
                <Text style={[styles.text6, styles.text6Typo]}>
                  (406) 555-0120
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonLayout2]}
              onPress={() => navigation.navigate("IPhone14ProMax6")}
            >
              <Text style={styles.label}>Click here</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.fieldEmail, styles.buttonLayout2]}>
          <Text style={[styles.talkToExpert, styles.loremTypo]}>
            Talk to expert
          </Text>
        </View>
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
        <View style={[styles.buttonParent, styles.buttonLayout]}>
          <Pressable
            style={[styles.button1, styles.buttonLayout]}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Text style={styles.label1}>Services</Text>
          </Pressable>
          <Text style={[styles.contactUs, styles.contactUsFlexBox]}>
            Contact Us
          </Text>
        </View>
        <Text style={[styles.itsNotAbout, styles.timeTypo1]}>
          It’s not about ideas, It’s about making ideas happen
        </Text>
        <View style={styles.beneficiosDeLaMejaraDeProParent}>
          <Image
            style={styles.beneficiosDeLaMejaraDePro}
            contentFit="cover"
            source={require("../assets/beneficios-de-la-mejara-de-procesos.png")}
          />
          <Text
            style={[styles.loremIpsumIs1, styles.loremLayout]}
          >{`Lorem Ipsum is simply dummy text of the printing and `}</Text>
          <Text
            style={[styles.loremIpsumIs2, styles.loremLayout]}
          >{`Lorem Ipsum is simply dummy text of the printing and `}</Text>
          <Text
            style={[styles.loremIpsumIs3, styles.groupChild17Position]}
          >{`Lorem Ipsum is simply dummy text of the printing and `}</Text>
          <Text
            style={[styles.loremIpsumIs4, styles.loremLayout]}
          >{`Lorem Ipsum is simply dummy text of the printing and `}</Text>
        </View>
      </View>
      <View style={styles.youAreInGoodHandsParent}>
        <Text style={styles.youAreInContainer}>
          <Text style={styles.youAre}>{`You are `}</Text>
          <Text style={styles.inGoodHands}>in good hands</Text>
        </Text>
        <Image
          style={[styles.starIcon, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/star-1.png")}
        />
        <Image
          style={styles.groupChild13}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.aboutUs1, styles.bookNowTypo]}>About us</Text>
        </View>
        <Pressable
          style={[styles.rectangleParent3, styles.rectangleParentLayout]}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.aboutUs1, styles.bookNowTypo]}>About us</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.image1512Icon, styles.insparkLogo1Layout]}
        contentFit="cover"
        source={require("../assets/image-1512.png")}
      />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={[styles.services5Inner, styles.groupParent3Layout]}>
        <View style={[styles.groupParent3, styles.groupParent3Layout]}>
          <View style={[styles.groupParent3, styles.groupParent3Layout]}>
            <View style={[styles.groupChild16, styles.mockups1Position]} />
            <Image
              style={[styles.image1571Icon, styles.iconLayout6]}
              contentFit="cover"
              source={require("../assets/image-1571.png")}
            />
            <Image
              style={[styles.image1572Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/image-1572.png")}
            />
            <View style={[styles.groupChild17, styles.groupChild17Position]} />
            <View style={styles.publicationParent}>
              <Text style={[styles.publication, styles.orTypo]}>
                PUBLICATION
              </Text>
              <Image
                style={[styles.groupChild18, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-101.png")}
              />
            </View>
            <Image
              style={[styles.image1560Icon, styles.iconLayout4]}
              contentFit="cover"
              source={require("../assets/image-1560.png")}
            />
            <Image
              style={styles.groupChild19}
              contentFit="cover"
              source={require("../assets/group-15.png")}
            />
            <Text style={styles.loremIpsumIs5}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Text>
            <Text
              style={[styles.loremIpsumIs6, styles.loremLayout]}
            >{`Lorem Ipsum is simply dummy text of the printing and `}</Text>
            <Image
              style={styles.image1576Icon}
              contentFit="cover"
              source={require("../assets/image-1576.png")}
            />
          </View>
          <Pressable
            style={[styles.rectangleParent5, styles.rectangleParentLayout]}
            onPress={() => navigation.navigate("IPhone14ProMax6")}
          >
            <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
            <Text style={[styles.bookNow, styles.bookNowTypo]}>Book Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout6: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout4: {
    height: 0,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.satisfy,
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  iconLayout3: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  insparkLogo1Layout: {
    height: 56,
    position: "absolute",
  },
  icon3Position: {
    height: 100,
    top: 0,
    position: "absolute",
  },
  homeIndicatorPosition: {
    display: "none",
    position: "absolute",
  },
  groupLayout1: {
    height: 287,
    width: 430,
    left: 0,
  },
  faqInnerLayout: {
    height: 447,
    width: 390,
    position: "absolute",
  },
  whatLayout: {
    height: 20,
    position: "absolute",
  },
  groupChildPosition: {
    borderTopWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    width: 390,
    height: 0,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    position: "absolute",
  },
  howDoYouLayout: {
    width: 314,
    color: Color.darkslategray_300,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
    position: "absolute",
  },
  orLayout: {
    width: 84,
    lineHeight: 7,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    height: 14,
    left: "50%",
    position: "absolute",
  },
  contactPosition: {
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
  },
  uiDesignPosition: {
    top: 17,
    position: "absolute",
  },
  contentPosition: {
    left: 34,
    position: "absolute",
  },
  loremTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  frameLayout1: {
    height: 67,
    width: 360,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  containerPosition: {
    left: 43,
    height: 67,
    width: 360,
    position: "absolute",
  },
  ellipseParentLayout: {
    height: 127,
    width: 123,
    position: "absolute",
  },
  frameLayout: {
    width: 365,
    position: "absolute",
  },
  groupLayout: {
    height: 303,
    position: "absolute",
  },
  aboutUsTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  ellipseLayout: {
    height: 88,
    width: 91,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    height: 74,
    fontSize: FontSize.size_45xl,
    top: 7,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    position: "absolute",
  },
  yearsTypo: {
    width: 66,
    left: 102,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 23,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  ourProcessLayout: {
    height: 97,
    width: 223,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    position: "absolute",
  },
  uiDesignLayout: {
    height: 133,
    width: 178,
  },
  framePosition: {
    borderRadius: 12,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 87,
    width: 40,
    top: 6,
    position: "absolute",
  },
  mockupsTypo: {
    fontFamily: FontFamily.montserratBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs_7,
    top: 5,
    color: Color.labelColorDarkPrimary,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  designLayout: {
    height: 113,
    width: 154,
  },
  viewLayout: {
    width: 154,
    height: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    left: 0,
    position: "absolute",
  },
  mockups1Position: {
    top: 25,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 48,
    position: "absolute",
  },
  iconLayout: {
    width: 131,
    position: "absolute",
  },
  contactGroupPosition: {
    left: 221,
    position: "absolute",
  },
  contactUsFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  text6Typo: {
    lineHeight: 21,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  buttonLayout2: {
    height: 44,
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
  },
  buttonLayout: {
    height: 37,
    position: "absolute",
  },
  timeTypo1: {
    fontWeight: "600",
    position: "absolute",
  },
  loremLayout: {
    height: 53,
    width: 118,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    textAlign: "left",
  },
  groupChild17Position: {
    top: 176,
    position: "absolute",
  },
  bookNowTypo: {
    width: 87,
    color: Color.gray_100,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.buttonMedium_size,
    height: 24,
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupParent3Layout: {
    height: 408,
    position: "absolute",
  },
  vectorIcon: {
    top: 366,
    width: 503,
    height: 566,
    left: 0,
    position: "absolute",
  },
  image1565Icon: {
    height: "5.08%",
    width: "82.09%",
    top: "9.9%",
    right: "3.49%",
    bottom: "85.02%",
    left: "14.42%",
  },
  image1556Icon: {
    top: 388,
    left: 51,
    width: 0,
    height: 0,
  },
  time: {
    marginLeft: -25,
    top: "15%",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    position: "absolute",
    left: "50%",
  },
  batteryIcon: {
    top: 2,
    height: 12,
    width: 27,
    right: 0,
    position: "absolute",
  },
  text: {
    right: 30,
    textAlign: "right",
    color: Color.labelColorLightPrimary,
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
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
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
    overflow: "hidden",
  },
  text1: {
    top: 301,
    left: 114,
    fontFamily: FontFamily.roboto,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  image1473: {
    width: 70,
    height: 46,
    left: 6,
    top: 199,
    position: "absolute",
  },
  insparkLogo1: {
    width: 63,
    left: 19,
    top: 199,
  },
  faqChild: {
    left: -56,
    width: 229,
  },
  groupChild: {
    top: 0,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.darkslategray_400,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 892,
    height: 287,
    width: 430,
    left: 0,
  },
  whatIsWebflow: {
    color: Color.dodgerblue,
    width: 351,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    height: 20,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 8,
    left: 368,
    width: 8,
  },
  vitaeCongueEu: {
    top: 28,
    fontSize: 10,
    width: 341,
    height: 62,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 17,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  lineView: {
    top: 111,
  },
  whatIsYour: {
    top: 139,
    width: 332,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    height: 20,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
  },
  groupIcon: {
    top: 140,
    left: 363,
    height: 10,
    width: 8,
  },
  groupChild1: {
    top: 327,
  },
  whenWasWebflow: {
    top: 355,
    width: 251,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    height: 20,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
  },
  groupChild2: {
    top: 356,
    left: 363,
    height: 10,
    width: 8,
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
    width: 8,
  },
  groupChild5: {
    top: 399,
  },
  howDoYou1: {
    top: 427,
    width: 290,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    height: 20,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
  },
  groupChild6: {
    top: 428,
    left: 363,
    height: 10,
    width: 8,
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
    width: 8,
  },
  whatIsWebflowAndWhyIsItParent: {
    top: 0,
    left: 0,
  },
  faqInner: {
    top: 86,
    left: 22,
  },
  faqs: {
    marginLeft: -41.5,
    fontSize: FontSize.size_17xl,
    top: 27,
    color: Color.darkslategray_300,
  },
  faq: {
    top: 3476,
    width: 429,
    height: 618,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    position: "absolute",
  },
  contact: {
    width: 50,
    height: 8,
    color: Color.labelColorDarkPrimary,
    left: 7,
    position: "absolute",
    top: 0,
  },
  groupChild9: {
    right: 96,
    height: 17,
    top: 3,
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    position: "absolute",
  },
  text2: {
    letterSpacing: 1,
    height: 3,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    left: 24,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    width: 91,
    top: 0,
    position: "absolute",
  },
  groupView: {
    top: 26,
    left: 3,
    height: 20,
    right: 0,
  },
  image1501Icon: {
    top: 76,
    width: 22,
    height: 14,
    left: 0,
    position: "absolute",
  },
  contactParent: {
    right: 281,
    height: 90,
    top: 0,
    left: 0,
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
    position: "absolute",
  },
  termsAndConditions: {
    height: 22,
    color: Color.gray_1200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    textAlign: "left",
    left: 0,
    width: 64,
  },
  privacyPolicy: {
    width: 39,
    top: 42,
    height: 22,
    color: Color.gray_1200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  faqsParent: {
    top: 29,
    left: 178,
    height: 64,
    width: 64,
    position: "absolute",
  },
  groupContainer: {
    right: 24,
    height: 93,
    top: 13,
  },
  insparktechnologies2023: {
    marginLeft: -94,
    top: 133,
    fontSize: FontSize.size_5xs,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    left: "50%",
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
  },
  loremIpsumDolor: {
    top: 46,
    fontSize: 6,
    lineHeight: 10,
    width: 121,
    height: 71,
    left: 289,
    color: Color.labelColorDarkPrimary,
  },
  groupParent: {
    top: 4094,
    backgroundColor: Color.gray_600,
    height: 158,
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    marginLeft: -188,
    top: 3609,
    width: 375,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  vectorIcon1: {
    height: 616,
    top: 0,
  },
  servicesChild: {
    top: 708,
    width: 408,
    alignItems: "center",
    left: 9,
    height: 100,
    position: "absolute",
  },
  content: {
    top: 848,
    width: 354,
    height: 99,
  },
  servicesItem: {
    top: 1617,
    backgroundColor: Color.steelblue,
    borderRadius: Border.br_6xl,
    left: 40,
    width: 360,
  },
  pressable: {
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
  },
  wrapper: {
    left: 47,
    top: 1735,
  },
  icon: {
    borderRadius: Border.br_6xl,
  },
  container: {
    top: 1868,
  },
  servicesInner: {
    top: 1997,
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
  },
  frame: {
    top: 2132,
    left: 40,
    width: 360,
  },
  vectorIcon2: {
    top: 1767,
    left: 165,
    width: 310,
    height: 221,
    position: "absolute",
  },
  image1550: {
    left: 383,
    top: 60,
    width: 32,
    height: 23,
    position: "absolute",
  },
  ellipseParent: {
    top: 0,
    left: 0,
  },
  hireNow: {
    left: 42,
    width: 76,
    height: 45,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    top: 42,
    lineHeight: 20,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  servicesInner1: {
    top: 600,
    left: 62,
  },
  frameChild: {
    top: -111,
    borderBottomRightRadius: 261,
    borderBottomLeftRadius: 261,
    height: 476,
    overflow: "hidden",
    left: 0,
  },
  aboutUs: {
    color: Color.aquamarine,
    width: 92,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    height: 23,
    top: 0,
  },
  etiamQuisTristique: {
    top: 39,
    fontSize: FontSize.size_mini,
    height: 93,
    width: 251,
    color: Color.labelColorLightPrimary,
  },
  loremIpsumIs: {
    top: 80,
    left: 1,
    width: 140,
    height: 131,
    fontSize: FontSize.size_mini,
    color: Color.labelColorLightPrimary,
  },
  aboutUsParent: {
    height: 211,
    width: 251,
    top: 0,
    left: 0,
    position: "absolute",
  },
  ellipseGroup: {
    top: 0,
  },
  text3: {
    width: 74,
    left: 9,
  },
  text4: {
    width: 77,
    left: 6,
  },
  ellipseContainer: {
    top: 102,
  },
  text5: {
    width: 44,
    left: 24,
    height: 74,
    fontSize: FontSize.size_45xl,
    top: 7,
  },
  ellipseParent1: {
    top: 205,
  },
  yearsOfExperience: {
    top: 23,
  },
  yearsOfExperience1: {
    top: 235,
  },
  experirncedEmployees: {
    top: 137,
    width: 58,
    left: 102,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 23,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  groupParent2: {
    top: 10,
    left: 331,
    width: 168,
    height: 293,
    position: "absolute",
  },
  groupFrame: {
    width: 499,
    top: 0,
    left: 0,
  },
  groupWrapper: {
    left: 186,
    width: 227,
    top: 27,
    overflow: "hidden",
  },
  frameParent: {
    marginLeft: -200,
    top: 1650,
    borderRadius: 219,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 0.6,
    height: 365,
    backgroundColor: "transparent",
    borderStyle: "solid",
    width: 365,
    left: "50%",
  },
  ourProcess: {
    top: 1154,
    left: 127,
    fontSize: 26,
    color: Color.labelColorLightPrimary,
  },
  frameItem: {
    backgroundColor: Color.paleturquoise,
    height: 133,
    width: 178,
  },
  icon2: {
    left: 0,
  },
  icon3: {
    left: 48,
    width: 46,
  },
  icon4: {
    left: 101,
  },
  parent: {
    left: 18,
    width: 141,
    top: 5,
    height: 100,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  uiDesigns: {
    left: 62,
  },
  uiDesignsWrapper: {
    top: 109,
    backgroundColor: Color.gray_1300,
    height: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 178,
    left: 0,
    position: "absolute",
  },
  uiDesign: {
    left: 144,
    top: 17,
    position: "absolute",
  },
  frameInner: {
    backgroundColor: Color.gray_1400,
    borderRadius: 12,
    top: 0,
    left: 0,
    position: "absolute",
  },
  d2Icon: {
    height: "84%",
    width: "116.58%",
    top: "-2.5%",
    right: "-8.16%",
    bottom: "18.5%",
    left: "-8.42%",
  },
  rectangleContainer: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.gray_1500,
    top: 0,
  },
  mockups: {
    left: 54,
  },
  frameView: {
    top: 89,
  },
  design: {
    top: 20,
    left: -22,
    height: 113,
    position: "absolute",
  },
  comp382: {
    width: 126,
    height: 101,
    left: 19,
    top: 0,
    position: "absolute",
  },
  mockups1: {
    left: 334,
    height: 113,
    width: 154,
  },
  uiDesignParent: {
    top: 2180,
    right: -2,
    left: -2,
    height: 294,
    position: "absolute",
  },
  recentWorks: {
    marginLeft: -95,
    top: 2111,
    fontSize: FontSize.size_8xl_9,
    width: 191,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    left: "50%",
  },
  byChoosingInspark: {
    top: 53,
    lineHeight: 23,
    height: 169,
    opacity: 0.64,
    fontSize: FontSize.size_mid,
    left: -22,
    width: 223,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  content1: {
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
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    position: "absolute",
  },
  sketchAnnotationElementBrusIcon: {
    top: 285,
    left: 92,
    height: 124,
    opacity: 0.3,
  },
  illustrationsIcon: {
    top: 174,
    width: 205,
    height: 205,
    overflow: "hidden",
  },
  icon5: {
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
    overflow: "hidden",
  },
  cover: {
    top: 2430,
    width: 391,
    height: 368,
    left: 19,
    position: "absolute",
  },
  feelFreeTo: {
    marginLeft: -199,
    top: 2905,
    width: 387,
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    height: 158,
    left: "50%",
  },
  visitUs: {
    fontSize: 21,
    color: Color.sandybrown,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
  },
  westheimerRdSanta: {
    width: 149,
    marginTop: 14.29,
  },
  visitUsParent: {
    top: 1,
    left: 50,
    position: "absolute",
  },
  contactcompanycom: {
    width: 215,
  },
  text6: {
    marginTop: 7.15,
  },
  contactcompanycomParent: {
    width: 160,
    marginTop: 14.29,
  },
  contactGroup: {
    width: 211,
    top: 0,
  },
  label: {
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
  },
  button: {
    top: 167,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.accessibleSystemOrangeLight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 289,
  },
  frameGroup: {
    width: 432,
    height: 134,
  },
  contactInfo: {
    marginLeft: -219,
    top: 3068,
    width: 398,
    height: 115,
    left: "50%",
    position: "absolute",
  },
  talkToExpert: {
    left: 75,
    fontSize: 14,
    color: Color.darkgray,
    top: 13,
  },
  fieldEmail: {
    marginLeft: -173,
    top: 3231,
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_900,
    width: 237,
    left: "50%",
    overflow: "hidden",
  },
  or: {
    marginLeft: -42,
    top: 3329,
    width: 84,
    lineHeight: 7,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    height: 14,
    left: "50%",
    position: "absolute",
  },
  label1: {
    fontSize: 16,
    color: Color.labelColorDarkPrimary,
    lineHeight: 17,
    fontFamily: FontFamily.abrilFatfaceRegular,
    display: "none",
    letterSpacing: 0,
    textAlign: "center",
  },
  button1: {
    top: 37,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: 117,
    height: 37,
    backgroundColor: Color.accessibleSystemOrangeLight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    left: 0,
  },
  contactUs: {
    left: 12,
    fontSize: 18,
    lineHeight: 19,
    width: 94,
    height: 19,
    top: 6,
    color: Color.labelColorDarkPrimary,
  },
  buttonParent: {
    top: 3369,
    left: 142,
    width: 117,
    height: 37,
  },
  itsNotAbout: {
    top: 248,
    left: 23,
    letterSpacing: -0.1,
    lineHeight: 15,
    fontFamily: FontFamily.montserratSemibold,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  beneficiosDeLaMejaraDePro: {
    width: 703,
    height: 375,
    overflow: "hidden",
    top: 0,
    left: 0,
    position: "absolute",
  },
  loremIpsumIs1: {
    top: 180,
    left: 60,
    color: Color.peru,
    position: "absolute",
  },
  loremIpsumIs2: {
    top: 242,
    left: 532,
    color: Color.gray_1000,
    position: "absolute",
  },
  loremIpsumIs3: {
    left: 376,
    color: Color.darkorchid,
    height: 53,
    width: 118,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    textAlign: "left",
  },
  loremIpsumIs4: {
    top: 244,
    left: 219,
    color: Color.gray_800,
    position: "absolute",
  },
  beneficiosDeLaMejaraDeProParent: {
    top: 1218,
    width: 436,
    height: 331,
    left: 0,
    position: "absolute",
  },
  services: {
    height: 4252,
    backgroundColor: Color.labelColorDarkPrimary,
    top: 0,
  },
  youAre: {
    color: Color.labelColorLightPrimary,
  },
  inGoodHands: {
    color: Color.mediumaquamarine,
  },
  youAreInContainer: {
    fontSize: FontSize.size_21xl,
    lineHeight: 53,
    width: 246,
    height: 126,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  starIcon: {
    left: 281,
    top: 6,
    width: 44,
  },
  groupChild13: {
    top: 194,
    width: 41,
    height: 32,
    left: 9,
    position: "absolute",
  },
  groupChild14: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.firebrick_100,
    width: 123,
    height: 48,
    top: 0,
    left: 0,
  },
  aboutUs1: {
    top: 12,
    left: 28,
  },
  rectangleParent3: {
    top: 190,
    left: 255,
    width: 123,
    height: 48,
  },
  youAreInGoodHandsParent: {
    top: 129,
    width: 378,
    height: 238,
    left: 19,
    position: "absolute",
  },
  image1512Icon: {
    top: 57,
    left: 29,
    width: 65,
  },
  vectorIcon3: {
    top: 2824,
    left: 185,
    width: 647,
    height: 388,
    position: "absolute",
  },
  groupChild16: {
    left: 162,
    borderRadius: Border.br_61xl,
    backgroundColor: Color.gainsboro_100,
    width: 665,
    height: 335,
  },
  image1571Icon: {
    height: "31.62%",
    width: "15.86%",
    top: "43.15%",
    right: "60.99%",
    bottom: "25.23%",
    left: "23.15%",
  },
  image1572Icon: {
    top: 184,
    left: 570,
    height: 118,
  },
  groupChild17: {
    left: 361,
    borderRadius: Border.br_31xl,
    width: 174,
    height: 232,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  publication: {
    height: 97,
    width: 223,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    position: "absolute",
    top: 0,
    left: 0,
  },
  groupChild18: {
    top: 210,
    width: 55,
    left: 0,
  },
  publicationParent: {
    top: 79,
    height: 140,
    width: 223,
    left: 0,
    position: "absolute",
  },
  image1560Icon: {
    top: "54.18%",
    left: "85.66%",
    width: 0,
    height: 0,
  },
  groupChild19: {
    left: 671,
    width: 180,
    height: 166,
    top: 0,
    position: "absolute",
  },
  loremIpsumIs5: {
    left: 283,
    width: 368,
    height: 39,
    fontSize: FontSize.buttonMedium_size,
    fontFamily: FontFamily.interRegular,
    top: 85,
    lineHeight: 20,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  loremIpsumIs6: {
    top: 258,
    left: 390,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  image1576Icon: {
    top: 182,
    left: 393,
    width: 102,
    height: 65,
    position: "absolute",
  },
  groupParent3: {
    width: 851,
    top: 0,
    left: 0,
  },
  bookNow: {
    top: 11,
    left: 25,
  },
  rectangleParent5: {
    top: 238,
    left: 5,
    width: 123,
    height: 48,
  },
  services5Inner: {
    top: 743,
    width: 427,
    left: 9,
  },
  services5: {
    backgroundColor: Color.gray_300,
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default Services5;
