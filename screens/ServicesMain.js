import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ServicesMain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.servicesMain}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.services, styles.servicesPosition]}>
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
              style={[styles.alarmIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/alarm.png")}
            />
            <Image
              style={[styles.bluetoothIcon, styles.iconLayout2]}
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
        <View style={styles.insparkLogo1} />
        <View style={[styles.faq, styles.faqLayout]}>
          <Image
            style={styles.faqChild}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
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
              <Text style={[styles.whatIsWebflow, styles.whatTypo]}>
                What is Webflow and why is it the best website builder?
              </Text>
              <Image
                style={styles.groupInner}
                contentFit="cover"
                source={require("../assets/group-35602.png")}
              />
              <Text style={[styles.vitaeCongueEu, styles.faqsClr]}>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </Text>
              <View style={[styles.lineView, styles.groupChildPosition1]} />
              <Text style={[styles.whatIsYour, styles.faqsClr]}>
                What is your favorite template from BRIX Templates?
              </Text>
              <Image
                style={[styles.groupIcon, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-35621.png")}
              />
              <View style={[styles.groupChild1, styles.groupChildPosition1]} />
              <Text style={[styles.whenWasWebflow, styles.faqsClr]}>
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
              <Text style={[styles.howDoYou1, styles.faqsClr]}>
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
          <Text style={[styles.faqs, styles.faqsClr]}>FAQs</Text>
        </View>
        <View style={[styles.groupParent, styles.servicesPosition]}>
          <View style={[styles.groupContainer, styles.contactPosition]}>
            <View style={styles.contactParent}>
              <Text style={[styles.contact, styles.linksTypo]}>Contact</Text>
              <View style={styles.groupView}>
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
              <Text style={[styles.termsAndConditions, styles.faqs1Typo]}>
                Terms and Conditions
              </Text>
              <Text style={[styles.privacyPolicy, styles.faqs1Typo]}>
                Privacy Policy
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.insparktechnologies2023,
              styles.wellKnownForPosition,
            ]}
          >
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
        <View style={styles.homeindicator}>
          <View style={styles.homeIndicator} />
        </View>
        <Image
          style={[styles.vectorIcon1, styles.servicesPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.image1525Icon, styles.text7Position]}
          contentFit="cover"
          source={require("../assets/image-1525.png")}
        />
        <View style={styles.servicesParent}>
          <Text style={[styles.services1, styles.insparkTypo]}>Services</Text>
          <Text style={styles.ourSoleObjective}>
            Our sole objective is to collaborate with our clients to deliver the
            best solutions for their goals. Our leadership, staff, and
            experience are what set us apart—you’ll always be a priority working
            with us.
          </Text>
        </View>
        <View style={[styles.content, styles.contentLayout]}>
          <View style={styles.row}>
            <Pressable
              style={styles.blogPostCard}
              onPress={() => navigation.navigate("Services1")}
            >
              <ImageBackground
                style={[styles.imageIcon, styles.imageIconFlexBox]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              >
                <Image
                  style={styles.xm2Icon}
                  contentFit="cover"
                  source={require("../assets/7xm-2.png")}
                />
                <Image
                  style={[styles.image1507Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/image-15071.png")}
                />
                <Image
                  style={[styles.image1515Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-1515.png")}
                />
              </ImageBackground>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <View style={styles.headingAndIcon}>
                  <Text style={[styles.heading, styles.headingTypo]}>
                    Graphic Designing
                  </Text>
                  <View style={styles.iconWrap}>
                    <Image
                      style={styles.arrowUpRightIcon}
                      contentFit="cover"
                      source={require("../assets/arrowupright.png")}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.blogPostCard1, styles.blogCardBorder]}
              onPress={() => navigation.navigate("Services2")}
            >
              <ImageBackground
                style={[styles.imageIcon, styles.imageIconFlexBox]}
                resizeMode="cover"
                source={require("../assets/image1.png")}
              >
                <Image
                  style={[styles.imageChild, styles.imageChildPosition]}
                  contentFit="cover"
                  source={require("../assets/rectangle-3244.png")}
                />
                <Image
                  style={[styles.image1514Icon, styles.imageChildPosition]}
                  contentFit="cover"
                  source={require("../assets/image-1514.png")}
                />
              </ImageBackground>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <View style={styles.headingAndIcon}>
                  <Text style={styles.headingTypo}>Digital Marketing</Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.blogPostCard1, styles.blogCardBorder]}
              onPress={() => navigation.navigate("Services3")}
            >
              <ImageBackground
                style={[styles.imageIcon2, styles.imageIconFlexBox]}
                resizeMode="cover"
                source={require("../assets/image2.png")}
              >
                <Image
                  style={[styles.imageItem, styles.imageItemPosition]}
                  contentFit="cover"
                  source={require("../assets/rectangle-3245.png")}
                />
              </ImageBackground>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <View style={styles.headingAndIcon}>
                  <Text style={styles.headingTypo}>{`Development `}</Text>
                </View>
              </View>
              <View style={styles.blogCardShadowBox} />
            </Pressable>
          </View>
        </View>
        <View style={[styles.content4, styles.contentLayout]}>
          <View style={styles.row}>
            <Pressable
              style={styles.blogCardBorder}
              onPress={() => navigation.navigate("Services4")}
            >
              <ImageBackground
                style={[styles.imageIcon, styles.imageIconFlexBox]}
                resizeMode="cover"
                source={require("../assets/image3.png")}
              >
                <Image
                  style={styles.xm2Icon}
                  contentFit="cover"
                  source={require("../assets/7xm-3.png")}
                />
                <Image
                  style={[styles.image1516Icon, styles.imageItemPosition]}
                  contentFit="cover"
                  source={require("../assets/image-1516.png")}
                />
              </ImageBackground>
              <View style={[styles.content5, styles.contentSpaceBlock]}>
                <View style={styles.headingAndIcon}>
                  <Text style={styles.heading3}>{`Cloud Communication `}</Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.blogPostCard1, styles.blogCardBorder]}
              onPress={() => navigation.navigate("Services5")}
            >
              <ImageBackground
                style={[styles.imageIcon, styles.imageIconFlexBox]}
                resizeMode="cover"
                source={require("../assets/image1.png")}
              >
                <Image
                  style={styles.imageInner}
                  contentFit="cover"
                  source={require("../assets/rectangle-3265.png")}
                />
                <Image
                  style={[styles.image1517Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-1517.png")}
                />
              </ImageBackground>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <View style={styles.headingAndIcon}>
                  <Text style={styles.headingTypo}>Content</Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.blogPostCard1, styles.blogCardBorder]}
              onPress={() => navigation.navigate("Services6")}
            >
              <ImageBackground
                style={[styles.imageIcon, styles.imageIconFlexBox]}
                resizeMode="cover"
                source={require("../assets/image2.png")}
              >
                <Image
                  style={[styles.imageItem, styles.imageItemPosition]}
                  contentFit="cover"
                  source={require("../assets/rectangle-3358.png")}
                />
                <Image
                  style={styles.image1518Icon}
                  contentFit="cover"
                  source={require("../assets/image-1518.png")}
                />
              </ImageBackground>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <View style={styles.headingAndIcon}>
                  <Text style={styles.headingTypo}>{`Publications `}</Text>
                </View>
              </View>
              <View style={styles.blogCardShadowBox} />
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonBase}>
          <Text style={[styles.text3, styles.textTypo1]}>Load More</Text>
        </View>
        <Text style={[styles.letsTalk, styles.letsTalkFlexBox]}>
          Let’s talk
        </Text>
        <Text style={[styles.readyToBeginContainer, styles.hereAreTheTypo1]}>
          {`
Ready to begin your journey towards a greater future? Get in touch to discover how we can help
`}
          <Text style={styles.blankLine}> </Text>
        </Text>
        <Text style={[styles.transformationStartsHere, styles.orTypo]}>
          Transformation starts here
        </Text>
        <Image
          style={[styles.servicesChild, styles.servicesPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-4035.png")}
        />
        <Pressable
          style={[styles.buttonBase1, styles.buttonPosition]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={[styles.text4, styles.textTypo1]}>Book a call</Text>
        </Pressable>
        <Text style={styles.productsPlatforms}>{`Products & Platforms`}</Text>
        <Image
          style={[styles.servicesItem, styles.servicesItemPosition]}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <Text
          style={[styles.hereAreThe, styles.hereAreTheTypo]}
        >{`Here are the solutions we use
to create meaningful futures.`}</Text>
        <Text style={[styles.insparkStartups, styles.insparkTypo]}>
          Inspark Startups
        </Text>
        <Text style={[styles.insparkHealthcare, styles.insparkTypo]}>
          Inspark Healthcare +
        </Text>
        <Text
          style={[styles.insparkPublications, styles.insparkTypo]}
        >{`Inspark Publications `}</Text>
        <Text style={[styles.youngersBlog, styles.insparkTypo]}>
          Younger's Blog
        </Text>
        <Text style={[styles.blissfulShopping, styles.insparkTypo]}>
          Blissful Shopping
        </Text>
        <Image
          style={[styles.servicesInner, styles.servicesChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Image
          style={[styles.arrowIcon, styles.servicesChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Image
          style={[styles.servicesChild1, styles.servicesChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Image
          style={[styles.servicesChild2, styles.servicesChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Image
          style={[styles.servicesChild3, styles.servicesChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Text
          style={[styles.wellKnownFor, styles.hereAreTheTypo]}
        >{`Well Known For `}</Text>
        <Image
          style={styles.servicesChild4}
          contentFit="cover"
          source={require("../assets/group-35650.png")}
        />
        <Pressable
          style={[styles.buttonBase2, styles.buttonPosition]}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <Text style={[styles.text4, styles.textTypo1]}>Contact us</Text>
        </Pressable>
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Products")}
        />
        <LinearGradient
          style={[styles.wrapper, styles.wrapperPosition]}
          locations={[0, 0.32, 0.71, 1]}
          colors={[
            "rgba(0, 141, 202, 0)",
            "rgba(24, 148, 202, 0)",
            "rgba(27, 106, 140, 0)",
            "rgba(136, 95, 78, 0)",
          ]}
        >
          <Pressable
            style={[styles.pressable, styles.pressableBg]}
            onPress={() => navigation.navigate("Products")}
          />
        </LinearGradient>
        <Pressable
          style={[styles.container, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Products")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-4038.png")}
          />
        </Pressable>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.pressableBg]}
          locations={[0, 0.32, 0.71, 1]}
          colors={[
            "rgba(0, 141, 202, 0)",
            "rgba(24, 148, 202, 0)",
            "rgba(27, 106, 140, 0)",
            "rgba(136, 95, 78, 0)",
          ]}
        />
        <LinearGradient
          style={[styles.frame, styles.rectangleLayout]}
          locations={[0, 0.32, 0.71, 1]}
          colors={[
            "rgba(0, 141, 202, 0)",
            "rgba(24, 148, 202, 0)",
            "rgba(27, 106, 140, 0)",
            "rgba(136, 95, 78, 0)",
          ]}
        >
          <Pressable
            style={[styles.pressable, styles.pressableBg]}
            onPress={() => navigation.navigate("Products")}
          />
        </LinearGradient>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
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
        <View style={[styles.frameView, styles.text10Position]}>
          <View style={styles.buttonParent}>
            <Pressable
              style={[styles.button, styles.buttonLayout1]}
              onPress={() => navigation.navigate("Services1")}
            >
              <Text style={styles.label}>Learn more</Text>
            </Pressable>
            <Image
              style={styles.image1491Icon}
              contentFit="cover"
              source={require("../assets/image-1491.png")}
            />
            <Text
              style={[styles.proskEgosadeGrafen, styles.proskTypo]}
            >{` prosk egosade grafen
 dekadade för 
 nektiga ren med
 autonas karat såsom 
 klimatneutral
 nätbingo. Esk peligt. `}</Text>
            <Text
              style={[styles.graphicDesign, styles.servicesItemPosition]}
            >{`Graphic Design `}</Text>
          </View>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Image
              style={[styles.groupChild10, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-468.png")}
            />
            <Text style={[styles.text6, styles.textTypo]}>1</Text>
          </View>
          <View style={styles.buttonGroup}>
            <Pressable
              style={[styles.button1, styles.buttonLayout]}
              onPress={() => navigation.navigate("Services2")}
            >
              <Text style={styles.label}>Learn more</Text>
            </Pressable>
            <Text
              style={[styles.proskEgosadeGrafen1, styles.proskTypo]}
            >{` prosk egosade grafen
 dekadade för 
 nektiga ren med
 autonas karat såsom 
 klimatneutral
 nätbingo. Esk peligt. `}</Text>
            <Image
              style={[styles.image1492Icon, styles.text11Position]}
              contentFit="cover"
              source={require("../assets/image-1492.png")}
            />
            <Text style={[styles.digitalMarketing, styles.developmentTypo]}>
              Digital Marketing
            </Text>
            <Image
              style={[styles.groupChild10, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-468.png")}
            />
            <Text style={[styles.text7, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.developmentParent, styles.faqLayout]}>
            <Text style={[styles.development, styles.button3Position]}>
              Development
            </Text>
            <Image
              style={styles.image1493Icon}
              contentFit="cover"
              source={require("../assets/image-1493.png")}
            />
            <Text
              style={[styles.proskEgosadeGrafen2, styles.proskTypo]}
            >{` prosk egosade grafen
 dekadade för 
 nektiga ren med
 autonas karat såsom 
 klimatneutral
 nätbingo. Esk peligt. `}</Text>
            <Image
              style={[styles.groupChild10, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-468.png")}
            />
            <Text style={[styles.text8, styles.textTypo]}>3</Text>
          </View>
          <Pressable
            style={[styles.button2, styles.buttonLayout]}
            onPress={() => navigation.navigate("Services3")}
          >
            <Text style={styles.label}>Learn more</Text>
          </Pressable>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-472.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-468.png")}
          />
          <Text style={[styles.cloudCommunication, styles.button5Position]}>
            Cloud Communication
          </Text>
          <Text style={[styles.text9, styles.textTypo]}>4</Text>
          <Image
            style={[styles.image1494Icon, styles.image1494IconPosition]}
            contentFit="cover"
            source={require("../assets/image-1494.png")}
          />
          <Text
            style={[styles.proskEgosadeGrafen3, styles.image1494IconPosition]}
          >{` prosk egosade grafen
 dekadade för 
 nektiga ren med
 autonas karat såsom 
 klimatneutral
 nätbingo. Esk peligt. `}</Text>
          <Pressable
            style={[styles.button3, styles.button3Position]}
            onPress={() => navigation.navigate("Services4")}
          >
            <Text style={styles.label}>Learn more</Text>
          </Pressable>
          <Image
            style={[styles.frameInner, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-468.png")}
          />
          <Image
            style={[styles.frameChild1, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-468.png")}
          />
          <Text style={[styles.text10, styles.textTypo]}>5</Text>
          <Text style={[styles.text11, styles.text11Position]}>6</Text>
          <Text style={[styles.content8, styles.textTypo]}>Content</Text>
          <Text style={[styles.publication, styles.textTypo]}>Publication</Text>
          <Text
            style={[styles.proskEgosadeGrafen4, styles.proskTypo]}
          >{` prosk egosade grafen
 dekadade för 
 nektiga ren med
 autonas karat såsom 
 klimatneutral
 nätbingo. Esk peligt. `}</Text>
          <Text
            style={[styles.proskEgosadeGrafen5, styles.proskTypo]}
          >{` prosk egosade grafen
 dekadade för 
 nektiga ren med
 autonas karat såsom 
 klimatneutral
 nätbingo. Esk peligt. `}</Text>
          <Image
            style={styles.image1495Icon}
            contentFit="cover"
            source={require("../assets/image-1495.png")}
          />
          <Image
            style={styles.image1581Icon}
            contentFit="cover"
            source={require("../assets/image-1581.png")}
          />
          <Pressable
            style={[styles.button4, styles.buttonLayout1]}
            onPress={() => navigation.navigate("Services6")}
          >
            <Text style={styles.label}>Learn more</Text>
          </Pressable>
          <Pressable
            style={[styles.button5, styles.button5Position]}
            onPress={() => navigation.navigate("Services5")}
          >
            <Text style={styles.label}>Learn more</Text>
          </Pressable>
        </View>
      </View>
      <Text
        style={[
          styles.transformingBusinessesThroug,
          styles.readyToBeginContainerPosition,
        ]}
      >{`Transforming
 
businesses through

technology.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.satisfy,
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  iconLayout2: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  faqLayout: {
    width: 429,
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
  whatTypo: {
    fontSize: 12,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 16,
    left: 0,
  },
  faqsClr: {
    color: Color.darkslategray_300,
    textAlign: "left",
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
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    textAlign: "left",
    lineHeight: 16,
    left: 0,
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
    position: "absolute",
  },
  wellKnownForPosition: {
    marginLeft: -94,
    left: "50%",
  },
  text7Position: {
    left: 10,
    position: "absolute",
  },
  insparkTypo: {
    fontSize: 26,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "center",
  },
  contentLayout: {
    height: 99,
    width: 354,
    position: "absolute",
  },
  imageIconFlexBox: {
    alignSelf: "stretch",
    height: 70,
  },
  iconLayout1: {
    width: 105,
    left: 0,
  },
  iconPosition: {
    width: 102,
    top: 0,
    left: 0,
    position: "absolute",
  },
  contentSpaceBlock: {
    marginTop: 5.83,
    height: 9,
  },
  headingTypo: {
    width: 86,
    lineHeight: 9,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  blogCardBorder: {
    borderWidth: 0.3,
    borderColor: "#f3f3f3",
    padding: 6,
    height: 99,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
  },
  imageChildPosition: {
    opacity: 0,
    height: 70,
    top: 0,
    position: "absolute",
  },
  imageItemPosition: {
    width: 100,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
  },
  letsTalkFlexBox: {
    letterSpacing: -0.1,
    textAlign: "left",
  },
  hereAreTheTypo1: {
    lineHeight: 25,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  orTypo: {
    fontSize: FontSize.size_xl,
    lineHeight: 9,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  buttonPosition: {
    borderRadius: 20,
    left: 137,
    right: 157,
    backgroundColor: Color.accessibleSystemOrangeLight,
    height: 46,
    overflow: "hidden",
    position: "absolute",
  },
  servicesItemPosition: {
    left: 26,
    position: "absolute",
  },
  hereAreTheTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  servicesChildLayout: {
    width: 18,
    left: 360,
    height: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 67,
    width: 360,
  },
  wrapperPosition: {
    left: 47,
    position: "absolute",
  },
  pressableBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    height: 221,
    width: 310,
    position: "absolute",
  },
  text10Position: {
    left: 12,
    position: "absolute",
  },
  buttonLayout1: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    backgroundColor: Color.accessibleSystemOrangeLight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  proskTypo: {
    height: 138,
    width: 226,
    fontFamily: FontFamily.montserratSemibold,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  frameChildLayout: {
    height: 31,
    width: 31,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.buttonMedium_size,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  buttonLayout: {
    left: 49,
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    backgroundColor: Color.accessibleSystemOrangeLight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text11Position: {
    left: 16,
    position: "absolute",
  },
  developmentTypo: {
    top: 5,
    fontSize: FontSize.buttonMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  button3Position: {
    left: 50,
    position: "absolute",
  },
  button5Position: {
    left: 53,
    position: "absolute",
  },
  image1494IconPosition: {
    top: 1205,
    position: "absolute",
  },
  readyToBeginContainerPosition: {
    left: 33,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  vectorIcon: {
    top: 366,
    width: 503,
    height: 566,
    left: 0,
    position: "absolute",
  },
  time: {
    marginLeft: -25,
    top: "15%",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    fontFamily: FontFamily.satisfy,
    left: "50%",
    position: "absolute",
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
    left: 6,
    width: 70,
    height: 46,
    top: 199,
    position: "absolute",
  },
  insparkLogo1: {
    left: 19,
    width: 63,
    height: 56,
    top: 199,
    position: "absolute",
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
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 368,
    height: 0,
    width: 8,
    top: 8,
    position: "absolute",
  },
  vitaeCongueEu: {
    top: 28,
    lineHeight: 17,
    width: 341,
    height: 62,
    fontFamily: FontFamily.montserratRegular,
    fontSize: 10,
    color: Color.darkslategray_300,
    left: 0,
  },
  lineView: {
    top: 111,
  },
  whatIsYour: {
    top: 139,
    width: 332,
    height: 20,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    lineHeight: 16,
    left: 0,
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
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    lineHeight: 16,
    left: 0,
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
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: 12,
    lineHeight: 16,
    left: 0,
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
    top: 0,
    left: 0,
  },
  faqInner: {
    top: 86,
    left: 22,
  },
  faqs: {
    marginLeft: -41.5,
    top: 27,
    fontSize: FontSize.size_17xl,
    lineHeight: 7,
    width: 84,
    fontFamily: FontFamily.abrilFatfaceRegular,
    height: 14,
    left: "50%",
  },
  faq: {
    top: 2619,
    left: 1,
    height: 618,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
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
    maxWidth: "100%",
    height: 17,
    top: 3,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  text2: {
    left: 24,
    letterSpacing: 1,
    height: 3,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
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
    position: "absolute",
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
    top: 133,
    fontSize: FontSize.size_5xs,
    marginLeft: -94,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
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
    fontFamily: FontFamily.interRegular,
    width: 121,
    height: 71,
    lineHeight: 10,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 3237,
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
    position: "absolute",
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
  image1525Icon: {
    top: 315,
    width: 414,
    height: 279,
  },
  services1: {
    color: Color.labelColorLightPrimary,
  },
  ourSoleObjective: {
    letterSpacing: -0.6,
    display: "flex",
    height: 65,
    justifyContent: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 14,
    alignItems: "center",
    width: 408,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
  },
  servicesParent: {
    top: 604,
    alignItems: "center",
    width: 408,
    left: 12,
    height: 100,
    position: "absolute",
  },
  xm2Icon: {
    width: 109,
    height: 70,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image1507Icon: {
    height: 70,
    top: 0,
    position: "absolute",
  },
  image1515Icon: {
    height: 68,
  },
  imageIcon: {
    height: 70,
    overflow: "hidden",
  },
  heading: {
    textDecoration: "underline",
  },
  arrowUpRightIcon: {
    width: 7,
    height: 7,
    overflow: "hidden",
  },
  iconWrap: {
    left: 91,
    paddingTop: 1,
    top: 0,
    position: "absolute",
  },
  headingAndIcon: {
    height: 9,
    width: 98,
    top: 0,
    left: 0,
    position: "absolute",
  },
  content1: {
    width: 98,
    marginTop: 5.83,
  },
  blogPostCard: {
    padding: 6,
    shadowOpacity: 1,
    elevation: 4.66,
    shadowRadius: 4.66,
    shadowOffset: {
      width: 0,
      height: 3.4953315258026123,
    },
    shadowColor: "rgba(16, 24, 40, 0.08)",
    height: 99,
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
  },
  imageChild: {
    left: -5,
    width: 110,
  },
  image1514Icon: {
    width: 105,
    left: 0,
  },
  blogPostCard1: {
    marginLeft: 9.32,
  },
  imageItem: {
    height: 70,
  },
  imageIcon2: {
    height: 70,
  },
  blogCardShadowBox: {
    width: 112,
    marginTop: 5.83,
    shadowOpacity: 1,
    elevation: 4.66,
    shadowRadius: 4.66,
    shadowOffset: {
      width: 0,
      height: 3.4953315258026123,
    },
    shadowColor: "rgba(16, 24, 40, 0.08)",
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
  },
  row: {
    width: 354,
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  content: {
    top: 724,
    left: 32,
  },
  image1516Icon: {
    bottom: 0,
    maxHeight: "100%",
  },
  heading3: {
    width: 106,
    lineHeight: 9,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  content5: {
    width: 109,
  },
  imageInner: {
    width: 110,
    height: 70,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image1517Icon: {
    height: 70,
  },
  image1518Icon: {
    width: 101,
    height: 70,
    top: 0,
    left: 0,
    position: "absolute",
  },
  content4: {
    top: 848,
    left: 34,
  },
  text3: {
    fontSize: 8,
    lineHeight: 12,
  },
  buttonBase: {
    marginTop: -700.5,
    marginLeft: -63,
    top: "50%",
    borderRadius: 18,
    height: 37,
    paddingHorizontal: 35,
    paddingVertical: 23,
    backgroundColor: Color.accessibleSystemOrangeLight,
    width: 109,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  letsTalk: {
    top: 270,
    left: 29,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    letterSpacing: -0.1,
    lineHeight: 10,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  blankLine: {
    textDecoration: "underline",
  },
  readyToBeginContainer: {
    top: 2303,
    width: 346,
    left: 33,
    color: Color.labelColorLightPrimary,
    position: "absolute",
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  transformationStartsHere: {
    top: 2309,
    left: 89,
  },
  servicesChild: {
    top: 2280,
    height: 289,
  },
  text4: {
    top: 16,
    left: 43,
    lineHeight: 14,
    fontFamily: FontFamily.interMedium,
    fontSize: 10,
    position: "absolute",
  },
  buttonBase1: {
    top: 2425,
  },
  productsPlatforms: {
    marginLeft: -189,
    top: 1506,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  servicesItem: {
    top: 1532,
    width: 62,
    height: 0,
  },
  hereAreThe: {
    top: 1539,
    left: 43,
    lineHeight: 25,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    letterSpacing: -0.1,
    textAlign: "left",
  },
  insparkStartups: {
    marginLeft: -120,
    top: 1627,
    color: "#231212",
    left: "50%",
    position: "absolute",
  },
  insparkHealthcare: {
    marginLeft: -126,
    top: 1746,
    color: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  insparkPublications: {
    top: 1877,
    left: 96,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  youngersBlog: {
    marginLeft: -87,
    top: 2009,
    color: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  blissfulShopping: {
    marginLeft: -106,
    top: 2142,
    color: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  servicesInner: {
    top: 1650,
  },
  arrowIcon: {
    top: 1768,
  },
  servicesChild1: {
    top: 1899,
  },
  servicesChild2: {
    top: 2031,
  },
  servicesChild3: {
    top: 2165,
  },
  wellKnownFor: {
    top: 1085,
    marginLeft: -94,
    left: "50%",
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "center",
  },
  servicesChild4: {
    top: 257,
    left: 104,
    width: 30,
    height: 30,
    position: "absolute",
  },
  buttonBase2: {
    top: 2504,
  },
  or: {
    top: 2481,
    left: 191,
  },
  rectanglePressable: {
    top: 1617,
    backgroundColor: Color.steelblue,
    borderRadius: Border.br_6xl,
    left: 40,
    width: 360,
    position: "absolute",
  },
  pressable: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 1735,
    height: 67,
    width: 360,
  },
  icon: {
    borderRadius: Border.br_6xl,
  },
  container: {
    top: 1868,
    left: 43,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 1997,
    height: 67,
    width: 360,
    left: 43,
    position: "absolute",
  },
  frame: {
    top: 2132,
    left: 40,
    width: 360,
    position: "absolute",
  },
  vectorIcon2: {
    top: 1851,
    left: 131,
  },
  vectorIcon3: {
    top: 1247,
    left: 146,
  },
  image1550: {
    left: 383,
    top: 60,
    width: 32,
    height: 23,
    position: "absolute",
  },
  label: {
    fontSize: 14,
    lineHeight: 15,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
  },
  button: {
    top: 228,
    left: 25,
    position: "absolute",
  },
  image1491Icon: {
    top: 15,
    left: 219,
    width: 199,
    height: 168,
    position: "absolute",
  },
  proskEgosadeGrafen: {
    top: 61,
    left: 0,
    position: "absolute",
  },
  graphicDesign: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    top: 0,
  },
  buttonParent: {
    top: 87,
    left: 23,
    width: 418,
    height: 255,
    position: "absolute",
  },
  groupChild10: {
    top: 0,
    left: 0,
  },
  text6: {
    left: 11,
    fontSize: FontSize.buttonMedium_size,
    lineHeight: 16,
    position: "absolute",
    top: 8,
  },
  vectorParent: {
    top: 83,
    left: 0,
  },
  button1: {
    top: 253,
  },
  proskEgosadeGrafen1: {
    top: 70,
    left: 199,
    position: "absolute",
  },
  image1492Icon: {
    top: 57,
    width: 167,
    height: 167,
  },
  digitalMarketing: {
    left: 47,
    position: "absolute",
  },
  text7: {
    left: 10,
    position: "absolute",
    top: 8,
    lineHeight: 16,
  },
  buttonGroup: {
    top: 437,
    width: 425,
    height: 280,
    left: 0,
    position: "absolute",
  },
  development: {
    top: 5,
    fontSize: FontSize.buttonMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  image1493Icon: {
    top: 54,
    left: 261,
    width: 168,
    height: 160,
    position: "absolute",
  },
  proskEgosadeGrafen2: {
    top: 69,
    left: 35,
    position: "absolute",
  },
  text8: {
    left: 9,
    top: 8,
    lineHeight: 16,
    position: "absolute",
  },
  developmentParent: {
    top: 789,
    height: 214,
    left: 0,
  },
  button2: {
    top: 1035,
  },
  frameChild: {
    top: 1168,
    left: -132,
    width: 582,
    height: 324,
    position: "absolute",
  },
  frameItem: {
    top: 1145,
    left: 0,
  },
  cloudCommunication: {
    top: 1145,
    fontSize: FontSize.buttonMedium_size,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
  },
  text9: {
    top: 1151,
    left: 11,
    fontSize: FontSize.buttonMedium_size,
    lineHeight: 16,
    position: "absolute",
  },
  image1494Icon: {
    left: -2,
    width: 185,
    height: 185,
  },
  proskEgosadeGrafen3: {
    left: 189,
    height: 138,
    width: 226,
    fontFamily: FontFamily.montserratSemibold,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  button3: {
    top: 1390,
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    backgroundColor: Color.accessibleSystemOrangeLight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameInner: {
    top: 1499,
    left: 0,
  },
  frameChild1: {
    top: 1833,
    left: 5,
  },
  text10: {
    top: 1508,
    left: 12,
    position: "absolute",
    lineHeight: 16,
  },
  text11: {
    top: 1840,
    fontSize: FontSize.buttonMedium_size,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
  },
  content8: {
    top: 1503,
    left: 56,
    lineHeight: 22,
    position: "absolute",
  },
  publication: {
    top: 1837,
    left: 38,
    lineHeight: 22,
    position: "absolute",
  },
  proskEgosadeGrafen4: {
    top: 1563,
    left: 43,
    position: "absolute",
  },
  proskEgosadeGrafen5: {
    top: 1882,
    left: 39,
    position: "absolute",
  },
  image1495Icon: {
    top: 1548,
    left: 243,
    width: 169,
    height: 169,
    position: "absolute",
  },
  image1581Icon: {
    top: 1884,
    left: 263,
    width: 150,
    height: 121,
    position: "absolute",
  },
  button4: {
    top: 1738,
    left: 55,
    position: "absolute",
  },
  button5: {
    top: 2037,
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    backgroundColor: Color.accessibleSystemOrangeLight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    top: 1117,
    right: 5,
    height: 315,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  services: {
    height: 3395,
    backgroundColor: Color.labelColorDarkPrimary,
    top: 0,
  },
  transformingBusinessesThroug: {
    top: 98,
    fontSize: FontSize.size_21xl,
    width: 400,
    height: 122,
    lineHeight: 22,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
  },
  servicesMain: {
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default ServicesMain;
