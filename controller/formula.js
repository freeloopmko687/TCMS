
import formulaStr from '../entity/formula.js';


async function formula(ctx, next) {
    // 获取:name参数:
    let s = ctx.params.name;
    ctx.response.body = {
        code:200,
        message:'success',
        data: formulaStr
    };
}

export default {
    'GET /formula': formula
}
