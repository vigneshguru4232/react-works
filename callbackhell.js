// callback hell

function firstfunc() {
  function secfunction() {
    function thirdfun() {}
  }
}

//example:

const makeBurger = nextStep => {
    getBeef(function (beef) {
      cookBeef(beef, function (cookedBeef) {
        getBuns(function (buns) {
          putBeefBetweenBuns(buns, beef, function(burger) {
            nextStep(burger)
          })
        })
      })
    })
  }
  
  
  makeBurger((burger) => {
    serve(burger)
  })


const hotel = (nextstep)=>{
    menuCard(function (dishes){
        orderedItem(dishes,function(chefCookingDishes){
            waiterCarringDishes(chefCookingDishes,function(servingCustomer){
                nextstep(eatingCustomer);
            }) 
        })
    })
}

hotel(function(eatingCustomer){
    serve(eatingCustomer)
})

