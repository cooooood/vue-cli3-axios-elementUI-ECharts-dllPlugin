import service from '../service'

const obj = {
  // queryLoginInfo:({commit},params)=>{
  //   return service.queryLoginInfo(params).then((data)=>{
  //     commit(types.MENU_LIST,data.data.userMenus || []);
  //     return data;
  //   })
  // }
};

[].forEach((i) => {
  obj[i] = (ctx, params) => service[i](params)
})
export default obj
