function lerp(a,amax,lerpA,lerpB){
    var t = a/amax
    return (1-t)*lerpA+t*lerpB
}
function clamp(a,min,max){
    return a<min?min:a>max?max:a
}
var timer = 0.0 //s
var scrollTop = 0