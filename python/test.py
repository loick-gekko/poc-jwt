# coding: utf-8
from authlib.jose import JsonWebSignature

#Premier token generer avec la key simple, 2eme avec le .getBytes(utf-8) sur la clé :
token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2ljayIsInRlc3QiOiIxIn0.dB8YTun8t6v5AA7v6X1-jqwZ_pie_4mWqxTA88rSF1D_3MxQAM5TROtLXa4Am0CZ2g7q9LEQd1bnPiNdnh6FeA'
token2 = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2ljayIsInRlc3QiOiIxIn0.Vzcp2OrJvodYBLT6L4k8ZzYvzv-6Ts5m_jobPSvodCz38pHlX-gyXK4OJw9VViDApXPAPvTcoSaoUeYUUW81LA'

key = "Xz05Z1JmP2"

#########@@@@@@@@@@@@@@@@@@@@@@@@@############
jws = JsonWebSignature(algorithms=['HS512'])
data = jws.deserialize_compact(token2,  bytes(key))

jws_header = data['header']
payload = data['payload']

print(data)
print(jws_header)
