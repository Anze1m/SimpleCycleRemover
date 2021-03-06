const chalk = require('chalk')

function viewLogo() {
  console.log(
chalk.yellow(`   ____                 _        ____           _      
  / ___|_ __ __ _ _ __ | |__    / ___|   _  ___| | ___ 
 | |  _| '__/ _' | '_ \\| '_ \\  | |  | | | |/ __| |/ _ \\
 | |_| | | | (_| | |_) | | | | | |__| |_| | (__| |  __/
  \\____|_|  \\__,_| .__/|_| |_|  \\____\\__, |\\___|_|\\___|
`),
chalk.red( `|  _ \\ ___ _ __`),
chalk.yellow(`|_|  `),
chalk.red(`_____   _____`),
chalk.yellow(`|___/             `),
chalk.red(`
 | |_) / _ \\ '_ ' _ \\ / _ \\ \\ / / _ \\ '__|             
 |  _ <  __/ | | | | | (_) \\ V /  __/ |                
 |_| \\_\\___|_| |_| |_|\\___/ \\_/ \\___|_|                                                              
  `))
}

module.exports = viewLogo