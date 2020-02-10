import '../css/index.css'
import test from './test.js'

test()

if (module.hot){
    module.hot.accept('./test.js', function(){
        console.log('recarcar en caliente')
        test()
    })

} 