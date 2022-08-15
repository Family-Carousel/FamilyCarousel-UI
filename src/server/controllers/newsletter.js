"use strict";

const mailchimp = require("@mailchimp/mailchimp_marketing");

exports.subscribe = async (req, res, next) => {
  try {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: "us14",
    });

    const { subscriptionInformation } = req.body;

    logger.log(subscriptionInformation);

    const response = await mailchimp.lists.addListMember(
      subscriptionInformation.listId,
      {
        email_address: subscriptionInformation.emailAddress,
        status: "pending",
      }
    );

    logger.log(
      `Successfully added contact email ${subscriptionInformation.emailAddress} as an audience member to list with Id ${subscriptionInformation.listId}. The contact's id is ${response.id}.`
    );

    res.json({
      status: "success",
      message: `Successfully added email ${subscriptionInformation.emailAddress}`,
    });
  } catch (err) {
    logger.log(err);
    res.json({
      status: "error",
      error: err,
      message: `Failed to add email ${subscriptionInformation.emailAddress}`,
    });
  }
};
