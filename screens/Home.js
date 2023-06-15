import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <LinearGradient
        style={[styles.homeChild, styles.faqLayout1]}
        locations={[0, 1]}
        colors={["#c4fbff", "rgba(175, 226, 230, 0)"]}
      />
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("AboutUs")}
      >
        <Text style={[styles.label, styles.labelTypo]}>Services</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.faqLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIcon1Position]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon2}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={styles.text} />
      <Text style={[styles.weAreBusiness, styles.weAreBusinessLayout]}>{`
We Are Business



Developers

 `}</Text>
      <Text style={[styles.itsNotAbout, styles.timeTypo1]}>
        It’s not about ideas, It’s about making ideas happen
      </Text>
      <Pressable
        style={[styles.button1, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("ServicesMain")}
      >
        <Text style={[styles.label1, styles.labelTypo]}>Services</Text>
      </Pressable>
      <Text style={styles.glorifyYourBusinessContainer}>
        <Text style={styles.glorifyYourBusiness}>{`Glorify Your Business With Us
`}</Text>
        <Text style={styles.takeAGlance}>{`Take A Glance At Our Services
`}</Text>
      </Text>
      <View style={[styles.frameParent, styles.hero8Layout]}>
        <View style={styles.cuttingEdgeTechnologicalInnParent}>
          <Text
            style={[styles.cuttingEdgeTechnologicalInn, styles.focusOnUserTypo]}
          >{`Cutting-edge Technological Innovations: Inspark Technologies is at the forefront of technological advancements, continuously pushing the boundaries to deliver innovative solutions that address real-world challenges.

`}</Text>
          <Text
            style={[styles.transformingIndustriesInspa, styles.focusOnUserTypo]}
          >
            Transforming Industries: Inspark Technologies is transforming
            various industries by leveraging advanced technologies such as
            artificial intelligence, machine learning, and Internet of Things
            (IoT) to drive digital transformation and optimize business
            operations.
          </Text>
          <Text
            style={[styles.customizedSolutionsWith, styles.focusOnUserTypo]}
          >
            Customized Solutions: With a customer-centric approach, Inspark
            Technologies specializes in developing tailored solutions that cater
            to the unique needs and requirements of its clients, ensuring
            maximum efficiency and effectiveness.
          </Text>
          <Text style={[styles.focusOnUser, styles.focusOnUserTypo]}>
            Focus on User Experience: Inspark Technologies places great emphasis
            on creating exceptional user experiences, designing intuitive
            interfaces, and optimizing usability to drive user adoption and
            satisfaction.
          </Text>
        </View>
        <Text
          style={[styles.unleashingSpecializedExperti, styles.text16Layout]}
        >
          "Unleashing Specialized Expertise"
        </Text>
        <Image
          style={[styles.youngManPointingOnContract, styles.contentLayout]}
          contentFit="cover"
          source={require("../assets/young-man-pointing-on-contract.png")}
        />
      </View>
      <View style={[styles.homeInner, styles.homeInnerLayout]}>
        <View style={[styles.vectorParent, styles.homeInnerLayout]}>
          <Image
            style={[styles.frameChild, styles.faqLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-134.png")}
          />
          <Image
            style={[styles.twitterPost10, styles.twitterLayout]}
            contentFit="cover"
            source={require("../assets/twitter-post--10.png")}
          />
          <View style={[styles.twitterPost11, styles.twitterLayout]} />
          <Image
            style={[styles.linkedinPost3, styles.hero81Layout]}
            contentFit="cover"
            source={require("../assets/linkedin-post--3.png")}
          />
          <Image
            style={[styles.linkedinPost5, styles.twitterLayout]}
            contentFit="cover"
            source={require("../assets/linkedin-post--5.png")}
          />
        </View>
      </View>
      <View style={[styles.vectorGroup, styles.blog1Layout]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-1341.png")}
        />
        <Image
          style={styles.twitterPost101}
          contentFit="cover"
          source={require("../assets/twitter-post--101.png")}
        />
        <View style={[styles.twitterPost111, styles.postLayout]} />
        <Image
          style={styles.linkedinPost31}
          contentFit="cover"
          source={require("../assets/linkedin-post--31.png")}
        />
        <Image
          style={[styles.linkedinPost51, styles.postLayout]}
          contentFit="cover"
          source={require("../assets/linkedin-post--51.png")}
        />
      </View>
      <Text style={[styles.suggestedByLeading, styles.text16Layout]}>
        Suggested by leading industrial experts
      </Text>
      <Text
        style={[styles.feelFreeTo, styles.frameViewLayout]}
      >{`Feel Free To Contact Us!
Transferring Solutions Next Moment`}</Text>
      <View style={styles.image1480Parent}>
        <Image
          style={[styles.image1480Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/image-1480.png")}
        />
        <Text style={[styles.startups, styles.educabsFlexBox]}>Startups</Text>
        <Image
          style={[styles.image1481Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/image-1481.png")}
        />
        <Text style={[styles.healthcare, styles.educabsFlexBox]}>
          Healthcare +
        </Text>
        <Image
          style={styles.image1482Icon}
          contentFit="cover"
          source={require("../assets/image-1482.png")}
        />
        <Text style={[styles.publication, styles.educabsFlexBox]}>
          Publication
        </Text>
        <Image
          style={styles.image1483Icon}
          contentFit="cover"
          source={require("../assets/image-1483.png")}
        />
        <Text style={[styles.educabs, styles.educabsLayout]}>Educabs</Text>
        <Image
          style={styles.image1484Icon}
          contentFit="cover"
          source={require("../assets/image-1484.png")}
        />
        <Text style={styles.youngersblog}>YoungersBlog</Text>
        <Image
          style={styles.image1485Icon}
          contentFit="cover"
          source={require("../assets/image-1485.png")}
        />
        <Text
          style={[styles.blissfulShopping, styles.plantSetGrowTypo]}
        >{`Blissful Shopping `}</Text>
        <Image
          style={styles.image1486Icon}
          contentFit="cover"
          source={require("../assets/image-1486.png")}
        />
        <Text style={[styles.plantSetGrow, styles.plantSetGrowTypo]}>
          Plant Set Grow
        </Text>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/group-159.png")}
        />
      </View>
      <View style={[styles.hero8, styles.hero8Layout]}>
        <View style={[styles.hero81, styles.hero81Layout]}>
          <Text
            style={[styles.headlineOfModern, styles.headlineLayout]}
          >{`Technology `}</Text>
          <View style={styles.elementsscreenipad1}>
            <View style={[styles.rectangleParent, styles.groupParentPosition1]}>
              <View style={[styles.rectangle, styles.rectanglePosition4]} />
              <View style={[styles.rectangle1, styles.rectanglePosition4]} />
              <View style={[styles.iconsmoreParent, styles.iconsmorePosition3]}>
                <Image
                  style={[styles.iconsmore, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsmore.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
                <Text style={styles.designSystem}>Design System</Text>
                <Text style={[styles.mb, styles.mbPosition]}>28,6 Mb</Text>
                <Image
                  style={[styles.iconsbrush, styles.iconsbrushPosition]}
                  contentFit="cover"
                  source={require("../assets/iconsbrush.png")}
                />
              </View>
              <View style={[styles.iconsmoreGroup, styles.iconsmorePosition3]}>
                <Image
                  style={[styles.iconsmore, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsmore1.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/oval1.png")}
                />
                <Text style={styles.designSystem}>Digital Store</Text>
                <Text style={[styles.mb, styles.mbPosition]}>312 Gb</Text>
                <View style={styles.iconsbrushPosition}>
                  <View style={[styles.activity, styles.flashPosition]}>
                    <View
                      style={[styles.rectangle2, styles.rectanglePosition2]}
                    />
                    <Image
                      style={[styles.pathIcon, styles.pathIconPosition2]}
                      contentFit="cover"
                      source={require("../assets/path.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[styles.iconsmoreContainer, styles.iconsmorePosition3]}
              >
                <Image
                  style={[styles.iconsmore, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsmore2.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/oval2.png")}
                />
                <Text style={styles.designSystem}>Marketing Tools</Text>
                <Text style={[styles.mb, styles.mbPosition]}>692 Mb</Text>
                <Image
                  style={[styles.iconsbrush, styles.iconsbrushPosition]}
                  contentFit="cover"
                  source={require("../assets/iconsbrush1.png")}
                />
              </View>
              <View
                style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
              >
                <View
                  style={[styles.rectangle3, styles.groupParentPosition1]}
                />
                <Text style={styles.text1}>12,874</Text>
                <View style={[styles.groupParent, styles.groupPosition1]}>
                  <View
                    style={[styles.frameGroup, styles.groupParentPosition1]}
                  >
                    <View style={[styles.parent, styles.groupParentPosition1]}>
                      <Text style={[styles.text2, styles.textTypo2]}>
                        12,874
                      </Text>
                      <Image
                        style={[styles.ovalIcon3, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/oval3.png")}
                      />
                      <Text style={[styles.uploads, styles.decTypo1]}>
                        Uploads
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconsmore3, styles.iconsmorePosition]}
                      contentFit="cover"
                      source={require("../assets/iconsmore3.png")}
                    />
                  </View>
                  <Image
                    style={[styles.iconsdownload, styles.iconsmore3Layout]}
                    contentFit="cover"
                    source={require("../assets/iconsdownload.png")}
                  />
                </View>
                <View style={[styles.groupContainer, styles.groupPosition1]}>
                  <View
                    style={[styles.frameGroup, styles.groupParentPosition1]}
                  >
                    <View style={[styles.group, styles.groupParentPosition1]}>
                      <Text style={[styles.text3, styles.text3Position]}>
                        12,874
                      </Text>
                      <Image
                        style={[styles.ovalIcon4, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/oval4.png")}
                      />
                      <Text style={[styles.downloads, styles.text3Position]}>
                        Downloads
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconsmore4, styles.iconsmore4Layout]}
                      contentFit="cover"
                      source={require("../assets/iconsmore4.png")}
                    />
                  </View>
                  <Image
                    style={[styles.iconsdownload1, styles.iconsmore4Layout]}
                    contentFit="cover"
                    source={require("../assets/iconsdownload1.png")}
                  />
                </View>
                <Text style={[styles.from10Nov, styles.decTypo1]}>
                  From 10 Nov till 10 Dec
                </Text>
                <View
                  style={[styles.rectangleContainer, styles.from10NovPosition]}
                >
                  <View style={[styles.rectangle4, styles.rectangleLayout2]} />
                  <View style={[styles.rectangle5, styles.rectangle5Layout]} />
                  <View
                    style={[styles.rectangle6, styles.rectanglePosition1]}
                  />
                  <View style={[styles.rectangle7, styles.rectangleLayout2]} />
                  <View style={[styles.rectangle8, styles.rectangleLayout2]} />
                  <View style={styles.container}>
                    <Text style={[styles.text4, styles.decTypo1]}>11</Text>
                    <Text style={[styles.dec, styles.decTypo1]}>Dec</Text>
                    <Text style={[styles.dec1, styles.decTypo1]}>Dec</Text>
                    <Text style={[styles.dec2, styles.dec2Typo]}>Dec</Text>
                    <Text style={[styles.dec3, styles.decTypo1]}>Dec</Text>
                    <Text style={[styles.dec4, styles.decTypo1]}>Dec</Text>
                    <Text style={[styles.text5, styles.decTypo1]}>12</Text>
                    <Text style={[styles.text6, styles.dec2Typo]}>13</Text>
                    <Text style={[styles.text7, styles.decTypo1]}>14</Text>
                    <Text style={[styles.text8, styles.decTypo1]}>15</Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.statistics, styles.historyTypo]}>
                Statistics
              </Text>
              <Text style={[styles.shareFiles, styles.historyTypo]}>
                Share files
              </Text>
              <View style={[styles.logo, styles.logoPosition]}>
                <Image
                  style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle.png")}
                />
                <Image
                  style={[styles.rectangleIcon1, styles.rectangleIconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Text style={[styles.logo1, styles.textTypo1]}>Logo</Text>
              </View>
              <View style={[styles.group1, styles.parentPosition3]}>
                <Image
                  style={[styles.iconsgrid, styles.iconsgridPosition]}
                  contentFit="cover"
                  source={require("../assets/iconsgrid.png")}
                />
                <Text style={[styles.dashboard, styles.searchTypo]}>
                  Dashboard
                </Text>
              </View>
              <View style={[styles.activitiesParent, styles.parentPosition3]}>
                <Text style={[styles.activities, styles.searchTypo]}>
                  Activities
                </Text>
                <View style={[styles.iconsaction, styles.iconsgridPosition]}>
                  <View style={[styles.flash, styles.flashPosition]}>
                    <View
                      style={[styles.rectangle9, styles.rectanglePosition]}
                    />
                    <Image
                      style={[styles.pathIcon1, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/path1.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.searchParent, styles.parentPosition3]}>
                <Text style={[styles.search, styles.searchTypo]}>Search</Text>
                <Image
                  style={[styles.iconssearch, styles.iconsgridLayout]}
                  contentFit="cover"
                  source={require("../assets/iconssearch.png")}
                />
              </View>
              <View style={[styles.settingsParent, styles.parentPosition3]}>
                <Text style={[styles.settings, styles.searchTypo]}>
                  Settings
                </Text>
                <Image
                  style={[styles.iconssettings, styles.iconsgridLayout]}
                  contentFit="cover"
                  source={require("../assets/iconssettings.png")}
                />
              </View>
              <View style={[styles.profileParent, styles.parentPosition3]}>
                <Text style={[styles.profile, styles.searchTypo]}>Profile</Text>
                <Image
                  style={[styles.iconsuser, styles.iconsgridPosition]}
                  contentFit="cover"
                  source={require("../assets/iconsuser.png")}
                />
              </View>
              <View
                style={[
                  styles.elementsbuttonsmediumsimple,
                  styles.elementsbuttonsmediumrIconPosition,
                ]}
              >
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <View
                    style={[styles.rectangle10, styles.groupParentPosition1]}
                  />
                </View>
                <Text style={[styles.buttonMedium, styles.buttonTypo]}>
                  Go Premium
                </Text>
                <View style={[styles.iconsstar, styles.iconsstarPosition]}>
                  <View
                    style={[styles.frameGroup, styles.groupParentPosition1]}
                  >
                    <View
                      style={[styles.rectangle11, styles.rectanglePosition]}
                    />
                    <Image
                      style={[styles.pathIcon2, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/path2.png")}
                    />
                  </View>
                </View>
              </View>
              <Text style={[styles.menu, styles.logoPosition]}>Menu</Text>
              <Text style={[styles.friendsOnline, styles.logoPosition]}>
                Friends online
              </Text>
              <View style={[styles.groupView, styles.groupParentPosition]}>
                <View
                  style={[styles.groupParent1, styles.groupParentPosition1]}
                >
                  <Image
                    style={[styles.groupChild, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/group-6.png")}
                  />
                  <View
                    style={[
                      styles.uxDesignerParent,
                      styles.designerParentPosition,
                    ]}
                  >
                    <Text style={[styles.uxDesigner, styles.decTypo1]}>
                      UX Designer
                    </Text>
                    <Text style={[styles.jennyMoore, styles.mbLayout]}>
                      Jenny Moore
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.iconsmessage, styles.rectangle5Layout]}
                  contentFit="cover"
                  source={require("../assets/iconsmessage.png")}
                />
              </View>
              <View style={styles.groupWrapper}>
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <Image
                    style={[styles.groupItem, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/group-61.png")}
                  />
                  <View
                    style={[
                      styles.jennymgmailcomParent,
                      styles.designerParentPosition,
                    ]}
                  >
                    <Text style={[styles.uxDesigner, styles.decTypo1]}>
                      jennym@gmail.com
                    </Text>
                    <Text style={[styles.jennyMoore, styles.mbLayout]}>
                      Jenny Moore
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupParent3, styles.groupParentPosition]}>
                <View
                  style={[styles.groupParent4, styles.groupParentPosition1]}
                >
                  <Image
                    style={[styles.groupInner, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/group-62.png")}
                  />
                  <View
                    style={[
                      styles.photographerParent,
                      styles.designerParentPosition,
                    ]}
                  >
                    <Text style={[styles.uxDesigner, styles.decTypo1]}>
                      Photographer
                    </Text>
                    <Text style={[styles.jennyMoore, styles.mbLayout]}>
                      Mike Thompson
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.iconsmessage, styles.rectangle5Layout]}
                  contentFit="cover"
                  source={require("../assets/iconsmessage1.png")}
                />
              </View>
              <View style={[styles.groupParent5, styles.groupParentPosition]}>
                <View
                  style={[styles.groupParent6, styles.groupParentPosition1]}
                >
                  <Image
                    style={[styles.groupIcon, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/group-63.png")}
                  />
                  <View
                    style={[
                      styles.uiDesignerParent,
                      styles.designerParentPosition,
                    ]}
                  >
                    <Text style={[styles.uxDesigner, styles.decTypo1]}>
                      UI Designer
                    </Text>
                    <Text style={[styles.jennyMoore, styles.mbLayout]}>
                      Simara Hildy
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.iconsmessage, styles.rectangle5Layout]}
                  contentFit="cover"
                  source={require("../assets/iconsmessage2.png")}
                />
              </View>
              <Image
                style={[styles.frameChild1, styles.frameChild1Position]}
                contentFit="cover"
                source={require("../assets/group-10.png")}
              />
              <View style={[styles.rectangleParent1, styles.parentPosition1]}>
                <View style={[styles.rectangle12, styles.rectanglePosition4]} />
                <Image
                  style={[styles.iconssearch1, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/iconssearch1.png")}
                />
                <Text style={[styles.searchDesignSystem, styles.mbLayout]}>
                  Search design system
                </Text>
              </View>
              <Text style={styles.name}>Name</Text>
              <View
                style={[
                  styles.rectangleParent2,
                  styles.rectangleParentPosition3,
                ]}
              >
                <View style={[styles.rectangle12, styles.rectanglePosition4]} />
                <Image
                  style={[styles.ovalIcon5, styles.ovalIconPosition]}
                  contentFit="cover"
                  source={require("../assets/oval5.png")}
                />
                <Image
                  style={[styles.iconsimage, styles.iconsimagePosition1]}
                  contentFit="cover"
                  source={require("../assets/iconsimage.png")}
                />
                <Text style={[styles.images, styles.textTypo1]}>Images</Text>
                <Text style={[styles.text9, styles.textFlexBox]}>183</Text>
              </View>
              <View
                style={[
                  styles.rectangleParent3,
                  styles.rectangleParentPosition2,
                ]}
              >
                <View style={[styles.rectangle12, styles.rectanglePosition4]} />
                <Image
                  style={[styles.ovalIcon5, styles.ovalIconPosition]}
                  contentFit="cover"
                  source={require("../assets/oval6.png")}
                />
                <Image
                  style={[styles.iconsimage, styles.iconsimagePosition1]}
                  contentFit="cover"
                  source={require("../assets/iconsimage1.png")}
                />
                <Text style={[styles.images, styles.textTypo1]}>Layers</Text>
                <Text style={[styles.text10, styles.textFlexBox]}>488</Text>
              </View>
              <View
                style={[
                  styles.rectangleParent4,
                  styles.rectangleParentPosition1,
                ]}
              >
                <View style={[styles.rectangle12, styles.rectanglePosition4]} />
                <Image
                  style={[styles.ovalIcon7, styles.ovalIconPosition]}
                  contentFit="cover"
                  source={require("../assets/oval7.png")}
                />
                <View style={styles.iconsimagePosition1}>
                  <View style={[styles.bookmark, styles.sharePosition]}>
                    <View
                      style={[styles.rectangle16, styles.rectanglePosition2]}
                    />
                    <Image
                      style={[styles.pathIcon3, styles.pathIconPosition1]}
                      contentFit="cover"
                      source={require("../assets/path3.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.images, styles.textTypo1]}>Wishlists</Text>
                <Text style={[styles.text10, styles.textFlexBox]}>293</Text>
              </View>
              <View
                style={[
                  styles.rectangleParent5,
                  styles.rectangleParentPosition1,
                ]}
              >
                <View style={[styles.rectangle12, styles.rectanglePosition4]} />
                <Image
                  style={[styles.ovalIcon7, styles.ovalIconPosition]}
                  contentFit="cover"
                  source={require("../assets/oval8.png")}
                />
                <View style={styles.iconsimagePosition1}>
                  <View style={[styles.share, styles.sharePosition]}>
                    <View
                      style={[styles.rectangle16, styles.rectanglePosition2]}
                    />
                    <Image
                      style={[styles.pathIcon4, styles.pathIconPosition]}
                      contentFit="cover"
                      source={require("../assets/path4.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.images, styles.textTypo1]}>Shares</Text>
                <Text style={[styles.text12, styles.textFlexBox]}>572</Text>
              </View>
              <Text style={[styles.quickAccess, styles.parentPosition1]}>
                Quick access
              </Text>
              <Text style={[styles.history, styles.parentPosition1]}>
                History
              </Text>
              <View style={[styles.groupParent7, styles.parentPosition1]}>
                <View
                  style={[
                    styles.rectangleParent6,
                    styles.rectangleParentPosition,
                  ]}
                >
                  <View
                    style={[styles.rectangle19, styles.rectanglePosition1]}
                  />
                  <View style={styles.rectangleParent7}>
                    <View
                      style={[styles.rectangle20, styles.rectanglePosition4]}
                    />
                    <Image
                      style={[styles.iconsimage4, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/iconsimage2.png")}
                    />
                    <Text style={[styles.designTools, styles.designTypo]}>
                      Design tools
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.rectangleParent8,
                    styles.rectangleParentPosition,
                  ]}
                >
                  <View
                    style={[styles.rectangle19, styles.rectanglePosition1]}
                  />
                  <View style={styles.rectangleParent7}>
                    <View
                      style={[styles.rectangle20, styles.rectanglePosition4]}
                    />
                    <Image
                      style={[styles.iconsimage4, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/iconsimage3.png")}
                    />
                    <Text style={[styles.designTools, styles.designTypo]}>
                      Wireframes
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.rectangleParent10,
                    styles.rectangleParentPosition,
                  ]}
                >
                  <View
                    style={[styles.rectangle19, styles.rectanglePosition1]}
                  />
                  <View style={styles.rectangleParent7}>
                    <View
                      style={[styles.rectangle20, styles.rectanglePosition4]}
                    />
                    <Image
                      style={[styles.iconsimage4, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/iconsimage4.png")}
                    />
                    <Text style={[styles.designTools, styles.designTypo]}>
                      Layers system
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.rectangleParent12, styles.parentPosition1]}>
                <View style={[styles.rectangle12, styles.rectanglePosition4]} />
                <View style={[styles.frameParent1, styles.frameParentPosition]}>
                  <View
                    style={[
                      styles.designSystemParent,
                      styles.groupParentPosition1,
                    ]}
                  >
                    <Text style={[styles.designSystem1, styles.designTypo]}>
                      Design System
                    </Text>
                    <Image
                      style={[styles.iconstag, styles.iconstagPosition]}
                      contentFit="cover"
                      source={require("../assets/iconstag.png")}
                    />
                  </View>
                  <Text style={[styles.julianaKolpaniz, styles.name1Position]}>
                    Juliana Kolpaniz
                  </Text>
                  <Text style={[styles.text13, styles.name1Position]}>
                    17.10.2020
                  </Text>
                  <Image
                    style={[styles.frameChild2, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-21.png")}
                  />
                </View>
                <View style={[styles.frameParent2, styles.frameParentPosition]}>
                  <View
                    style={[styles.nameParent, styles.groupParentPosition1]}
                  >
                    <Text style={[styles.name1, styles.name1Position]}>
                      Name
                    </Text>
                    <View
                      style={[
                        styles.iconschevronDown,
                        styles.iconschevronPosition,
                      ]}
                    >
                      <View
                        style={[styles.chevronRight, styles.rectanglePosition3]}
                      >
                        <View
                          style={[styles.rectangle26, styles.rectanglePosition]}
                        />
                        <Image
                          style={[styles.pathIcon5, styles.iconGroupLayout]}
                          contentFit="cover"
                          source={require("../assets/path5.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.iconschevronDownParent,
                      styles.groupParentPosition1,
                    ]}
                  >
                    <View
                      style={[
                        styles.iconschevronDown1,
                        styles.iconschevronPosition,
                      ]}
                    >
                      <View
                        style={[
                          styles.chevronRight1,
                          styles.groupParentPosition1,
                        ]}
                      >
                        <View
                          style={[styles.rectangle26, styles.rectanglePosition]}
                        />
                        <Image
                          style={[styles.pathIcon5, styles.iconGroupLayout]}
                          contentFit="cover"
                          source={require("../assets/path6.png")}
                        />
                      </View>
                    </View>
                    <Text style={[styles.name1, styles.name1Position]}>
                      Modification
                    </Text>
                  </View>
                  <Text style={[styles.maker, styles.name1Position]}>
                    Maker
                  </Text>
                  <Text style={[styles.teams, styles.name1Position]}>
                    Teams
                  </Text>
                </View>
                <View
                  style={[
                    styles.davidGillroyParent,
                    styles.frameParentPosition,
                  ]}
                >
                  <Text style={[styles.julianaKolpaniz, styles.name1Position]}>
                    David Gillroy
                  </Text>
                  <Text style={[styles.text13, styles.name1Position]}>
                    22.11.2020
                  </Text>
                  <View
                    style={[styles.iconstagParent, styles.groupParentPosition1]}
                  >
                    <Image
                      style={[styles.iconstag1, styles.iconstagPosition]}
                      contentFit="cover"
                      source={require("../assets/iconstag1.png")}
                    />
                    <Text style={[styles.digitalTools, styles.designTypo]}>
                      Digital Tools
                    </Text>
                  </View>
                  <Image
                    style={[styles.frameChild3, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-211.png")}
                  />
                </View>
                <View
                  style={[
                    styles.samanthaMoonParent,
                    styles.frameParentPosition,
                  ]}
                >
                  <Text style={[styles.julianaKolpaniz, styles.name1Position]}>
                    Samantha Moon
                  </Text>
                  <Text style={[styles.text13, styles.name1Position]}>
                    23.11.2020
                  </Text>
                  <View
                    style={[styles.iconstagGroup, styles.groupParentPosition1]}
                  >
                    <Image
                      style={[styles.iconstag2, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/iconstag2.png")}
                    />
                    <Text style={[styles.qualityDesign, styles.designTypo]}>
                      Quality Design
                    </Text>
                  </View>
                  <Image
                    style={[styles.frameChild4, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-212.png")}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.elementsbuttonsmediumrIcon,
                  styles.elementsbuttonsmediumrIconPosition,
                ]}
              >
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <View
                    style={[styles.rectangle10, styles.groupParentPosition1]}
                  />
                </View>
                <Text
                  style={[styles.buttonMedium1, styles.buttonMedium1Position]}
                >{`Share More `}</Text>
                <View style={[styles.iconsshare, styles.iconsstarPosition]}>
                  <View style={[styles.share1, styles.groupParentPosition1]}>
                    <View
                      style={[styles.rectangle9, styles.rectanglePosition]}
                    />
                    <Image
                      style={[styles.pathIcon7, styles.pathIconPosition]}
                      contentFit="cover"
                      source={require("../assets/path7.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.rectangle30} />
          </View>
          <Image
            style={styles.pencilIcon}
            contentFit="cover"
            source={require("../assets/pencil.png")}
          />
          <Text style={[styles.headlineOfModern1, styles.headlineLayout]}>
            {" "}
            Education
          </Text>
          <Image
            style={styles.backpackIcon}
            contentFit="cover"
            source={require("../assets/backpack.png")}
          />
          <Image
            style={styles.notebookIcon}
            contentFit="cover"
            source={require("../assets/notebook.png")}
          />
          <Image
            style={[styles.pencilIcon1, styles.pencilIcon1Layout]}
            contentFit="cover"
            source={require("../assets/pencil1.png")}
          />
        </View>
        <View style={[styles.illustration, styles.illustrationLayout]}>
          <Image
            style={[
              styles.trafalgarHeaderIllustration,
              styles.illustrationLayout,
            ]}
            contentFit="cover"
            source={require("../assets/trafalgarheader-illustration-1.png")}
          />
        </View>
        <Text style={[styles.headlineOfModern2, styles.headlineLayout]}>
          HealthCare
        </Text>
      </View>
      <Text style={[styles.headlineOfModern3, styles.headlineLayout]}>
        Industry We Serve
      </Text>
      <Text
        style={[styles.platformsProducts, styles.text16Layout]}
      >{`Platforms & Products`}</Text>
      <Text style={[styles.guideToTechnology, styles.text16Layout]}>
        Guide to Technology stack
      </Text>
      <Pressable
        style={[styles.button2, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.label2}>Find More</Text>
      </Pressable>
      <Text style={[styles.text16, styles.text16Layout]}>.</Text>
      <LinearGradient
        style={styles.cover}
        locations={[0, 1]}
        colors={["#586fac", "rgba(38, 158, 239, 0)"]}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/cover.png")}
        >
          <View style={[styles.content, styles.contentLayout]}>
            <Text style={[styles.byChoosingInspark, styles.headlineLayout]}>
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
            style={styles.sketchAnnotationElementBrusIcon}
            contentFit="cover"
            source={require("../assets/sketchannotationelementbrushpenabstractdotflake.png")}
          />
          <Image
            style={[styles.illustrationsIcon, styles.contactGroupPosition]}
            contentFit="cover"
            source={require("../assets/illustrations.png")}
          />
        </ImageBackground>
      </LinearGradient>
      <View style={[styles.faq, styles.faqLayout]}>
        <View style={[styles.rectangleParent13, styles.rectangleLayout1]}>
          <Image
            style={[styles.groupChild1, styles.rectangleLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-25.png")}
          />
          <View style={[styles.rectangleView, styles.rectangleLayout1]} />
        </View>
        <View style={[styles.faqInner, styles.faqInnerLayout]}>
          <View
            style={[
              styles.whatIsWebflowAndWhyIsItParent,
              styles.faqInnerLayout,
            ]}
          >
            <Text style={[styles.whatIsWebflow, styles.webflowTypo]}>
              What is Webflow and why is it the best website builder?
            </Text>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-35602.png")}
            />
            <Text style={[styles.vitaeCongueEu, styles.howDoYou1Position]}>
              Vitae congue eu consequat ac felis placerat vestibulum lectus
              mauris ultrices. Cursus sit amet dictum sit amet justo donec enim
              diam porttitor lacus luctus accumsan tortor posuere.
            </Text>
            <View style={[styles.lineView, styles.groupChildPosition2]} />
            <Text style={styles.whatIsYour}>
              What is your favorite template from BRIX Templates?
            </Text>
            <Image
              style={[styles.groupChild3, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/group-35621.png")}
            />
            <View style={[styles.groupChild4, styles.groupChildPosition2]} />
            <Text style={[styles.whenWasWebflow, styles.howDoYou1Position]}>
              When was Webflow officially launched?
            </Text>
            <Image
              style={[styles.groupChild5, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/group-356211.png")}
            />
            <View style={[styles.groupChild6, styles.groupChildPosition2]} />
            <Text style={[styles.howDoYou, styles.howDoYouLayout]}>
              How do you clone a template from the Showcase?
            </Text>
            <Image
              style={[styles.groupChild7, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/group-356212.png")}
            />
            <View style={[styles.groupChild8, styles.groupChildPosition2]} />
            <Text style={[styles.howDoYou1, styles.howDoYou1Position]}>
              How do you integrate Jetboost with Webflow?
            </Text>
            <Image
              style={[styles.groupChild9, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/group-356213.png")}
            />
            <View style={[styles.groupChild10, styles.groupChildPosition2]} />
            <Text style={[styles.whyIsBrix, styles.howDoYouLayout]}>
              Why is BRIX Templates the best Webflow agency?
            </Text>
            <Image
              style={[styles.groupChild11, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-356214.png")}
            />
          </View>
        </View>
        <Text style={[styles.faqs, styles.orLayout]}>FAQs</Text>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.groupParent8, styles.emailPosition]}>
          <View style={styles.contactParent}>
            <Text style={[styles.contact, styles.linksTypo]}>Contact</Text>
            <View style={[styles.groupParent9, styles.investmentPosition]}>
              <Image
                style={[styles.groupChild12, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-35637.png")}
              />
              <Text style={[styles.text17, styles.text17Typo]}>
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
          <View style={[styles.linksWrapper, styles.linksLayout]}>
            <Text style={[styles.links, styles.linksLayout]}>Links</Text>
          </View>
          <View
            style={[
              styles.investmentDisclosureWrapper,
              styles.investmentPosition,
            ]}
          >
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
        <Text style={[styles.insparktechnologiesgmailcom, styles.text17Typo]}>
          insparktechnologies@gmail.com
        </Text>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Lacinia malesuada ullamcorper
          non eu aenean. Quam eu nunc scelerisque vitae.
        </Text>
      </View>
      <View style={[styles.blog1, styles.blog1Layout]}>
        <View style={styles.rectangleParent14}>
          <View style={[styles.rectangle31, styles.rectangleLayout]} />
          <Image
            style={[styles.image1487Icon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/image-1487.png")}
          />
          <Image
            style={[styles.iconsimage7, styles.iconsimagePosition]}
            contentFit="cover"
            source={require("../assets/iconsimage5.png")}
          />
          <Text
            style={[styles.reallyLongHeadline, styles.reallyTypo]}
          >{`Learn to Promote Your Business  `}</Text>
          <Image
            style={[styles.ovalIcon9, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval9.png")}
          />
          <Image
            style={[styles.iconsimage8, styles.iconsimageLayout]}
            contentFit="cover"
            source={require("../assets/iconsimage6.png")}
          />
          <View style={[styles.iconsheartParent, styles.iconsheartPosition2]}>
            <View style={[styles.iconsheart, styles.iconsheartPosition1]}>
              <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                <View style={[styles.rectangle32, styles.rectanglePosition2]} />
                <Image
                  style={[styles.pathIcon8, styles.pathIconPosition1]}
                  contentFit="cover"
                  source={require("../assets/path8.png")}
                />
              </View>
            </View>
            <Text style={[styles.text18, styles.textTypo]}>120</Text>
          </View>
          <View style={[styles.iconsheartGroup, styles.iconsheartPosition2]}>
            <View style={[styles.iconsheart1, styles.iconsheartPosition1]}>
              <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                <View style={[styles.rectangle32, styles.rectanglePosition2]} />
                <Image
                  style={[styles.pathIcon4, styles.pathIconPosition]}
                  contentFit="cover"
                  source={require("../assets/path9.png")}
                />
              </View>
            </View>
            <Text style={[styles.text19, styles.textPosition2]}>69</Text>
          </View>
          <View style={[styles.rectangle34, styles.rectangleLayout]} />
          <Image
            style={[styles.iconsimage9, styles.iconsimagePosition]}
            contentFit="cover"
            source={require("../assets/iconsimage7.png")}
          />
          <Text
            style={[styles.reallyLongHeadline1, styles.ovalParentPosition]}
          >{`How to Start A Business `}</Text>
          <View style={[styles.ovalParent, styles.ovalParentPosition]}>
            <Image
              style={[styles.ovalIcon10, styles.ovalIconLayout]}
              contentFit="cover"
              source={require("../assets/oval10.png")}
            />
            <Image
              style={[styles.iconsimage10, styles.iconsimageLayout]}
              contentFit="cover"
              source={require("../assets/iconsimage8.png")}
            />
            <View style={[styles.group2, styles.groupPosition]}>
              <Text style={[styles.mallyLure, styles.mallyTypo]}>
                Mally Lure
              </Text>
              <Text style={[styles.dec2020, styles.decTypo]}>
                19 DEC • 2020
              </Text>
            </View>
            <View
              style={[styles.iconsheartContainer, styles.iconsheartPosition]}
            >
              <View style={[styles.iconsheart, styles.iconsheartPosition1]}>
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <View
                    style={[styles.rectangle32, styles.rectanglePosition2]}
                  />
                  <Image
                    style={[styles.pathIcon8, styles.pathIconPosition1]}
                    contentFit="cover"
                    source={require("../assets/path10.png")}
                  />
                </View>
              </View>
              <Text style={[styles.text20, styles.textPosition1]}>120</Text>
            </View>
            <View style={[styles.iconsheartParent1, styles.iconsheartPosition]}>
              <View style={[styles.iconsheart1, styles.iconsheartPosition1]}>
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <View
                    style={[styles.rectangle32, styles.rectanglePosition2]}
                  />
                  <Image
                    style={[styles.pathIcon4, styles.pathIconPosition]}
                    contentFit="cover"
                    source={require("../assets/path11.png")}
                  />
                </View>
              </View>
              <Text style={[styles.text21, styles.textPosition1]}>69</Text>
            </View>
          </View>
          <View style={[styles.rectangle37, styles.rectangle37Position]} />
          <Image
            style={[styles.image1489Icon, styles.rectangle37Position]}
            contentFit="cover"
            source={require("../assets/image-1489.png")}
          />
          <Text
            style={[styles.reallyLongHeadline2, styles.reallyTypo]}
          >{`Travel Hacks For Beginners `}</Text>
          <View style={[styles.ovalGroup, styles.reallyLayout]}>
            <Image
              style={[styles.ovalIcon10, styles.ovalIconLayout]}
              contentFit="cover"
              source={require("../assets/oval11.png")}
            />
            <Image
              style={[styles.iconsimage10, styles.iconsimageLayout]}
              contentFit="cover"
              source={require("../assets/iconsimage9.png")}
            />
            <View style={[styles.group3, styles.groupPosition]}>
              <Text style={[styles.katyOlsen, styles.mallyTypo]}>
                Katy Olsen
              </Text>
              <Text style={[styles.dec20201, styles.decTypo]}>
                18 DEC • 2020
              </Text>
            </View>
            <View
              style={[styles.iconsheartContainer, styles.iconsheartPosition]}
            >
              <View style={[styles.iconsheart, styles.iconsheartPosition1]}>
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <View
                    style={[styles.rectangle32, styles.rectanglePosition2]}
                  />
                  <Image
                    style={[styles.pathIcon8, styles.pathIconPosition1]}
                    contentFit="cover"
                    source={require("../assets/path12.png")}
                  />
                </View>
              </View>
              <Text style={[styles.text22, styles.textPosition]}>120</Text>
            </View>
            <View style={[styles.iconsheartParent1, styles.iconsheartPosition]}>
              <View style={[styles.iconsheart1, styles.iconsheartPosition1]}>
                <View style={[styles.frameGroup, styles.groupParentPosition1]}>
                  <View style={[styles.rectangle9, styles.rectanglePosition]} />
                  <Image
                    style={[styles.pathIcon4, styles.pathIconPosition]}
                    contentFit="cover"
                    source={require("../assets/path13.png")}
                  />
                </View>
              </View>
              <Text style={[styles.text23, styles.textPosition]}>69</Text>
            </View>
          </View>
          <Text style={[styles.mallyLure1, styles.mallyTypo]}>
            Jacob Suzzla
          </Text>
          <Text style={[styles.dec20202, styles.dec20202Position]}>
            20 DEC • 2020
          </Text>
        </View>
        <Image
          style={styles.image1488Icon}
          contentFit="cover"
          source={require("../assets/image-1488.png")}
        />
        <Text style={styles.longHeadline}>Blogs</Text>
      </View>
      <View style={[styles.frameParent3, styles.contactUsPosition]}>
        <View style={[styles.rectangleWrapper, styles.frameChild5Layout]}>
          <View style={[styles.frameChild5, styles.frameChild5Layout]} />
        </View>
        <View style={[styles.frameWrapper, styles.testingIconPosition]}>
          <View style={[styles.groupParent10, styles.testingIconPosition]}>
            <View style={[styles.groupFrame, styles.groupLayout]}>
              <View style={[styles.groupWrapper1, styles.groupLayout]}>
                <View style={[styles.groupWrapper1, styles.groupLayout]}>
                  <Text style={[styles.graphicDesigning, styles.content1Typo]}>
                    Graphic Designing
                  </Text>
                  <Text style={[styles.digitalMarketing, styles.content1Typo]}>
                    Digital Marketing
                  </Text>
                  <Text
                    style={[styles.development, styles.content1Typo]}
                  >{`Development `}</Text>
                  <Text
                    style={[styles.cloudCommunication, styles.content1Typo]}
                  >{`Cloud Communication `}</Text>
                  <Image
                    style={[styles.testingIcon, styles.testingIconPosition]}
                    contentFit="cover"
                    source={require("../assets/testing.png")}
                  />
                  <Text style={[styles.content1, styles.content1Typo]}>
                    Content
                  </Text>
                  <View style={styles.view}>
                    <View style={[styles.rignInV2, styles.rignChildLayout2]}>
                      <View
                        style={[styles.rignInV2Child, styles.rignChildLayout2]}
                      />
                      <View
                        style={[styles.rignInV2Item, styles.groupChildLayout]}
                      />
                      <Image
                        style={[styles.rignInV2Inner, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-30.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child1, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-31.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child2, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-32.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child3, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-33.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/1982.png")}
                      />
                      <View
                        style={[
                          styles.fordMustangBoss429692,
                          styles.linksLayout,
                        ]}
                      />
                      <Image
                        style={[styles.jumpsuitIcon, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/jumpsuit.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child4, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/group-153.png")}
                      />
                      <View style={styles.theBlackhartOfStPaul1415Parent}>
                        <Text
                          style={[styles.theBlackhartOf, styles.blackTypo]}
                        >{`THE BLACKHART OF ST. PAUL
1415 UNIVERSITY AVE W`}</Text>
                        <Text
                          style={[styles.timeMachine, styles.wTypo]}
                        >{`TIME MACHINE >>>
NEW YEARS EVE PERTY (12.31.21)
DANCE PARTY & KAROKE
CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      </View>
                      <View style={[styles.blackParent, styles.iconPosition3]}>
                        <Text style={[styles.black, styles.blackTypo]}>
                          BLACK
                        </Text>
                        <View
                          style={[
                            styles.groupParent11,
                            styles.groupChildPosition,
                          ]}
                        >
                          <View
                            style={[
                              styles.rectangleParent15,
                              styles.groupChildPosition,
                            ]}
                          >
                            <View
                              style={[
                                styles.groupChild13,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild14,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild15,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild16,
                                styles.groupChildPosition,
                              ]}
                            />
                          </View>
                          <View style={styles.groupChildShadowBox} />
                        </View>
                        <Image
                          style={styles.groupChild18}
                          contentFit="cover"
                          source={require("../assets/group-145.png")}
                        />
                        <Text style={[styles.harte, styles.blackTypo]}>
                          HARTE
                        </Text>
                      </View>
                      <Text style={[styles.w, styles.wTypo]}>W/</Text>
                      <Text
                        style={[styles.djNola, styles.djNolaLayout]}
                      >{`DJ Nola
& LavCee Levis`}</Text>
                      <Text style={[styles.ringIn, styles.djNolaTypo]}>
                        Ring in...
                      </Text>
                      <Text
                        style={[styles.cashPrizeFor, styles.wTypo]}
                      >{`CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      <View
                        style={[styles.rignInV2Child5, styles.iconPosition4]}
                      />
                      <Image
                        style={[styles.rignInV2Child6, styles.designPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-34.png")}
                      />
                    </View>
                    <View style={[styles.rignInV21, styles.rignChildLayout2]}>
                      <View
                        style={[styles.rignInV2Child7, styles.rignChildLayout2]}
                      />
                      <Image
                        style={[styles.rignInV2Inner, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-301.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child1, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-311.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child2, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-321.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child3, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-331.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/19821.png")}
                      />
                      <View
                        style={[
                          styles.fordMustangBoss429692,
                          styles.linksLayout,
                        ]}
                      />
                      <Image
                        style={[styles.jumpsuitIcon, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/jumpsuit1.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child4, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/group-1531.png")}
                      />
                      <View style={styles.theBlackhartOfStPaul1415Parent}>
                        <Text
                          style={[styles.theBlackhartOf, styles.blackTypo]}
                        >{`THE BLACKHART OF ST. PAUL
1415 UNIVERSITY AVE W`}</Text>
                        <Text
                          style={[styles.timeMachine, styles.wTypo]}
                        >{`TIME MACHINE >>>
NEW YEARS EVE PERTY (12.31.21)
DANCE PARTY & KAROKE
CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      </View>
                      <View style={[styles.blackParent, styles.iconPosition3]}>
                        <Text style={[styles.black, styles.blackTypo]}>
                          BLACK
                        </Text>
                        <View
                          style={[
                            styles.groupParent11,
                            styles.groupChildPosition,
                          ]}
                        >
                          <View
                            style={[
                              styles.rectangleParent15,
                              styles.groupChildPosition,
                            ]}
                          >
                            <View
                              style={[
                                styles.groupChild13,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild14,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild15,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild16,
                                styles.groupChildPosition,
                              ]}
                            />
                          </View>
                          <View style={styles.groupChildShadowBox} />
                        </View>
                        <Image
                          style={styles.groupChild18}
                          contentFit="cover"
                          source={require("../assets/group-1451.png")}
                        />
                        <Text style={[styles.harte, styles.blackTypo]}>
                          HARTE
                        </Text>
                      </View>
                      <Text style={[styles.w, styles.wTypo]}>W/</Text>
                      <Text
                        style={[styles.djNola, styles.djNolaLayout]}
                      >{`DJ Nola
& LavCee Levis`}</Text>
                      <Text style={[styles.ringIn, styles.djNolaTypo]}>
                        Ring in...
                      </Text>
                      <Text
                        style={[styles.cashPrizeFor, styles.wTypo]}
                      >{`CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      <View
                        style={[styles.rignInV2Child5, styles.iconPosition4]}
                      />
                      <Image
                        style={[styles.rignInV2Child6, styles.designPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-341.png")}
                      />
                    </View>
                    <View style={[styles.rignInV22, styles.rignChildLayout2]}>
                      <View
                        style={[
                          styles.rignInV2Child15,
                          styles.rignChildLayout2,
                        ]}
                      />
                      <Image
                        style={[styles.rignInV2Inner, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-302.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child1, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-312.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child2, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-322.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child3, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-332.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/19822.png")}
                      />
                      <View
                        style={[
                          styles.fordMustangBoss429692,
                          styles.linksLayout,
                        ]}
                      />
                      <Image
                        style={[styles.jumpsuitIcon, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/jumpsuit2.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child4, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/group-1532.png")}
                      />
                      <View style={styles.theBlackhartOfStPaul1415Parent}>
                        <Text
                          style={[styles.theBlackhartOf, styles.blackTypo]}
                        >{`THE BLACKHART OF ST. PAUL
1415 UNIVERSITY AVE W`}</Text>
                        <Text
                          style={[styles.timeMachine, styles.wTypo]}
                        >{`TIME MACHINE >>>
NEW YEARS EVE PERTY (12.31.21)
DANCE PARTY & KAROKE
CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      </View>
                      <View style={[styles.blackParent, styles.iconPosition3]}>
                        <Text style={[styles.black, styles.blackTypo]}>
                          BLACK
                        </Text>
                        <View
                          style={[
                            styles.groupParent11,
                            styles.groupChildPosition,
                          ]}
                        >
                          <View
                            style={[
                              styles.rectangleParent15,
                              styles.groupChildPosition,
                            ]}
                          >
                            <View
                              style={[
                                styles.groupChild13,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild14,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild15,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild16,
                                styles.groupChildPosition,
                              ]}
                            />
                          </View>
                          <View style={styles.groupChildShadowBox} />
                        </View>
                        <Image
                          style={styles.groupChild18}
                          contentFit="cover"
                          source={require("../assets/group-1452.png")}
                        />
                        <Text style={[styles.harte, styles.blackTypo]}>
                          HARTE
                        </Text>
                      </View>
                      <Text style={[styles.w, styles.wTypo]}>W/</Text>
                      <Text
                        style={[styles.djNola, styles.djNolaLayout]}
                      >{`DJ Nola
& LavCee Levis`}</Text>
                      <Text style={[styles.ringIn, styles.djNolaTypo]}>
                        Ring in...
                      </Text>
                      <Text
                        style={[styles.cashPrizeFor, styles.wTypo]}
                      >{`CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      <View
                        style={[styles.rignInV2Child5, styles.iconPosition4]}
                      />
                      <Image
                        style={[styles.rignInV2Child6, styles.designPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-342.png")}
                      />
                    </View>
                    <View style={[styles.rignInV23, styles.rignChildLayout2]}>
                      <View
                        style={[
                          styles.rignInV2Child23,
                          styles.rignChildLayout2,
                        ]}
                      />
                      <Image
                        style={[styles.rignInV2Inner, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-303.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child1, styles.rignChildLayout1]}
                        contentFit="cover"
                        source={require("../assets/vector-313.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child2, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-323.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child3, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-333.png")}
                      />
                      <Image
                        style={[styles.icon1, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/19823.png")}
                      />
                      <View
                        style={[
                          styles.fordMustangBoss429692,
                          styles.linksLayout,
                        ]}
                      />
                      <Image
                        style={[styles.jumpsuitIcon, styles.iconPosition4]}
                        contentFit="cover"
                        source={require("../assets/jumpsuit3.png")}
                      />
                      <Image
                        style={[styles.rignInV2Child4, styles.rignChildLayout]}
                        contentFit="cover"
                        source={require("../assets/group-1533.png")}
                      />
                      <View style={styles.theBlackhartOfStPaul1415Parent}>
                        <Text
                          style={[styles.theBlackhartOf, styles.blackTypo]}
                        >{`THE BLACKHART OF ST. PAUL
1415 UNIVERSITY AVE W`}</Text>
                        <Text
                          style={[styles.timeMachine, styles.wTypo]}
                        >{`TIME MACHINE >>>
NEW YEARS EVE PERTY (12.31.21)
DANCE PARTY & KAROKE
CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      </View>
                      <View style={[styles.blackParent, styles.iconPosition3]}>
                        <Text style={[styles.black, styles.blackTypo]}>
                          BLACK
                        </Text>
                        <View
                          style={[
                            styles.groupParent11,
                            styles.groupChildPosition,
                          ]}
                        >
                          <View
                            style={[
                              styles.rectangleParent15,
                              styles.groupChildPosition,
                            ]}
                          >
                            <View
                              style={[
                                styles.groupChild13,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild14,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild15,
                                styles.groupChildPosition,
                              ]}
                            />
                            <View
                              style={[
                                styles.groupChild16,
                                styles.groupChildPosition,
                              ]}
                            />
                          </View>
                          <View style={styles.groupChildShadowBox} />
                        </View>
                        <Image
                          style={styles.groupChild18}
                          contentFit="cover"
                          source={require("../assets/group-1453.png")}
                        />
                        <Text style={[styles.harte, styles.blackTypo]}>
                          HARTE
                        </Text>
                      </View>
                      <Text style={[styles.w, styles.wTypo]}>W/</Text>
                      <Text
                        style={[styles.djNola, styles.djNolaLayout]}
                      >{`DJ Nola
& LavCee Levis`}</Text>
                      <Text style={[styles.ringIn, styles.djNolaTypo]}>
                        Ring in...
                      </Text>
                      <Text
                        style={[styles.cashPrizeFor, styles.wTypo]}
                      >{`CASH PRIZE FOR BEST 1981 COSTUME.
9 PM. - $10`}</Text>
                      <View
                        style={[styles.rignInV2Child5, styles.iconPosition4]}
                      />
                      <Image
                        style={[styles.rignInV2Child6, styles.designPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-343.png")}
                      />
                    </View>
                  </View>
                  <Text
                    style={[styles.publication1, styles.content1Typo]}
                  >{`Publication `}</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.image1511Icon}
              contentFit="cover"
              source={require("../assets/image-1511.png")}
            />
            <Image
              style={[styles.image1509Icon, styles.iconPosition3]}
              contentFit="cover"
              source={require("../assets/image-1509.png")}
            />
            <Image
              style={[styles.image1507Icon, styles.iconPosition3]}
              contentFit="cover"
              source={require("../assets/image-1507.png")}
            />
            <Image
              style={styles.image1508Icon}
              contentFit="cover"
              source={require("../assets/image-1508.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.buttonParent, styles.buttonLayout]}>
        <Pressable
          style={[styles.button3, styles.buttonLayout]}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <Text style={styles.label3}>Services</Text>
        </Pressable>
        <Text style={[styles.contactUs, styles.contactUsPosition]}>
          Contact Us
        </Text>
      </View>
      <Image
        style={[styles.image1512Icon, styles.comp382Position]}
        contentFit="cover"
        source={require("../assets/image-1512.png")}
      />
      <View style={styles.homeInner1}>
        <LinearGradient
          style={styles.frameLineargradient}
          locations={[0, 1]}
          colors={["rgba(201, 97, 222, 0.8)", "rgba(41, 87, 163, 0.8)"]}
        >
          <View
            style={[
              styles.designerstandingconfidentParent,
              styles.weAreBusinessLayout,
            ]}
          >
            <Image
              style={styles.designerstandingconfidentIcon}
              contentFit="cover"
              source={require("../assets/designerstandingconfident.png")}
            />
            <Text style={[styles.myNameIsContainer, styles.dec20202Position]}>
              <Text style={styles.myNameIs}>
                My name is Sourasith Phomhome. I’m a UI Designer and a instrutor
                based in Montreal. I’m curently working with Design+Code. I’m
                passionate about creating digital experiences and teaching
                design. My goal is to help beginners to grow their skills...
              </Text>
              <Text style={styles.linksTypo}>read more</Text>
            </Text>
            <Text style={[styles.aboutUs, styles.linksTypo]}>
              <Text style={styles.about}>About</Text>
              <Text style={styles.text24}>{`  `}</Text>
              <Text style={styles.about}>Us</Text>
            </Text>
            <Image
              style={[styles.smallCircleIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/small-circle.png")}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.contactInfo}>
        <View style={styles.frameParent4}>
          <View style={[styles.visitUsParent, styles.vectorIcon1Position]}>
            <Text style={styles.visitUs}>Visit us</Text>
            <Text
              style={[styles.westheimerRdSanta, styles.text25Typo]}
            >{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</Text>
          </View>
          <View style={[styles.contactGroup, styles.contactGroupPosition]}>
            <Text style={styles.visitUs}>Contact</Text>
            <View style={styles.contactcompanycomParent}>
              <Text style={[styles.contactcompanycom, styles.text25Typo]}>
                contact@company.com
              </Text>
              <Text style={[styles.text25, styles.text25Typo]}>
                (406) 555-0120
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.fieldEmail, styles.button4Position]}>
        <Text style={[styles.email, styles.emailPosition]}>Email</Text>
      </View>
      <View style={[styles.uiDesignParent, styles.buttonMedium1Position]}>
        <View style={[styles.uiDesign, styles.uiDesignLayout]}>
          <View style={[styles.rectangleParent19, styles.uiDesignLayout]}>
            <View style={[styles.frameChild6, styles.frameChildPosition]} />
            <View style={[styles.parent1, styles.icon6Layout]}>
              <Image
                style={[styles.icon5, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/1.png")}
              />
              <Image
                style={[styles.icon6, styles.icon6Layout]}
                contentFit="cover"
                source={require("../assets/2.png")}
              />
              <Image
                style={[styles.icon7, styles.iconLayout2]}
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
          <View style={[styles.rectangleParent20, styles.designLayout]}>
            <View style={[styles.frameChild7, styles.designLayout]} />
            <Image
              style={[styles.d2Icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/3d-2.png")}
            />
          </View>
          <View style={[styles.rectangleParent21, styles.frameChild8Layout]}>
            <View style={[styles.frameChild8, styles.frameChild8Layout]} />
            <Text style={[styles.mockups, styles.mockupsTypo]}>Mockups</Text>
          </View>
        </View>
        <View style={[styles.mockups1, styles.mockups1Position]}>
          <View style={[styles.rectangleParent20, styles.designLayout]}>
            <View style={[styles.frameChild7, styles.designLayout]} />
            <Image
              style={[styles.comp382, styles.comp382Position]}
              contentFit="cover"
              source={require("../assets/comp-38-2.png")}
            />
          </View>
          <View style={[styles.rectangleParent21, styles.frameChild8Layout]}>
            <View style={[styles.frameChild8, styles.frameChild8Layout]} />
            <Text style={[styles.mockups, styles.mockupsTypo]}>Mockups</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/rectangle-4027.png")}
      />
      <View style={[styles.statusbarIphone678Se, styles.emailPosition]}>
        <Text style={[styles.time, styles.timeTypo]}>9:41 AM</Text>
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.investmentPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Text style={[styles.text26, styles.timeTypo]}>100%</Text>
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
            source={require("../assets/wifi.png")}
          />
        </View>
      </View>
      <Text style={styles.text27}>{` `}</Text>
      <View style={[styles.button4, styles.button4Position]}>
        <Text style={styles.label2}>Send</Text>
      </View>
      <Text style={[styles.or, styles.orLayout]}>OR</Text>
      <Text style={[styles.recentWorks, styles.pencilIcon1Layout]}>
        Recent Works
      </Text>
      <Text style={[styles.learNMore, styles.labelTypo]}>Lear n More</Text>
      <View style={styles.image1535Parent}>
        <Image
          style={[styles.image1535Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/image-1535.png")}
        />
        <Image
          style={[styles.image1536Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/image-1536.png")}
        />
        <Image
          style={[styles.image1537Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-1537.png")}
        />
        <Image
          style={[styles.image1538Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-1538.png")}
        />
        <Image
          style={styles.image1539Icon}
          contentFit="cover"
          source={require("../assets/image-1539.png")}
        />
        <Image
          style={[styles.image1540Icon, styles.mockups1Position]}
          contentFit="cover"
          source={require("../assets/image-1540.png")}
        />
        <Image
          style={[styles.image1541Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1541.png")}
        />
        <Image
          style={styles.image1542Icon}
          contentFit="cover"
          source={require("../assets/image-1542.png")}
        />
        <Image
          style={[styles.image1544Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1544.png")}
        />
        <Image
          style={[styles.image1545Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-1545.png")}
        />
        <Image
          style={[styles.image1546Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-1546.png")}
        />
        <Text style={styles.html}>HTML</Text>
        <Text style={[styles.css, styles.cssTypo]}>CSS</Text>
        <Text style={[styles.xml, styles.cssTypo]}>XML</Text>
        <Text style={[styles.python, styles.pythonTypo]}>PYTHON</Text>
        <Text style={[styles.bootstrap, styles.pythonTypo]}>BOOTSTRAP</Text>
        <Text style={[styles.django, styles.pythonTypo]}>DJANGO</Text>
        <Text style={styles.https}>HTTPS</Text>
        <Text style={[styles.nodejs, styles.phpTypo]}>NODEJS</Text>
        <Text style={[styles.php, styles.phpTypo]}>PHP</Text>
        <Text style={[styles.aws, styles.awsTypo]}>AWS</Text>
        <Text style={[styles.azure, styles.awsTypo]}>AZURE</Text>
      </View>
      <Pressable
        style={styles.image1550}
        onPress={() => navigation.navigate("Sidebarbg")}
      >
        <Image
          style={styles.icon8}
          contentFit="cover"
          source={require("../assets/image-1550.png")}
        />
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.djNolaLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  faqLayout1: {
    width: 430,
    left: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.accessibleSystemOrangeLight,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  labelTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
  },
  vectorIcon1Position: {
    left: 50,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 647,
    position: "absolute",
  },
  weAreBusinessLayout: {
    width: 365,
    position: "absolute",
  },
  timeTypo1: {
    fontWeight: "600",
    position: "absolute",
  },
  hero8Layout: {
    width: 426,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  focusOnUserTypo: {
    width: 233,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: 17,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    position: "absolute",
  },
  text16Layout: {
    lineHeight: 16,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  contentLayout: {
    height: 137,
    position: "absolute",
  },
  homeInnerLayout: {
    height: 342,
    width: 423,
    position: "absolute",
  },
  faqLayout: {
    height: 566,
    position: "absolute",
  },
  twitterLayout: {
    width: 500,
    position: "absolute",
  },
  hero81Layout: {
    height: 282,
    position: "absolute",
  },
  blog1Layout: {
    width: 431,
    position: "absolute",
  },
  postLayout: {
    width: 443,
    position: "absolute",
  },
  frameViewLayout: {
    height: 158,
    position: "absolute",
  },
  iconLayout3: {
    height: 95,
    position: "absolute",
  },
  educabsFlexBox: {
    top: 6,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  educabsLayout: {
    width: 223,
    fontSize: FontSize.size_mid,
  },
  plantSetGrowTypo: {
    width: 135,
    top: 6,
    display: "flex",
    fontSize: FontSize.size_mid,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  headlineLayout: {
    lineHeight: 23,
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition1: {
    top: "0%",
    bottom: "0%",
  },
  rectanglePosition4: {
    backgroundColor: Color.gray_200,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconsmorePosition3: {
    left: "80.97%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  mbPosition: {
    marginTop: 0.51,
    color: Color.gray_500,
    top: "50%",
    textAlign: "left",
    letterSpacing: 0,
  },
  iconsbrushPosition: {
    left: "6.96%",
    right: "82.61%",
    bottom: "28.57%",
    top: "28.57%",
    width: "10.43%",
    height: "42.86%",
    position: "absolute",
  },
  flashPosition: {
    left: "0.03%",
    right: "-0.03%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectanglePosition2: {
    opacity: 0,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pathIconPosition2: {
    right: "8.33%",
    left: "8.33%",
  },
  rectangleGroupPosition: {
    right: "2.93%",
    width: "16.11%",
    left: "80.97%",
  },
  groupPosition1: {
    right: "6.36%",
    width: "82.73%",
    height: "11.86%",
    left: "10.91%",
    position: "absolute",
  },
  textTypo2: {
    marginTop: -0.84,
    lineHeight: 5,
    fontFamily: FontFamily.interSemibold,
    fontSize: 3,
    fontWeight: "600",
  },
  decTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconsmorePosition: {
    left: "86.81%",
    right: "0%",
  },
  iconsmore3Layout: {
    width: "13.19%",
    height: "52.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text3Position: {
    left: "47.46%",
    top: "50%",
    color: Color.gray_700,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  iconsmore4Layout: {
    bottom: "23.92%",
    top: "23.91%",
    width: "13.19%",
    height: "52.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  from10NovPosition: {
    left: "10.91%",
    position: "absolute",
  },
  rectangleLayout2: {
    backgroundColor: Color.gray_1100,
    borderRadius: 1,
    bottom: "25.33%",
    width: "13.95%",
  },
  rectangle5Layout: {
    height: "53.33%",
    position: "absolute",
  },
  rectanglePosition1: {
    backgroundColor: Color.colorPrimary60,
    top: "0%",
    position: "absolute",
  },
  dec2Typo: {
    color: Color.mediumslateblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 3,
    fontSize: 2,
    top: "50%",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  historyTypo: {
    lineHeight: 6,
    fontSize: 4,
    fontFamily: FontFamily.interSemibold,
    top: "50%",
    color: Color.gray_700,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
  },
  logoPosition: {
    left: "2.93%",
    position: "absolute",
  },
  rectangleIconLayout: {
    width: "28.04%",
    height: "75%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo1: {
    marginTop: -2.86,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 3,
    top: "50%",
    letterSpacing: 0,
  },
  parentPosition3: {
    height: "2.73%",
    left: "2.93%",
    overflow: "hidden",
    position: "absolute",
  },
  iconsgridPosition: {
    bottom: "7.14%",
    height: "85.71%",
    left: "0%",
    position: "absolute",
  },
  searchTypo: {
    marginTop: -2.36,
    lineHeight: 5,
    fontFamily: FontFamily.interSemibold,
    fontSize: 3,
    top: "50%",
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.gray_700,
    opacity: 0,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconsgridLayout: {
    top: "7.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  elementsbuttonsmediumrIconPosition: {
    bottom: "3.91%",
    top: "91.41%",
    height: "4.69%",
    position: "absolute",
  },
  buttonTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.buttonMedium,
    lineHeight: 26,
    fontSize: FontSize.buttonMedium_size,
    marginTop: -2.36,
    top: "50%",
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  iconsstarPosition: {
    marginTop: -1.68,
    height: 3,
    width: 3,
    top: "50%",
    position: "absolute",
  },
  groupParentPosition: {
    right: "79.21%",
    width: "17.86%",
    height: "4.39%",
    left: "2.93%",
    position: "absolute",
  },
  designerParentPosition: {
    bottom: "6.66%",
    top: "6.67%",
    height: "86.67%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  mbLayout: {
    lineHeight: 4,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChild1Position: {
    right: "79.5%",
    width: "17.57%",
    left: "2.93%",
  },
  parentPosition1: {
    left: "27.82%",
    position: "absolute",
  },
  rectangleParentPosition3: {
    bottom: "75.98%",
    top: "16.21%",
  },
  ovalIconPosition: {
    bottom: "18.75%",
    right: "78.07%",
    top: "18.75%",
    width: "16.61%",
    height: "62.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconsimagePosition1: {
    left: "9.63%",
    bottom: "35%",
    right: "82.39%",
    top: "35%",
    width: "7.97%",
    height: "30%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  rectangleParentPosition2: {
    bottom: "65.82%",
    top: "26.37%",
  },
  rectangleParentPosition1: {
    left: "51.61%",
    width: "22.04%",
    height: "7.81%",
    right: "26.35%",
    overflow: "hidden",
    position: "absolute",
  },
  sharePosition: {
    left: "-0.04%",
    right: "0.04%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pathIconPosition1: {
    bottom: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  pathIconPosition: {
    right: "12.5%",
    top: "12.49%",
    width: "79.18%",
    height: "75.01%",
    bottom: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParentPosition: {
    width: "30.99%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  designTypo: {
    marginTop: -2.19,
    fontFamily: FontFamily.interSemibold,
    lineHeight: 4,
    fontSize: 3,
    top: "50%",
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  frameParentPosition: {
    left: "3.83%",
    overflow: "hidden",
    position: "absolute",
  },
  iconstagPosition: {
    bottom: "21.87%",
    height: "62.75%",
    top: "15.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  name1Position: {
    marginTop: -1.85,
    color: Color.gray_500,
    fontSize: 2,
    lineHeight: 4,
    top: "50%",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  frameChildLayout: {
    left: "87.97%",
    width: "12.04%",
    height: "76.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  iconschevronPosition: {
    bottom: "9.09%",
    top: "9.1%",
    height: "81.82%",
    right: "0%",
    position: "absolute",
  },
  rectanglePosition3: {
    left: "100%",
    right: "-100%",
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
  },
  buttonMedium1Position: {
    right: 11,
    position: "absolute",
  },
  pencilIcon1Layout: {
    height: 48,
    position: "absolute",
  },
  illustrationLayout: {
    height: 220,
    width: 237,
    position: "absolute",
  },
  contactGroupPosition: {
    left: 221,
    position: "absolute",
  },
  rectangleLayout1: {
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
  webflowTypo: {
    fontSize: 12,
    height: 20,
    lineHeight: 16,
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  groupChildLayout: {
    width: 8,
    position: "absolute",
  },
  howDoYou1Position: {
    color: Color.darkslategray_300,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  groupChildPosition2: {
    borderTopWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.5)",
    height: 0,
    width: 390,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupChildPosition1: {
    left: 363,
    height: 10,
    width: 8,
    position: "absolute",
  },
  howDoYouLayout: {
    width: 314,
    color: Color.darkslategray_300,
    height: 20,
    fontSize: 12,
    textAlign: "left",
    lineHeight: 16,
    fontFamily: FontFamily.abrilFatfaceRegular,
    left: 0,
    position: "absolute",
  },
  orLayout: {
    width: 84,
    lineHeight: 7,
    height: 14,
    left: "50%",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  emailPosition: {
    top: 13,
    position: "absolute",
  },
  linksTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  investmentPosition: {
    right: 0,
    position: "absolute",
  },
  text17Typo: {
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  linksLayout: {
    height: 13,
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
  rectangleLayout: {
    width: 236,
    borderRadius: 7,
    top: 0,
    position: "absolute",
  },
  iconsimagePosition: {
    width: 13,
    bottom: 167,
    top: 55,
    maxHeight: "100%",
    position: "absolute",
  },
  reallyTypo: {
    height: 29,
    top: 139,
    lineHeight: 17,
    fontSize: 12,
    color: Color.gray_700,
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
  },
  ovalIconLayout: {
    width: 30,
    maxHeight: "100%",
    position: "absolute",
  },
  iconsimageLayout: {
    width: 11,
    position: "absolute",
  },
  iconsheartPosition2: {
    top: 202,
    bottom: 20,
    overflow: "hidden",
    position: "absolute",
  },
  iconsheartPosition1: {
    bottom: "3.85%",
    top: "3.85%",
    height: "92.31%",
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    fontSize: 8,
    marginTop: -5.86,
    color: Color.gray_500,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    textAlign: "left",
    lineHeight: 13,
    letterSpacing: 0,
    position: "absolute",
  },
  textPosition2: {
    left: "58.33%",
    width: "42.58%",
  },
  ovalParentPosition: {
    left: 274,
    width: 194,
    position: "absolute",
  },
  groupPosition: {
    left: 38,
    bottom: 2,
    top: 1,
    overflow: "hidden",
    position: "absolute",
  },
  mallyTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: 10,
    fontWeight: "500",
    color: Color.gray_700,
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  decTypo: {
    textTransform: "uppercase",
    fontSize: 6,
    lineHeight: 7,
    fontFamily: FontFamily.buttonMedium,
    color: Color.gray_500,
    fontWeight: "600",
    letterSpacing: 0,
  },
  iconsheartPosition: {
    top: 18,
    bottom: 0,
    overflow: "hidden",
    position: "absolute",
  },
  textPosition1: {
    marginTop: -5.83,
    fontSize: 8,
    color: Color.gray_500,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    textAlign: "left",
    lineHeight: 13,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangle37Position: {
    left: 505,
    width: 236,
    borderRadius: 7,
    position: "absolute",
  },
  reallyLayout: {
    width: 194,
    position: "absolute",
  },
  textPosition: {
    marginTop: -5.84,
    fontSize: 8,
    color: Color.gray_500,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    textAlign: "left",
    lineHeight: 13,
    letterSpacing: 0,
    position: "absolute",
  },
  dec20202Position: {
    top: 204,
    textAlign: "left",
    position: "absolute",
  },
  contactUsPosition: {
    left: 12,
    position: "absolute",
  },
  frameChild5Layout: {
    height: 320,
    width: 453,
    position: "absolute",
  },
  testingIconPosition: {
    height: 168,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 1019,
    height: 168,
    top: 0,
    position: "absolute",
  },
  content1Typo: {
    height: 27,
    top: 6,
    display: "flex",
    fontSize: FontSize.size_mid,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  rignChildLayout2: {
    width: 42,
    height: 64,
    position: "absolute",
  },
  rignChildLayout1: {
    borderRadius: 0,
    height: 1,
    top: 43,
  },
  rignChildLayout: {
    width: 5,
    position: "absolute",
  },
  iconPosition4: {
    width: 36,
    left: 3,
    position: "absolute",
  },
  blackTypo: {
    fontFamily: FontFamily.ralewayExtrabold,
    fontWeight: "800",
    letterSpacing: "-1%",
    fontSize: 1,
    height: 1,
    textAlign: "left",
    position: "absolute",
  },
  wTypo: {
    color: Color.darkslategray_200,
    lineHeight: 1,
    fontFamily: FontFamily.ralewayExtrabold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition3: {
    top: 57,
    position: "absolute",
  },
  groupChildPosition: {
    width: 2,
    left: 0,
    position: "absolute",
  },
  djNolaLayout: {
    height: 5,
    position: "absolute",
  },
  djNolaTypo: {
    lineHeight: 2,
    fontWeight: "800",
    fontSize: 3,
    letterSpacing: -0.1,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  designPosition: {
    top: 20,
    position: "absolute",
  },
  buttonLayout: {
    height: 37,
    width: 117,
    position: "absolute",
  },
  comp382Position: {
    left: 19,
    position: "absolute",
  },
  text25Typo: {
    lineHeight: 21,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  button4Position: {
    height: 44,
    top: 2829,
    position: "absolute",
  },
  uiDesignLayout: {
    height: 133,
    width: 178,
  },
  frameChildPosition: {
    borderRadius: 12,
    top: 0,
    left: 0,
    position: "absolute",
  },
  icon6Layout: {
    height: 100,
    position: "absolute",
  },
  iconLayout2: {
    width: 40,
    height: 87,
    top: 6,
    position: "absolute",
  },
  mockupsTypo: {
    fontFamily: FontFamily.montserratBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs_7,
    top: 5,
    fontWeight: "700",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  designLayout: {
    height: 113,
    width: 154,
  },
  frameChild8Layout: {
    width: 154,
    height: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    left: 0,
    position: "absolute",
  },
  mockups1Position: {
    left: 334,
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
  iconPosition2: {
    height: 61,
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    left: 324,
    position: "absolute",
  },
  iconLayout: {
    height: 54,
    position: "absolute",
  },
  iconPosition: {
    left: 185,
    position: "absolute",
  },
  cssTypo: {
    top: 72,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  pythonTypo: {
    top: 177,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  phpTypo: {
    top: 291,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  awsTypo: {
    top: 407,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  homeChild: {
    top: 4096,
    shadowRadius: 4,
    elevation: 4,
    height: 620,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 430,
    position: "absolute",
  },
  label: {
    display: "none",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  button: {
    top: 1574,
    left: 281,
    position: "absolute",
  },
  vectorIcon: {
    height: 584,
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    top: 1977,
    width: 310,
    height: 221,
  },
  vectorIcon2: {
    top: 3031,
    left: 176,
    height: 131,
    width: 237,
    position: "absolute",
  },
  vectorIcon3: {
    top: 4187,
    width: 232,
    height: 163,
    left: 42,
    position: "absolute",
  },
  vectorIcon4: {
    top: 419,
    height: 513,
    left: 0,
  },
  vectorIcon5: {
    top: 1644,
    left: -232,
    height: 336,
  },
  text: {
    top: 301,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.roboto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 114,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  weAreBusiness: {
    top: 157,
    fontSize: FontSize.size_21xl,
    height: 117,
    textAlign: "left",
    lineHeight: 13,
    left: 27,
    width: 365,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  itsNotAbout: {
    top: 302,
    fontFamily: FontFamily.montserratSemibold,
    lineHeight: 15,
    letterSpacing: -0.1,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 27,
    color: Color.labelColorLightPrimary,
  },
  label1: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  button1: {
    top: 377,
    left: 29,
    position: "absolute",
  },
  glorifyYourBusiness: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  takeAGlance: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mid,
  },
  glorifyYourBusinessContainer: {
    top: 532,
    width: 429,
    left: 23,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  cuttingEdgeTechnologicalInn: {
    left: 3,
    top: 11,
  },
  transformingIndustriesInspa: {
    top: 211,
    left: 3,
  },
  customizedSolutionsWith: {
    top: 434,
    left: 0,
  },
  focusOnUser: {
    top: 652,
    height: 176,
    left: 0,
  },
  cuttingEdgeTechnologicalInnParent: {
    height: 188,
    width: 238,
    left: 21,
    top: 34,
    position: "absolute",
  },
  unleashingSpecializedExperti: {
    left: 16,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    top: 0,
  },
  youngManPointingOnContract: {
    top: 48,
    left: 259,
    width: 152,
  },
  frameParent: {
    top: 887,
    height: 281,
    left: 8,
  },
  frameChild: {
    top: -107,
    left: -45,
    width: 1107,
  },
  twitterPost10: {
    left: -38,
    top: 47,
    height: 281,
  },
  twitterPost11: {
    top: 36,
    left: 636,
    height: 281,
  },
  linkedinPost3: {
    left: 625,
    width: 538,
    top: 47,
  },
  linkedinPost5: {
    top: 10,
    left: 1095,
    height: 262,
  },
  vectorParent: {
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  homeInner: {
    top: -6685,
    left: 19280,
  },
  frameItem: {
    left: 90,
    width: 1265,
    height: 321,
    top: 17,
    position: "absolute",
  },
  twitterPost101: {
    top: 59,
    width: 368,
    height: 249,
    left: 4,
    position: "absolute",
  },
  twitterPost111: {
    left: 564,
    top: 32,
    height: 249,
  },
  linkedinPost31: {
    left: 466,
    width: 477,
    height: 250,
    top: 32,
    position: "absolute",
  },
  linkedinPost51: {
    left: 971,
    height: 232,
    top: 9,
  },
  vectorGroup: {
    top: 2132,
    borderRadius: 22,
    height: 297,
    left: 4,
  },
  suggestedByLeading: {
    marginLeft: -201,
    top: 2079,
    fontSize: 22,
    left: "50%",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  feelFreeTo: {
    marginLeft: -191.97,
    top: 2518,
    width: 387,
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    display: "flex",
    height: 158,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  image1480Icon: {
    width: 130,
    left: 7,
    top: 28,
    height: 95,
  },
  startups: {
    width: 145,
    fontSize: FontSize.size_mid,
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    left: 0,
    position: "absolute",
  },
  image1481Icon: {
    top: 31,
    borderRadius: Border.br_71xl,
    width: 101,
    left: 190,
  },
  healthcare: {
    left: 181,
    width: 139,
    fontSize: FontSize.size_mid,
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  image1482Icon: {
    left: 347,
    height: 89,
    width: 117,
    top: 37,
    position: "absolute",
  },
  publication: {
    left: 360,
    width: 104,
    fontSize: FontSize.size_mid,
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  image1483Icon: {
    top: 39,
    height: 87,
    left: 526,
    width: 117,
    position: "absolute",
  },
  educabs: {
    left: 464,
    top: 6,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  image1484Icon: {
    top: 22,
    height: 118,
    width: 121,
    left: 708,
    position: "absolute",
  },
  youngersblog: {
    width: 122,
    left: 708,
    top: 6,
    display: "flex",
    fontSize: FontSize.size_mid,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  image1485Icon: {
    top: 38,
    left: 861,
    height: 85,
    width: 116,
    position: "absolute",
  },
  blissfulShopping: {
    left: 851,
  },
  image1486Icon: {
    top: 41,
    left: 1033,
    width: 114,
    height: 81,
    position: "absolute",
  },
  plantSetGrow: {
    left: 1022,
  },
  frameInner: {
    top: -21,
    left: 581,
    width: 586,
    height: 177,
    position: "absolute",
  },
  image1480Parent: {
    top: 3243,
    left: 1,
    width: 526,
    height: 135,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  headlineOfModern: {
    left: 153,
    color: Color.gray_700,
    top: 9,
    width: 238,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  rectangle: {
    width: "23.43%",
    right: "76.57%",
    left: "0%",
  },
  rectangle1: {
    width: "21.96%",
    left: "78.04%",
    right: "0%",
  },
  iconsmore: {
    left: "89.56%",
    maxHeight: "100%",
    bottom: "28.57%",
    top: "28.57%",
    height: "42.86%",
    maxWidth: "100%",
    position: "absolute",
    width: "10.43%",
    right: "0%",
  },
  ovalIcon: {
    width: "24.35%",
    right: "75.65%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  designSystem: {
    marginTop: -4.21,
    fontFamily: FontFamily.interSemibold,
    lineHeight: 4,
    fontSize: 3,
    left: "31.3%",
    top: "50%",
    color: Color.gray_700,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  mb: {
    color: Color.gray_500,
    fontFamily: FontFamily.interRegular,
    fontSize: 2,
    lineHeight: 4,
    position: "absolute",
    left: "31.3%",
  },
  iconsbrush: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconsmoreParent: {
    top: "65.33%",
    bottom: "29.2%",
    right: "2.2%",
    width: "16.84%",
    left: "80.97%",
    height: "5.47%",
    overflow: "hidden",
  },
  rectangle2: {
    backgroundColor: Color.mediumslateblue_100,
    opacity: 0,
    left: "100%",
    right: "-100%",
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
  },
  pathIcon: {
    height: "66.64%",
    width: "83.33%",
    top: "16.7%",
    bottom: "16.67%",
    left: "8.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  activity: {
    top: "-0.01%",
    bottom: "0.01%",
  },
  iconsmoreGroup: {
    top: "72.36%",
    bottom: "22.17%",
    right: "2.2%",
    width: "16.84%",
    left: "80.97%",
    height: "5.47%",
    overflow: "hidden",
  },
  iconsmoreContainer: {
    top: "79.39%",
    bottom: "15.14%",
    right: "2.2%",
    width: "16.84%",
    left: "80.97%",
    height: "5.47%",
    overflow: "hidden",
  },
  rectangle3: {
    borderRadius: 3,
    backgroundColor: "#e7ebfc",
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text1: {
    marginTop: -29.3,
    lineHeight: 5,
    left: "10.91%",
    fontFamily: FontFamily.interSemibold,
    fontSize: 3,
    top: "50%",
    color: Color.gray_700,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  text2: {
    top: "50%",
    color: Color.gray_700,
    left: "50%",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  ovalIcon3: {
    width: "41.07%",
    right: "58.93%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  uploads: {
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    marginTop: -3.37,
    top: "50%",
    color: Color.gray_700,
    left: "50%",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  parent: {
    width: "61.54%",
    right: "38.46%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconsmore3: {
    top: "23.92%",
    bottom: "23.91%",
    width: "13.19%",
    height: "52.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frameGroup: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconsdownload: {
    top: "76.09%",
    right: "67.58%",
    bottom: "-28.26%",
    left: "19.23%",
  },
  groupParent: {
    top: "67.01%",
    bottom: "21.13%",
  },
  text3: {
    marginTop: -0.84,
    lineHeight: 5,
    fontFamily: FontFamily.interSemibold,
    fontSize: 3,
    fontWeight: "600",
  },
  ovalIcon4: {
    width: "38.98%",
    right: "61.02%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  downloads: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 3,
    fontSize: 2,
    marginTop: -3.37,
  },
  group: {
    width: "64.84%",
    right: "35.16%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconsmore4: {
    left: "86.81%",
    right: "0%",
  },
  iconsdownload1: {
    right: "80.77%",
    left: "6.04%",
  },
  groupContainer: {
    top: "81.96%",
    bottom: "6.19%",
  },
  from10Nov: {
    marginTop: -24.25,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    left: "10.91%",
    position: "absolute",
    top: "50%",
    color: Color.gray_700,
    textAlign: "left",
    letterSpacing: 0,
  },
  rectangle4: {
    height: "37.33%",
    top: "37.33%",
    right: "86.05%",
    left: "0%",
    position: "absolute",
  },
  rectangle5: {
    top: "21.33%",
    right: "64.54%",
    left: "21.51%",
    backgroundColor: Color.gray_1100,
    borderRadius: 1,
    bottom: "25.33%",
    width: "13.95%",
  },
  rectangle6: {
    height: "74.67%",
    right: "43.02%",
    left: "43.02%",
    borderRadius: 1,
    bottom: "25.33%",
    width: "13.95%",
    backgroundColor: Color.colorPrimary60,
  },
  rectangle7: {
    height: "41.33%",
    top: "33.33%",
    right: "21.51%",
    left: "64.53%",
    position: "absolute",
  },
  rectangle8: {
    height: "62.67%",
    top: "12%",
    left: "86.05%",
    right: "0%",
    position: "absolute",
  },
  text4: {
    left: "-0.55%",
    marginTop: -2.69,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  dec: {
    left: "-3.49%",
    marginTop: 0,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  dec1: {
    left: "18.27%",
    marginTop: 0,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  dec2: {
    left: "40.04%",
    marginTop: 0,
  },
  dec3: {
    left: "61.8%",
    marginTop: 0,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  dec4: {
    left: "83.57%",
    marginTop: 0,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text5: {
    left: "24.71%",
    marginTop: -2.69,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text6: {
    left: "45.88%",
    marginTop: -2.69,
  },
  text7: {
    left: "67.65%",
    marginTop: -2.69,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text8: {
    left: "90%",
    marginTop: -2.69,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    top: "50%",
    color: Color.gray_700,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  container: {
    height: "21.33%",
    width: "98.84%",
    top: "78.67%",
    right: "0.58%",
    left: "0.58%",
    bottom: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleContainer: {
    height: "38.66%",
    width: "78.18%",
    top: "22.17%",
    right: "10.91%",
    bottom: "39.18%",
  },
  rectangleGroup: {
    height: "37.89%",
    top: "17.87%",
    bottom: "44.24%",
    overflow: "hidden",
    position: "absolute",
  },
  statistics: {
    marginTop: -65.16,
    left: "80.97%",
    position: "absolute",
  },
  shareFiles: {
    marginTop: 16.67,
    left: "80.97%",
    position: "absolute",
  },
  rectangleIcon: {
    top: "25%",
    right: "34.58%",
    left: "37.39%",
    bottom: "0%",
  },
  rectangleIcon1: {
    top: "75%",
    right: "71.96%",
    bottom: "-50%",
    left: "0%",
  },
  logo1: {
    left: "56.08%",
    color: Color.gray_700,
    textAlign: "left",
    position: "absolute",
  },
  logo: {
    height: "3.91%",
    bottom: "92.19%",
    right: "89.24%",
    width: "7.83%",
    top: "3.91%",
    left: "2.93%",
    overflow: "hidden",
  },
  iconsgrid: {
    width: "18.6%",
    right: "81.39%",
    top: "7.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  dashboard: {
    left: "27.91%",
    color: Color.colorPrimary100,
  },
  group1: {
    width: "9.44%",
    top: "21.39%",
    right: "87.63%",
    bottom: "75.88%",
  },
  activities: {
    left: "31.31%",
    color: Color.gray_700,
  },
  rectangle9: {
    left: "0%",
    right: "0%",
  },
  pathIcon1: {
    height: "91.67%",
    width: "66.68%",
    top: "4.17%",
    right: "16.66%",
    bottom: "4.17%",
    left: "16.66%",
    maxHeight: "100%",
    position: "absolute",
  },
  flash: {
    bottom: "0%",
    top: "0%",
  },
  iconsaction: {
    width: "20.87%",
    top: "7.15%",
    right: "79.13%",
  },
  activitiesParent: {
    width: "8.42%",
    top: "26.46%",
    right: "88.65%",
    bottom: "70.8%",
  },
  search: {
    left: "37.5%",
    color: Color.gray_700,
  },
  iconssearch: {
    width: "25%",
    right: "75%",
    bottom: "7.15%",
    height: "85.71%",
    top: "7.14%",
    left: "0%",
    position: "absolute",
  },
  searchParent: {
    width: "7.03%",
    top: "31.54%",
    right: "90.04%",
    bottom: "65.72%",
  },
  settings: {
    left: "33.65%",
    color: Color.gray_700,
  },
  iconssettings: {
    height: "77.69%",
    width: "22.43%",
    right: "77.57%",
    bottom: "15.17%",
    left: "0%",
    position: "absolute",
  },
  settingsParent: {
    top: "36.62%",
    bottom: "60.64%",
    right: "89.24%",
    width: "7.83%",
    height: "2.73%",
  },
  profile: {
    left: "39.56%",
    color: Color.gray_700,
  },
  iconsuser: {
    width: "26.37%",
    right: "73.62%",
    top: "7.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileParent: {
    width: "6.66%",
    top: "41.7%",
    right: "90.41%",
    bottom: "55.57%",
  },
  rectangle10: {
    backgroundColor: Color.colorPrimary100,
    borderRadius: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  buttonMedium: {
    left: "38.37%",
    position: "absolute",
  },
  rectangle11: {
    left: "100%",
    right: "-100%",
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
  },
  pathIcon2: {
    height: "79.2%",
    width: "83.16%",
    top: "8.32%",
    right: "8.36%",
    bottom: "12.48%",
    left: "8.49%",
    maxHeight: "100%",
    position: "absolute",
  },
  iconsstar: {
    height: 3,
    width: 3,
    left: 3,
  },
  elementsbuttonsmediumsimple: {
    right: "79.5%",
    width: "17.57%",
    left: "2.93%",
  },
  menu: {
    marginTop: -56.07,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 3,
    fontSize: 2,
    color: Color.gray_500,
    top: "50%",
    textAlign: "left",
    letterSpacing: 0,
  },
  friendsOnline: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 3,
    fontSize: 2,
    color: Color.gray_500,
    marginTop: 0.51,
    top: "50%",
    textAlign: "left",
    letterSpacing: 0,
  },
  groupChild: {
    width: "31.92%",
    right: "68.08%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  uxDesigner: {
    marginTop: 0.59,
    lineHeight: 3,
    fontWeight: "500",
    fontSize: 2,
    color: Color.gray_500,
    top: "50%",
    left: "0%",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  jennyMoore: {
    marginTop: -3.28,
    fontFamily: FontFamily.interRegular,
    fontSize: 2,
    top: "50%",
    left: "0%",
    color: Color.gray_700,
    textAlign: "left",
    letterSpacing: 0,
  },
  uxDesignerParent: {
    width: "59.58%",
    left: "40.42%",
  },
  groupParent1: {
    width: "57.79%",
    right: "42.21%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  iconsmessage: {
    width: "9.84%",
    top: "22.23%",
    bottom: "24.44%",
    left: "90.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
  },
  groupView: {
    top: "54.2%",
    bottom: "41.41%",
  },
  groupItem: {
    width: "27.11%",
    right: "72.89%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  jennymgmailcomParent: {
    width: "65.66%",
    left: "34.34%",
  },
  groupWrapper: {
    width: "12.15%",
    right: "6.88%",
    bottom: "91.7%",
    height: "4.39%",
    top: "3.91%",
    left: "80.97%",
    position: "absolute",
  },
  groupInner: {
    width: "28.13%",
    right: "71.87%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  photographerParent: {
    width: "64.38%",
    left: "35.62%",
  },
  groupParent4: {
    width: "65.57%",
    right: "34.43%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  groupParent3: {
    top: "60.55%",
    bottom: "35.06%",
  },
  groupIcon: {
    width: "32.85%",
    right: "67.15%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  uiDesignerParent: {
    width: "58.4%",
    left: "41.6%",
  },
  groupParent6: {
    width: "56.15%",
    right: "43.85%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  groupParent5: {
    top: "66.89%",
    bottom: "28.71%",
  },
  frameChild1: {
    height: "11.72%",
    top: "77.34%",
    bottom: "10.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangle12: {
    borderRadius: 2,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconssearch1: {
    width: "3.83%",
    right: "92.97%",
    left: "3.19%",
    maxHeight: "100%",
    bottom: "28.57%",
    top: "28.57%",
    height: "42.86%",
    maxWidth: "100%",
    position: "absolute",
  },
  searchDesignSystem: {
    marginTop: -2.02,
    left: "8.95%",
    color: Color.gray_500,
    fontFamily: FontFamily.interRegular,
    fontSize: 3,
    lineHeight: 4,
    top: "50%",
    textAlign: "left",
    letterSpacing: 0,
  },
  rectangleParent1: {
    top: "5.86%",
    bottom: "88.67%",
    right: "26.35%",
    width: "45.83%",
    left: "27.82%",
    height: "5.47%",
    overflow: "hidden",
  },
  name: {
    marginTop: 44.28,
    left: "29.87%",
    fontSize: 4,
    fontFamily: FontFamily.interSemibold,
    top: "50%",
    color: Color.gray_700,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  ovalIcon5: {
    left: "5.32%",
  },
  iconsimage: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  images: {
    left: "28.57%",
    color: Color.gray_700,
    textAlign: "left",
    position: "absolute",
  },
  text9: {
    left: "78.76%",
    marginTop: -2.86,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 3,
    top: "50%",
    letterSpacing: 0,
    color: Color.gray_500,
  },
  rectangleParent2: {
    right: "50.15%",
    width: "22.04%",
    height: "7.81%",
    left: "27.82%",
    overflow: "hidden",
    position: "absolute",
  },
  text10: {
    left: "77.43%",
    marginTop: -2.86,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 3,
    top: "50%",
    letterSpacing: 0,
    color: Color.gray_500,
  },
  rectangleParent3: {
    right: "50.15%",
    width: "22.04%",
    height: "7.81%",
    left: "27.82%",
    overflow: "hidden",
    position: "absolute",
  },
  ovalIcon7: {
    left: "5.31%",
  },
  rectangle16: {
    backgroundColor: Color.mediumslateblue_100,
    opacity: 0,
    left: "0%",
    right: "0%",
  },
  pathIcon3: {
    width: "58.34%",
    top: "12.5%",
    right: "20.83%",
    left: "20.83%",
    height: "75%",
    bottom: "12.5%",
  },
  bookmark: {
    top: "0.01%",
    bottom: "-0.01%",
  },
  rectangleParent4: {
    bottom: "75.98%",
    top: "16.21%",
  },
  pathIcon4: {
    left: "8.33%",
  },
  share: {
    bottom: "0%",
    top: "0%",
  },
  text12: {
    left: "80.06%",
    marginTop: -2.86,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 3,
    top: "50%",
    letterSpacing: 0,
    color: Color.gray_500,
  },
  rectangleParent5: {
    bottom: "65.82%",
    top: "26.37%",
  },
  quickAccess: {
    marginTop: -18.86,
    lineHeight: 6,
    fontSize: 4,
    fontFamily: FontFamily.interSemibold,
    top: "50%",
    color: Color.gray_700,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
  },
  history: {
    marginTop: 29.63,
    lineHeight: 6,
    fontSize: 4,
    fontFamily: FontFamily.interSemibold,
    top: "50%",
    color: Color.gray_700,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
  },
  rectangle19: {
    height: "72.22%",
    bottom: "27.78%",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  rectangle20: {
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconsimage4: {
    height: "48%",
    width: "12.37%",
    top: "26%",
    right: "79.38%",
    bottom: "26%",
    left: "8.25%",
    maxHeight: "100%",
    position: "absolute",
  },
  designTools: {
    left: "26.8%",
    color: Color.gray_500,
  },
  rectangleParent7: {
    height: "27.78%",
    top: "72.22%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  rectangleParent6: {
    right: "69.01%",
    left: "0%",
  },
  rectangleParent8: {
    right: "34.5%",
    left: "34.5%",
  },
  rectangleParent10: {
    left: "69.01%",
    right: "0%",
  },
  groupParent7: {
    height: "17.58%",
    top: "44.73%",
    bottom: "37.7%",
    right: "26.35%",
    width: "45.83%",
    left: "27.82%",
  },
  designSystem1: {
    left: "16.3%",
    color: Color.gray_700,
  },
  iconstag: {
    width: "13.33%",
    right: "86.67%",
  },
  designSystemParent: {
    width: "23.89%",
    right: "76.11%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  julianaKolpaniz: {
    left: "29.91%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text13: {
    left: "57.17%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameChild2: {
    bottom: "7.69%",
    top: "15.39%",
  },
  frameParent1: {
    top: "31.19%",
    bottom: "56.88%",
    right: "5.91%",
    width: "90.26%",
    height: "11.93%",
    left: "3.83%",
  },
  name1: {
    fontFamily: FontFamily.interRegular,
    left: "0%",
  },
  rectangle26: {
    right: "100%",
    left: "-100%",
  },
  pathIcon5: {
    height: "41.73%",
    width: "24.97%",
    top: "39.56%",
    right: "104.14%",
    bottom: "18.71%",
    left: "-29.1%",
    maxHeight: "100%",
    position: "absolute",
  },
  chevronRight: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconschevronDown: {
    width: "31.58%",
    left: "68.42%",
  },
  nameParent: {
    width: "10.56%",
    right: "89.44%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  chevronRight1: {
    right: "-99.98%",
    left: "99.98%",
    bottom: "0%",
    height: "100%",
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    position: "absolute",
    width: "100%",
  },
  iconschevronDown1: {
    width: "18.18%",
    left: "81.82%",
  },
  iconschevronDownParent: {
    width: "18.33%",
    right: "21.85%",
    left: "59.81%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  maker: {
    fontFamily: FontFamily.interRegular,
    left: "31.3%",
  },
  teams: {
    left: "92.04%",
    fontFamily: FontFamily.interRegular,
  },
  frameParent2: {
    height: "10.09%",
    width: "86.26%",
    top: "11.01%",
    right: "9.9%",
    bottom: "78.9%",
  },
  iconstag1: {
    width: "15.79%",
    right: "84.21%",
  },
  digitalTools: {
    left: "19.3%",
    color: Color.gray_700,
  },
  iconstagParent: {
    width: "20.18%",
    right: "79.82%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frameChild3: {
    bottom: "7.7%",
    top: "15.38%",
    left: "87.97%",
    width: "12.04%",
    height: "76.92%",
  },
  davidGillroyParent: {
    top: "54.13%",
    bottom: "33.94%",
    right: "5.91%",
    width: "90.26%",
    height: "11.93%",
    left: "3.83%",
  },
  iconstag2: {
    height: "69.23%",
    width: "13.74%",
    right: "86.26%",
    bottom: "15.38%",
    top: "15.39%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
  },
  qualityDesign: {
    left: "16.79%",
    color: Color.gray_700,
  },
  iconstagGroup: {
    width: "23.19%",
    right: "76.81%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frameChild4: {
    bottom: "7.68%",
    top: "15.39%",
  },
  samanthaMoonParent: {
    top: "77.06%",
    bottom: "11.01%",
    right: "5.91%",
    width: "90.26%",
    height: "11.93%",
    left: "3.83%",
  },
  rectangleParent12: {
    height: "21.29%",
    top: "72.85%",
    bottom: "5.86%",
    right: "26.35%",
    width: "45.83%",
    left: "27.82%",
  },
  buttonMedium1: {
    color: Color.gray_200,
    fontFamily: FontFamily.buttonMedium,
    lineHeight: 26,
    fontSize: FontSize.buttonMedium_size,
    marginTop: -2.36,
    top: "50%",
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  pathIcon7: {
    left: "8.32%",
  },
  share1: {
    right: "-0.02%",
    left: "0.02%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconsshare: {
    right: 3,
    height: 3,
    width: 3,
  },
  elementsbuttonsmediumrIcon: {
    right: "2.93%",
    width: "16.11%",
    left: "80.97%",
  },
  rectangleParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  rectangle30: {
    height: "104.88%",
    width: "103.66%",
    top: "-2.44%",
    right: "-1.83%",
    bottom: "-2.44%",
    left: "-1.83%",
    borderRadius: 5,
    borderWidth: 4.2,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  elementsscreenipad1: {
    top: 63,
    backgroundColor: Color.colorPrimary20,
    width: 230,
    height: 172,
    left: 114,
    position: "absolute",
  },
  pencilIcon: {
    top: 715,
    left: 2756,
    width: 525,
    height: 525,
    position: "absolute",
  },
  headlineOfModern1: {
    left: 873,
    color: Color.gray_700,
    top: 11,
    width: 238,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  backpackIcon: {
    top: 58,
    left: 815,
    height: 116,
    width: 116,
    position: "absolute",
  },
  notebookIcon: {
    top: 143,
    left: 915,
    height: 94,
    width: 94,
    position: "absolute",
  },
  pencilIcon1: {
    top: 131,
    left: 1009,
    width: 49,
  },
  hero81: {
    width: 1043,
    overflow: "hidden",
    top: 0,
    left: 0,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  trafalgarHeaderIllustration: {
    top: 0,
    left: 0,
  },
  illustration: {
    left: 476,
    top: 46,
  },
  headlineOfModern2: {
    left: 522,
    color: Color.gray_700,
    top: 11,
    width: 238,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  hero8: {
    marginLeft: -214,
    top: 3730,
    height: 273,
    left: "50%",
  },
  headlineOfModern3: {
    marginLeft: -75,
    top: 3602,
    color: Color.gray_700,
    left: "50%",
    width: 238,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
  },
  platformsProducts: {
    top: 3126,
    left: 106,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  guideToTechnology: {
    marginLeft: -156,
    top: 4171,
    left: "50%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  label2: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  button2: {
    top: 3397,
    left: 290,
    position: "absolute",
  },
  text16: {
    top: 3083,
    left: 118,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  byChoosingInspark: {
    top: 53,
    height: 169,
    opacity: 0.64,
    left: -22,
    width: 223,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.montserratRegular,
    color: Color.labelColorDarkPrimary,
  },
  content: {
    top: 74,
    left: 45,
    width: 251,
  },
  unleashYourPotential: {
    top: 14,
    fontSize: 20,
    lineHeight: 35,
    width: 279,
    left: 21,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
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
    top: 174,
    width: 205,
    height: 205,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    borderRadius: Border.br_6xl,
    backgroundColor: "transparent",
    width: "100%",
  },
  cover: {
    left: 25,
    top: 4878,
    width: 391,
    height: 368,
    position: "absolute",
  },
  groupChild1: {
    top: 0,
  },
  rectangleView: {
    backgroundColor: Color.darkslategray_400,
    top: 0,
  },
  rectangleParent13: {
    top: 892,
    display: "none",
  },
  whatIsWebflow: {
    color: Color.dodgerblue,
    width: 351,
    height: 20,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild2: {
    top: 8,
    left: 368,
    height: 0,
  },
  vitaeCongueEu: {
    width: 341,
    height: 62,
    lineHeight: 17,
    fontSize: 10,
    color: Color.darkslategray_300,
    top: 28,
    fontFamily: FontFamily.montserratRegular,
  },
  lineView: {
    top: 111,
  },
  whatIsYour: {
    width: 332,
    top: 139,
    color: Color.darkslategray_300,
    height: 20,
    fontSize: 12,
    textAlign: "left",
    lineHeight: 16,
    fontFamily: FontFamily.abrilFatfaceRegular,
    left: 0,
    position: "absolute",
  },
  groupChild3: {
    top: 140,
    height: 10,
  },
  groupChild4: {
    top: 327,
  },
  whenWasWebflow: {
    top: 355,
    height: 20,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FontFamily.abrilFatfaceRegular,
    width: 251,
  },
  groupChild5: {
    top: 356,
    height: 10,
  },
  groupChild6: {
    top: 183,
  },
  howDoYou: {
    top: 211,
  },
  groupChild7: {
    top: 212,
    height: 10,
  },
  groupChild8: {
    top: 399,
  },
  howDoYou1: {
    top: 427,
    width: 290,
    height: 20,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  groupChild9: {
    top: 428,
    height: 10,
  },
  groupChild10: {
    top: 255,
  },
  whyIsBrix: {
    top: 283,
  },
  groupChild11: {
    top: 284,
    left: 364,
    height: 10,
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
    height: 14,
  },
  faq: {
    top: 5678,
    overflow: "hidden",
    width: 430,
    left: 0,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  contact: {
    width: 50,
    height: 8,
    textTransform: "capitalize",
    top: 0,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    left: 7,
    position: "absolute",
  },
  groupChild12: {
    right: 96,
    height: 17,
    top: 3,
    left: 0,
    position: "absolute",
  },
  text17: {
    left: 24,
    letterSpacing: 1,
    width: 91,
    textTransform: "capitalize",
    top: 0,
    height: 3,
  },
  groupParent9: {
    top: 26,
    height: 20,
    left: 3,
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
    width: 27,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    top: 0,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    left: "50%",
  },
  linksWrapper: {
    marginLeft: -20.5,
    width: 27,
    left: "50%",
    top: 0,
  },
  investmentDisclosure: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    top: 0,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    height: 3,
    width: 116,
  },
  investmentDisclosureWrapper: {
    height: 3,
    width: 116,
    top: 0,
  },
  faqs1: {
    width: 29,
    top: 0,
  },
  termsAndConditions: {
    width: 64,
    top: 17,
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
  groupParent8: {
    right: 24,
    height: 93,
    left: 7,
  },
  insparktechnologies2023: {
    marginLeft: -94,
    top: 133,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    left: "50%",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  insparktechnologiesgmailcom: {
    top: 85,
    left: 34,
    letterSpacing: 0,
  },
  loremIpsumDolor: {
    left: 289,
    lineHeight: 10,
    height: 71,
    fontSize: 6,
    top: 46,
    fontFamily: FontFamily.interRegular,
    width: 121,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  frameView: {
    top: 6259,
    backgroundColor: Color.gray_600,
    overflow: "hidden",
    width: 430,
    left: 0,
  },
  rectangle31: {
    borderWidth: 1,
    borderColor: "#d2d2d2",
    bottom: 0,
    borderStyle: "solid",
    left: 0,
  },
  image1487Icon: {
    bottom: 112,
    maxHeight: "100%",
    left: 0,
  },
  iconsimage7: {
    left: 112,
  },
  reallyLongHeadline: {
    width: 194,
    position: "absolute",
    left: 21,
  },
  ovalIcon9: {
    bottom: 20,
    width: 30,
    top: 187,
    left: 21,
  },
  iconsimage8: {
    top: 196,
    bottom: 28,
    left: 31,
    maxHeight: "100%",
  },
  rectangle32: {
    backgroundColor: Color.gray_500,
    left: "0%",
    right: "0%",
  },
  pathIcon8: {
    height: "70.83%",
    width: "83.34%",
    top: "16.67%",
    left: "8.33%",
    right: "8.33%",
  },
  iconsheart: {
    width: "44.44%",
    right: "55.56%",
  },
  text18: {
    left: "51.85%",
    width: "49.2%",
  },
  iconsheartParent: {
    left: 155,
    width: 29,
  },
  iconsheart1: {
    width: "50%",
    right: "50%",
  },
  text19: {
    fontSize: 8,
    marginTop: -5.86,
    color: Color.gray_500,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    textAlign: "left",
    lineHeight: 13,
    letterSpacing: 0,
    position: "absolute",
  },
  iconsheartGroup: {
    width: 26,
    left: 190,
  },
  rectangle34: {
    left: 252,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    bottom: 0,
    borderStyle: "solid",
  },
  iconsimage9: {
    left: 364,
  },
  reallyLongHeadline1: {
    height: 29,
    top: 139,
    lineHeight: 17,
    fontSize: 12,
    color: Color.gray_700,
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
  },
  ovalIcon10: {
    width: 30,
    bottom: 0,
    top: 0,
    left: 0,
  },
  iconsimage10: {
    bottom: 11,
    left: 10,
    maxHeight: "100%",
    top: 11,
  },
  mallyLure: {
    marginTop: -12.08,
    width: "125.47%",
    left: "-0.5%",
    top: "50%",
  },
  dec2020: {
    marginTop: 5.63,
    width: "80.9%",
    top: "50%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  group2: {
    width: 51,
  },
  text20: {
    left: "51.85%",
    width: "49.2%",
  },
  iconsheartContainer: {
    left: 133,
    width: 29,
  },
  text21: {
    left: "58.34%",
    width: "42.58%",
    marginTop: -5.83,
  },
  iconsheartParent1: {
    left: 168,
    width: 26,
  },
  ovalParent: {
    top: 185,
    bottom: 16,
  },
  rectangle37: {
    borderWidth: 1,
    borderColor: "#d2d2d2",
    bottom: 0,
    borderStyle: "solid",
    top: 0,
  },
  image1489Icon: {
    bottom: 111,
    top: 1,
    maxHeight: "100%",
  },
  reallyLongHeadline2: {
    width: 194,
    position: "absolute",
    left: 526,
  },
  katyOlsen: {
    marginTop: -11.03,
    width: "122.33%",
    left: "-0.53%",
    top: "50%",
  },
  dec20201: {
    marginTop: 6.59,
    width: "77.66%",
    top: "50%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  group3: {
    width: 53,
  },
  text22: {
    left: "51.85%",
    width: "49.2%",
  },
  text23: {
    left: "58.33%",
    width: "42.58%",
  },
  ovalGroup: {
    bottom: 14,
    top: 187,
    left: 526,
    width: 194,
  },
  mallyLure1: {
    left: 56,
    width: 76,
    top: 187,
    height: 10,
  },
  dec20202: {
    left: 57,
    width: 43,
    height: 2,
    textTransform: "uppercase",
    fontSize: 6,
    lineHeight: 7,
    fontFamily: FontFamily.buttonMedium,
    color: Color.gray_500,
    fontWeight: "600",
    letterSpacing: 0,
  },
  rectangleParent14: {
    bottom: 50,
    left: 30,
    width: 741,
    top: 107,
    position: "absolute",
  },
  image1488Icon: {
    bottom: 162,
    left: 282,
    borderRadius: 7,
    top: 107,
    maxHeight: "100%",
    width: 237,
    position: "absolute",
  },
  longHeadline: {
    marginTop: -149,
    left: "7.42%",
    lineHeight: 30,
    top: "50%",
    color: Color.gray_700,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  blog1: {
    top: 5278,
    left: -1,
    height: 386,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  frameChild5: {
    backgroundColor: "#d9d9d9",
    top: 0,
    left: 0,
  },
  rectangleWrapper: {
    top: 516,
    left: -23,
    overflow: "hidden",
  },
  graphicDesigning: {
    width: 144,
    left: 0,
  },
  digitalMarketing: {
    left: 206,
    width: 138,
  },
  development: {
    left: 397,
    width: 104,
  },
  cloudCommunication: {
    left: 509,
    width: 221,
  },
  testingIcon: {
    left: 725,
    width: 140,
  },
  content1: {
    left: 759,
    width: 64,
  },
  rignInV2Child: {
    backgroundColor: "#d8d0c3",
    top: 0,
    left: 0,
  },
  rignInV2Item: {
    top: -9,
    left: 46,
    backgroundColor: "#c3b2b2",
    shadowColor: "rgba(255, 0, 0, 0.25)",
    shadowRadius: 0.16,
    elevation: 0.16,
    height: 73,
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  rignInV2Inner: {
    height: 1,
    width: 8,
    position: "absolute",
    left: 23,
  },
  rignInV2Child1: {
    width: 9,
    left: 11,
    height: 1,
    position: "absolute",
  },
  rignInV2Child2: {
    height: 1,
    borderRadius: 0,
    top: 43,
    left: 3,
  },
  rignInV2Child3: {
    height: 1,
    borderRadius: 0,
    top: 43,
    left: 34,
  },
  icon1: {
    height: 17,
    top: 9,
  },
  fordMustangBoss429692: {
    top: 21,
    width: 37,
    left: 4,
  },
  jumpsuitIcon: {
    top: 35,
    height: 7,
  },
  rignInV2Child4: {
    height: 6,
    top: 46,
    left: 3,
  },
  theBlackhartOf: {
    color: Color.palevioletred,
    width: 10,
    top: 5,
    left: 7,
  },
  timeMachine: {
    fontSize: 1,
    lineHeight: 1,
    height: 6,
    width: 27,
    top: 0,
    left: 0,
  },
  theBlackhartOfStPaul1415Parent: {
    height: 6,
    width: 27,
    top: 46,
    left: 8,
    position: "absolute",
  },
  black: {
    width: 3,
    color: Color.labelColorLightPrimary,
    top: 0,
    left: 0,
  },
  groupChild13: {
    backgroundColor: Color.darkgoldenrod,
    height: 0,
    top: 0,
  },
  groupChild14: {
    backgroundColor: Color.yellowgreen,
    height: 0,
    top: 0,
  },
  groupChild15: {
    backgroundColor: Color.cadetblue,
    top: 1,
    height: 0,
  },
  groupChild16: {
    backgroundColor: Color.plum_200,
    top: 1,
    height: 0,
  },
  rectangleParent15: {
    height: 1,
    top: 0,
  },
  groupChildShadowBox: {
    borderWidth: 0,
    elevation: 0.18,
    shadowRadius: 0.18,
    width: 2,
    height: 1,
    borderColor: "#000",
    borderStyle: "solid",
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  groupParent11: {
    height: 1,
    top: 1,
  },
  groupChild18: {
    left: 2,
    width: 1,
    height: 1,
    top: 1,
    position: "absolute",
  },
  harte: {
    top: 3,
    width: 3,
    color: Color.labelColorLightPrimary,
    left: 0,
  },
  blackParent: {
    left: 36,
    height: 3,
    width: 3,
  },
  w: {
    left: 6,
    height: 1,
    top: 55,
    width: 3,
    fontSize: 2,
  },
  djNola: {
    color: Color.blueviolet_200,
    width: 21,
    lineHeight: 2,
    fontWeight: "800",
    fontSize: 3,
    letterSpacing: -0.1,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 11,
    top: 55,
  },
  ringIn: {
    color: Color.mediumslateblue_200,
    top: 5,
    width: 11,
    position: "absolute",
    height: 3,
    left: 3,
  },
  cashPrizeFor: {
    left: 14,
    fontSize: 1,
    lineHeight: 1,
    height: 2,
    width: 26,
    top: 3,
  },
  rignInV2Child5: {
    backgroundColor: Color.darkslategray_200,
    height: 0,
    top: 34,
  },
  rignInV2Child6: {
    width: 10,
    height: 7,
    left: 31,
  },
  rignInV2: {
    left: 39,
    top: 2,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  rignInV2Child7: {
    backgroundColor: "#ffacf4",
    top: 0,
    left: 0,
  },
  rignInV21: {
    left: 85,
    top: 2,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  rignInV2Child15: {
    backgroundColor: "#ffe03e",
    top: 0,
    left: 0,
  },
  rignInV22: {
    left: -7,
    top: 2,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  rignInV2Child23: {
    backgroundColor: "#3ef3ff",
    top: 0,
    left: 0,
  },
  rignInV23: {
    left: 131,
    top: 2,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  view: {
    top: 45,
    left: 895,
    borderRadius: 27,
    width: 125,
    height: 86,
    overflow: "hidden",
    position: "absolute",
  },
  publication1: {
    left: 900,
    width: 90,
  },
  groupWrapper1: {
    left: 0,
  },
  groupFrame: {
    left: 4,
  },
  image1511Icon: {
    top: 51,
    left: 551,
    width: 112,
    height: 104,
    position: "absolute",
  },
  image1509Icon: {
    left: 362,
    width: 120,
    height: 94,
  },
  image1507Icon: {
    width: 140,
    height: 94,
    left: 4,
  },
  image1508Icon: {
    left: 192,
    height: 109,
    top: 43,
    width: 140,
    position: "absolute",
  },
  groupParent10: {
    width: 1023,
    left: 0,
  },
  frameWrapper: {
    width: 401,
    overflow: "hidden",
    left: 0,
  },
  frameParent3: {
    top: 610,
    width: 416,
    height: 190,
  },
  label3: {
    fontSize: 16,
    lineHeight: 17,
    display: "none",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
  },
  button3: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    top: 37,
    height: 37,
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.accessibleSystemOrangeLight,
    left: 0,
  },
  contactUs: {
    fontSize: 18,
    lineHeight: 19,
    height: 19,
    width: 94,
    top: 6,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    color: Color.labelColorDarkPrimary,
  },
  buttonParent: {
    top: 2957,
    left: 151,
  },
  image1512Icon: {
    width: 65,
    height: 56,
    top: 60,
  },
  designerstandingconfidentIcon: {
    top: -156,
    left: -175,
    width: 540,
    height: 1080,
    position: "absolute",
  },
  myNameIs: {
    fontFamily: FontFamily.poppinsRegular,
  },
  myNameIsContainer: {
    left: 174,
    lineHeight: 17,
    width: 187,
    fontSize: 14,
    height: 221,
    color: Color.labelColorDarkPrimary,
  },
  about: {
    fontSize: FontSize.size_8xl_1,
  },
  text24: {
    fontSize: 14,
  },
  aboutUs: {
    top: 161,
    left: 188,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  smallCircleIcon: {
    height: "47.35%",
    width: "99.72%",
    top: "49.93%",
    right: "-0.1%",
    bottom: "2.73%",
    left: "0.38%",
    maxHeight: "100%",
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
  frameLineargradient: {
    marginLeft: -226,
    top: 179,
    borderRadius: 219,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 0.6,
    height: 365,
    borderStyle: "solid",
    left: "50%",
    width: 365,
    backgroundColor: "transparent",
    position: "absolute",
  },
  homeInner1: {
    top: 1025,
    left: 109,
    width: 278,
    height: 272,
    position: "absolute",
  },
  visitUs: {
    fontSize: 21,
    color: Color.sandybrown,
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  westheimerRdSanta: {
    width: 149,
    marginTop: 14.29,
  },
  visitUsParent: {
    top: 1,
  },
  contactcompanycom: {
    width: 215,
  },
  text25: {
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
  frameParent4: {
    width: 432,
    height: 134,
  },
  contactInfo: {
    marginLeft: -222,
    top: 2674,
    width: 398,
    height: 115,
    left: "50%",
    position: "absolute",
  },
  email: {
    left: 87,
    color: Color.darkgray,
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  fieldEmail: {
    marginLeft: -182,
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_900,
    overflow: "hidden",
    left: "50%",
    width: 237,
  },
  frameChild6: {
    backgroundColor: Color.paleturquoise,
    height: 133,
    width: 178,
  },
  icon5: {
    left: 0,
  },
  icon6: {
    left: 48,
    width: 46,
    top: 0,
  },
  icon7: {
    left: 101,
  },
  parent1: {
    left: 18,
    width: 141,
    top: 5,
  },
  rectangleParent19: {
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
  frameChild7: {
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
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent20: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild8: {
    backgroundColor: Color.gray_1500,
    top: 0,
  },
  mockups: {
    left: 54,
  },
  rectangleParent21: {
    top: 89,
  },
  design: {
    top: 20,
    position: "absolute",
    left: -22,
  },
  comp382: {
    width: 126,
    height: 101,
    top: 0,
  },
  mockups1: {
    top: 25,
    height: 113,
    width: 154,
  },
  uiDesignParent: {
    top: 1744,
    left: -15,
    height: 294,
  },
  homeItem: {
    top: 3534,
    left: -4,
    width: 510,
    height: 142,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  time: {
    marginLeft: -25,
    top: "15%",
    left: "50%",
    fontWeight: "600",
    position: "absolute",
    textAlign: "center",
  },
  batteryIcon: {
    height: 12,
    top: 2,
    width: 27,
  },
  text26: {
    right: 112,
    textAlign: "right",
    position: "absolute",
    top: 0,
  },
  alarmIcon: {
    right: 77,
  },
  bluetoothIcon: {
    right: 62,
  },
  rightSide: {
    right: 6,
    width: 146,
    height: 17,
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
  },
  wifiIcon: {
    width: 15,
    marginLeft: 4,
    height: 14,
  },
  leftSide: {
    top: 3,
    overflow: "hidden",
    left: 4,
    flexDirection: "row",
    position: "absolute",
  },
  statusbarIphone678Se: {
    height: 26,
    overflow: "hidden",
    width: 430,
    left: 0,
  },
  text27: {
    top: 4693,
    left: 79,
    fontSize: 24,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  button4: {
    left: 296,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.accessibleSystemOrangeLight,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  or: {
    marginLeft: -29,
    top: 2899,
    height: 14,
    fontSize: FontSize.size_5xl,
  },
  recentWorks: {
    marginLeft: -89,
    top: 1693,
    fontSize: FontSize.size_8xl_9,
    width: 191,
    left: "50%",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  learNMore: {
    marginLeft: 79,
    top: 1587,
    transform: [
      {
        rotate: "-0.11deg",
      },
    ],
    left: "50%",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  image1535Icon: {
    width: 61,
    left: 42,
  },
  image1536Icon: {
    width: 63,
    left: 190,
  },
  image1537Icon: {
    width: 55,
    height: 55,
    top: 0,
  },
  image1538Icon: {
    top: 101,
    width: 52,
    left: 44,
  },
  image1539Icon: {
    top: 227,
    height: 51,
    left: 196,
    width: 49,
    position: "absolute",
  },
  image1540Icon: {
    top: 232,
    height: 46,
    width: 49,
  },
  image1541Icon: {
    top: 110,
    width: 68,
    height: 57,
  },
  image1542Icon: {
    top: 348,
    width: 45,
    height: 45,
    left: 44,
    position: "absolute",
  },
  image1544Icon: {
    top: 330,
    width: 79,
    height: 79,
  },
  image1545Icon: {
    top: 225,
    width: 127,
    left: 22,
  },
  image1546Icon: {
    top: 114,
    width: 67,
    height: 40,
  },
  html: {
    top: 69,
    left: 55,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  css: {
    left: 209,
  },
  xml: {
    left: 339,
  },
  python: {
    left: 55,
  },
  bootstrap: {
    left: 188,
  },
  django: {
    left: 335,
  },
  https: {
    top: 294,
    left: 55,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  nodejs: {
    left: 196,
  },
  php: {
    left: 348,
  },
  aws: {
    left: 55,
  },
  azure: {
    left: 208,
  },
  image1535Parent: {
    top: 4251,
    left: -13,
    width: 420,
    height: 537,
    position: "absolute",
  },
  icon8: {
    height: "100%",
    width: "100%",
  },
  image1550: {
    left: 383,
    width: 32,
    height: 23,
    top: 60,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    left: "50%",
  },
  homeindicator: {
    marginLeft: -180,
    top: 852,
    width: 375,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  home: {
    flex: 1,
    height: 932,
    width: "100%",
    backgroundColor: Color.labelColorDarkPrimary,
  },
});

export default Home;
