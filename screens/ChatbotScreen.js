import React, {Component} from 'react';
import {Text, View, Switch} from 'react-native';

import {StyleSheet, Button} from 'react-native';
import Voice from '@react-native-community/voice';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {dialogflowConfig} from '../config';
import Firebase from '../config/Firebase';
import Tts from 'react-native-tts';
import _ from 'lodash';


const BOT_USER = {
  _id: 2,
  name: 'Glooko Buddy',
  avatar:
    'https://media.glassdoor.com/sql/1320444/glooko-squarelogo-1467383473350.png',
};

const USER = {
  _id: 1,
  name: 'User',
};

interface Reply {
  title: string;
  text: string;
  messageId?: any;
}

interface QuickReplies {
  type: 'radio' | 'checkbox';
  values: Reply[];
  keepIt?: boolean;
}

var Type1Type2DiabetesMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'What is Type 1 diabetes?',
        text: 'What is Type 1 diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'What is Type 2 diabetes?',
        text: 'What is Type 2 diabetes?',
      },
    ],
  },
};

var TopQuestionMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'What is diabetes?',
        text: 'What is diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Type 1 vs Type 2 diabetes',
        text: 'Type 1 vs Type 2 diabetes',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'What are the symptoms?',
        text: 'What are the symptoms of diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'How to prevent diabetes?',
        text: 'How to prevent diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Something else',
        text: 'I want something else.',
      },
    ],
  },
};

var FoodsGI = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Low GI foods',
        text: 'Low GI foods',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Medium GI foods',
        text: 'Medium GI foods',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'High GI foods',
        text: 'High GI foods',
      },
    ],
  },
};

var LowerBloodSugarAdjustmentMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Exercise for diabetics.',
        text: 'Exercise for diabetics.',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Adjustments in diet.',
        text: 'Adjustments in diet.',
      },
    ],
  },
};

var GlucoseLevelsChartMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Show me an image chart.',
        text: 'Show me an image chart.',
      },
    ],
  },
};

var EatingBloodSugarMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Glycemic Index',
        text: 'Glycemic Index',
      },
    ],
  },
};

var ReadMoreStatisticsMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Read more diabetes statistics...',
        text: 'Read more diabetes statistics...',
      },
    ],
  },
};

var PreventionGeneralMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Lifestyle adjustments.',
        text: 'Lifestyle adjustments.',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Am I in the high risk group?',
        text: 'Am I in the high risk group?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Regular blood testing?',
        text: 'When should I start testing my blood regularly?',
      },
    ],
  },
};

var PreventionLifestyleMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Diabetes Prevention Diet.',
        text: 'Diabetes Prevention Diet',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Early signs of diabetes.',
        text: 'Early signs of diabetes.',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Regular blood testing?',
        text: 'When should I start testing my blood regularly?',
      },
    ],
  },
};

var DiagnosticsMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Risk Groups for Type 1.',
        text: 'Risk Groups for Type 1.',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Risk groups for Type 2.',
        text: 'Risk groups for Type 2.',
      },
    ],
  },
};

var PrediabetesSymptomsMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Causes for Type 2 diabetes?',
        text: 'What are the causes for Type 2 diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Risk groups for Type 2.',
        text: 'Risk groups for Type 2.',
      },
    ],
  },
};

var TooHighBloodSugarMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'How to lower blood sugar instantly?',
        text: 'How to lower blood sugar instantly?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'What to do in an emergency?',
        text: 'What to do in an emergency?',
      },
    ],
  },
};

var WhatIsDiabetesMessage = Type1Type2DiabetesMessage;

var WhatIsPreDiabetesMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'How to prevent getting diabetes?',
        text: 'How to prevent getting diabetes?',
      },
    ],
  },
};

var WhatIsType1DiabetesMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Risk groups',
        text: 'Risk groups for Type 1 Diabetes.',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Causes',
        text: 'What are the causes for Type 1 Diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Maintenance',
        text: 'How do you maintain Type 1 Diabetes?',
      },
    ],
  },
};

