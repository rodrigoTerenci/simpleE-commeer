function createDatabase(){
        function start(){
            console.log('Conectando-se ao Banco de Dados...')
        }
        function stop(){
            console.log('Desonectando do Banco de Dados...')
    
            console.log('Banco de Dados Desconectado...')
        }    
        return{
            start,
            stop
        }
}

export default createDatabase
