
import str from '../entity/medicine.js';


async function getData(ctx, next) {
    // 获取:name参数:
    let s = ctx.params.name;
    ctx.response.body = {
        code:200,
        message:'success',
        data: str
    };
}

export default {
    'GET /medicine': getData
}
