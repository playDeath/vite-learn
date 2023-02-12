export default (...args) => {
    return args.reduce((p,v)=>{
        return p + v
    },0)
}