public class Main {

 private static final int constReagente = 5;

 public static float quantReagente(float quantMassa, float
	minutos){

 	return quantMassa / (constReagente * minutos);
 }

 public static void main(String[] args) {
 	
	System.out.println(quantReagente(15, 2));
 }

}
