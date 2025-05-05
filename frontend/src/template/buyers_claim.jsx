import React from 'react'
import logo from '../images/ikea-logo.f7d9229f806b59ec64cb.svg'
const ClaimTemplate = ({ data }) => {
	const styles = {
		page: {
			marginLeft: '5rem',
			marginRight: '5rem',
			'page-break-after': 'always',
		},

		columnLayout: {
			display: 'flex',
			justifyContent: 'space-between',
			margin: '3rem 0 5rem 0',
			gap: '2rem',
		},

		column: {
			display: 'flex',
			flexDirection: 'column',
		},

		spacer2: {
			height: '2rem',
		},

		fullWidth: {
			width: '100%',
		},

		marginb0: {
			marginBottom: 0,
		},
	};
	return (
		<div id={'claim_id'} style={{ paddingTop: "0rem" }}>
			<p style={{ textIndent: " 0pt", textAlign: "left" }}><br /></p>
			<p style={{ textIndent: "0pt", textAlign: "left" }}><span>
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td>
							<img src={logo} style={{ width: "100%", maxWidth: "88px" }} /></td>
					</tr>
				</table>
			</span></p>
			<p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
			<table style={{ borderCollapse: "collapse", marginLeft: "6.76pt" }} cellspacing="0">
				<tr style={{ height: "11pt" }}>
					<td style={{ width: "406pt" }} colspan="2">
						<p className={'s1'} style={{ paddingRight: "39pt", textIndent: "0pt", lineHeight: "10pt", textAlign: "right" }}>Date:
						</p>
					</td>
					<td style={{ width: "63pt" }}>
						<p className={'s2'}
							style={{ paddingTop: "1pt", paddingRight: "2pt", textIndent: "0pt", lineHeight: "8pt", textAlign: "right" }}>
							2021 aug 19</p>
					</td>
				</tr>
				
			</table>
		</div>
	);
};

export default ClaimTemplate;