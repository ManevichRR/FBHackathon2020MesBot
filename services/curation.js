/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";


// Imports dependencies
const Response = require("./response"),
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class Curation {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }
  // 
  handlePayload(payload) {
    let response;
    let outfit;
    // 
    console.log("connecting payload...", payload)

    
    // 
    switch (payload) {
      case "SUMMER_COUPON":
        response = [
          Response.genText(
            i18n.__("leadgen.promo", {
              userFirstName: this.user.firstName
            })
          ),
          Response.genGenericTemplate(
            `${config.appUrl}/coupon.png`,
            i18n.__("leadgen.title"),
            i18n.__("leadgen.subtitle"),
            [Response.genPostbackButton(i18n.__("leadgen.apply"), "COUPON_50")]
          )
        ];
        break;
        // 
      case "COUPON_50":
        outfit = `${this.user.gender}-${this.randomOutfit()}`;
        response = [
          Response.genText(i18n.__("leadgen.coupon")),
          Response.genGenericTemplate(
            `${config.appUrl}/styles/${outfit}.jpg`,
            i18n.__("curation.title"),
            i18n.__("curation.subtitle"),
            [
              Response.genWebUrlButton(
                i18n.__("curation.shop"),

                `${config.shopUrl}/products/${outfit}`
              ),
              Response.genPostbackButton(
                i18n.__("curation.show"),
                "CURATION_OTHER_STYLE"
              ),
              Response.genPostbackButton(
                i18n.__("curation.sales"),
                "CARE_SALES"
              )
            ]
          )
        ];
        break;
        //  
      case "CURATION":
        response =
          Response.genQuickReply(i18n.__("curation.prompt"), [{
              title: i18n.__("curation.bread0"),
              payload: "CURATION_WHITE"
            },
            {
              title: i18n.__("curation.bread1"),
              payload: "CURATION_WHEAT"
            }
          ]);
        console.log("Testing for response...", response)
        break;
        // 
      case "CURATION_WHITE":
      case "CURATION_WHEAT":
      
        response = Response.genQuickReply(i18n.__("curation.cheese"), [{
            title: i18n.__("curation.acheese"),
            payload: "CURATION_AMERICAN_CHEESE"
          },
          {
            title: i18n.__("curation.scheese"),
            payload: "CURATION_SWISS_CHEESE"
          },
          {
            title: i18n.__("curation.ycheese"),
            payload: "CURATION_YELLOW_CHEESE"
          },
          {
            title: i18n.__("curation.sales"),
            payload: "CARE_SALES"
          }
        ]);
        break;
        // 
      case "CURATION_AMERICAN_CHEESE":
        // Store the user veggie preference here
        response = Response.genQuickReply(i18n.__("curation.sauce"), [{
            title: i18n.__("curation.mayo"),
            payload: "CURATION_AMERICAN_MAYO"
          },
          {
            title: i18n.__("curation.mustard"),
            payload: "CURATION_AMERICAN_MUSTARD"
          },
          {
            title: i18n.__("curation.both"),
            payload: "CURATION_AMERICAN_BOTH"
          }
        ]);
        break;
        // 
      case "CURATION_SWISS_CHEESE":
        // Sto re the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.sauce"), [{
            title: i18n.__("curation.mayo"),
            payload: "CURATION_SWISS_MAYO"
          },
          {
            title: i18n.__("curation.mustard"),
            payload: "CURATION_SWISS_MUSTARD"
          },
          {
            title: i18n.__("curation.both"),
            payload: "CURATION_SWISS_BOTH"
          }
        ]);
        break;
        // 
      case "CUR   ATION_YELLOW_CHEESE":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.sauce"), [{
            title: i18n.__("curation.mayo"),
            payload: "CURATION_YELLOW_MAYO"
          },
          {
            title: i18n.__("curation.mustard"),
            payload: "CURATION_YELLOW_MUSTARD"
          },
          {
            title: i18n.__("curation.both"),
            payload: "CURATION_YELLOW_BOTH"
          }
        ]);
        break;
        // 
      case "CURATION_YELLOW_MAYO":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_YELLOW_MAYO_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_YELLOW_MAYO_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_YELLOW_MUSTARD":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_YELLOW_MUSTARD_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_YELLOW_MUSTARD_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_YELLOW_BOTH":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_YELLOW_BOTH_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_YELLOW_BOTH_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_AMERICAN_MAYO":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_AMERICAN_MAYO_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_AMERICAN_MAYO_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_AMERICAN_MUSTARD":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_AMERICAN_MUSTARD_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_AMERICAN_MUSTARD_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_AMERICAN_BOTH":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_AMERICAN_BOTH_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_AMERICAN_BOTH_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_SWISS_MAYO":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_SWISS_MAYO_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_SWISS_MAYO_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_SWISS_MUSTARD":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_SWISS_MUSTARD_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_SWISS_MUSTARD_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_SWISS_BOTH":
        // Store the user budget preference here
        response = Response.genQuickReply(i18n.__("curation.size"), [{
            title: i18n.__("curation.whole"),
            payload: "CURATION_SWISS_BOTH_WHOLE"
          },
          {
            title: i18n.__("curation.half"),
            payload: "CURATION_SWISS_BOTH_HALF"
          }
        ]);
        break;
        // 
      case "CURATION_AMERICAN_MAYO_WHOLE":
      case "CURATION_AMERICAN_MAYO_HALF":
      case "CURATION_AMERICAN_MUSTARD_WHOLE":
      case "CURATION_AMERICAN_MUSTARD_HALF":
      case "CURATION_AMERICAN_BOTH_WHOLE":
      case "CURATION_AMERICAN_BOTH_HALF":
        // 
      case "CURATION_YELLOW_MAYO_WHOLE":
      case "CURATION_YELLOW_MAYO_HALF":
      case "CURATION_YELLOW_MUSTARD_WHOLE":
      case "CURATION_YELLOW_MUSTARD_HALF":
      case "CURATION_YELLOW_BOTH_WHOLE":
      case "CURATION_YELLOW_BOTH_HALF":
        // 
      case "CURATION_SWISS_MAYO_WHOLE":
      case "CURATION_SWISS_MAYO_HALF":
      case "CURATION_SWISS_MUSTARD_WHOLE":
      case "CURATION_SWISS_MUSTARD_HALF":
      case "CURATION_SWISS_BOTH_WHOLE":
      case "CURATION_SWISS_BOTH_HALF":
        // MAKE THE CARDS OF SUBS
        response =
          Response.genButtonTemplate(
            i18n.__("curation.title"),
            [
              Response.genWebUrlButton(
                i18n.__("curation.shop"),
                `${config.appUrl}/options`,

              ),
              Response.genPostbackButton(
                i18n.__("curation.sales"),
                "CARE_SALES"
              )
            ]
          )
          // 
        break;
    }
    // response.delay = "4";
    return response;
  }
};