var MaintenanceOfType1Message = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Exercise in diabetes',
        text: 'Exercise in diabetes',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Diabetes-friendly diet',
        text: 'Diabetes-friendly diet',
      },
    ],
  },
};

var WhatIsType2DiabetesMessage = {
  _id: Math.random(),
  user: BOT_USER,
  quickReplies: {
    type: 'radio',
    keepIt: true,
    values: [
      {
        _id: Math.random(),
        user: USER,
        title: 'Risk groups',
        text: 'Risk groups for Type 2 Diabetes.',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Causes',
        text: 'What are the causes for Type 2 Diabetes?',
      },
      {
        _id: Math.random(),
        user: USER,
        title: 'Maintenance',
        text: 'How do you maintain Type 2 Diabetes?',
      },
    ],
  },
};

var MaintenanceOfType2Message = MaintenanceOfType1Message;

class ChatbotScreen extends React.Component {
  state = {
    BpHigh: '',
    BpLow: '',
    BgHigh: '',
    BgLow: '',
    BgHighdate: '',
    BgLowdate: '',
    FirstAid: 0,
    GenDiabetes: 0,
    LifeTips: 0,
    SgrLvl: 0,
    currUser: Firebase.auth().currentUser.uid,
    messages: [
      {
        _id: 1,
        text: 'If you want to ask something else, type in or say the question.',
        createdAt: new Date(),
        user: BOT_USER,
      },
      {
        _id: 2,
        text:
          'Hi! I am GlookoBuddy 🤖 \nI am here to answer your questions about diabetes.',
        createdAt: new Date(),
        user: BOT_USER,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {
              _id: Math.random(),
              user: USER,
              title: 'What can I ask you?',
              text: 'What can I ask you?',
            },
            {
              _id: Math.random(),
              user: USER,
              title: 'I want to log my data.',
              text: 'I want to log my data.',
            },
          ],
        },
      },
    ],
    results: [], 
    ttsToggle: true,
    sttToggle: true,
  };

  UNSAFE_componentWillMount() {
    Firebase.database()
      .ref('/users/' + this.state.currUser + '/Analytics/')
      .once('value', snapshot => {
        var high = snapshot.child('HighestBG').val();
        var highdate = snapshot.child('HighestBGdate').val();
        var low = snapshot.child('LowestBG').val();
        var lowdate = snapshot.child('LowestBGdate').val();
        this.setState({
          BgHigh: high,
          BgHighdate: highdate,
          BgLow: low,
          BgLowdate: lowdate,
        });
      });
      Firebase.database()
      .ref('/users/' + this.state.currUser + '/Tags/Counts')
      .once('value', snapshot => {
        var FA = snapshot.child('FirstAid').val();
        var GD = snapshot.child('GenDiabetes').val();
        var LT = snapshot.child('LifeTips').val();
        var SL = snapshot.child('SgrLvl').val();
        this.setState({
          FirstAid: FA,
          GenDiabetes: GD,
          LifeTips: LT,
          SgrLvl: SL,
        });
      });
  }

  constructor(props) {
    super(props);
    Voice.onSpeechResults = _.debounce(this.onSpeechResultsfn.bind(this), 1000);
    Voice.onSpeechStart = this.onSpeechStartfn.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognizedfn.bind(this);
    Voice.onSpeechError = this.onSpeechErrorfn.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndfn.bind(this);


    Tts.addEventListener('tts-start', event => console.log('start', event));
    Tts.addEventListener('tts-finish', event => this._startRecognition());
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

  }

  onSpeechStartfn = e => {
    console.log('onSpeechStart: ', e);
    };

  onSpeechRecognizedfn = e => {
    console.log('onRecognizedStart: ', e);
    };

  onSpeechEndfn = e => {
    console.log('onEndStart: ', e);
    console.log(this.state.results);
    console.log('after state results');
    this._addVoiceMsg(this.state.results);
    };

  onSpeechErrorfn = e => {
    console.log('onErrorStart: ', e);
    // if (e.value){
    //   Voice.stop();
    //   this._startRecognition();
    // }
    };

  onSpeechResultsfn(e) {
    this._stopRecognition();
    if (this.state.results.length == 0) {
      console.log('onSpeechResults: ', e);

      this.setState({
        results: e.value,
      });
    }
  }

  componentWillmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  async componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );

    Tts.speak("Hi! I am GlookoBuddy. I am here to answer your questions about diabetes. If you want to ask something, type in or say the question");
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleResponse(result),
      error => console.log(error),
    );
  }
  updateMyState() {
    Firebase.database()
      .ref('/users/' + this.state.currUser + '/Analytics/')
      .once('value', snapshot => {
        var high = snapshot.child('HighestBG').val();
        var highdate = snapshot.child('HighestBGdate').val();
        var low = snapshot.child('LowestBG').val();
        var lowdate = snapshot.child('LowestBGdate').val();
        this.setState({
          BgHigh: high,
          BgHighdate: highdate,
          BgLow: low,
          BgLowdate: lowdate,
        });
      });
  }

  //can currently handle
  //"what is my highest/lowest blood pressure"
  //"what is my highest/lowest blood glucose"
  //returns either a response or Null
  handleRead(res) {
    this.updateMyState();
    if (res[1] == 'blood') {
      if (res[2] == 'glucose') {
        if (res[3] == 'highest') {
          return (
            'Your highest Blood Glucose was ' +
            this.state.BgHigh +
            ' on ' +
            this.state.BgHighdate
          );
        } else if (res[3] == 'lowest') {
          return (
            'Your lowest Blood Glucose was ' +
            this.state.BgLow +
            ' on ' +
            this.state.BgLowdate
          );
        }
      }
    }
    return 'Null';
  }

  //can currently handle
  //"my blood pressure today is (number)"
  //returns either success or Null
  handleWrite(res) {
    console.log(res[1] + res[2] + ' ' + res[3]);
    if (res[1] == 'blood') {
      if (res[2] == 'glucose') {
        var amount = res[3];
        //check if input is correct and if it is input it into the database
        result = this.inputCheck(parseInt(amount));
        if(result == ''){
            result = this.handleWriteBG(amount);
        }else{
            return result;
        }
        return result;
      }
    }

    return 'Null';
  }

  //if input is good then function returns '' else it returns error message
  inputCheck(amount){
    if(isNaN(amount)){
        return "Please input a number";
    }else{
        if(amount < 20 || amount > 399){
            return "This input is an incredibly dangerous level, are you sure this reading is correct?";
        }else{
            return '';
        }
    }
    return '';
  }

  handleWriteBG(BGamount) {
    currDate = new Date();
    var pushlog = Firebase.database().ref(
      '/users/' + this.state.currUser + '/Analytics/BloodGlucoseLog/',
    ).push();
    pushlog.update({
      value: BGamount,
      date: currDate,
    });
    if (this.state.BgHigh == 'Null') {
      Firebase.database()
        .ref('/users/' + this.state.currUser + '/Analytics/')
        .update({
          HighestBG: BGamount,
          HighestBGdate: currDate,
        });
      this.setState({
        BgHigh: BGamount,
        BgHighdate: currDate,
      });
    }
    if (this.state.BgLow == 'Null') {
      Firebase.database()
        .ref('/users/' + this.state.currUser + '/Analytics/')
        .update({
          LowestBG: BGamount,
          LowestBGdate: currDate,
        });
      this.setState({
        BgLow: BGamount,
        BgLowdate: currDate,
      });
    }
    if (this.state.BgHigh < BGamount) {
      Firebase.database()
        .ref('/users/' + this.state.currUser + '/Analytics/')
        .update({
          HighestBG: BGamount,
          HighestBGdate: currDate,
        });
      this.setState({
        BgHigh: BGamount,
        BgHighdate: currDate,
      });
    } else if (this.state.BgLow > BGamount) {
      Firebase.database()
        .ref('/users/' + this.state.currUser + '/Analytics/')
        .update({
          LowestBG: BGamount,
          LowestBGdate: currDate,
        });
      this.setState({
        BgLow: BGamount,
        BgLowdate: currDate,
      });
    }
    return 'success';
  }

  UpdateAid() {
    var Updatevalue = this.state.FirstAid + 1;
    Firebase.database()
        .ref('/users/' + this.state.currUser + '/Tags/Counts')
        .update({
          FirstAid: Updatevalue,
        });
    this.setState({
        FirstAid: Updatevalue,
      });
  }
  UpdateGen() {
    var Updatevalue = this.state.GenDiabetes + 1;
    Firebase.database()
        .ref('/users/' + this.state.currUser + '/Tags/Counts')
        .update({
          GenDiabetes: Updatevalue,
        });
    this.setState({
        GenDiabetes: Updatevalue,
      });
  }
  UpdateTips() {
    var Updatevalue = this.state.LifeTips + 1;
    Firebase.database()
        .ref('/users/' + this.state.currUser + '/Tags/Counts')
        .update({
          LifeTips: Updatevalue,
        });
    this.setState({
        LifeTips: Updatevalue,
      });
  }
  UpdateSgr() {
    var Updatevalue = this.state.SgrLvl + 1;
    Firebase.database()
        .ref('/users/' + this.state.currUser + '/Tags/Counts')
        .update({
          SgrLvl: Updatevalue,
        });
    this.setState({
        SgrLvl: Updatevalue,
      });
  }

  handleResponse(result) {
    console.log(result);
    console.log('Response reached');
    let text = result.queryResult.fulfillmentText;
    console.log(text);
    let displayName = result.queryResult.intent.displayName;
    var res = text.split(' ');
    if (res[0] == 'Read') {
      text = 'Could not retreive your data sorry';
      var response = this.handleRead(res);
      if (response != 'Null') {
        text = response;
      }
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
    } else if (res[0] == 'write') {
      text = 'Storing your data';
      var response = this.handleWrite(res);
      if (response != 'success') {
        text = response;
      }
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      // Diabetes Type 1 & Type 2 Differences
    } else if (displayName === 'Diabetes Type 1 & Type 2 Difference') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(Type1Type2DiabetesMessage);
      // Foods GI
    } else if (displayName === 'Foods GI') {
      this.UpdateTips();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(FoodsGI);
      // Glucose level - image render
    } else if (displayName === 'Glucose Level - Norm/Pre/T1D/T2D') {
      this.UpdateSgr();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(GlucoseLevelsChartMessage);
      // How common is diabetes?
    } else if (displayName === 'How common is diabetes?') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(ReadMoreStatisticsMessage);
      // Food & Blood Sugar
    } else if (displayName === 'How Does Eating Affect Your Blood Sugar?') {
      this.UpdateSgr();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(EatingBloodSugarMessage);
      // What to ask?
    } else if (displayName === 'What to ask') {
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(TopQuestionMessage);
      // How to lower blood sugar instantly?
    } else if (displayName === 'How to lower blood sugar instantly?') {
      this.UpdateSgr();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(LowerBloodSugarAdjustmentMessage);
      // Is diabetes curable?
    } else if (displayName === 'Is diabetes curable?') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(LowerBloodSugarAdjustmentMessage);
      // Prevention general
    } else if (displayName === 'Prevention') {
      this.UpdateTips();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(PreventionGeneralMessage);
      // Prevention - Lifestyle to reduce risk
    } else if (displayName === 'Prevention - Lifestyle general') {
      this.UpdateTips();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(PreventionLifestyleMessage);
      // Symptoms to diagnose diabetes
    } else if (displayName === 'Symptoms to diagnose') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(DiagnosticsMessage);
      // Symptoms of prediabetes
    } else if (displayName === 'Pre-diabetes symptoms') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(PrediabetesSymptomsMessage);
      // What does it feel like when your blood sugar is too high?
    } else if (
      displayName ===
      'What does it feel like when your blood sugar is too high?'
    ) {
      this.UpdateSgr();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(TooHighBloodSugarMessage);
      // What is diabetes?
    } else if (displayName === 'What is diabetes?') {
      this.UpdateSgr();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(WhatIsDiabetesMessage);
      // What is pre-diabetes?
    } else if (displayName === 'What is pre-diabetes?') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(WhatIsPreDiabetesMessage);
      // What is type 1 diabetes?
    } else if (displayName === 'What is Type 1 diabetes?') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(WhatIsType1DiabetesMessage);
      // What is type 2 diabetes?
    } else if (displayName === 'What is Type 2 diabetes?') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(WhatIsType2DiabetesMessage);
      // What is type 1 diabetes - Maintenance
    } else if (displayName === 'What is Type 1 diabetes? - Maintenance') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(MaintenanceOfType1Message);
      // What is type 2 diabetes - Maintenance
    } else if (displayName === 'What is Type 2 diabetes? - Maintenance') {
      this.UpdateGen();
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
      this.showResponseBubble(MaintenanceOfType2Message);
      // Questions that do not have any suggestion bubbles
    } else {
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
    }
  }


  showResponseBubble(message) {
    message._id = this.state.messages.length + 1;
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [message]),
    }));
  }

  showResponse(text, payload) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    if (payload && payload.is_image) {
      msg.text = text;
      msg.image = payload.url;
    }

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
    
    if(this.state.ttsToggle === true) {
      Tts.speak(msg.text);
    } else {
      this._startRecognition();
    }

  }

  _startRecognition = async () => {

  if(this.state.sttToggle === true) {
      this.setState({
          results: [],
      });
      try {
          await Voice.start('en-US');
      } catch (e) {
          console.error(e);
      }
  }
};

  _stopRecognition = async () => {
    console.log('Stopping recognition.');
    try {
      await Voice.stop();
    } catch (e) {
      console.log(e);
    }
  };

  _addVoiceMsg = reses => {
    console.log('addingVoiceMsg');
    let res = reses[0];
    console.log(res);
    let count = {
      _id: this.state.messages.length + 1,
      text: res,
      createdAt: new Date(),
      user: {_id: 1},
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [count]),
    }));
    Dialogflow_V2.requestQuery(
      res,
      result => this.handleResponse(result),
      error => console.log(error),
    );
  };

  renderBubble = props => {
    const {currentUser} = this.state;
    return (
      <Bubble
        {...props}
        textStyle={{
          left: {
            color: 'white',
          },
          right: {
            color: 'white',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: 'rgba(61,180,255,0.67)',
          },
          left: {
            backgroundColor: '#3caffa',
          },
        }}
      />
    );
  };
  render() {
    return (
      <>
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onQuickReply={quickReply => this.onSend(quickReply)}
          user={USER}
          renderBubble={this.renderBubble}
        />
        <Button onPress={this._startRecognition} title="Begin Dictation 🎤" />
      </View>
    <View style={styles.rowContainer}>
      <Text>Text To Speech </Text>
      <Switch
        trackColor={{false:'gray',true:'teal'}}
        thumbColor="white"
        ios_backgroundColor="gray"
        onValueChange={(value) => this.setState({ttsToggle: value})}
        value={this.state.ttsToggle}
      />
      <Text>Speech To Text </Text>
      <Switch
        trackColor={{false:'gray',true:'teal'}}
        thumbColor="white"
        ios_backgroundColor="gray"
        onValueChange={(value) => this.setState({sttToggle: value})}
        value={this.state.sttToggle}
      />
    </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ChatbotScreen;
