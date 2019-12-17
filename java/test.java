import javax.xml.bind.DatatypeConverter;
import java.io.UnsupportedEncodingException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


public class test {
    public static void main(String[] args) {

        String jwtSecret= "Xz05Z1JmP2";
        String jwt = "";
        try {
            jwt = Jwts.builder().setSubject("loick").claim("test","1").signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
            System.out.println("Token : "+jwt) ;
            jwt = Jwts.builder().setSubject("loick").claim("test","1").signWith(SignatureAlgorithm.HS512, jwtSecret.getBytes("UTF-8")).compact();
            System.out.println("Token2 : "+jwt) ;

            Claims claims = Jwts.parser()
                    .setSigningKey(jwtSecret.getBytes("UTF-8"))
                    .parseClaimsJws(jwt).getBody();

            System.out.println(claims) ;
            System.out.println(DatatypeConverter.parseBase64Binary(jwtSecret));

        }
        catch(UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
