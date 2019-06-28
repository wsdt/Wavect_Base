## Frontend does not work?
Ensure that you try to access the backend via **https://** instead of **http://** as
the server does not accept any http-requests which might look like the server does not
work properly. 

If you receive on the frontend/client-side a **CERT_INVALID** error, you will see the famous 'This website is not secure warning'. 
Just click on proceed. After that the frontend should work too! In production we will have a real TLS-certificate so this
won't happen then. 
