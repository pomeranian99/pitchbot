var botui = new BotUI('pitch-bot');
var shortDelay = 1500; // 1500
var genDelay = 2500; // 2500
var longDelay = 3500; // 3500
var firstTimeAsked = true;

botui.message.add({
        content: "So, Adam! I think I have three ideas for this column."
      }).then(function () { // wait till previous message has been shown.

        botui.message.add({
          delay: shortDelay,
          human: false,
          content: "In brief, they are ... "
        }).then(function ()  {

          botui.message.add({
            delay: shortDelay,
            human: false,
            content: "Why voice interfaces need to act *less* human ..."
          }).then(function () {

          botui.message.add({
            delay: genDelay,
            human: false,
            content: "'The three hugest stories I missed', or, why it's hard to predict the future ... "
          }).then(function () {

            botui.message.add({
              delay: genDelay,
              human: false,
              content: "And the final idea: How to remove bias from AI."
            }).then(function () {
              hearAbout();
              })
            })
          })
        })
      });

function voiceUI() {
  botui.message.add({
    delay: genDelay,
    human: false,
    content: "Okay, the basic concept here is that today's voice interfaces are skeuomorphic. They're being held back by trying to behave *too much like humans*."
  }).then(function(){
    botui.message.add({
      delay: longDelay,
      human: false,
      content: "Remember how horrid the old skeuomorphic designs were on the iphone? Stitched leather and all that crap?"
    }).then(function(){
      botui.message.add({
        delay: longDelay,
        human: false,
        content: "Apple got rid of that. So did everyone else. On *visual* interfaces, we don't need the crutch of things looking like physical objects."
      }).then(function() {
        botui.message.add({
          delay: longDelay,
          human: false,
          content: "So we should get rid of that crutch with voice and chat, too!"
        }).then(function(){
          botui.message.add({
            delay: longDelay,
            human: false,
            content: "Why do our interfaces need to seem ... human?"
          }).then(function() {
            botui.message.add({
              delay: longDelay,
              human: false,
              content: "We waste a lot of time having to formulate sentences to them ... and listening to them speak sentences back."
            }).then(function() {
          botui.message.add({
            delay: genDelay,
            human: false,
            content: "If we ditched the pretense of 'conversation', maybe we could have voice apps that were snappier. Like key-commands ... for voice!"
          }).then(function() {
            botui.message.add({
              delay: longDelay,
              human: false,
              content: "Note: There have been two designers writing columns arguing precisely this point recently. I'd want to interview them and give them shoutouts. Here's one https://uxdesign.cc/the-new-skeuomorphism-is-in-your-voice-assistant-3b14a6553a0e"
            }).then(function () {
              hearAbout();
            })
          })
        })
        })
        })
      })
    })
  });
}


function missedStories() {
  botui.message.add({
    delay: genDelay,
    human: false,
    content: "Okay, here are some humiliating stories. The first: In 1999, a company asked me if I wanted to come cover them while they 'revolutionized video games'."
  }).then(function(){
    botui.message.add({
      delay: longDelay,
      human: false,
      content: "I visited their NYC offices. They'd just licensed a 2D cops-and-robbers game, and were aiming to take it 3D in two years. But I was like ..."
    }).then(function(){
      botui.message.add({
        delay: genDelay,
        human: false,
        content: "... it's 1999 and you're releasing *2D* game? Yeah, no thanks. Nobody's ever gonna hear of ...."
      }).then(function() {
        botui.message.add({
          delay: longDelay + 1000,
          human: false,
          content: "... Rockstar games and this stupid 'Grand Theft Auto'."
        }).then(function() {
          botui.message.add({
            delay: longDelay,
            human: false,
            content: "Amazingly, I did precisely the same thing in 2010 with ... Buzzfeed. Jonah Peretti told me he was launching it. I said ..."
          }).then(function() {
            botui.message.add({
              delay: genDelay,
              human: false,
              content: "... 'jesus, yeah, like the world needs *another* blog. Good luck with your failure, sir.''"
            }).then(function (){
              botui.message.add({
                delay: genDelay,
                human: false,
                content: "Oof."
              }).then(function () {
              botui.message.add({
                delay: longDelay,
                human: false,
                content: "Emily did the exact same thing in 2004 with ... Facebook. She was assigned to write about this marginal campus dating app, and even though everyone on campus was freaking out about Facebook, she mostly ignored Facebook. Brilliant!"
              }).then(function(){
                botui.message.add({
                  delay:longDelay + 1000,
                  human: false,
                  content: "The lesson of these stories? Holy *moses* it's hard to see big trends, even when they're staring you in the face."
                }).then(function () {
                  botui.message.add({
                    delay: longDelay + 500,
                    human: false,
                    content: "It makes me wonder: We're all in a lather about AI. But what big new crazy thing are we staring at ... and not noticing?"
                  }).then(function(){
                    hearAbout();
                  })
                })
              })
            })
          })
        })
      })
    })
    })
  });
}

