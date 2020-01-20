# poc-jwt

Dans le dossier java vous trouverez du code générant 2 JWT 
    - un premier avec une clé en string 
    - un second avec un .getBytes("UTF-8") sur la clé
    
Dans le dossier python et nodejs vous trouverez du code pour valider la signature du token et constaterez que sans le .getBytes sur la clé, le token générer ne peut pas etre validé

eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjNDMzNDYiLCJ0ZXN0IjoiMSJ9.IddSt3QFl98lF5mrljUm9cX2lFaB2QkBwcKQTVuh7WG8aRzjkG3rn_4HD2FenhrUTJUzOK9BL9TA4Yc4_akAIQ
