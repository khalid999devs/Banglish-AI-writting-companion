# myapp/middleware/clerk_auth.py

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
import requests

class ClerkAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        print("running")
        
        if not auth_header:
            raise AuthenticationFailed('Authorization header is missing.')
        
        if not auth_header.startswith('Bearer '):
            raise AuthenticationFailed('Authorization header must start with Bearer.')
        
        token = auth_header.split(' ')[1]
        # print(token)

        user = self.validate_clerk_token(token)
        # user={
        #     "fullname":"Khalid Ahammed",
        #     "email":"khalidahammeduzzal@gmail.com",
        #     "avatar":"https://khalid.com/pic.png",
        #     "is_authenticated":True
        # }
        
        # if user is None:
        #     raise AuthenticationFailed('Invalid or expired token.')
        if not token:
            raise AuthenticationFailed('Invalid or expired token.')

        request.user=user
        request.token=token
        return (user, token)
    

    def validate_clerk_token(self, token):
        clerk_api_url = "https://api.clerk.dev/v1/verify_token"  
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(clerk_api_url, headers=headers)
        
        if response.status_code == 200:
            return response.json().get('user') 
            
        return None
