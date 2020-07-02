function panggilKelipatan(){
  var kelipatan = []
  for (var i = 1; i <= 20; i++) {
    if(i%3 == 0){
      kelipatan.push(i)
    }
  }
  return kelipatan;
}

console.log(panggilKelipatan());
