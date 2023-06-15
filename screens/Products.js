import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Products = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.products}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.services, styles.faqLayout]}>
        <View style={styles.image1491} />
        <View style={[styles.image1492, styles.proskContainerPosition]} />
        <View style={[styles.statusbarIphone678Se, styles.groupPosition]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
          <View style={[styles.rightSide, styles.rightSidePosition]}>
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
        <Text
          style={[
            styles.proskEgosadeGrafenContainer,
            styles.proskContainerTypo3,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text style={[styles.text3, styles.text3Layout]} />
        <View style={styles.image1496} />
        <View style={[styles.faq, styles.groupPosition]}>
          <Image
            style={styles.faqChild}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
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
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={styles.groupContainer}>
            <View style={styles.contactParent}>
              <Text style={[styles.contact, styles.linksTypo]}>Contact</Text>
              <View style={styles.groupView}>
                <Image
                  style={[styles.groupChild9, styles.rightSidePosition]}
                  contentFit="cover"
                  source={require("../assets/group-356372.png")}
                />
                <Text style={[styles.text4, styles.investmentLayout1]}>
                  {" "}
                  +91 9407116798
                </Text>
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
            <View
              style={[
                styles.investmentDisclosureWrapper,
                styles.investmentLayout,
              ]}
            >
              <Text
                style={[styles.investmentDisclosure, styles.investmentLayout]}
              >
                investment disclosure
              </Text>
            </View>
            <View style={styles.faqsParent}>
              <Text style={[styles.faqs1, styles.faqs1Layout]}>FAQs</Text>
              <Text style={[styles.termsAndConditions, styles.faqs1Layout]}>
                Terms and Conditions
              </Text>
              <Text style={[styles.privacyPolicy, styles.faqs1Layout]}>
                Privacy Policy
              </Text>
            </View>
          </View>
          <Text style={styles.insparktechnologies2023}>
            Insparktechnologies 2023 @ All Right Reserved
          </Text>
          <Text style={[styles.insparktechnologiesgmailcom, styles.text4Typo]}>
            insparktechnologies@gmail.com
          </Text>
          <Text style={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Lacinia malesuada
            ullamcorper non eu aenean. Quam eu nunc scelerisque vitae.
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon1, styles.faqLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.image1512Icon, styles.insparkLogo1Layout]}
          contentFit="cover"
          source={require("../assets/image-1512.png")}
        />
        <Text style={[styles.products1, styles.text3Layout]}>Products</Text>
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <View style={[styles.search, styles.searchLayout]}>
          <Image
            style={[styles.image3Icon, styles.faqs1Layout]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Text style={[styles.searchProducts, styles.searchProductsTypo]}>
            search - Products
          </Text>
          <View style={[styles.searchChild, styles.searchLayout]} />
        </View>
        <Image
          style={styles.image1526Icon}
          contentFit="cover"
          source={require("../assets/image-1526.png")}
        />
        <View style={[styles.product1, styles.product1Layout]}>
          <Image
            style={[styles.image1527Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/image-1527.png")}
          />
          <Text style={[styles.startups, styles.startupsTypo]}>STARTUPS</Text>
        </View>
        <View style={[styles.product2, styles.productPosition]}>
          <Image
            style={[styles.image1528Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1528.png")}
          />
          <Text style={[styles.healthcare, styles.educabsTypo]}>
            HEALTHCARE+
          </Text>
        </View>
        <View style={[styles.product3, styles.productPosition]}>
          <Image
            style={styles.image1529Icon}
            contentFit="cover"
            source={require("../assets/image-1529.png")}
          />
          <Text style={[styles.publication, styles.educabsTypo]}>
            PUBLICATION
          </Text>
        </View>
        <View style={[styles.product4, styles.product4Layout]}>
          <Image
            style={[styles.image1530Icon, styles.product4Layout]}
            contentFit="cover"
            source={require("../assets/image-1530.png")}
          />
          <Text style={[styles.educabs, styles.educabsTypo]}>EDUCABS</Text>
        </View>
        <View style={[styles.product5, styles.product5Layout]}>
          <Image
            style={[styles.image1531Icon, styles.product5Layout]}
            contentFit="cover"
            source={require("../assets/image-1531.png")}
          />
          <Text style={[styles.youngersBlog, styles.educabsTypo]}>
            YOUNGERS BLOG
          </Text>
        </View>
        <View style={styles.product6}>
          <Image
            style={styles.image1532Icon}
            contentFit="cover"
            source={require("../assets/image-1532.png")}
          />
          <Text style={[styles.blissfulShopping, styles.educabsTypo]}>
            BLISSFUL SHOPPING
          </Text>
        </View>
        <View style={[styles.product7, styles.product7Layout]}>
          <Image
            style={[styles.image1533Icon, styles.product7Layout]}
            contentFit="cover"
            source={require("../assets/image-1533.png")}
          />
          <Text style={[styles.plantSetGrow, styles.startupsTypo]}>
            PLANT SET GROW
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox1]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox1]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Pressable
          style={[styles.button3, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Pressable
          style={[styles.button4, styles.buttonFlexBox1]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Pressable
          style={[styles.button5, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Pressable
          style={[styles.button6, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("IPhone14ProMax6")}
        >
          <Text style={styles.label}>Learn more</Text>
        </Pressable>
        <Image
          style={styles.servicesChild}
          contentFit="cover"
          source={require("../assets/rectangle-9.png")}
        />
        <LinearGradient
          style={[styles.servicesItem, styles.servicesChildShadowBox]}
          locations={[0, 1]}
          colors={["#dff6fb", "rgba(174, 226, 237, 0)"]}
        />
        <LinearGradient
          style={[styles.servicesInner, styles.servicesShadowBox]}
          locations={[0, 1]}
          colors={["#dff6fb", "rgba(174, 226, 237, 0)"]}
        />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.servicesShadowBox]}
          locations={[0, 1]}
          colors={["#dff6fb", "rgba(174, 226, 237, 0)"]}
        />
        <LinearGradient
          style={[styles.servicesChild1, styles.servicesShadowBox]}
          locations={[0, 1]}
          colors={["#dff6fb", "rgba(174, 226, 237, 0)"]}
        />
        <LinearGradient
          style={[styles.servicesChild2, styles.servicesChild2Position]}
          locations={[0, 1]}
          colors={["#dff6fb", "rgba(174, 226, 237, 0)"]}
        />
        <LinearGradient
          style={[styles.servicesChild3, styles.servicesChildShadowBox]}
          locations={[0, 1]}
          colors={["#dff6fb", "rgba(174, 226, 237, 0)"]}
        />
        <Text
          style={[
            styles.proskEgosadeGrafenContainer1,
            styles.proskContainerTypo3,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer2,
            styles.proskContainerTypo2,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer3,
            styles.proskContainerTypo1,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer4,
            styles.proskContainerTypo2,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer5,
            styles.proskContainerTypo,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer6,
            styles.proskContainerTypo,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer7,
            styles.proskContainerTypo1,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer8,
            styles.proskContainerTypo1,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer9,
            styles.proskContainerTypo,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer10,
            styles.servicesChild2Position,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer11,
            styles.proskContainerTypo3,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer12,
            styles.proskContainerTypo,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer13,
            styles.proskContainerTypo2,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
        <Text
          style={[
            styles.proskEgosadeGrafenContainer14,
            styles.proskContainerTypo3,
          ]}
        >
          <Text style={styles.text2}>{`                    

`}</Text>
          <Text
            style={styles.proskEgosadeGrafen}
          >{` prosk egosade grafen, i dekadade för nektiga ren med. autonas karat såsom klimatneutral nätbingo. Esk peligt. 

.  
`}</Text>
        </Text>
      </View>
      <Text style={styles.weAreBusiness}>{`
We Are Business



Developers

 `}</Text>
      <Text style={[styles.itsNotAbout, styles.timeTypo1]}>
        It’s not about ideas, It’s about making ideas happen
      </Text>
      <Pressable
        style={[styles.button7, styles.buttonFlexBox1]}
        onPress={() => navigation.navigate("IPhone14ProMax6")}
      >
        <Text style={[styles.label7, styles.text3Layout]}>Find More</Text>
      </Pressable>
      <View style={styles.image1480Parent}>
        <Image
          style={[styles.image1480Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-1480.png")}
        />
        <Text style={[styles.startups1, styles.educabs1FlexBox]}>Startups</Text>
        <Image
          style={[styles.image1481Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-1481.png")}
        />
        <Text style={[styles.healthcare1, styles.educabs1FlexBox]}>
          Healthcare +
        </Text>
        <Image
          style={[styles.image1482Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-1482.png")}
        />
        <Text style={[styles.publication1, styles.educabs1FlexBox]}>
          Publication
        </Text>
        <Image
          style={[styles.image1483Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-1483.png")}
        />
        <Text style={[styles.educabs1, styles.educabs1FlexBox]}>Educabs</Text>
        <Image
          style={[styles.image1484Icon, styles.youngersblogPosition]}
          contentFit="cover"
          source={require("../assets/image-1484.png")}
        />
        <Text style={[styles.youngersblog, styles.youngersblogPosition]}>
          YoungersBlog
        </Text>
        <Image
          style={[styles.image1485Icon, styles.investmentLayout]}
          contentFit="cover"
          source={require("../assets/image-1485.png")}
        />
        <Text
          style={[styles.blissfulShopping1, styles.plantSetGrow1FlexBox]}
        >{`Blissful Shopping `}</Text>
        <Image
          style={[styles.image1486Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1486.png")}
        />
        <Text style={[styles.plantSetGrow1, styles.plantSetGrow1FlexBox]}>
          Plant Set Grow
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1591.png")}
        />
      </View>
      <Pressable
        style={styles.emailBtn}
        onPress={() => navigation.navigate("IPhone14ProMax6")}
      >
        <View style={[styles.emailBtnChild, styles.emailShadowBox]} />
        <View style={[styles.emailBtnItem, styles.emailShadowBox]} />
        <Text style={[styles.yourEmailAddress, styles.searchProductsTypo]}>
          Your Email Address
        </Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
      <View style={styles.heading}>
        <View style={[styles.headingChild, styles.childBorder]} />
        <Text style={styles.joinOurCommunity}>Join Our Community</Text>
      </View>
      <View style={styles.socialMediaBtn}>
        <Image
          style={[styles.image9Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Image
          style={[styles.image10Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
        <Image
          style={[styles.image7Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
      </View>
      <Pressable
        style={[styles.image1550, styles.iconLayout]}
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
    position: "absolute",
  },
  proskContainerPosition: {
    left: 30,
    position: "absolute",
  },
  groupPosition: {
    overflow: "hidden",
    left: 0,
  },
  timeTypo: {
    fontFamily: FontFamily.satisfy,
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  rightSidePosition: {
    top: 3,
    position: "absolute",
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
  proskContainerTypo3: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 392,
    height: 209,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
  },
  text3Layout: {
    lineHeight: 22,
    letterSpacing: 0,
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
  linksTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_3xs,
    color: Color.labelColorDarkPrimary,
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "left",
  },
  investmentLayout1: {
    height: 3,
    top: 0,
  },
  linksPosition: {
    height: 13,
    width: 27,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  investmentLayout: {
    width: 116,
    position: "absolute",
  },
  faqs1Layout: {
    height: 22,
    position: "absolute",
  },
  text4Typo: {
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  searchLayout: {
    height: 48,
    position: "absolute",
  },
  searchProductsTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  product1Layout: {
    width: 362,
    position: "absolute",
  },
  iconPosition1: {
    borderBottomLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: 0,
  },
  startupsTypo: {
    color: Color.orange,
    fontFamily: FontFamily.poppinsSemibold,
    textTransform: "uppercase",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  productPosition: {
    left: 11,
    width: 385,
    position: "absolute",
  },
  iconPosition: {
    top: 41,
    position: "absolute",
  },
  educabsTypo: {
    height: 18,
    color: Color.orange,
    fontFamily: FontFamily.poppinsSemibold,
    textTransform: "uppercase",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  product4Layout: {
    width: 388,
    position: "absolute",
  },
  product5Layout: {
    width: 345,
    position: "absolute",
  },
  product7Layout: {
    width: 402,
    position: "absolute",
  },
  buttonFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.accessibleSystemOrangeLight,
    flexDirection: "row",
    position: "absolute",
  },
  buttonFlexBox: {
    left: 326,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    backgroundColor: Color.accessibleSystemOrangeLight,
    borderRadius: 7,
    flexDirection: "row",
    position: "absolute",
  },
  servicesChildShadowBox: {
    backgroundColor: "transparent",
    height: 329,
    width: 440,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  servicesShadowBox: {
    left: -5,
    backgroundColor: "transparent",
    height: 329,
    width: 440,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  servicesChild2Position: {
    top: 5605,
    position: "absolute",
  },
  proskContainerTypo2: {
    left: 32,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 209,
    width: 392,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  proskContainerTypo1: {
    left: 35,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 209,
    width: 392,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  proskContainerTypo: {
    left: 28,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 209,
    width: 392,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  timeTypo1: {
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout2: {
    height: 95,
    position: "absolute",
  },
  educabs1FlexBox: {
    display: "flex",
    top: 6,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  iconLayout1: {
    width: 117,
    position: "absolute",
  },
  youngersblogPosition: {
    left: 708,
    position: "absolute",
  },
  plantSetGrow1FlexBox: {
    width: 135,
    display: "flex",
    top: 6,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  emailShadowBox: {
    elevation: 3.65,
    shadowRadius: 3.65,
    backgroundColor: Color.labelColorLightPrimary,
    borderBottomLeftRadius: 29,
    borderTopRightRadius: 29,
    height: 44,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    left: 0,
  },
  iconLayout: {
    width: 32,
    position: "absolute",
  },
  vectorIcon: {
    top: 366,
    width: 503,
    height: 566,
    left: 0,
    position: "absolute",
  },
  image1491: {
    top: 998,
    left: 238,
    width: 199,
    height: 168,
    position: "absolute",
  },
  image1492: {
    top: 1278,
    width: 185,
    height: 167,
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
    width: 430,
    position: "absolute",
  },
  text1: {
    top: 301,
    fontFamily: FontFamily.roboto,
    left: 114,
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
    top: 199,
  },
  text2: {
    fontSize: FontSize.size_5xl,
  },
  proskEgosadeGrafen: {
    fontSize: FontSize.size_mid,
  },
  proskEgosadeGrafenContainer: {
    left: 34,
    top: 802,
    position: "absolute",
  },
  text3: {
    top: 2461,
    left: 186,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  image1496: {
    top: 2423,
    left: 44,
    width: 144,
    height: 142,
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
    fontSize: 10,
    lineHeight: 17,
    width: 341,
    height: 62,
    top: 28,
    fontFamily: FontFamily.montserratRegular,
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
    top: 7339,
    height: 618,
    width: 430,
    position: "absolute",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  contact: {
    width: 50,
    height: 8,
    color: Color.labelColorDarkPrimary,
    left: 7,
    top: 0,
    position: "absolute",
  },
  groupChild9: {
    right: 96,
    maxWidth: "100%",
    height: 17,
    overflow: "hidden",
    left: 0,
  },
  text4: {
    letterSpacing: 1,
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
    left: 24,
    textTransform: "capitalize",
    width: 91,
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
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "left",
  },
  linksWrapper: {
    marginLeft: -20.5,
  },
  investmentDisclosure: {
    height: 3,
    top: 0,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "left",
    right: 0,
  },
  investmentDisclosureWrapper: {
    height: 3,
    top: 0,
    right: 0,
  },
  faqs1: {
    width: 29,
    color: Color.gray_1200,
    height: 22,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  termsAndConditions: {
    top: 17,
    color: Color.gray_1200,
    height: 22,
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
    color: Color.gray_1200,
    height: 22,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    textAlign: "left",
    left: 0,
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
    left: 7,
    position: "absolute",
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
    letterSpacing: 0,
  },
  loremIpsumDolor: {
    top: 46,
    left: 289,
    fontSize: 6,
    lineHeight: 10,
    fontFamily: FontFamily.interRegular,
    height: 71,
    width: 121,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 7978,
    backgroundColor: Color.gray_600,
    height: 158,
    width: 430,
    position: "absolute",
  },
  vectorIcon1: {
    height: 616,
    top: 0,
    left: 0,
  },
  image1512Icon: {
    left: 25,
    width: 65,
    top: 42,
  },
  products1: {
    left: 164,
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: FontSize.size_5xl,
    top: 802,
    position: "absolute",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  vectorIcon2: {
    top: 723,
    height: 209,
    width: 430,
    left: 0,
    position: "absolute",
  },
  image3Icon: {
    top: 14,
    width: 20,
    left: 22,
  },
  searchProducts: {
    top: 10,
    left: 68,
    color: "rgba(0, 0, 0, 0.8)",
    width: 250,
    fontSize: FontSize.size_xl,
  },
  searchChild: {
    borderRadius: 32,
    backgroundColor: "rgba(192, 207, 237, 0.4)",
    borderColor: "#000",
    borderWidth: 1,
    width: 312,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  search: {
    top: 300,
    width: 318,
    left: 57,
  },
  image1526Icon: {
    top: 367,
    left: 8,
    width: 412,
    height: 340,
    position: "absolute",
  },
  image1527Icon: {
    top: 56,
    height: 282,
    width: 362,
    position: "absolute",
  },
  startups: {
    left: 113,
    width: 137,
    height: 17,
  },
  product1: {
    top: 1168,
    height: 338,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 362,
    left: 34,
  },
  image1528Icon: {
    height: 328,
    width: 385,
    borderBottomLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: 0,
  },
  healthcare: {
    left: 110,
    width: 213,
    height: 18,
  },
  product2: {
    top: 1945,
    height: 369,
    width: 385,
  },
  image1529Icon: {
    top: 61,
    height: 259,
    borderRadius: Border.br_3xs,
    width: 385,
    left: 0,
    position: "absolute",
  },
  publication: {
    left: 134,
    width: 213,
    height: 18,
  },
  product3: {
    top: 2748,
    height: 320,
    width: 385,
  },
  image1530Icon: {
    top: 54,
    height: 335,
    left: 0,
  },
  educabs: {
    left: 148,
    width: 213,
    height: 18,
  },
  product4: {
    top: 3525,
    height: 389,
    left: 18,
  },
  image1531Icon: {
    top: 88,
    height: 288,
    left: 0,
  },
  youngersBlog: {
    left: 71,
    width: 213,
    height: 18,
  },
  product5: {
    top: 4332,
    left: 42,
    height: 376,
  },
  image1532Icon: {
    top: 92,
    width: 369,
    height: 303,
    left: 0,
    position: "absolute",
  },
  blissfulShopping: {
    left: 75,
    width: 305,
  },
  product6: {
    top: 5148,
    width: 380,
    height: 395,
    left: 23,
    position: "absolute",
  },
  image1533Icon: {
    height: 376,
    top: 42,
    left: 0,
  },
  plantSetGrow: {
    left: 101,
    width: 211,
    height: 20,
  },
  product7: {
    top: 6001,
    height: 418,
    left: 18,
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
    top: 1856,
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.accessibleSystemOrangeLight,
    left: 315,
  },
  button1: {
    top: 2655,
  },
  button2: {
    top: 3437,
    left: 325,
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.accessibleSystemOrangeLight,
  },
  button3: {
    top: 5874,
  },
  button4: {
    top: 6731,
    paddingVertical: 9,
    paddingHorizontal: 14,
    height: 27,
    width: 83,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.accessibleSystemOrangeLight,
    left: 315,
  },
  button5: {
    top: 5039,
  },
  button6: {
    top: 4246,
  },
  servicesChild: {
    top: 1573,
    height: 329,
    width: 440,
    left: 0,
    position: "absolute",
  },
  servicesItem: {
    top: 2374,
    left: 0,
    position: "absolute",
  },
  servicesInner: {
    top: 3158,
  },
  rectangleLineargradient: {
    top: 3975,
  },
  servicesChild1: {
    top: 4769,
  },
  servicesChild2: {
    left: -10,
    backgroundColor: "transparent",
    height: 329,
    width: 440,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  servicesChild3: {
    top: 6448,
    left: -14,
    position: "absolute",
  },
  proskEgosadeGrafenContainer1: {
    top: 2494,
    left: 30,
    position: "absolute",
  },
  proskEgosadeGrafenContainer2: {
    top: 2379,
  },
  proskEgosadeGrafenContainer3: {
    top: 3282,
  },
  proskEgosadeGrafenContainer4: {
    top: 3150,
  },
  proskEgosadeGrafenContainer5: {
    top: 4107,
  },
  proskEgosadeGrafenContainer6: {
    top: 3962,
  },
  proskEgosadeGrafenContainer7: {
    top: 4901,
  },
  proskEgosadeGrafenContainer8: {
    top: 4769,
  },
  proskEgosadeGrafenContainer9: {
    top: 5749,
  },
  proskEgosadeGrafenContainer10: {
    left: 27,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 392,
    height: 209,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
  },
  proskEgosadeGrafenContainer11: {
    top: 6606,
    left: 34,
    position: "absolute",
  },
  proskEgosadeGrafenContainer12: {
    top: 6462,
  },
  proskEgosadeGrafenContainer13: {
    top: 1717,
  },
  proskEgosadeGrafenContainer14: {
    top: 1605,
    left: 30,
    position: "absolute",
  },
  services: {
    height: 8096,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 430,
    top: 0,
    left: 0,
  },
  weAreBusiness: {
    top: 117,
    fontSize: FontSize.size_21xl,
    lineHeight: 13,
    width: 396,
    height: 60,
    left: 24,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  itsNotAbout: {
    top: 246,
    fontSize: FontSize.size_mini,
    letterSpacing: -0.1,
    fontFamily: FontFamily.montserratSemibold,
    lineHeight: 15,
    left: 24,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  label7: {
    fontSize: FontSize.size_xl,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textAlign: "center",
  },
  button7: {
    marginLeft: -67,
    top: 722,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.accessibleSystemOrangeLight,
    borderRadius: Border.br_3xs,
    left: "50%",
  },
  image1480Icon: {
    width: 130,
    left: 7,
    top: 28,
  },
  startups1: {
    width: 145,
    left: 0,
    position: "absolute",
  },
  image1481Icon: {
    left: 200,
    borderRadius: Border.br_71xl,
    width: 101,
    top: 39,
  },
  healthcare1: {
    left: 181,
    width: 139,
    position: "absolute",
  },
  image1482Icon: {
    top: 37,
    left: 347,
    height: 89,
  },
  publication1: {
    left: 360,
    width: 104,
    position: "absolute",
  },
  image1483Icon: {
    left: 526,
    height: 87,
    top: 39,
  },
  educabs1: {
    left: 464,
    width: 223,
    position: "absolute",
  },
  image1484Icon: {
    top: 22,
    height: 118,
    width: 121,
  },
  youngersblog: {
    width: 122,
    display: "flex",
    top: 6,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  image1485Icon: {
    top: 38,
    left: 861,
    height: 85,
  },
  blissfulShopping1: {
    left: 851,
  },
  image1486Icon: {
    left: 1033,
    width: 114,
    height: 81,
  },
  plantSetGrow1: {
    left: 1022,
  },
  frameChild: {
    top: -21,
    left: 581,
    width: 586,
    height: 177,
    position: "absolute",
  },
  image1480Parent: {
    top: 976,
    left: -2,
    borderRadius: Border.br_6xl,
    width: 432,
    height: 135,
    position: "absolute",
  },
  emailBtnChild: {
    width: 273,
    left: 0,
  },
  emailBtnItem: {
    left: 277,
    width: 108,
  },
  yourEmailAddress: {
    top: 11,
    left: 16,
    fontSize: 13,
    width: 177,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
  },
  signUp: {
    left: 308,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 72,
    color: Color.labelColorDarkPrimary,
    textTransform: "capitalize",
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  emailBtn: {
    top: 7053,
    height: 44,
    left: 23,
    width: 385,
    position: "absolute",
  },
  headingChild: {
    top: 204,
    borderColor: "#1a1717",
    borderTopWidth: 0.5,
    width: 304,
    height: 1,
    position: "absolute",
  },
  joinOurCommunity: {
    left: 354,
    fontSize: 30,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    top: 0,
    position: "absolute",
  },
  heading: {
    top: 6936,
    left: -291,
    width: 659,
    height: 204,
    position: "absolute",
  },
  image9Icon: {
    height: 32,
    left: 114,
    top: 0,
  },
  image10Icon: {
    height: 32,
    left: 57,
    top: 0,
  },
  image7Icon: {
    height: 32,
    top: 0,
    left: 0,
  },
  socialMediaBtn: {
    top: 7170,
    left: 146,
    width: 146,
    height: 32,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image1550: {
    left: 383,
    top: 60,
    height: 23,
  },
  products: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default Products;
