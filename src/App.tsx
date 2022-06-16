/****************************************************
 * Audit Information Platform FrontEnd Project
 * 展示部分
 * 2020-08
 * Sunny <tufpsj@yonyou.com>
 ****************************************************/

//----- Global ------
import * as React from 'react';
import { PureComponent } from 'react';

import { Button, Icon, Modal } from 'tinper-bee';

import 'tinper-bee/assets/tinper-bee.css';
import 'bee-modal/build/Modal.css';

import './style/App.css';
import { AIPSearchPanel } from 'aip-module';
import { AIPResponse, ComponentService, ModelRef, StringAnyMap, StringStringMap } from 'aip-module/types';

export interface IAppProps {
    icon?: string;
}

const modelRefJson: any = { "code": 200, "msg": "success", "data": { "createtime": "2022-06-13 15:51:06", "creator": null, "orderindex": null, "refType": null, "autoDoSearch": false, "description": "科目余额表查询条件", "refitems": [{ "valuefield": "被审单位ID", "defaultValue": null, "multiple": "0", "refitem": [], "pageable": false, "displayorder": 0, "label": "", "type": "tree", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=0", "modalHeight": 400, "modalWidth": 800, "ordervalue": null, "cascadeChecked": false, "needfields": "", "name": "被审单位", "options": [], "width": 200, "must": true, "id": "96fd84b4-d074-443d-afbc-ce5d80e83240", "displayfield": "被审单位", "orderfield": null }, { "valuefield": "账套编号", "defaultValue": null, "multiple": "0", "refitem": ["被审单位"], "pageable": false, "displayorder": 1, "label": "账套", "type": "table", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=1", "modalHeight": null, "modalWidth": null, "ordervalue": null, "cascadeChecked": false, "needfields": "被审单位", "name": "账套编号", "options": [], "width": 200, "must": true, "id": "672db682-5dc1-4870-922e-8e8acf0c723e", "displayfield": "账套名称", "orderfield": null }, { "valuefield": "年度", "defaultValue": null, "multiple": "1", "refitem": ["账套编号"], "pageable": false, "displayorder": 2, "label": "年度", "type": "select", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=2", "modalHeight": null, "modalWidth": null, "ordervalue": null, "cascadeChecked": false, "needfields": "账套编号", "name": "年度期间", "options": [], "width": 170, "must": true, "id": "5c55e835-3510-49c2-b18f-dd297e70cb34", "displayfield": "年度", "orderfield": null }, { "valuefield": "期间", "defaultValue": null, "multiple": "0", "refitem": ["账套编号", "年度期间"], "pageable": false, "displayorder": 3, "label": null, "type": "select", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=3", "modalHeight": null, "modalWidth": null, "ordervalue": null, "cascadeChecked": false, "needfields": null, "name": "开始期间", "options": [], "width": 90, "must": true, "id": "2b875e11-1b7b-4b21-aa3b-ef58885df8ba", "displayfield": "期间", "orderfield": null }, { "valuefield": "期间", "defaultValue": null, "multiple": "0", "refitem": ["账套编号", "开始期间", "年度期间"], "pageable": false, "displayorder": 4, "label": null, "type": "select", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=4", "modalHeight": null, "modalWidth": null, "ordervalue": null, "cascadeChecked": false, "needfields": null, "name": "结束期间", "options": [], "width": 90, "must": true, "id": "ae01b812-bf01-49bc-b054-b3e6df190f46", "displayfield": "期间", "orderfield": null }, { "valuefield": "科目编号", "defaultValue": null, "multiple": "1", "refitem": ["账套编号", "年度期间"], "pageable": false, "displayorder": 5, "label": "科目", "type": "tree", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=5", "modalHeight": null, "modalWidth": null, "ordervalue": null, "cascadeChecked": false, "needfields": "账套编号,年度期间", "name": "科目编号", "options": [], "width": 200, "must": false, "id": "3fd8ac6a-3eab-4d69-9e38-ee8e8a695bf8", "displayfield": "科目名称", "orderfield": null }, { "valuefield": "value", "defaultValue": null, "multiple": "0", "refitem": [], "pageable": false, "displayorder": 6, "label": null, "type": "select", "url": "/dataretriver/retrive?type=ref&id=e44eb7e5-1e59-494d-9343-0831a3f4a4b8&index=6", "modalHeight": null, "modalWidth": null, "ordervalue": null, "cascadeChecked": false, "needfields": null, "name": "科目级次", "options": [{ "label": "1级", "value": "1" }, { "label": "2级", "value": "2" }, { "label": "3级", "value": "3" }, { "label": "4级", "value": "4" }, { "label": "末级", "value": "末级" }, { "label": "到2级", "value": "到2级" }, { "label": "到3级", "value": "到3级" }, { "label": "到4级", "value": "到4级" }, { "label": "到末级", "value": "到末级" }], "width": 80, "must": true, "id": "0e29906b-7af4-4560-85f4-b98b10916c51", "displayfield": "label", "orderfield": null }], "singleDataSource": false, "dataSourceId": "system", "paramDefaultValueConfig": "default", "name": "科目余额表参照", "autoDoSearchConfig": "default", "id": "e44eb7e5-1e59-494d-9343-0831a3f4a4b8", "sourceref": null } };

