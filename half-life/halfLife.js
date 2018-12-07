module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
 return  time/(Math.log(quantityRemaining/initialQuantity)/Math.log(0.5))
}