function biasAI() {
  botui.message.add({
    delay: genDelay,
    human: false,
    content: "Okay, so the idea is thus: It's increasingly clear that AI can be hugely biased -- if it's trained on biased data."
  }).then(function(){
    botui.message.add({
      delay: longDelay,
      human: false,
      content: "A good example of that? Word2Vec. It's a popular bit of AI for analyzing and classifying text. Except ..."
    }).then(function(){
      botui.message.add({
        delay: longDelay,
        human: false,
        content: "... it's filled with stereotypes. It associates 'man' with 'shopkeeper' and 'carpentry', but 'woman' with 'housewife' and 'sewing'. And it sometimes thinks 'Mexican' is ... a bad word."
      }).then(function() {
        botui.message.add({
          delay: longDelay + 700,
          human: false,
          content: "Why? Because it was trained on text scraped off the web. And people on the web can be pretty sexist and racist."
        }).then(function() {
          botui.message.add({
            delay: longDelay,
            human: false,
            content: "The good news is that more AI nerds are tackling the problem. Some scholarly nerds have created a version of Word2Vec that's much less ridden with stereotypes, and both Microsoft and Google have teams devoted to the challenge."
          }).then(function() {
            botui.message.add({
              delay: longDelay + 1000,
              human: false,
              content: "The cavaet: In industry, there's still a *ton* of biased AI. But this column would be a fun crawl though the nerdy of how you *can* fix it."
            }).then(function () {
              hearAbout();
            })
          })
        })
      })
    })
  });
}


function hearAbout() {
  if (firstTimeAsked) {
    botui.message.add({
      delay: genDelay,
      human: false,
      content: "So, which one do you want to hear about?"
    }).then(function () {
      firstTimeAsked = false;
      return botui.action.text({
        delay: 1000,
        action: {
          placeholder: ""
        }
      })
    }).then(function (res) {
      let theAnswer = res.value.toLowerCase();
    //  let testString = /voice|inter|need|act|human/.test(theAnswer);
      if ((theAnswer == "1") || /voice|inter|act|human/.test(theAnswer) ) {
        voiceUI();
        return;
      }
      if ((theAnswer == "2") || /three|huge|stor|miss|hard|predict|future/.test(theAnswer) ) {
        missedStories();
        return;
      }
      if ((theAnswer == "3") || /remov|bias|ai|AI|from/.test(theAnswer)  ) {
        biasAI();
        return;
      }
    })
  }
  else {
    botui.message.add({
      delay: genDelay,
      human: false,
      content: "Okay, that's the concept. Which other one do you want to hear about? (Do you need a refresher of the ideas?) Or are you done?"
    }).then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          placeholder: ""
        }
      })
    }).then(function (res) {
      let theAnswer = res.value.toLowerCase();
      if ((theAnswer == "1") || /voice|inter|act|human/.test(theAnswer) ) {
        voiceUI();
        return;
        // TRY MAKING IT A SIMPLE IF
      } else if ((theAnswer == "2") || /three|huge|stor|miss|hard|predict|future/.test(theAnswer) ) {
        missedStories();
        return;
      } else if ((theAnswer == "3") || /remov|bias|AI|ai|from/.test(theAnswer)  ) {
        biasAI();
        return;
      } else if ((theAnswer == ("i'm done" || "done")) || /done/.test(theAnswer)) {
        botui.message.add({
          delay: genDelay,
          human: false,
          content: "Coolage. Nice talking with you. Tell Clive which one you liked, if any."
        });
        return;
      } else if (/refresh|idea|/.test(theAnswer)) {
        comeAgain();
        return;
      } else {
        didntCatchThat();
        return;
      }
    })
  }
}

function didntCatchThat() {
  botui.message.add({
    delay: genDelay,
    human: false,
    content: "Sorry, I didn't catch that. Ironic, given my pitch about why bots shouldn't try to act human, eh? Anyway, let's try that again ..."
  }).then(function() {
    comeAgain();
  })
}


function comeAgain() {
  botui.message.add({
    delay: shortDelay,
    human: false,
    content: "The ideas were 1) why voice chat should be less human, 2) three huge stories I missed, and 3) how to remove bias from AI. Which do you wanna hear about?"
  }).then(function () {
    return botui.action.text({
      delay: 1000,
      action: {
        placeholder: ""
      }
    })
  }).then(function (res) {
    let theAnswer = res.value.toLowerCase();
    if ((theAnswer == "1") || /voice|inter|need|act|human/.test(theAnswer) ) {
      voiceUI();
      return;
    } else if ((theAnswer == "2") || /three|huge|stor|miss|hard|predict|future/.test(theAnswer) ) {
      missedStories();
      return;
    } else if ((theAnswer == "3") || /remov|bias|AI|ai|from/.test(theAnswer)  ) {
      biasAI();
      return;
    } else if (/done/.test(theAnswer)) {
      botui.message.add({
        delay: genDelay,
        human: false,
        content: "Coolage. Nice talking with you. Tell Clive which one you liked."
      });
      return;
    } else {
      didntCatchThat();
    }
  })
}
