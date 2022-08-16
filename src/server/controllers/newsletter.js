"use strict";

const mailchimp = require("@mailchimp/mailchimp_marketing");

exports.subscribe = async (req, res, next) => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us14",
  });

  const { subscriptionInformation } = req.body;

  await mailchimp.lists
    .addListMember(subscriptionInformation.listId, {
      email_address: subscriptionInformation.emailAddress,
      status: "pending",
    })
    .then((r) => {
      logger.log(
        `Successfully added contact email ${subscriptionInformation.emailAddress} as an audience member to list with Id ${subscriptionInformation.listId}. The contact's id is ${r.id}.`
      );

      res.json({
        status: "success",
        message: `Successfully added email ${subscriptionInformation.emailAddress}`,
      });
    })
    .catch((err) => {
      var errorResponse = JSON.parse(err.response.text);
      logger.error(errorResponse);

      res.json({
        status: "error",
        error: err,
        message: errorResponse.detail.split(". ")[0],
      });
    });
};
