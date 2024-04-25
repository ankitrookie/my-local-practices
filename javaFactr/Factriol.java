public class Factriol {
  public static void main(String[] args){
    System.out.println(factriol(5));
  }

  static int factriol(int base){
    if(base <= 1){
      return 1;
    };
    return factriol(base - 1) * base;
  }
}
