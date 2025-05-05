module.exports = (data) => {
    const html = `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>file_1701237780725</title>
    <meta name="author" content="ZSSRI" />
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            text-indent: 0;
        }

        h2 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 15.5pt;
        }

        h4 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 8.5pt;
        }

        .s1 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 8.5pt;
        }

        .s2 {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 7pt;
        }

        .s3 {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 8.5pt;
        }

        .s4 {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 8.5pt;
        }

        p {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 7pt;
            margin: 0pt;
        }

        .s5 {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 6pt;
        }

        .s6 {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 6pt;
        }

        .s8 {
            color: #00F;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: underline;
            font-size: 8.5pt;
        }

        .s9 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 8pt;
        }

        .s11 {
            color: #00F;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: underline;
            font-size: 8.5pt;
        }

        .s12 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: underline;
            font-size: 8pt;
        }

        .s13 {
            color: black;
            font-family: "Trebuchet MS", sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        .s14 {
            color: black;
            font-family: "Trebuchet MS", sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 7pt;
        }

        h1 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 16.5pt;
        }

        .h3,
        h3 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 9pt;
        }

        .s15 {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 9pt;
        }

        .a {
            color: black;
            font-family: Calibri, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 9pt;
        }

        .s16 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 7pt;
        }

        .s17 {
            color: black;
            font-family: Verdana, sans-serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 9pt;
            vertical-align: -3pt;
        }

        table,
        tbody {
            vertical-align: top;
            overflow: visible;
        }
    </style>
</head>

<body >
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="text-indent: 0pt;text-align: right;">
    <span style="width:1000pt">
            <table border="1" cellspacing="0" cellpadding="0">
                <tr>
                    <td >
                    <img width="146" height="45" 
                    src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDU4QUIiIGQ9Ik05OS45ODYgNDBIMFYwaDEwMHY0MHoiLz48cGF0aCBkPSJNMiAyMGMwIDkuODMzIDIwLjExNiAxOCA0OC4wMDcgMThTOTggMjkuODMzIDk4IDIwIDc3Ljg4NCAyIDUwLjAwNyAyQzIyLjEzMSAyIDIgMTAuMTY3IDIgMjB6IiBmaWxsPSIjRkJEOTE0Ii8+PHBhdGggZD0iTTQ2LjQ0OCAyNi4wMDVjLjMxNS40NDcuNjYuODY3IDEuMDYgMS4yNDVoLTEwLjgyYzAtLjQyLS40MTYtMS4yNzMtLjg3NS0xLjk0NWEyMTE5LjAxIDIxMTkuMDEgMCAwMS0yLjkzOC00LjM1djUuMDVjMCAuNDIgMCAuODI1LjIxNSAxLjI0NWgtOS4wMTVjLjIxNS0uNDIuMjE1LS44MjYuMjE1LTEuMjQ1VjE0YzAtLjQyIDAtLjgyNi0uMjE1LTEuMjQ1aDkuMDE1Yy0uMjE1LjQyLS4yMTUuODI1LS4yMTUgMS4yNDV2NS4yNDZzMi44OC0zLjY2NSAzLjU0LTQuNTE5Yy41MDItLjY0MyAxLjExOC0xLjU1MyAxLjExOC0xLjk3Mmg5LjQwMmMtLjY0NS40Mi0xLjM2MSAxLjE3NS0xLjk0OSAxLjg3NGwtMy40NCA0LjFzNC4zMjkgNi40NSA0LjkwMiA3LjI3NXpNNDkuMjg2IDE0djEyLjAwNGMwIC40MiAwIC44MjUtLjIxNSAxLjI0NWgxNy40di00LjAzYy0uNDMuMjEtLjg0Ni4yMS0xLjI3Ni4yMWgtNy4zMjR2LTEuOTAyaDcuMDM3di0zLjA1aC03LjAzN1YxNi41Nmg3LjMyNGMuNDMgMCAuODQ2IDAgMS4yNzYuMTk2di00LjAxNWgtMTcuNGMuMjE1LjQzMy4yMTUuODQuMjE1IDEuMjU5em00MS4yOTIgMTIuMDA0Yy4xNDQuNDYxLjM4Ny44ODEuNzAzIDEuMjQ1SDgxLjg1Yy4wNDMtLjQyLS4xMTUtLjgyNi0uMjg3LTEuMjQ1IDAgMC0uMTQzLS4zMzYtLjM0NC0uODI2bC0uMDg2LS4yMWgtNS40MzJsLS4wODYuMjI0cy0uMTU4LjQwNi0uMzAxLjgyNmMtLjE0My40Mi0uMzAxLjgyNS0uMjQ0IDEuMjQ1aC03LjQzOGEzLjY0IDMuNjQgMCAwMC42NzMtMS4yNDVsNC40NTgtMTIuMDA0Yy4xNTctLjQyLjMxNS0uODI2LjI1OC0xLjI0NWgxMi41N2MtLjExNS40Mi4xMTQuODI1LjI3MiAxLjI0NS4zNzIuOTEgNC40IDExLjE3OCA0LjcxNSAxMS45OXptLTEwLjYzNS00LjFsLTEuMzE4LTMuMzU3YTcuMjg4IDcuMjg4IDAgMDEtLjI4Ny0uOTUyIDUuNTAxIDUuNTAxIDAgMDEtLjI1OC45NTJjLS4wNDMuMTQtLjYwMiAxLjYwOS0xLjI0NyAzLjM1N2gzLjExem0tNjAuMTQtOS4xNUgxMGMuMjE1LjQyLjIxNS44MjYuMjE1IDEuMjQ2djEyLjAwNGMwIC40MiAwIC44MjUtLjIxNSAxLjI0NWg5LjgwNGMtLjIxNS0uNDItLjIxNS0uODI2LS4yMTUtMS4yNDVWMTRjMC0uNDIgMC0uODI2LjIxNS0xLjI0NXptNjcuNzY1IDEuMTQ4Yy0uMDQzLTEuMDIxLjc3NC0xLjg3NSAxLjgyLTEuOTAzaC4xM2MxLjA2LS4wMTQgMS45MzQuNzk4IDEuOTQ5IDEuODMzdi4wN2MuMDI4IDEuMDUtLjgxNyAxLjkzLTEuOTA2IDEuOTU5LTEuMDc1LjAyOC0xLjk3OC0uNzk4LTIuMDA3LTEuODYxLjAxNC0uMDI4LjAxNC0uMDcuMDE0LS4wOTh6bS4zODcgMGMwIC44NC43MDMgMS41MjUgMS41NjMgMS41MjVzMS41NjItLjY4NiAxLjU2Mi0xLjUyNWMwLS44NC0uNzAyLTEuNTI1LTEuNTYyLTEuNTI1LS44MzItLjAyOC0xLjUzNC42MDItMS41NjMgMS40MTN2LjExMnptMS4xNzYgMS4xMzNoLS4zNDR2LTIuMjk0aC44NzRhLjc0Ljc0IDAgMDEuNzMuNzQxYzAgLjI4LS4xNTcuNTMyLS40MTUuNjcybC41MDIuODgxaC0uMzg3bC0uNDU5LS44MTFoLS41MDF2LjgxMXptMC0xLjEzM2guNDczYy4yMjkuMDE0LjQzLS4xNTQuNDMtLjM3OHMtLjE1OC0uNDItLjM4Ny0uNDJoLS41MTZ2Ljc5OHoiIGZpbGw9IiMwMDU4QTMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4='/>
                    </td>
                    <td  align="right>
                    <table>
                    <tr>
                        <td>
                            <p style="padding-top: 1pt;text-indent: 0pt;">Sub Claim Serialno. - Seq.</p>
                            IN-DT020-6771985-2
                        </td>
                        <td>
                        <p style="padding-top: 1pt;text-indent: 0pt;">Claim Serialno.</p>
                            `+ data.case_id + `
                        </td>
                    </tr>
                    </table/>
                    </td>
                </tr>
            </table>
            
        </span>
    </p>
    <p style="text-indent: 0pt;text-align: left">
    <span style="width:1000pt">
    <table style="border-collapse:collapse;" cellspacing="0">
        <tr style="height:11pt">
            <td style="width:406pt" colspan="2">
                <p class="s1" style="padding-right: 39pt;text-indent: 0pt;line-height: 10pt;text-align: right;">Date:
                </p>
            </td>
            <td style="width:63pt">
                <p class="s2" style="padding-top: 1pt;padding-right: 2pt;text-indent: 0pt;line-height: 8pt;text-align: right;">
                    2021 aug 19</p>
            </td>
        </tr>
        <tr style="height:23pt">
            <td style="width:73pt">
                <p style="text-indent: 0pt;text-align: left;"><br></p>
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Company:
                </p>
            </td>
            <td style="width:333pt">
                <p class="s1" style="padding-top: 1pt;padding-right: 5pt;text-indent: 0pt;text-align: right;">No. of
                    Pages:</p>
                <p class="s3" style="padding-left: 2pt;text-indent: 0pt;line-height: 9pt;text-align: left;">TEXTRADE
                    INTERNATIONAL LTD</p>
            </td>
            <td style="width:63pt">
                <p class="s3" style="padding-right: 2pt;text-indent: 0pt;text-align: right;">1</p>
            </td>
        </tr>
        <tr style="height:19pt">
            <td style="width:73pt">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">To:</p>
            </td>
            <td style="width:333pt">
                <p class="s3" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Sheshnath Prajapati</p>
            </td>
            <td style="width:63pt">
                <p style="text-indent: 0pt;text-align: left;"><br></p>
            </td>
        </tr>
        <tr style="height:36pt">
            <td style="width:73pt">
                <p class="s1" style="padding-top: 7pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Buyer:</p>
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Origin of Claim:</p>
            </td>
            <td style="width:333pt">
                <p class="s3" style="padding-top: 8pt;padding-left: 2pt;text-indent: 2pt;line-height: 109%;text-align: left;">IKEA
                    India Pvt Ltd, Unit 421,DLF Tower A,Jasola DstCtr, IN 110044 New Delhi, INDIA IKEA India Pvt Ltd</p>
            </td>
            <td style="width:63pt">
                <p style="text-indent: 0pt;text-align: left;"><br></p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td style="width:73pt">
                <p class="s1" style="padding-top: 5pt;padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                    Supplier name:</p>
            </td>
            <td style="width:333pt">
                <p class="s3" style="padding-top: 5pt;padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                    TEXTRADE INTERNATIONAL LTD <span class="s1">Supplier No:</span></p>
            </td>
            <td style="width:63pt">
                <p class="s3" style="padding-top: 6pt;padding-right: 2pt;text-indent: 0pt;line-height: 10pt;text-align: right;">
                    22793</p>
            </td>
        </tr>
        <tr style="height:23pt">
            <td style="width:73pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Article name:</p>
            </td>
            <td style="width:333pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s3" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">1) NYHAMN CVR SB3 KNISA
                    GREY/BEI AP <span class="s1">Article No:</span></p>
            </td>
            <td style="width:63pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s3" style="padding-right: 2pt;text-indent: 0pt;text-align: right;">303.415.97</p>
            </td>
        </tr>
        <tr style="height:11pt">
            <td style="width:73pt;border-top-style:solid;border-top-width:1pt">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Datestamp:
                </p>
            </td>
            <td style="width:333pt;border-top-style:solid;border-top-width:1pt">
                <p class="s1" style="padding-right: 2pt;text-indent: 0pt;line-height: 9pt;text-align: right;">Consignm.
                    No. Delivery No: Del.Qty:</p>
            </td>
            <td style="width:63pt;border-top-style:solid;border-top-width:1pt">
                <p class="s1" style="padding-right: 3pt;text-indent: 0pt;line-height: 9pt;text-align: right;">Claimed
                    Qty:</p>
            </td>
        </tr>
        <tr style="height:12pt">
            <td style="width:73pt">
                <p class="s3" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">1) 2002-2002
                </p>
            </td>
            <td style="width:333pt">
                <p class="s3" style="padding-right: 2pt;text-indent: 0pt;line-height: 9pt;text-align: right;">40</p>
            </td>
            <td style="width:63pt">
                <p class="s3" style="padding-right: 3pt;text-indent: 0pt;line-height: 9pt;text-align: right;">40</p>
            </td>
        </tr>
   </table>
   </span>
   </p>
</body>

</html>
    `;
    return (html);
}