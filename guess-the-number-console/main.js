console.log('hello user!')
console.log ('try to guess the number')
console.log ('Use "submit(x)" to number')

const mysterynumber = 45 

const mysterynumber = Math.round(Math.random() * 100)

const submit = (x) => {
    if ( x < mysterynumber ) {
        console.log( " too small")
    }
    if ( x > mysterynumber ) {
        console.log(" too big ")
    }
    if ( x == mysterynumber ) {
        console.log("Hurrah!")
    }
}

const cheat = () => { console.log('the mystery number is $ {Mysterousnumber}')

}