const referenceData: any[] = [
    { "code": 200, "msg": "success", "data": [{ "父级单位": "0", "被审单位ID": "DEPARTMENT", "被审单位": "根节点", "被审单位编号": "0", "children": [{ "父级单位": "DEPARTMENT", "被审单位ID": "1", "被审单位": "审友集团", "被审单位编号": "101", "children": [{ "父级单位": "1", "被审单位ID": "31542bf1-b23c-415c-a918-26cf3cae3d86", "被审单位": "科技部中信所（演示）", "被审单位编号": "0512" }, { "父级单位": "1", "被审单位ID": "AD7AB296-5B1A-FC5A-C58F-5A9B50B35CB6", "被审单位": "集团审计部", "被审单位编号": "101003", "children": [{ "父级单位": "AD7AB296-5B1A-FC5A-C58F-5A9B50B35CB6", "被审单位ID": "8186467A-4BCF-2B01-FEC2-96463108A5DE", "被审单位": "北京公司", "被审单位编号": "1010101" }, { "父级单位": "AD7AB296-5B1A-FC5A-C58F-5A9B50B35CB6", "被审单位ID": "EE35CEAC-B5A4-D21E-4483-B85BD472036A", "被审单位": "审友测试部", "被审单位编号": "1010102" }] }, { "父级单位": "1", "被审单位ID": "737939BC-918B-694E-6A44-E29E1854A40D", "被审单位": "天津审友公司", "被审单位编号": "10102" }, { "父级单位": "1", "被审单位ID": "FD12C742-7978-F67E-8124-51E970218E57", "被审单位": "非审计部门测试", "被审单位编号": "10103" }, { "父级单位": "1", "被审单位ID": "6D0970B2-9F8B-F466-FFE7-23015C751A74", "被审单位": "华南公司", "被审单位编号": "10104", "children": [{ "父级单位": "6D0970B2-9F8B-F466-FFE7-23015C751A74", "被审单位ID": "45C7B476-8D62-5B7D-BB75-73A16910ACE1", "被审单位": "华南审计部", "被审单位编号": "1010401" }, { "父级单位": "6D0970B2-9F8B-F466-FFE7-23015C751A74", "被审单位ID": "AE17C547-99F3-3841-213F-1386A50E8DE4", "被审单位": "华南基建部", "被审单位编号": "1010402" }] }, { "父级单位": "1", "被审单位ID": "9F261C1C-27F7-82DD-3896-184CCBEAD605", "被审单位": "西北公司", "被审单位编号": "10105", "children": [{ "父级单位": "9F261C1C-27F7-82DD-3896-184CCBEAD605", "被审单位ID": "BAC3F341-7542-90FB-0DC4-C24A09235D0E", "被审单位": "西北审计部", "被审单位编号": "1010501" }, { "父级单位": "9F261C1C-27F7-82DD-3896-184CCBEAD605", "被审单位ID": "B32C4177-6D85-86FF-9B8C-8FB9C7243377", "被审单位": "西北基建部", "被审单位编号": "1010502" }] }, { "父级单位": "1", "被审单位ID": "0FF2F6DB-D943-98B3-8824-46AF5038EE2E", "被审单位": "天津审友", "被审单位编号": "10106" }, { "父级单位": "1", "被审单位ID": "E32FC2D4-B4AF-5165-F07F-278DA7E0F398", "被审单位": "北京物流公司", "被审单位编号": "10107", "children": [{ "父级单位": "E32FC2D4-B4AF-5165-F07F-278DA7E0F398", "被审单位ID": "ED19B7F2-3C9E-9E7E-CC84-3EA935F8E3E2", "被审单位": "审计部", "被审单位编号": "1010701", "children": [{ "父级单位": "ED19B7F2-3C9E-9E7E-CC84-3EA935F8E3E2", "被审单位ID": "B6091386-DF3D-49B8-6CF5-A0B300CA63B6", "被审单位": "测试部门-张会", "被审单位编号": "101070101" }, { "父级单位": "ED19B7F2-3C9E-9E7E-CC84-3EA935F8E3E2", "被审单位ID": "254CBE7D-EA74-0D00-E6A1-499667D88911", "被审单位": "测试部-ztj", "被审单位编号": "101070102" }, { "父级单位": "ED19B7F2-3C9E-9E7E-CC84-3EA935F8E3E2", "被审单位ID": "3E20417D-06AF-C64C-417A-A655D584B19C", "被审单位": "测试部门-普天梅", "被审单位编号": "101070103" }] }, { "父级单位": "E32FC2D4-B4AF-5165-F07F-278DA7E0F398", "被审单位ID": "74C6FA67-2DC4-1217-4BB7-8ECF1FFFA979", "被审单位": "业务部", "被审单位编号": "1010702" }, { "父级单位": "E32FC2D4-B4AF-5165-F07F-278DA7E0F398", "被审单位ID": "A7A9E4D7-8DEF-B1DB-C3E4-CA6AB6B62A46", "被审单位": "陕西食品公司", "被审单位编号": "1010703" }, { "父级单位": "E32FC2D4-B4AF-5165-F07F-278DA7E0F398", "被审单位ID": "6C714286-2581-F4E2-D250-0EBFA8A79B08", "被审单位": "测试部门", "被审单位编号": "1010706" }] }, { "父级单位": "1", "被审单位ID": "DDBAC784-8DC6-1AF3-F57E-8C705256F762", "被审单位": "北京审友公司", "被审单位编号": "10108" }, { "父级单位": "1", "被审单位ID": "7DDC577E-0A1A-B29D-F359-A9B855A08522", "被审单位": "北京审友", "被审单位编号": "10109" }, { "父级单位": "1", "被审单位ID": "30653D03-2C3E-1A5B-2032-8E6F39B166D9", "被审单位": "河北审友 ", "被审单位编号": "10110" }, { "父级单位": "1", "被审单位ID": "6EBF7E6B-960E-CED2-7A6B-8A9E7A61CF99", "被审单位": "湖南公司", "被审单位编号": "101107", "children": [{ "父级单位": "6EBF7E6B-960E-CED2-7A6B-8A9E7A61CF99", "被审单位ID": "9818709A-FCA7-1F7C-E652-9A8BB338463B", "被审单位": "长沙公司", "被审单位编号": "10110701" }, { "父级单位": "6EBF7E6B-960E-CED2-7A6B-8A9E7A61CF99", "被审单位ID": "B38EC84A-6CE2-4CF1-5E81-9D32A786A9AA", "被审单位": "株洲公司", "被审单位编号": "10110702" }, { "父级单位": "6EBF7E6B-960E-CED2-7A6B-8A9E7A61CF99", "被审单位ID": "C3193654-EACF-D2D7-8CCC-A6174D3ED7FC", "被审单位": "张家界公司", "被审单位编号": "10703" }] }] }] }] },
    { "code": 200, "msg": "success", "data": { "data": [{ "账套编号": "001", "账套名称": "演示账套" }, { "账套编号": "998", "账套名称": "测试凭证" }, { "账套编号": "N03014-0002", "账套名称": "第二工程公司2006会计准则账簿" }, { "账套编号": "N0400208-0002", "账套名称": "四建尚品装潢公司2006会计准则账簿" }, { "账套编号": "N04004-0002", "账套名称": "华通建筑工程公司2006会计准则账簿" }, { "账套编号": "N04007-0002", "账套名称": "西部市政轨道公司2006会计准则账簿" }, { "账套编号": "N04010-0002", "账套名称": "华晟建筑工程公司2006会计准则账簿" }, { "账套编号": "csjsyx", "账套名称": "测试江苏有限" }, { "账套编号": "csxzda3", "账套名称": "测试" }, { "账套编号": "nbsofterp", "账套名称": "市政交通集团-财务部8882010新" }, { "账套编号": "test", "账套名称": "测试账套-张会" }, { "账套编号": "test111", "账套名称": "test111" }, { "账套编号": "test_dwkj", "账套名称": "测试单位会计" }, { "账套编号": "test_dwkj2", "账套名称": "测试单位会计2" }, { "账套编号": "test_dwkj3", "账套名称": "测试单位会计3" }, { "账套编号": "test_dwkj4", "账套名称": "测试单位会计4" }, { "账套编号": "test_dwkj5", "账套名称": "测试单位会计5" }, { "账套编号": "xj11", "账套名称": "新疆11师" }], "columns": ["账套编号", "账套名称"] } },
    { "code": 200, "msg": "success", "data": [{ "年度": "2016" }, { "年度": "2017" }] },
    { "code": 200, "msg": "success", "data": [{ "期间": "201601", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201602", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201603", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201604", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201605", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201606", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201607", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201608", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201609", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201610", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201611", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201612", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }] },
    { "code": 200, "msg": "success", "data": [{ "期间": "201601", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201602", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201603", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201604", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201605", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201606", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201607", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201608", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201609", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201610", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201611", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }, { "期间": "201612", "SUBSTR(QJ,1,4)": "2016", "BOOKCODE": "001" }] },
    { "code": 200, "msg": "success", "data": [{ "科目编号": "1001", "科目名称": "1001 库存现金", "FSUBJCODE": null }, { "科目编号": "1002", "科目名称": "1002 银行存款", "FSUBJCODE": null }, { "科目编号": "1012", "科目名称": "1012 其他货币资金", "FSUBJCODE": null }, { "科目编号": "1101", "科目名称": "1101 交易性金融资产", "FSUBJCODE": null }, { "科目编号": "1121", "科目名称": "1121 应收票据", "FSUBJCODE": null }, { "科目编号": "1122", "科目名称": "1122 应收账款", "FSUBJCODE": null }, { "科目编号": "1123", "科目名称": "1123 预付账款", "FSUBJCODE": null }, { "科目编号": "1221", "科目名称": "1221 其他应收款", "FSUBJCODE": null }, { "科目编号": "1231", "科目名称": "1231 坏账准备", "FSUBJCODE": null }, { "科目编号": "1403", "科目名称": "1403 原材料", "FSUBJCODE": null }, { "科目编号": "1405", "科目名称": "1405 库存商品", "FSUBJCODE": null }, { "科目编号": "1415", "科目名称": "1415 自制半成品", "FSUBJCODE": null }, { "科目编号": "1511", "科目名称": "1511 长期股权投资", "FSUBJCODE": null }, { "科目编号": "1601", "科目名称": "1601 固定资产", "FSUBJCODE": null }, { "科目编号": "1602", "科目名称": "1602 累计折旧", "FSUBJCODE": null }, { "科目编号": "1603", "科目名称": "1603 固定资产减值准备", "FSUBJCODE": null }, { "科目编号": "1604", "科目名称": "1604 在建工程", "FSUBJCODE": null }, { "科目编号": "1606", "科目名称": "1606 固定资产清理", "FSUBJCODE": null }, { "科目编号": "1701", "科目名称": "1701 无形资产", "FSUBJCODE": null }, { "科目编号": "1801", "科目名称": "1801 长期待摊费用", "FSUBJCODE": null }, { "科目编号": "2001", "科目名称": "2001 短期借款", "FSUBJCODE": null }, { "科目编号": "2202", "科目名称": "2202 应付账款", "FSUBJCODE": null }, { "科目编号": "2203", "科目名称": "2203 预收账款", "FSUBJCODE": null }, { "科目编号": "2211", "科目名称": "2211 应付职工薪酬", "FSUBJCODE": null }, { "科目编号": "2221", "科目名称": "2221 应交税费", "FSUBJCODE": null }, { "科目编号": "2241", "科目名称": "2241 其他应付款", "FSUBJCODE": null }, { "科目编号": "4001", "科目名称": "4001 实收资本", "FSUBJCODE": null }, { "科目编号": "4002", "科目名称": "4002 资本公积", "FSUBJCODE": null }, { "科目编号": "4101", "科目名称": "4101 盈余公积", "FSUBJCODE": null }, { "科目编号": "4103", "科目名称": "4103 本年利润", "FSUBJCODE": null }, { "科目编号": "4104", "科目名称": "4104 利润分配", "FSUBJCODE": null }, { "科目编号": "5001", "科目名称": "5001 生产成本", "FSUBJCODE": null }, { "科目编号": "5101", "科目名称": "5101 制造费用", "FSUBJCODE": null }, { "科目编号": "6001", "科目名称": "6001 主营业务收入", "FSUBJCODE": null }, { "科目编号": "6051", "科目名称": "6051 其他业务收入", "FSUBJCODE": null }, { "科目编号": "6301", "科目名称": "6301 营业外收入", "FSUBJCODE": null }, { "科目编号": "6401", "科目名称": "6401 主营业务成本", "FSUBJCODE": null }, { "科目编号": "6403", "科目名称": "6403 主营业务税金及附加", "FSUBJCODE": null }, { "科目编号": "6601", "科目名称": "6601 销售费用", "FSUBJCODE": null }, { "科目编号": "6602", "科目名称": "6602 管理费用", "FSUBJCODE": null }, { "科目编号": "6603", "科目名称": "6603 财务费用", "FSUBJCODE": null }, { "科目编号": "6711", "科目名称": "6711 营业外支出", "FSUBJCODE": null }, { "科目编号": "6801", "科目名称": "6801 所得税费用", "FSUBJCODE": null }] },
];

const service: ComponentService = {
    loadRefrence: function (refId: string): Promise<AIPResponse<ModelRef>> {
        return new Promise((resolve, reject) => {
            resolve(
                modelRefJson as AIPResponse<ModelRef>
            );
        });
    },

    loadRefrenceData: function (refId: string, index: number, params?: StringAnyMap): Promise<AIPResponse<any>> {
        return new Promise((resolve, reject) => {
            if (index >= 0 && index < referenceData.length) {
                resolve(
                    referenceData[index] as AIPResponse<any>
                );
            } else {
                reject('data not found');
            }
        });
    }
}

/**
 * 模板主类
 *
 * @class App
 *
 * @extends { PureComponent }
 *
 * @description A8前端模板主类
 */
class App extends PureComponent<IAppProps, any> {
    state = {
    }

    aipSearchPanel = React.createRef<AIPSearchPanel>();

    onClick = () => {
        if (this.aipSearchPanel) {
            let params = this.aipSearchPanel.current!.getParams();
            Modal.success({
                title: '参数',
                content: JSON.stringify(params),
                onOk: () => {
                    console.log('OK');
                }
            });
        }
    }

    doSearch = (params: StringStringMap) => {
        Modal.success({
            title: '参数',
            content: JSON.stringify(params),
            onOk: () => {
                console.log('OK');
            }
        });
    }

    componentDidMount() {
        let stopLoading = (window as any).stopLoading;
        stopLoading && stopLoading();
    }

    render() {
        return (
            <div className='aip-demo'>
                <AIPSearchPanel
                    id='searchPanel'
                    refid='id-for-demo'
                    service={service}
                    ref={this.aipSearchPanel}
                    doSearch={this.doSearch}
                ></AIPSearchPanel>
                <div className='main-div'>
                    <Button colors="primary" onClick={this.onClick}>
                        <Icon type={this.props.icon || "uf-add-c-o"} />
                        确定
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;
