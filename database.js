function createDatabase(){
        function start(){
            console.log('FODA-SE')
        }
        function stop(){
            console.log('FODA-SE NAO VOU PARAR')
        }    
        return{
            start,
            stop
        }
}

export default createDatabase
