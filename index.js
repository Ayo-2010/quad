let aa = document.getElementsByTagName("input")
let ab = document.querySelector("h3")
let ac = document.querySelector("button")

// let a = prompt("what is the co-efficient of x2")
// let b = prompt("what is the co-efficient of x")
// let c = prompt("what is the constant")

ac.addEventListener("click", ()=>{
    let arrow = () => {
        let a = Number(aa[0].value)
        let b = Number(aa[1].value)
        let c = Number(aa[2].value)
        let ac = document.querySelector("button")
        
        let d = (((b**2)-(4*a*c)) ** 0.5)
        console.log(((b**2)-(4*a*c)) ** 0.5);
        
        let e = (((-b)+ d)/2*a)
        let f = (((-b)- d)/2*a)
        
        ab.innerHTML = (`The roots of the equation ${e} and ${f}`)
        ac.innerHTML = "Solved"
    }
    arrow()
})

// arrow()

// let aaaa = [a,a,a,a,]
// console.log(pad);
// let m = 1
// console.log(--m);
// console.log();
// if (m==="1") {
//     alert("22")
// }
// Math.max()