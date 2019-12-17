# poc-jwt

Dans le dossier java vous trouverez du code générant 2 JWT 
    - un premier avec une clé en string 
    - un second avec un .getBytes("UTF-8") sur la clé
    
Dans le dossier python et nodejs vous trouverez du code pour valider la signature du token et constaterez que sans le .getBytes sur la clé, le token générer ne peut pas etre validé

