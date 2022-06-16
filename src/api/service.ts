/****************************************************
 * Audit Information Platform Service
 * 数据请求服务
 * 2020-08
 * Sunny <tufpsj@yonyou.com>
 ****************************************************/

import { request } from 'aip-module';
import servUrl from './pathService';

const Service = {
    demoFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                    id: 1,
                    name: 'Hello world',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    description: 'My name is John Brown, I am 18 years old, living in New York No. 1 Lake Park.'
                }]);
            }, 1000);
        });
    }
};

export default Service;
