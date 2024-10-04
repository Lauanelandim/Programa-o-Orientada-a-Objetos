/** 
 * Em JavaScript, você pode adicionar, excluir e verificar propriedades
de um objeto dinamicamente.
 */

//Adição de Propriedade:
Carro.fuelType = 'Gasoline';
console.log(car.fuelType); //Saída: Gasoline

//Exclusão de Propriedade:
delete car.year;
console.log(car.year); //Saída: Undefined

//Verificação de Propriedade:
console.log('model' in car); //Saída: true
console.log('year' in car); //Saída: false (após ser excluída)