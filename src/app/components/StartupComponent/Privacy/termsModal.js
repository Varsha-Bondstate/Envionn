/**
* Sample React Native App
* https: //github.com/facebook/react-native
*
* @format
* @flow
*/
/* jshint ignore:start */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  Modal,
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import {Icon} from 'react-native-elements';
import I18n from '@localization/i18n';
import LinearGradient from 'react-native-linear-gradient';
class TermsModal extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false, // modal boolean
    };
  }
  componentDidMount () {
    if (this.props.openValue) {
      this.setState (
        {
          modalVisible: this.props.openValue,
        },
        function () {}
      );
    }
  }
  // modal close
  toggleModal (visible) {
    this.setState ({modalVisible: visible}, () => {});
    this.props.closeModal (visible, this.state);
  }

  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
      >

        <LinearGradient
          colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
          style={baseStyles.content}
        >
          <View style={styles.popupClose}>
            <TouchableOpacity style={styles.resetText}>

              <Icon
                name="close"
                type="material"
                color={colors.white}
                size={hp ('4%')}
                onPress={() => {
                  this.toggleModal (!this.state.modalVisible);
                }}
              />

            </TouchableOpacity>
            <Icon
              name="done"
              type="material"
              color={colors.white}
              size={hp ('4%')}
              onPress={() => {
                this.toggleModal (!this.state.modalVisible);
              }}
            />

          </View>

          <View style={styles.termsContainer}>

            <Text style={styles.hederText}>Privacy Policy</Text>
            <ScrollView>
              <Text style={styles.normalText}>
                Envionn Privacy Policy
                Last Updated: November 1, 2019

                TABLE OF CONTENTS:
                INTRODUCTION
                INFORMATION WE COLLECT
                HOW WE USE THE INFORMATION WE COLLECT
                SHARING & DISCLOSURE
                OTHER IMPORTANT INFORMATION
                YOUR RIGHTS
                OPERATING GLOBALLY & INTERNATIONAL TRANSFERS
                SECURITY
                CHANGES TO THIS PRIVACY POLICY
                CONTACT US
                1. INTRODUCTION
                Thank you for using Envionn! Your trust is important to us and we’re committed to protecting the privacy and security of your personal information. The information that’s shared with us helps us to provide a great experience with Envionn. We have a dedicated privacy team that’s committed to protecting all the personal information we collect and help ensure that personal information is handled properly worldwide.

                This Privacy Policy describes how we collect, use, process, and disclose your personal information, in conjunction with your access to and use of the Envionn Platform and the Payment Services. This privacy policy describes our privacy practices for all websites, platforms and services that link to it. Please read the privacy policy on the applicable site.

                1.1 Definitions

                If you see an undefined term in this Privacy Policy (such as “Listing” or “Envionn Platform”), it has the same definition as in our Terms of Service (“Terms”).

                1.2 Data Controller

                When this policy mentions “Envionn,” “we,” “us,” or “our,” it refers to the Envionn company that is responsible for your information under this Privacy Policy (the “Data Controller”).

                If your country of residence is the United States, the Data Controller is Envionn, Inc.
                If your country of residence is outside of the United States, the People’s Republic of China which for purposes of this Privacy Policy does not include Hong Kong, Macau and Taiwan (“China”) and Japan, the Data Controller is Envionn Ireland UC (“Envionn Ireland”).
                If your country of residence is China, and you (a) book a Host Service located outside of China or (b) create a Listing located outside of China, the Data Controller is Envionn Ireland for that transaction and this Privacy Policy will apply.
                If your country of residence is Japan, the Data Controller is Envionn Global Services Limited (“Envionn GSL”), except where you book a Host Service located outside of Japan or create a Listing located outside of Japan, in which case the Data Controller is Envionn Ireland for that transaction. Additionally, if you reside in Japan, Envionn Ireland will be the Data Controller for all bookings confirmed prior to June 13, 2018 at 3PM UTC.
                1.3 Applicability to Payments

                This Privacy Policy also applies to the Payment Services provided to you by Envionn Payments pursuant to the Payments Terms of Service (“Payments Terms”). When using the Payment Services, you will be also providing your information, including personal information, to one or more Envionn Payments entities, which will also be the Data Controller (the "Payments Data Controller") of your information related to the Payment Services, generally depending on your country of residence.

                If your country of residence is the United States, the Payments Data Controller is Envionn Payments, Inc. (a subsidiary of Envionn, Inc.).
                If your country of residence is China, and you (a) book a Host Service located outside of China, or (b) create a Listing located outside of China, or (c) book a Host Service in China with a Host who is not a resident of China, the Payments Data Controller is Envionn Payments UK Ltd. (“Envionn Payments UK”) for that transaction and this Privacy Policy will apply.
                If your country of residence is India, the Payments Data Controller is Envionn Payments India, except in the following circumstances: - if you book a Host Service located outside of India; - if you create a Listing outside of India, in which case, the Payments Data Controller is Envionn Payments UK. Notwithstanding anything to the contrary in this clause, if you create a Listing in India, and: - accept a booking from a Guest who is a resident of India, regardless of your country of residence, the Payments Data Controller is Envionn Payments India; or - accept a booking from a Guest who is not a resident of India, regardless of your country of residence, the Payments Data Controller is Envionn Payments UK.
                If your country of residence is Australia, the Payments Data Controller is Envionn Payments UK, except if you book a Host Service located in or outside of Australia, which is confirmed after January 9, 2019 at 1:00 AM UTC, in which case, the Payments Data Controller is Envionn Payments Australia Pty. Ltd. (“Envionn Payments Australia”) for that transaction.
                If your country of residence is in the European Union, the Payment Data Controller is Envionn Payments UK. On or after March 25, 2019, any change of the Payment Data Controller to Envionn Payments Luxembourg S.A., if any, will be notified to you at the time of checkout or by other appropriate means.
                If your country of residence is outside of the United States, China, India and Australia, the Payments Data Controller is Envionn Payments UK.
                If you change your country of residence, the Data Controller and/or Payments Data Controller will be determined by your new country of residence as specified above, from the date on which your country of residence changes. To this end the Data Controller and/or Payment Data Controller that originally collected your personal information will need to transfer such personal information to the new applicable Data Controller and/or Payments Data Controller due to the fact that such transfer is necessary for the performance of the contractual relationship with you.

                Please see the Contact Us section below for contact details of the Data Controllers and Payments Data Controllers.

                2. INFORMATION WE COLLECT
                There are three general categories of information we collect.

                2.1 Information You Give to Us.

                2.1.1 Information that is necessary for the use of the Envionn Platform.

                We ask for and collect the following personal information about you when you use the Envionn Platform. This information is necessary for the adequate performance of the contract between you and us and to allow us to comply with our legal obligations. Without it, we may not be able to provide you with all the requested services.

                Account Information. When you sign up for an Envionn Account, we require certain information such as your first name, last name, email address, and date of birth.
                Profile and Listing Information. To use certain features of the Envionn Platform (such as booking or creating a Listing), we may ask you to provide additional information, which may include your address, phone number, and a profile picture.
                Identity Verification Information. To help create and maintain a trusted environment, we may collect identity verification information (such as images of your government issued ID, passport, national ID card, or driving license, as permitted by applicable laws) or other authentication information. To learn more, see our Help Center article about providing identification on Envionn.
                Payment Information. To use certain features of the Envionn Platform (such as booking or creating a Listing), we may require you to provide certain financial information (like your bank account or credit card information) in order to facilitate the processing of payments (via Envionn Payments).
                Communications with Envionn and other Members. When you communicate with Envionn or use the Envionn Platform to communicate with other Members, we collect information about your communication and any information you choose to provide.
                2.1.2 Information you choose to give us.

                You may choose to provide us with additional personal information in order to obtain a better user experience when using Envionn Platform. This additional information will be processed based on our legitimate interest or when applicable, your consent.

                Additional Profile Information. You may choose to provide additional information as part of your Envionn profile (such as gender, preferred language(s), city, and a personal description). Some of this information as indicated in your Account settings is part of your public profile page, and will be publicly visible to others.
                Address Book Contact Information. You may choose to import your address book contacts or enter your contacts’ information manually to access certain features of the Envionn Platform, like inviting them to use Envionn.
                Other Information. You may otherwise choose to provide us information when you fill in a form, update or add information to your Envionn Account, respond to surveys, post to community forums, participate in promotions, communicate with our customer care team, share your experience with us (such as through Host Stories), or use other features of the Envionn Platform.
                2.1.3 Information that is necessary for the use of the Payment Services.

                The Payments Data Controller needs to collect the following information necessary for the adequate performance of the contract with you and to comply with applicable law (such as anti-money laundering regulations). Without it, you will not be able to use Payment Services:

                Payment Information. When you use the Payment Services, the Payments Data Controller requires certain financial information (like your bank account or credit card information) in order to process payments and comply with applicable law.
                Identity Verification and Other Information. If you are a Host, the Payments Data Controller may require identity verification information (such as images of your government issued ID, passport, national ID card, or driving license) or other authentication information, your date of birth, your address, email address, phone number and other information in order to verify your identity, provide the Payment Services to you, and to comply with applicable law.
                2.1.4 Information We Automatically Collect from Your Use of the Envionn Platform and Payment Services.

                When you use the Envionn Platform and the Payment Services, we automatically collect personal information about the services you use and how you use them. This information is necessary for the adequate performance of the contract between you and us, to enable us to comply with legal obligations and given our legitimate interest in being able to provide and improve the functionalities of the Envionn Platform and Payment Services.

                Geo-location Information. When you use certain features of the Envionn Platform, we may collect information about your precise or approximate location as determined through data such as your IP address or mobile device’s GPS to offer you an improved user experience. Most mobile devices allow you to control or disable the use of location services for applications in the device’s settings menu. Envionn may also collect this information even when you are not using the app if this connection is enabled through your settings or device permissions.
                Usage Information. We collect information about your interactions with the Envionn Platform such as the pages or content you view, your searches for Listings, bookings you have made, and other actions on the Envionn Platform.
                Log Data and Device Information. We automatically collect log data and device information when you access and use the Envionn Platform, even if you have not created an Envionn Account or logged in. That information includes, among other things: details about how you’ve used the Envionn Platform (including if you clicked on links to third party applications), IP address, access dates and times, hardware and software information, device information, device event information, unique identifiers, crash data, cookie data, and the pages you’ve viewed or engaged with before or after using the Envionn Platform.
                Cookies and Similar Technologies. We use cookies and other similar technologies when you use our platform, use our mobile app, or engage with our online ads or email communications. We may collect certain information by automated means using technologies such as cookies, web beacons, pixels, browser analysis tools, server logs, and mobile identifiers. In many cases the information we collect using cookies and other tools is only used in a non-identifiable without reference to personal information. For example, we may use information we collect to better understand website traffic patterns and to optimize our website experience. In some cases we associate the information we collect using cookies and other technology with your personal information. Our business partners may also use these tracking technologies on the Envionn Platform or engage others to track your behavior on our behalf.
                Pixels and SDKs. Third parties, including Facebook, may use cookies, web beacons, and other storage technologies to collect or receive information from our websites and elsewhere on the internet and use that information to provide measurement services and target ads. For apps, that third parties, including Facebook, may collect or receive information from your app and other apps and use that information to provide measurement services and targeted ads. Users can opt-out of the collection and use of information for ad targeting by updating their Facebook account ad settings and by contacting opt-out@Envionn.com with a description of your request and validation information. Users can access a mechanism for exercising such choice by going to http://www.aboutads.info/choices and http://www.youronlinechoices.eu/. For more information on our use of these technologies, see our Cookie Policy.
                Do Not Track Signals. While you may disable the usage of cookies through your browser settings, the Envionn Platform currently does not respond to a “Do Not Track” signal in the HTTP header from your browser or mobile application due to lack of standardization regarding how that signal should be interpreted.
                Payment Transaction Information. Envionn Payments collects information related to your payment transactions through the Envionn Platform, including the payment instrument used, date and time, payment amount, payment instrument expiration date and billing postcode, PayPal email address, IBAN information, your address and other related transaction details. This information is necessary for the adequate performance of the contract between you and Envionn Payments and to allow the provision of the Payment Services.
                2.1.5 Information We Collect from Third Parties.

                Envionn and Envionn Payments may collect information, including personal information, that others provide about you when they use the Envionn Platform and the Payment Services, or obtain information from other sources and combine that with information we collect through the Envionn Platform and the Payment Services. We do not control, supervise or respond for how the third parties providing your information process your Personal Information, and any information request regarding the disclosure of your personal information to us should be directed to such third parties.

                Third Party Services. If you link, connect, or login to your Envionn Account with a third party service (e.g. Google, Facebook, WeChat), the third party service may send us information such as your registration, friends list, and profile information from that service. This information varies and is controlled by that service or as authorized by you via your privacy settings at that service.
                Your References. If someone has written a reference for you, it will be published on your Envionn public profile page with your consent. To learn more, see our Help Center article about References.
                Background Information. For Members in the United States, to the extent permitted by applicable laws, Envionn and Envionn Payments may obtain reports from public records of criminal convictions or sex offender registrations. For Members outside of the United States, to the extent permitted by applicable laws and with your consent where required, Envionn and Envionn Payments may obtain the local version of police, background or registered sex offender checks. We may use your information, including your full name and date of birth, to obtain such reports.
                Enterprise Product Invitations and Account Management. Organizations that use our Enterprise products (such a Envionn for work and programs with property managers and owners) may submit personal information to facilitate account management and invitations to use enterprise products.
                Referrals. If you are invited to Envionn, the person who invited you may submit personal information about you such as your email address or other contact information.
                Other Sources. To the extent permitted by applicable law, we may receive additional information about you, such as demographic data or information to help detect fraud and safety issues, from third party service providers and/or partners, and combine it with information we have about you. For example, we may receive background check results (with your consent where required) or fraud warnings from service providers like identity verification services for our fraud prevention and risk assessment efforts. We may receive information about you and your activities on and off the Envionn Platform through partnerships, or about your experiences and interactions from our partner ad networks.
                2.2 Children’s Data.

                Our websites and applications are not directed to children under 16 and we do not knowingly collect any personal information directly from children under 16. If you believe that we processing the personal information pertaining to a child inappropriately, we take this very seriously and urge you to contact us using the information provided under the “Contact Us” section below.

                3. HOW WE USE INFORMATION WE COLLECT
                We may use, store, and process personal information to (1) provide, understand, improve, and develop the Envionn Platform, (2) create and maintain a trusted and safer environment (such as to comply with our legal obligations and ensure compliance with Envionn Policies) and (3) provide, personalize, measure, and improve our advertising and marketing.

                3.1 Provide, Improve, and Develop the Envionn Platform. We may use the personal information to provide, improve, and develop the Envionn Platform such as to:

                enable you to access and use the Envionn Platform,
                enable you to communicate with other Members,
                operate, protect, improve, and optimize the Envionn Platform and experience, such as by performing analytics and conducting research,
                provide customer service,
                send you service or support messages, updates, security alerts, and account notifications,
                if you provide us with your contacts’ information, we may process this information: (i) to facilitate your referral invitations, (ii) send your requests for references, (iii) for fraud detection and prevention, and (iv) for any purpose you authorize at the time of collection,
                to operate, protect, improve, and optimize the Envionn Platform and experience, and personalize and customize your experience (such as making Listing suggestions, ranking search results), and facilitate claims with our Host Guarantee, Host Protection Insurance, Experience Protection Insurance or other similar host protection programs, we conduct profiling based on your interactions with the Envionn Platform, your search and booking history, your profile information and preferences, and other content you submit to the Envionn Platform, and
                enable your use of our enterprise products.
                We process this personal information for these purposes given our legitimate interest in improving the Envionn Platform and our Members’ experience with it, and where it is necessary for the adequate performance of the contract with you.

                3.2 Create and Maintain a Trusted and Safer Environment. We may use the personal information to create and maintain a trusted and safer environment such as to:

                detect and prevent fraud, spam, abuse, security incidents, and other harmful activity,
                conduct security investigations and risk assessments,
                verify or authenticate information or identifications provided by you (such as to verify your Accommodation address or compare your identification photo to another photo you provide),
                conduct checks against databases and other information sources, including background or police checks, to the extent permitted by applicable laws and with your consent where required,
                comply with our legal obligations,
                Resolve any disputes with any of our Members and enforce our agreements with third parties,
                enforce our Terms of Service and other policies, and
                in connection with the activities above, we may conduct profiling based on your interactions with the Envionn Platform, your profile information and other content you submit to the Envionn Platform, and information obtained from third parties. In limited cases, automated processes may restrict or suspend access to the Envionn Platform if such processes detect activity that we think poses a safety or other risk to the Envionn Platform, our community, or third parties. If you challenge the decisioning based on the automated process, please contact us as provided in the Contact Us section below.
                We process this personal information for these purposes given our legitimate interest in protecting the Envionn Platform, to measure the adequate performance of our contract with you, and to comply with applicable laws.

                3.3 Provide, Personalize, Measure, and Improve our Advertising and Marketing. We may use the personal information to provide, personalize, measure, and improve our advertising and marketing such as to:

                send you promotional messages, marketing, advertising, and other information that may be of interest to you based on your preferences (including information about Envionn or partner campaigns and services) and social media advertising through social media platforms such as Facebook or Google),
                personalize, measure, and improve our advertising,
                Administer referral programs, rewards, surveys, sweepstakes, contests, or other promotional activities or events sponsored or managed by Envionn or its third party partners,
                conduct profiling on your characteristics and preferences (based on the information you provide to us, your interactions with the Envionn Platform, information obtained from third parties, and your search and booking history) to send you promotional messages, marketing, advertising and other information that we think may be of interest to you,
                enrolling in an email subscription will not affect the frequency of administrative emails that we may send in connection with any Envionn Account. No fee is charged for sending promotional emails to you, but third-party data rates may apply. Note that you may not be able to take advantage of certain promotions if you do not have an Envionn Account, and
                invite you to events and relevant opportunities (for example, when you share your Host story, we may use the information provided to reach out to you to invite you to relevant events).
                We will process your personal information for the purposes listed in this section given our legitimate interest in undertaking marketing activities to offer you products or services that may be of your interest.

                3.4 How the Payments Data Controller uses the Personal Information Collected. We may use the personal information as a part of Payment services such as to:

                Enable you to access and use the Payment Services.
                Detect and prevent fraud, abuse, security incidents, and other harmful activity.
                Conduct security investigations and risk assessments.
                Conduct checks against databases and other information sources.
                Comply with legal obligations (such as anti-money laundering regulations).
                Enforce the Payment Terms and other payment policies.
                With your consent, send you promotional messages, marketing, advertising, and other information that may be of interest to you based on your preferences.
                The Payments Data Controller processes this personal information given its legitimate interest in improving the Payment Services and its users’ experience with it, and where it is necessary for the adequate performance of the contract with you and to comply with applicable laws.

                3.5 SMS Terms for U.S.

                For text messaging in the United States, by requesting, joining, agreeing to, enrolling in, signing up for, acknowledging, or otherwise consenting to receive one or more text messages (“Opting In”) or using a Envionn arrangement in which Envionn sends (or indicates that it may send, or receives a request that it send) one or more text messages (“Text Message Service”), you accept these SMS Terms for U.S. (“SMS Terms”), consent to the handling of your personal information as described in the Envionn Privacy Policy, and agree to resolve disputes with Envionn as described in our Terms of Service. Message and data rates may apply.

                Envionn will use reasonable commercial efforts to deliver the automated marketing text messages to the number you provide through compatible wireless carriers. Carriers and Envionn are not liable for delayed or undelivered messages. The short code we use for some Tex
              </Text>
            </ScrollView>
          </View>

        </LinearGradient>
      </Modal>
    );
  }
}
export default TermsModal;
