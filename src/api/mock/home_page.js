import Mock from "mockjs"

const getHomePageData = () => {
        return {
            'code': '200',
            'data': {
                'tabs': [
                    {
                        'name': '推荐',
                        'value': 'tuijian'
                    },
                    {
                        'name': '百货',
                        'value': 'baihuo'
                    },
                    {
                        'name': '医药',
                        'value': 'yiyao'
                    },
                    {
                        'name': '食品',
                        'value': 'shipin'
                    },
                    {
                        'name': '女装',
                        'value': 'nvzhuang'
                    },
                    {
                        'name': '鞋包',
                        'value': 'xiebao'
                    },
                    {
                        'name': '户外',
                        'value': 'huwai'
                    },
                    {
                        'name': '男装',
                        'value': 'nanzhuang'
                    },
                ]
            },
            'message': '成功'               
        }
    }
export default {
    getHomePageData
}