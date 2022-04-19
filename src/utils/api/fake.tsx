export default {
    get(){
        return Promise.resolve({
            data:{
                results:[
                    {title: "First Movie"}
                ]
            }
        })
    }
}