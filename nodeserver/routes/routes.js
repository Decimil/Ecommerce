const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");




// send mail
router.post("/register",  (req, res) => {

    const { email } = req.body;
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Sending Email With React And Nodejs",
            html: `<!-- [if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
            <![endif]--><!-- [if !mso]><!--><!--<![endif]-->
            <style type="text/css">
                  @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
            
              .u-row .u-col-16p67 {
                width: 100.02000000000002px !important;
              }
            
              .u-row .u-col-33p33 {
                width: 199.98px !important;
              }
            
              .u-row .u-col-100 {
                width: 600px !important;
              }
            
            }
            
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: 100% !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
            
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
            
            p {
              margin: 0;
            }
            
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
            
            * {
              line-height: inherit;
            }
            
            a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
            }
            
            table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_5 .v-src-width { width: auto !important; } #u_content_image_5 .v-src-max-width { max-width: 35% !important; } #u_content_heading_1 .v-container-padding-padding { padding: 60px 10px 0px !important; } #u_content_heading_1 .v-font-size { font-size: 28px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 90% !important; } #u_content_heading_2 .v-container-padding-padding { padding: 0px 10px 5px !important; } #u_content_heading_2 .v-font-size { font-size: 24px !important; } #u_content_heading_3 .v-font-size { font-size: 20px !important; } #u_content_text_14 .v-container-padding-padding { padding: 60px 10px 10px !important; } #u_content_heading_6 .v-font-size { font-size: 24px !important; } #u_content_image_3 .v-src-width { width: auto !important; } #u_content_image_3 .v-src-max-width { max-width: 20% !important; } #u_content_text_12 .v-text-align { text-align: center !important; } #u_content_text_13 .v-container-padding-padding { padding: 5px 10px 0px !important; } #u_content_text_13 .v-text-align { text-align: center !important; } #u_content_image_2 .v-container-padding-padding { padding: 60px 10px 10px !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 22% !important; } #u_content_text_10 .v-text-align { text-align: center !important; } #u_content_text_11 .v-container-padding-padding { padding: 5px 10px 0px !important; } #u_content_text_11 .v-text-align { text-align: center !important; } #u_content_text_3 .v-container-padding-padding { padding: 0px 10px 10px !important; } #u_content_text_15 .v-container-padding-padding { padding: 10px 10px 60px !important; } }
                </style>
            <!-- [if !mso]><!--><!--<![endif]-->
            <p>&nbsp;</p>
            <!-- [if IE]><div class="ie-container"><![endif]-->
            <p>&nbsp;</p>
            <!-- [if mso]><div class="mso-container"><![endif]-->
            <table id="u_body" style="border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; min-width: 320px; margin: 0 auto; background-color: #ecf0f1; width: 100%;" cellspacing="0" cellpadding="0">
            <tbody>
            <tr style="vertical-align: top;">
            <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_image_5" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 20px 0px; font-family: 'Rubik',sans-serif;" align="left">
            <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-text-align" style="padding-right: 0px; padding-left: 0px;" align="center"><img class="v-src-width v-src-max-width" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: inline-block !important; border: none; height: auto; float: none; width: 20%; max-width: 120px;" title="Logo" src="https://cdn.templates.unlayer.com/assets/1666270513484-5daab5a98bfff67898127df6_dark_logo_transparent@2x.png" alt="Logo" width="120" align="center" border="0"></td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_heading_1" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 10px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <div>
            <div>
            <div>
            <div>
            <div>
            <div>
            <div>
            <div>
            <div>
            <div><strong>DISCOUNT ALERT</strong></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_image_1" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 0px; font-family: 'Rubik',sans-serif;" align="left">
            <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-text-align" style="padding-right: 0px; padding-left: 0px;" align="center"><img class="v-src-width v-src-max-width" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: inline-block !important; border: none; height: auto; float: none; width: 78%; max-width: 468px;" title="image" src="https://cdn.templates.unlayer.com/assets/1666268761580-Vector%20Smart%20Object.png" alt="image" width="468" align="center" border="0"></td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_heading_2" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 5px; font-family: 'Rubik',sans-serif;" align="left">
            <div>
            <div>
            <div>
            <div><strong>Yuor Coupon code is YAAKSMS</strong></div>
            </div>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_heading_3" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 0px 10px 60px; font-family: 'Rubik',sans-serif;" align="left">
            <div>
            <div>
            <div>From Our Annual Subscription!</div>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_text_14" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 100px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.&nbsp;</p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_heading_6" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 30px; font-family: 'Rubik',sans-serif;" align="left">
            <div>
            <div>
            <div>
            <div><strong>Plans and Packages</strong></div>
            </div>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 30px 10px 60px; font-family: 'Rubik',sans-serif;" align="left"><!-- [if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
            <div class="v-text-align" align="center"><!-- [if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/" style="height:37px; v-text-anchor:middle; width:134px;" arcsize="0%"  stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Rubik',sans-serif;"><![endif]--> <a class="v-button v-font-size" style="box-sizing: border-box; display: inline-block; font-family: 'Rubik',sans-serif; text-decoration: none; -webkit-text-size-adjust: none; text-align: center; color: #ffffff; background-color: #000000; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width: auto; max-width: 100%; overflow-wrap: break-word; word-break: break-word; word-wrap: break-word; mso-border-alt: none; font-size: 14px;" href="http://localhost:3000/" target="_blank" rel="noopener"> <span style="display: block; padding: 10px 20px; line-height: 120%;"><span style="line-height: 16.8px;">Purchase Now</span></span> </a> <!-- [if mso]></center></v:roundrect><![endif]--></div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 10px 30px; font-family: 'Rubik',sans-serif;" align="left">
            <div>
            <div><strong>Lorem ipsum dolor</strong></div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="100" style="background-color: #ffffff;width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-16p67" style="max-width: 320px; min-width: 100px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_image_3" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 15px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-text-align" style="padding-right: 0px; padding-left: 0px;" align="center"><img class="v-src-width v-src-max-width" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: inline-block !important; border: none; height: auto; float: none; width: 80%; max-width: 64px;" title="image" src="https://cdn.templates.unlayer.com/assets/1665663193557-24-hours-phone-service.png" alt="image" width="64" align="center" border="0"></td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="200" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-33p33" style="max-width: 320px; min-width: 200px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_text_12" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 15px 10px 0px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong>24 hours service</strong></span></p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_text_13" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 5px 10px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;">This is a new Text block.</p>
            <p style="font-size: 14px; line-height: 140%;">Change the text.</p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="100" style="background-color: #ffffff;width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-16p67" style="max-width: 320px; min-width: 100px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_image_2" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px; font-family: 'Rubik',sans-serif;" align="left">
            <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-text-align" style="padding-right: 0px; padding-left: 0px;" align="center"><img class="v-src-width v-src-max-width" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: inline-block !important; border: none; height: auto; float: none; width: 80%; max-width: 64px;" title="image" src="https://cdn.templates.unlayer.com/assets/1665663198028-easy-returns.png" alt="image" width="64" align="center" border="0"></td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="200" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-33p33" style="max-width: 320px; min-width: 200px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table id="u_content_text_10" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 15px 10px 0px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong>Easy returns</strong></span></p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_text_11" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 5px 10px 30px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;">This is a new Text block.</p>
            <p style="font-size: 14px; line-height: 140%;">Change the text.</p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="background-color: #ffffff; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 10px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <div>
            <div><strong>Lorem ipsum dolor</strong></div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_text_3" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 0px 100px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.&nbsp;</p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-text-align" style="padding-right: 0px; padding-left: 0px;" align="center"><img class="v-src-width v-src-max-width" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: inline-block !important; border: none; height: auto; float: none; width: 75%; max-width: 435px;" title="image" src="https://cdn.templates.unlayer.com/assets/1666269938768-asf.png" alt="image" width="435" align="center" border="0"></td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <div class="u-row-container" style="padding: 0px; background-color: transparent;">
            <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
            <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;"><!-- [if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]--> <!-- [if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
            <div style="height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!-- [if (!mso)&(!IE)]><!-->
            <div style="box-sizing: border-box; height: 100%; padding: 0px; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border: 0px solid transparent;"><!--<![endif]-->
            <table style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 60px 10px 10px; font-family: 'Rubik',sans-serif;" align="left">
            <div align="center">
            <div style="display: table; max-width: 187px;"><!-- [if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]--> <!-- [if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 15px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
            <tbody>
            <tr style="vertical-align: top;">
            <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle"><a title="Facebook" href="https://facebook.com/" target="_blank" rel="noopener"> <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="Facebook" src="https://cdn.tools.unlayer.com/social/icons/rounded-black/facebook.png" alt="Facebook" width="32"> </a></td>
            </tr>
            </tbody>
            </table>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 15px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
            <tbody>
            <tr style="vertical-align: top;">
            <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle"><a title="Twitter" href="https://twitter.com/" target="_blank" rel="noopener"> <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="Twitter" src="https://cdn.tools.unlayer.com/social/icons/rounded-black/twitter.png" alt="Twitter" width="32"> </a></td>
            </tr>
            </tbody>
            </table>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 15px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
            <tbody>
            <tr style="vertical-align: top;">
            <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle"><a title="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noopener"> <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="LinkedIn" src="https://cdn.tools.unlayer.com/social/icons/rounded-black/linkedin.png" alt="LinkedIn" width="32"> </a></td>
            </tr>
            </tbody>
            </table>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
            <table style="width: 32px !important; height: 32px !important; display: inline-block; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; margin-right: 0px;" border="0" width="32" cellspacing="0" cellpadding="0" align="left">
            <tbody>
            <tr style="vertical-align: top;">
            <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;" align="left" valign="middle"><a title="Instagram" href="https://instagram.com/" target="_blank" rel="noopener"> <img style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; display: block !important; border: none; height: auto; float: none; max-width: 32px !important;" title="Instagram" src="https://cdn.tools.unlayer.com/social/icons/rounded-black/instagram.png" alt="Instagram" width="32"> </a></td>
            </tr>
            </tbody>
            </table>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table id="u_content_text_15" style="font-family: 'Rubik',sans-serif;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
            <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px 100px 60px; font-family: 'Rubik',sans-serif;" align="left">
            <div class="v-text-align v-font-size" style="line-height: 140%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</p>
            <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
            <p style="font-size: 14px; line-height: 140%;">customer.success@unlayer.com</p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <!-- [if (!mso)&(!IE)]><!--></div>
            <!--<![endif]--></div>
            </div>
            <!-- [if (mso)|(IE)]></td><![endif]--> <!-- [if (mso)|(IE)]></tr></table></td></tr></table><![endif]--></div>
            </div>
            </div>
            <!-- [if (mso)|(IE)]></td></tr></table><![endif]--></td>
            </tr>
            </tbody>
            </table>
            <!-- [if mso]></div><![endif]-->
            <p>&nbsp;</p>
            <!-- [if IE]></div><![endif]-->`,
            // attachments:[
            //     {
            //     filename: "photo.jpg",
            //     path: __dirname+'/photo.jpg',
            //     cid:"photo",
            //     },
            // ]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;