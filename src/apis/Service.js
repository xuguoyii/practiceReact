// import axios from 'axios';
// import Apis from './Apis';
// import Config from './Config';

// export default class Service {

// 	/**
// 	 * 获取文章内容
// 	 *
// 	 * @static
// 	 * @param {any} payload
// 	 * @returns
// 	 * @memberof Service
// 	 */
// 	static getArticle(payload) {
// 		return axios.get(Apis.getArticle, {
// 			params: {
// 				cid: payload.cid,
// 				id: payload.id
// 			}
// 		});
// 	}

// 	/**
// 	 * 获取我的收藏列表
// 	 *
// 	 * @static
// 	 * @param {any} payload
// 	 * @returns
// 	 * @memberof Service
// 	 */
// 	static getMyFavorite(payload) {
// 		return axios({
// 			url: Apis.getMyFavorite,
// 			method: 'post',
// 			headers: {
// 				'X-Parse-Application-Id': Config.parse.appid,
// 				'X-Parse-REST-API-Key': Config.parse.apikey,
// 				'Content-Type': 'application/json'
// 			},
// 			data: {
// 				token: payload.token
// 			}
// 		})
// 	}

// 	/**
// 	 * 发送反馈
// 	 *
// 	 * @static
// 	 * @param {any} payload
// 	 * @returns
// 	 * @memberof Service
// 	 */
// 	static getFeedback(payload) {
// 		return axios({
// 			url: Apis.getFeedback,
// 			method: 'post',
// 			headers: {
// 				'X-Parse-Application-Id': Config.parse.appid,
// 				'X-Parse-REST-API-Key': Config.parse.apikey,
// 				'Content-Type': 'application/json'
// 			},
// 			data: {
// 				token: payload.token,
// 				content: payload.content,
// 			}
// 		})
// 	};
// }
