import HorizontalBlank from '@pages/components/common/atoms/HorizontalBlank';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CommonContainer from '../components/common/atoms/CommonContainer';
import BusinessTemplate from './templates/BusinessTemplate';
import CustomerTemplate from './templates/CustomerTemplate';
import EtcTemplate from './templates/EtcTemplate';

export interface CustomerDetailItemInterface {
  accntNo: string;
  accntType: string;
  regNo: string;
  bizNo: string;
  engNm: string;
  korNm: string;
  engAddr: string;
  korAddr: string;
  zipCode: string;
  routeCode: string;
  contactNm: string;
  contactDept: string;
  contactTel: string;
  contactFax: string;
  contactCP: string;
  contactEmail: string;
  salesRepCode: string;
  srvIndCode: string;
  creditStop: string;
  openDate: string;
  mktConfirmYn: string;
  mktModifyUserId: string;
  mktModifyDate: string;
  bilEngAddr: string;
  bilKorAddr: string;
  bilZipCode: string;
  bilContactNm: string;
  bilContactDept: string;
  bilContactTel: string;
  bilContactFax: string;
  bilContactEmail: string;
  bilConfirmYn: string;
  bilModifyUserId: string;
  bilModifyDate: string;
  requestUserId: string;
  requestDate: string;
  remarks: string;
  dbtrCd: string;
  iemaila: string;
  iemailaYn: string;
  iemailaDate: string;
  vncbn: string;
  vncba: string;
  ctContactTelTo2: string;
  remarkb: string;
  closeDt: string;
  accountCode: string;
  svcCd: string;
  codeNo: string;
  debtorReason: string;
}
export interface CustomerDetailBizItemInterface {
  bizNo: string;
  impAccntNo: string;
  expAccntNo: string;
  bizEngNm: string;
  bizKorNm: string;
  bizRepresentName: string;
  bizResidentNo: string;
  bizAddr: string;
  bizType: string;
  bizKind: string;
  bizPublishDate: string;
  bizReceiptDate: string;
  bizZipNo: string;
  bizContactNm: string;
  bizContactDept: string;
  bizContactTel: string;
  bizContactFax: string;
  bizContactCP: string;
  taxPayMethod: string;
  taxProxyAmt: string;
  taxProxyAccnt: string;
  preDeclareRemark: string;
  taxPostpayRemark: string;
  blHandRemark: string;
  monthlyPayRemark: string;
  blHandInfo: string;
  mainProdInfo: string;
  specialRemarks: string;
  taxCheckInfo: string;
  buCode: string;
  bizContactEmail: string;
  importEmail: string;
  exportEmail: string;
  importEmailYn: string;
  exportEmailYn: string;
  remarks1: string;
  remarks2: string;
  remarks3: string;
  insertUserId: string;
  insertDate: string;
  modifyUserId: string;
  modifyDate: string;
  aemail: string;
  aemailYn: string;
  agentEmail: string;
  agentNm: string;
  agentEngNm: string;
  agentCd: string;
  agentTel: string;
  agentFax: string;
  modifyFields: string;
  financeRemark: string;
  updateTaxpayEx: string;
  collectType: string;
}
const CustomerDetailPage: FC<RouteComponentProps<{ accntNo: string }>> = (props) => {
  const { accntNo } = props.match.params;
  console.log(props, props.match, props.match.params);
  return (
    <CommonContainer style={{ width: 1200 }}>
      <CustomerTemplate accntNo={accntNo} />
      <HorizontalBlank height={25} />
      <BusinessTemplate accntNo={accntNo} />
      <HorizontalBlank height={25} />
      <EtcTemplate accntNo={accntNo} />
    </CommonContainer>
  );
};

export default CustomerDetailPage;
